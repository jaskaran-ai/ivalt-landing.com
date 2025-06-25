
import { FileLock, ShieldCheck, UserCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DocuID™ - Secure Document Access Control",
  description: "Learn how iVALT's DocuID empowers you to control who can access your sensitive documents with multi-factor authentication and full DRM protection.",
  openGraph: {
    title: "DocuID™ - Secure Document Access Control",
    description: "Protect your documents from unauthorized access, forwarding, and screenshots with iVALT's DocuID.",
  },
  twitter: {
    title: "DocuID™ - Secure Document Access Control",
    description: "Take control of your document security with iVALT's DocuID. Multi-factor authentication and DRM to prevent unauthorized access.",
  },
};

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
    <section className="min-h-screen bg-background py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold text-navy-primary mb-4">
          DocuID™
        </h1>
        <h2 className="text-2xl font-semibold text-teal-primary mb-12">
          Secure Document Access Control
        </h2>

        <p className="text-xl text-gray-700 mb-16 leading-relaxed">
          Authors embed authorized recipients (via mobile #) in encrypted documents.
        </p>

        <div className="space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <feature.icon className="w-12 h-12 text-teal-primary mb-4" />
              <p className="text-xl text-gray-800 font-medium max-w-md">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
