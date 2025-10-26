import { Universal } from "@/components/solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universal Biometric ID® - Enterprise Security",
  description:
    "Enhance your corporate security with iVALT's Universal Biometric ID. A seamless, 1-click user experience with real-time biometric and contextual verification.",
  openGraph: {
    title: "Universal Biometric ID® - Enterprise Security",
    description:
      "Strengthen your Identity and Access Management (IAM) with iVALT's Universal Biometric ID. Secure, simple, and powerful.",
  },
  twitter: {
    title: "Universal Biometric ID® - Enterprise Security",
    description:
      "Protect your enterprise with iVALT's Universal Biometric ID. The future of corporate security is here.",
  },
};

export default function AiAnchorIdPage() {
  return (
    <section className="min-h-screen bg-background py-24">
      <Universal />
    </section>
  );
}
