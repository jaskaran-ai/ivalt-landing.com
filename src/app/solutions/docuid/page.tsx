
"use client";

import { Check, FileLock, ShieldCheck, UserCheck } from "lucide-react";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { motion } from "framer-motion";

export default function DocuIdPage() {
  const features = [
    {
      icon: UserCheck,
      text: "Recipients verify identity via multi-factor authentication",
    },
    { icon: FileLock, text: "Full Digital Rights Management (DRM)" },
    {
      icon: ShieldCheck,
      text: "Prevents forwarding, printing, and screenshots",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <h1 className="text-5xl font-extrabold text-navy-primary mb-4 text-center">
            DocuID™
          </h1>
          <h2 className="text-2xl font-semibold text-teal-primary mb-12 text-center">
            Secure Document Access Control
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            iVALT DocuID is a mobile-centric access control solution designed for document security. It allows users to manage who can view their files and when, using their mobile devices as the primary method of authentication. This ensures that even if a document is forwarded, it remains protected and can only be accessed by authorized individuals.
          </p>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <FadeInOnScroll key={index} delay={0.4 + index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <feature.icon className="w-16 h-16 text-teal-primary mx-auto mb-6" />
                <p className="text-lg text-gray-800 font-semibold">{feature.text}</p>
              </motion.div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
