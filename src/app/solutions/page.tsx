import Container from "@/components/Container";
import { PlatformOverviewSection } from "@/components/home";
import SectionTitle from "@/components/SectionTitle";
import {
  TargetingContent,
  OnDemandID,
  DocuID,
  SolutionComponents,
  DataSecurity,
  // ContextID,
  LoopBackStopsInsiderThreats,
  IvaltCompletesIam,
  Universal,
} from "@/components/solutions";

export default function Solutions() {
  return (
    <Container className="bg-[#FAF9F7] md:py-16 py-6">
      <SectionTitle title="Solutions" description="" />
      <TargetingContent />
      <PlatformOverviewSection />
      <OnDemandID />
      <DocuID />
      <Universal />
      <LoopBackStopsInsiderThreats />
      <IvaltCompletesIam />
      {/* <ContextID /> */}
      <DataSecurity />
      <SolutionComponents />
    </Container>
  );
}
