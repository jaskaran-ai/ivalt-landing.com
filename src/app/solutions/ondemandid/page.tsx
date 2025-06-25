
import { Check } from "lucide-react";

export default function OnDemandIdPage() {
  const features = [
    "Instantly verify identity of suspicious calls/messages",
    "Biometrics, registered device and location",
    "The only solution worldwide to truly defeat deepfake & social engineering attacks",
  ];

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-navy-primary mb-4">On-Demand ID™</h1>
        <h2 className="text-xl font-semibold text-teal-primary mb-6">Combatting Social Engineering & Deepfakes</h2>
        <p className="text-lg text-gray-700 mb-8">
          Real-time identity verification within our mobile app.
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
