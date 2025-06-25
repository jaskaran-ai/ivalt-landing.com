
import { Check } from "lucide-react";

export default function DocuIdPage() {
  const features = [
    "Recipients verify identity via multi-factor authentication",
    "Full Digital Rights Management (DRM)",
    "Prevents forwarding, printing, screenshots",
  ];

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-navy-primary mb-4">DocuID™</h1>
        <h2 className="text-xl font-semibold text-teal-primary mb-6">Secure Document Access Control</h2>
        <p className="text-lg text-gray-700 mb-8">
          Authors embed authorized recipients (via mobile #) in encrypted documents.
        </p>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="w-6 h-6 text-teal-primary" />
              <p className="text-lg text-gray-800">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
