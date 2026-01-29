"use client";

import Image from "next/image";
import Link from "next/link";
import { Heading4, BodyText, SmallText } from "@/components/ui/typography";
import {
  ExternalLink,
  Mail,
  FileLock,
  Smartphone,
  Fingerprint,
  ChevronRight,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { usePathname } from "next/navigation";
import LinkedIn from "@/assets/linkedin.png";
import { Button } from "./ui/button";
import { useState } from "react";

const footerLinks = {
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

const productLinks = [
  {
    label: "Universal Biometric ID®",
    href: "/solutions/universalid",
    icon: Fingerprint,
    description: "Enterprise Security Solution",
  },
  {
    label: "On-Demand ID™",
    href: "/solutions/ondemandid",
    icon: Smartphone,
    description: "Combat Deepfakes & Social Engineering",
  },
  {
    label: "DocuID®",
    href: "/solutions/docuid",
    icon: FileLock,
    description: "Secure Document Access Control",
  },
];

export default function Footer() {
  const currentPath = usePathname();
  const isHome = currentPath === "/";
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <footer className="bg-white border-t border-[#E5E7EB]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <div className="space-y-8">
                {/* Company Logo & Description */}
                <div>
                  <Link href="/" className="inline-block mb-6 group">
                    <Image
                      src="/logo-transparent-bg.png"
                      alt="Company Logo"
                      width={500}
                      height={500}
                      className="w-30 h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <BodyText className="text-gray-800 max-w-md">
                    Innovative identity solutions for modern security
                    challenges. Protecting your digital future with advanced
                    authentication technology.
                  </BodyText>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3">
                  <Button
                    variant="shiny"
                    className="bg-slate-100 hover:bg-slate-200 border group transition-all duration-300"
                  >
                    <Link
                      href="https://www.linkedin.com/company/ivalt-inc/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex items-center justify-center gap-2 p-2 rounded-lg">
                        <Image
                          src={LinkedIn}
                          alt="LinkedIn"
                          width={20}
                          height={20}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-navy-primary transition-colors duration-200">
                          LinkedIn Profile
                        </span>
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Products with Icons */}
                <div>
                  <Heading4 color="navy-primary" className="mb-6">
                    Products
                  </Heading4>
                  <ul className="space-y-2">
                    {productLinks.map((link) => {
                      const Icon = link.icon;
                      const isHovered = hoveredProduct === link.href;
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="group flex items-start gap-3 p-2 -mx-2 rounded-lg transition-all duration-200 hover:bg-gray-50"
                            onMouseEnter={() => setHoveredProduct(link.href)}
                            onMouseLeave={() => setHoveredProduct(null)}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                isHovered
                                  ? "bg-teal-primary/20"
                                  : "bg-teal-primary/10"
                              }`}
                            >
                              <Icon
                                className={`w-4 h-4 transition-colors duration-200 ${
                                  isHovered
                                    ? "text-teal-primary"
                                    : "text-teal-primary/80"
                                }`}
                              />
                            </div>
                            <div className="flex-1">
                              <SmallText
                                className={`font-medium transition-colors duration-200 block ${
                                  isHovered
                                    ? "text-navy-primary"
                                    : "text-gray-700"
                                }`}
                              >
                                {link.label}
                              </SmallText>
                              <span
                                className={`text-xs transition-all duration-200 block mt-0.5 ${
                                  isHovered
                                    ? "text-gray-600 opacity-100"
                                    : "text-gray-500 opacity-70"
                                }`}
                              >
                                {link.description}
                              </span>
                            </div>
                            <ChevronRight
                              className={`w-4 h-4 flex-shrink-0 transition-all duration-200 ${
                                isHovered
                                  ? "text-navy-primary translate-x-0 opacity-100"
                                  : "text-gray-400 -translate-x-1 opacity-0"
                              }`}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <Heading4 color="navy-primary" className="mb-6">
                    Company
                  </Heading4>
                  <ul className="space-y-2">
                    {footerLinks.company.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-2 py-2 px-3 -mx-3 rounded-lg text-gray-600 hover:text-navy-primary hover:bg-gray-50 transition-all duration-200"
                        >
                          <SmallText className="font-medium">
                            {link.label}
                          </SmallText>
                          <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
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
                  <ul className="space-y-2">
                    {footerLinks.legal.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-2 py-2 px-3 -mx-3 rounded-lg text-gray-600 hover:text-navy-primary hover:bg-gray-50 transition-all duration-200"
                        >
                          <SmallText className="font-medium">
                            {link.label}
                          </SmallText>
                          <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
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
                    <div className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 rounded-lg bg-teal-primary/10 flex items-center justify-center transition-colors duration-200 group-hover:bg-teal-primary/20">
                        <Mail className="h-5 w-5 text-teal-primary transition-transform duration-200 group-hover:scale-110" />
                      </div>
                      <SmallText className="text-gray-700">
                        info@ivalt.com
                      </SmallText>
                    </div>
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
                  className="group text-gray-500 hover:text-navy-primary text-sm transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Privacy Policy
                  <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/terms-and-conditions"
                  className="group text-gray-500 hover:text-navy-primary text-sm transition-colors duration-200 inline-flex items-center gap-1"
                >
                  Terms of Service
                  <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
                <span className="text-gray-300">|</span>
                <a
                  href="https://www.docuid.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-gray-500 hover:text-navy-primary text-sm transition-colors duration-200 inline-flex items-center gap-1"
                >
                  DocuID.net
                  <ExternalLink className="w-3 h-3 transition-transform duration-200 group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
