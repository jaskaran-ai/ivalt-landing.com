import Container from "../Container";
import SectionTitle from "../SectionTitle";

import Image from "next/image";
import loopBackStopsInsiderThreats from "@/assets/images/solutions/loop-back-stops-insider-threats.png";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import { Check } from "lucide-react";

const Points = [
  "No Enterprise Infrastructure Integration Required",
  "Granular Access Control to a Single Person",
  "Stops Exfiltration Risks (Stolen Docs remain Safe)",
  "Digital Rights Protection (sharing, printing, downloads, screen shots)",
];

export default function LoopBackStopsInsiderThreats() {
  return (
    <FadeInOnScroll className="bg-white py-6 md:py-12">
      <Container className="max-w-7xl">
        <SectionTitle
          title="Loop-Back Stops Insider Threats"
          description="BEFORE Potentially Damaging ACTIONS"
        />
        <div className="flex justify-center items-center my-4 mb-6">
          <Image
            src={loopBackStopsInsiderThreats}
            alt="Loop-Back Stops Insider Threats"
            width={1500}
            height={1500}
            className="w-full h-full object-contain mb-3"
          />
        </div>
        {/* <div className="flex flex-col items-start justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 md:mt-12 mt-6 max-w-6xl mx-auto">
            {Points.map((point, index) => (
              <FadeInOnScroll
                delay={index * 2}
                key={index}
                className="inline-flex items-center justify-start gap-4 mb-2 text-left"
              >
                <div className="flex items-center justify-center bg-[#FAF9F7] rounded-full p-2 shadow-sm">
                  <Check
                    className="text-navy-primary w-6 h-6"
                    width={24}
                    height={24}
                  />
                </div>
                <h1 className="text-base md:text-lg text-navy-primary text-left">
                  {point}
                </h1>
              </FadeInOnScroll>
            ))}
          </div>
        </div> */}
      </Container>
    </FadeInOnScroll>
  );
}
