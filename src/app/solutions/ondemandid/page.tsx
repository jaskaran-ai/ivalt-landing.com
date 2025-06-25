
"use client";

import { Smartphone, ShieldAlert, Bot } from "lucide-react";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { motion } from "framer-motion";

export default function OnDemandIdPage() {
  const features = [
    {
      icon: Smartphone,
      text: "Instantly verify identity of suspicious calls/messages",
    },
    { icon: ShieldAlert, text: "Biometrics, registered device and location" },
    {
      icon: Bot,
      text: "The only solution worldwide to truly defeat deepfake & social engineering attacks",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <h1 className="text-5xl font-extrabold text-navy-primary mb-4 text-center">
            On-Demand ID™
          </h1>
          <h2 className="text-2xl font-semibold text-teal-primary mb-12 text-center">
            Combatting Social Engineering & Deepfakes
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            iVALT On-Demand ID is a comprehensive identity verification solution that utilizes a multi-faceted approach to confirm a user's identity in real-time. It aims to provide a higher level of security than traditional methods like passwords and two-factor authentication by combining multiple factors of identification.
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

