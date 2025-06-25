
import { Smartphone, ShieldAlert, Bot } from "lucide-react";

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
    <section className="min-h-screen bg-background py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold text-navy-primary mb-4">
          On-Demand ID™
        </h1>
        <h2 className="text-2xl font-semibold text-teal-primary mb-12">
          Combatting Social Engineering & Deepfakes
        </h2>

        <p className="text-xl text-gray-700 mb-16 leading-relaxed">
          Real-time identity verification within our mobile app.
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
