import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";

// Validation schema for API request form
const apiRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  reason: z
    .string()
    .min(10, "Reason must be at least 10 characters")
    .max(1000, "Reason must be less than 1000 characters"),
  recaptchaToken: z.string().min(1, "reCAPTCHA verification required"),
});

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const data = await response.json();
    return data.success && data.score >= 0.5; // Minimum score for v3
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

// Create email transporter
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Load email template and replace placeholders
function loadEmailTemplate(
  templateName: string,
  replacements: Record<string, string>
): string {
  try {
    const templatePath = join(
      process.cwd(),
      "src",
      "lib",
      "email-templates",
      `${templateName}.html`
    );
    let template = readFileSync(templatePath, "utf-8");

    // Replace all placeholders
    Object.entries(replacements).forEach(([key, value]) => {
      const placeholder = new RegExp(`{{${key}}}`, "g");
      // Escape HTML special characters for security (except for reason which may contain HTML)
      const safeValue =
        key === "reason" ? value.replace(/\n/g, "<br>") : value;
      template = template.replace(placeholder, safeValue);
    });

    return template;
  } catch (error) {
    console.error(`Error loading email template ${templateName}:`, error);
    throw new Error(`Failed to load email template: ${templateName}`);
  }
}

// Generate admin notification email template
function generateAdminNotificationTemplate(
  name: string,
  email: string,
  reason: string
): string {
  return loadEmailTemplate("admin-notification-email", {
    name,
    email,
    reason: reason.replace(/\n/g, "<br>"),
  });
}

// Generate API key email template
function generateApiKeyEmailTemplate(name: string, apiKey: string): string {
  return loadEmailTemplate("api-key-email", {
    name,
    apiKey,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = apiRequestSchema.parse(body);

    // Verify reCAPTCHA
    const isValidRecaptcha = await verifyRecaptcha(
      validatedData.recaptchaToken
    );
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY environment variable is not set");
      return NextResponse.json(
        { error: "API key not configured. Please contact support." },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Generate email content
    const emailHtml = generateApiKeyEmailTemplate(validatedData.name, apiKey);

    const emailText = `
      API Access Granted - iVALT

      Dear ${validatedData.name},

      Thank you for requesting API access to iVALT. We're excited to have you integrate our identity verification solutions into your application.

      Your API Key:
      ${apiKey}

      IMPORTANT: Keep this key secure and never share it publicly.

      Next Steps:
      1. Review our API documentation to get started
      2. Use your API key in the x-api-key header: x-api-key: ${apiKey}
      3. Start building your integration
      4. Contact our support team if you need assistance

      Security Best Practices:
      - Store your API key securely (use environment variables)
      - Never commit API keys to version control
      - Rotate your key immediately if compromised
      - Use HTTPS for all API requests

      Need Help?
      Our support team is here to assist you. Reach out to us at support@ivalt.com or visit our documentation.

      Best regards,
      The iVALT Team

      ---
      iVALT - Revolutionizing Identity Security
      ivalt.com
    `;

    // Send email to requester with API key
    await transporter.sendMail({
      from: `"iVALT" <${process.env.SMTP_USER}>`,
      to: validatedData.email,
      subject: "Your iVALT API Key - API Access Granted",
      text: emailText,
      html: emailHtml,
    });

    // Get admin emails for notification
    const adminEmails =
      process.env.ADMIN_EMAILS ||
      process.env.CONTACT_EMAILS ||
      process.env.CONTACT_EMAIL ||
      "info@ivalt.com";
    const adminRecipients = adminEmails
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email);

    // Generate admin notification email
    const adminEmailHtml = generateAdminNotificationTemplate(
      validatedData.name,
      validatedData.email,
      validatedData.reason
    );

    const adminEmailText = `
      New API Access Request - iVALT

      A new API access request has been submitted and API key has been sent to the requester.

      Request Details:
      Name: ${validatedData.name}
      Email: ${validatedData.email}
      
      Reason for API Request:
      ${validatedData.reason}

      Note: The API key has been automatically sent to the requester's email address. No further action is required unless you need to revoke access or follow up with the requester.

      ---
      iVALT - Revolutionizing Identity Security
      ivalt.com
    `;

    // Send notification email to admins
    await transporter.sendMail({
      from: `"iVALT API System" <${process.env.SMTP_USER}>`,
      to: adminRecipients,
      subject: `New API Access Request from ${validatedData.name}`,
      text: adminEmailText,
      html: adminEmailHtml,
      replyTo: validatedData.email,
    });

    return NextResponse.json(
      { message: "API request processed successfully. API key sent to email." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API request error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process API request" },
      { status: 500 }
    );
  }
}
