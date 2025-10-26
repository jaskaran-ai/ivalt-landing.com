"use client";

import React from "react";
import {
  Fingerprint,
  MapPin,
  Users,
  Lock,
  Shield,
  Zap,
  Clock,
} from "lucide-react";

const features = [
  {
    id: "biometrics",
    icon: Fingerprint,
    title:
      "Biometrics + PKI (Cryptographic) Device Binding for Unassailable Human-Bound Identity",
  },
  {
    id: "gps",
    icon: MapPin,
    title:
      "GPS Location and Time Stamps Available on Every Interaction for Context Verification",
  },
  {
    id: "unified",
    icon: Users,
    title: "Humans, AI Agents, and IOT Devices on a Single Platform",
  },
  {
    id: "pki",
    icon: Lock,
    title:
      "End-to-End PKI for Control and Accountability for AI Agents and IOT Devices",
  },
  {
    id: "oob",
    icon: Shield,
    title:
      "Out-of-Band (Independent and Federated) Identity Verification to Augment and Protect IAM Platforms",
  },
  {
    id: "redirect",
    icon: Zap,
    title:
      "Simple Highly Secure Loop-Back Software Redirects (to Secure ACTIONS after Access) to Stop Hackers with Valid Credentials",
  },
  {
    id: "realtime",
    icon: Clock,
    title:
      "Real-Time Endpoint Identity to Stop Social Engineering and AI Deepfakes",
  },
];

export function RevolutionIdentity() {
  // Map features into bentoItems with a small layout strategy
  // const  = features;

  return (
    <section className="py-16 bg-[#FAF9F7] z-30 overflow-hidden relative">
      <h1 className="text-5xl text-center pb-14 text-primary font-bold">
        Revolutionizing Identity
      </h1>
      <div className="mx-auto max-w-4xl px-4">
        <ul className="space-y-6">
          {features.map((item) => {
            const Icon = item.icon as React.ComponentType<
              React.SVGProps<SVGSVGElement>
            >;
            return (
              <li
                key={item.id}
                className="shadow-none flex items-start gap-4 p-6 bg-white rounded-2xl border-[0.4px] border-gray-200 hover:shadow-md transition-all duration-200"
              >
                <div className="h-10 w-10 rounded-lg bg-teal-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-teal-primary" />
                </div>
                <h3 className="text-lg text-primary font-semibold leading-relaxed">
                  {item.title}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
