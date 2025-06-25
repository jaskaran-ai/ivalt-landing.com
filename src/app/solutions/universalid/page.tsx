
"use client";

import { Fingerprint, Globe, MousePointerClick } from "lucide-react";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { motion } from "framer-motion";

export default function UniversalIdPage() {
  const features = [
    {
      icon: Fingerprint,
      text: 'When an employee logs in, iVALT "pings" their mobile',
    },
    { icon: Globe, text: "Real-time biometric and contextual verification" },
    { icon: MousePointerClick, text: "1-Click user experience" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <h1 className="text-5xl font-extrabold text-navy-primary mb-4 text-center">
            Universal Biometric ID®
          </h1>
          <h2 className="text-2xl font-semibold text-teal-primary mb-12 text-center">
            Enterprise Security
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            iVALT has developed a "Universal Biometric ID" that allows users to verify their identity across different platforms and devices with a single click on their mobile phone, which removes the need for multiple passwords. The company was founded in 2019 with the mission to create a unified identity solution to address stolen credentials and caller identity issues.
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
