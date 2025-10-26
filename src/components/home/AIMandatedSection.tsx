import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import SectionTitle from "@/components/SectionTitle";
import { Lock, Bot, Shield } from "lucide-react";
import Image from "next/image";
import aiMandated from "@/assets/images/home/ai-mandated.png";

export default function AIMandatedSection() {
  return (
    <section className="py-16 bg-white z-30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionTitle
            title="AI Mandates Unassailable Identity"
            description=""
          />
          <div className="flex justify-center mt-6">
            <div className="inline-flex items-center px-6 py-0 text-primary text-3xl font-bold">
              Which Also Stops Today&apos;s Threats
            </div>
          </div>
        </FadeInOnScroll>

        <div className="items-center mt-12">
          <FadeInOnScroll>
            <Image
              src={aiMandated}
              alt="AI Mandated"
              width={2500}
              height={500}
              className="w-full h-full object-contain"
            />
          </FadeInOnScroll>
        </div>

        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center px-6 py-0 text-teal-primary text-4xl font-bold gap-4">
            <span className="text-teal-primary">Who?</span>
            <span className="text-teal-primary">What?</span>
            <span className="text-teal-primary">Where?</span>
            <span className="text-teal-primary">When?</span>
            <span className="text-teal-primary">Why?</span>
          </div>
        </div>
      </div>
    </section>
  );
}
