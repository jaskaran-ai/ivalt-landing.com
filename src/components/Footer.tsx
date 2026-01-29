"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heading4,
  BodyText,
  SmallText,
  Caption,
} from "@/components/ui/typography";
import { ExternalLink, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { usePathname } from "next/navigation";
import LinkedIn from "@/assets/linkedin.png";
import { Button } from "./ui/button";

const footerLinks = {
  products: [
    {
      label: "Universal Biometric ID®",
      href: "/solutions/universalid",
    },
    { label: "On-Demand ID™", href: "/solutions/ondemandid" },
    { label: "DocuID®", href: "/solutions/docuid" },
  ],
  company: [
    { label: "Why iVALT?", href: "/why-ivalt" },
    { label: "Solutions", href: "/solutions" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Press Releases", href: "/press-release" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-and-conditions" },
  ],
};

export default function Footer() {
  const currentPath = usePathname();
  const isHome = currentPath === "/";
  return (
    <footer className="bg-white border-t border-[#E5E7EB]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info & Contact Form */}
            <div className="lg:col-span-5">
              <div className="space-y-8">
                {/* Company Logo & Description */}
                <div>
                  <Link href="/" className="inline-block mb-6">
                    <Image
                      src="/logo-transparent-bg.png"
                      alt="Company Logo"
                      width={500}
                      height={500}
                      className="w-30 h-auto"
                    />
                  </Link>
                  <BodyText className="text-gray-800 max-w-md">
                    Innovative identity solutions for modern security
                    challenges. Protecting your digital future with advanced
                    authentication technology.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Products */}
                <div>
                  <Heading4 color="navy-primary" className="mb-6">
                    Products
                  </Heading4>
                  <ul className="space-y-3">
                    {footerLinks.products.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-navy-primary transition-colors duration-200"
                        >
                          <SmallText>{link.label}</SmallText>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <Heading4 color="navy-primary" className="mb-6">
                    Company
                  </Heading4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-navy-primary transition-colors duration-200"
                        >
                          <SmallText>{link.label}</SmallText>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <Heading4 color="navy-primary" className="mb-6">
                    Legal
                  </Heading4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-navy-primary transition-colors duration-200"
                        >
                          <SmallText>{link.label}</SmallText>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        {isHome && (
          <div className="border-t border-[#E5E7EB] py-8">
            <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
                {/* Contact Info */}
                <div className="space-y-4">
                  <Heading4 color="navy-primary" className="mb-4">
                    Contact Us
                  </Heading4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-teal-primary" />
                      <SmallText className="text-gray-700">
                        info@ivalt.com
                      </SmallText>
                    </div>
                  </div>

                  {/* social icons from linkedin, facebook, instagram, twitter */}
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="shiny"
                      className="bg-slate-100 hover:bg-slate-200 border"
                    >
                      <Link
                        href="https://www.linkedin.com/company/ivalt-inc/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flex items-center justify-center gap-2 p-2 rounded-lg transition-colors">
                          <Image
                            src={LinkedIn}
                            alt="LinkedIn"
                            width={20}
                            height={20}
                          />
                          <span className="text-sm text-gray-600">
                            LinkedIn Profile
                          </span>
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Quick Contact Form */}
                {isHome && <ContactForm />}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © 2026 iVALT. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-navy-primary text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-500 hover:text-navy-primary text-sm transition-colors"
                >
                  Terms of Service
                </Link>
                <span className="text-gray-300">|</span>
                <a
                  href="https://www.docuid.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-navy-primary text-sm transition-colors inline-flex items-center gap-1"
                >
                  DocuID.net
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
