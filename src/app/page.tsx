import { HeroSection } from "@/components/ui/hero-section";
import {
  IdentityCrisisSection,
  // PlatformOverviewSection,
  // KeyApplicationsSection,
  // VisionSection,
  MarketOpportunitySection,
} from "@/components/home";
import { Metadata } from "next";
import { RevolutionIdentity } from "@/components/home/Revolution-Identity";

export const metadata: Metadata = {
  title: "iVALT Home - Identity Validation Platform",
  description:
    "Discover iVALT’s revolutionary identity validation solutions for secure digital interactions.",
};

export default function Homepage2() {
  return (
    <>
      <HeroSection />
      <IdentityCrisisSection />
      <RevolutionIdentity/>
      {/* <PlatformOverviewSection /> */}
      {/* <KeyApplicationsSection /> */}
      {/* <VisionSection /> */}
      <MarketOpportunitySection />
    </>
  );
}
