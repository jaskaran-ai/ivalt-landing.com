"use client";
"use client";

import React from "react";
import { Card } from "@/components/ui/card";
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
    title: "Biometrics + PKI ",
    description:
      "Cryptographic device binding for unassailable human-bound identity",
    gradient: "from-cyan-200 to-blue-200",
    span: "col-span-2 row-span-1 sm:col-span-1",
  },
  {
    id: "gps",
    icon: MapPin,
    title: "GPS Location ",
    description:
      "Available on every interaction for comprehensive context verification",
    gradient: "from-emerald-200 to-teal-200",
  },
  {
    id: "unified",
    icon: Users,
    title: "Unified Platform",
    description:
      "Humans, AI Agents, and IoT Devices on a single integrated platform",
    gradient: "from-purple-200 to-pink-200",
  },
  {
    id: "pki",
    icon: Lock,
    title: "End-to-End PKI",
    description:
      "Complete control and accountability for AI Agents and IoT Devices",
    gradient: "from-orange-200 to-red-200",
  },
  {
    id: "oob",
    icon: Shield,
    title: "Out-of-Band Verification",
    description:
      "Independent and federated verification to augment and protect IAM platforms",
    gradient: "from-blue-200 to-indigo-200",
  },
  {
    id: "redirect",
    icon: Zap,
    title: "Loop-Back Redirects",
    description:
      "Simple highly secure redirects to stop hackers with valid credentials",
    gradient: "from-yellow-200 to-orange-200",
  },
  {
    id: "realtime",
    icon: Clock,
    title: "Real-Time Endpoint Identity",
    description:
      "Continuous monitoring and verification of endpoint identity status",
    gradient: "from-green-200 to-emerald-200",
    span: "col-span-2 sm:col-span-1",
  },
];

export function RevolutionIdentity() {
  // Map features into bentoItems with a small layout strategy
  // const  = features;

  return (
    <section className="py-8">
      <h1 className="text-5xl text-center pb-14 text-primary font-bold">
        Revolutionizing Identity
      </h1>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon as React.ComponentType<
              React.SVGProps<SVGSVGElement>
            >;
            return (
              <Card
                key={item.id}
                className={`relative overflow-hidden bg-white rounded-2xl p-6 shadow-none transition-all duration-200 hover:shadow-xl border-[0.4px] border-gray-200  ${
                  item.span || "col-span-1"
                }`}
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-teal-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-teal-primary" />
                    </div>
                    <h3 className="text-lg text-primary font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-4">
                    <p className="mt-2 text-sm text-slate-600">
                      {item.description}
                    </p>

                    <a
                      href="#"
                      className="mt-4 inline-flex items-center text-purple-600 font-medium"
                    >
                      {/* <span>Learn more</span> */}
                      {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
