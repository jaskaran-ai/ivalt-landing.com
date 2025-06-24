import Container from "../Container";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import contextID from "@/assets/images/solutions/3.png";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import { FeatureList } from "../ui/FeatureList";
import { Heading3, BodyText } from "../ui/typography";

const features = [
  "Mobile-Centric",
  "Mandated Biometrics",
  "5+ Factors",
  "Customizable",
  "Risk and AI-Driven",
  "Can Streamline IAM (RBAC and ABAC)",
];

export default function ContextID() {
  return (
    <FadeInOnScroll className="bg-[#FAF9F7] py-6 md:py-12">
      <Container className="max-w-7xl">
        <SectionTitle
          title="ContextID"
          description="Strongest Enterprise Identity Protection"
        />

        {/* Mobile-first layout */}
        <div className="space-y-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <Image
              src={contextID}
              alt="ContextID"
              width={1500}
              height={1500}
              className="w-full sm:w-[90%] md:w-[80%] lg:w-[100%] h-auto object-cover"
            />
          </div>

          {/* Features Grid - Mobile Responsive */}
          <div className="lg:hidden">
            <FeatureList
              features={features}
              iconBackgroundClassName="bg-white rounded-full p-2 shadow-sm"
              textClassName="text-sm sm:text-base text-navy-primary text-left"
              animateItems={true}
              animationDelay={1}
              responsiveColumns={true}
            />
          </div>
          {/* Additional Information */}
          <div className="space-y-2 text-center">
            <FadeInOnScroll delay={0.8}>
              <Heading3 color="navy-primary" className="text-center">
                Universal Authenticator
              </Heading3>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.6}>
              <BodyText className="text-navy-primary font-medium max-w-2xl mx-auto">
                Plus new services like DocuID™ and Others integrated with iVALT
              </BodyText>
            </FadeInOnScroll>
          </div>
          {/* Desktop Layout with Overlaid Features */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Features */}
              <div className="space-y-3">
                {features.slice(0, 3).map((feature, index) => (
                  <FadeInOnScroll key={index} delay={index * 0.2}>
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center justify-center bg-[#FAF9F7] rounded-full p-2 shadow-sm min-w-[32px] h-8">
                        <span className="w-2 h-2 bg-teal-primary rounded-full"></span>
                      </div>
                      <span className="text-sm font-medium text-navy-primary">
                        {feature}
                      </span>
                    </div>
                  </FadeInOnScroll>
                ))}
              </div>

              {/* Center - Empty for spacing */}
              <div></div>

              {/* Right Features */}
              <div className="space-y-3">
                {features.slice(3).map((feature, index) => (
                  <FadeInOnScroll key={index + 3} delay={(index + 3) * 0.2}>
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center justify-center bg-[#FAF9F7] rounded-full p-2 shadow-sm min-w-[32px] h-8">
                        <span className="w-2 h-2 bg-teal-primary rounded-full"></span>
                      </div>
                      <span className="text-sm font-medium text-navy-primary">
                        {feature}
                      </span>
                    </div>
                  </FadeInOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FadeInOnScroll>
  );
}
