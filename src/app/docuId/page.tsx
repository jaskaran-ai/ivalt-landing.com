import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { Heading1, Heading2, Heading3, BodyText } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Lock, FileText, Users, Zap, Eye, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const keyFeatures = [
  {
    icon: Shield,
    title: "Zero Infrastructure Integration",
    description: "Deploy without modifying existing enterprise systems or workflows"
  },
  {
    icon: Users,
    title: "Granular Person-Level Control",
    description: "Control access down to individual users with precise permissions"
  },
  {
    icon: Lock,
    title: "Exfiltration Protection",
    description: "Stolen documents remain protected and inaccessible outside authorized environments"
  },
  {
    icon: Eye,
    title: "Digital Rights Management",
    description: "Control sharing, printing, downloads, and even screenshots"
  }
];

const useCases = [
  {
    title: "Financial Services",
    description: "Secure loan documents, financial reports, and client portfolios",
    benefits: ["Regulatory compliance", "Client confidentiality", "Audit trails"]
  },
  {
    title: "Healthcare",
    description: "Protect patient records, medical research, and clinical data",
    benefits: ["HIPAA compliance", "Patient privacy", "Research protection"]
  },
  {
    title: "Legal Firms",
    description: "Safeguard case files, contracts, and confidential client information",
    benefits: ["Attorney-client privilege", "Case confidentiality", "Document integrity"]
  },
  {
    title: "Government & Defense",
    description: "Secure classified documents and sensitive government communications",
    benefits: ["National security", "Clearance-based access", "Audit compliance"]
  }
];

const technicalSpecs = [
  { feature: "Document Types", value: "PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, Images, Videos" },
  { feature: "Access Control", value: "Individual, Role-based, Time-limited, Location-based" },
  { feature: "Encryption", value: "AES-256, End-to-end encryption, Zero-knowledge architecture" },
  { feature: "Compliance", value: "SOX, HIPAA, GDPR, SOC 2, ISO 27001" },
  { feature: "Integration", value: "REST API, SDK, Cloud storage connectors" },
  { feature: "Platforms", value: "Windows, macOS, iOS, Android, Web browsers" }
];

export default function DocuIDPage() {
  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      {/* Hero Section */}
      <FadeInOnScroll>
        <Container className="pt-8 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-teal-primary text-teal-primary">
              Document Security Solution
            </Badge>
            <Heading1 color="dark-navy" className="mb-6">
              DocuID™
              <span className="block text-teal-primary mt-2">
                Highly Restrictive Access Control for Documents & Media
              </span>
            </Heading1>
            <BodyText className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary document protection that travels with your files. No infrastructure changes required. 
              Complete control over who accesses what, when, and how.
            </BodyText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-primary hover:bg-navy-primary">
                Schedule Demo
              </Button>
              <Button variant="outline" size="lg" className="border-navy-primary text-navy-primary">
                Download Whitepaper
              </Button>
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Key Features */}
      <FadeInOnScroll>
        <Container className="bg-white">
          <SectionTitle 
            title="Revolutionary Document Protection" 
            description="DocuID™ transforms how organizations secure and control their most sensitive documents"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="p-6 border-l-4 border-teal-primary">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-primary/10 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-teal-primary" />
                  </div>
                  <div>
                    <Heading3 color="dark-navy" className="mb-2">
                      {feature.title}
                    </Heading3>
                    <BodyText className="text-gray-600">
                      {feature.description}
                    </BodyText>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </FadeInOnScroll>

      {/* How It Works */}
      <FadeInOnScroll>
        <Container className="bg-[#FAF9F7]">
          <SectionTitle 
            title="How DocuID™ Works" 
            description="Simple deployment, powerful protection, complete control"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <Heading3 color="dark-navy" className="mb-3">
                Protect Documents
              </Heading3>
              <BodyText className="text-gray-600">
                Upload and encrypt your sensitive documents with DocuID™ protection layer
              </BodyText>
            </div>
            <div className="text-center">
              <div className="bg-navy-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <Heading3 color="dark-navy" className="mb-3">
                Set Permissions
              </Heading3>
              <BodyText className="text-gray-600">
                Define granular access controls for specific individuals, roles, and time periods
              </BodyText>
            </div>
            <div className="text-center">
              <div className="bg-light-teal text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <Heading3 color="dark-navy" className="mb-3">
                Share Securely
              </Heading3>
              <BodyText className="text-gray-600">
                Distribute protected documents knowing they remain secure regardless of where they go
              </BodyText>
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Use Cases */}
      <FadeInOnScroll>
        <Container className="bg-white">
          <SectionTitle 
            title="Industry Applications" 
            description="DocuID™ protects sensitive information across industries and use cases"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6">
                <Heading3 color="dark-navy" className="mb-3">
                  {useCase.title}
                </Heading3>
                <BodyText className="text-gray-600 mb-4">
                  {useCase.description}
                </BodyText>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-teal-primary" />
                      <BodyText className="text-sm text-gray-600">{benefit}</BodyText>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Technical Specifications */}
      <FadeInOnScroll>
        <Container className="bg-[#FAF9F7]">
          <SectionTitle 
            title="Technical Specifications" 
            description="Enterprise-grade security with flexible deployment options"
          />
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="flex justify-between items-start py-3 border-b border-gray-100">
                  <BodyText className="font-medium text-gray-800 flex-shrink-0 mr-4">
                    {spec.feature}:
                  </BodyText>
                  <BodyText className="text-gray-600 text-right">
                    {spec.value}
                  </BodyText>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Security & Compliance */}
      <FadeInOnScroll>
        <Container className="bg-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Heading2 color="dark-navy" className="mb-6">
                Enterprise Security & Compliance
              </Heading2>
              <BodyText className="text-gray-600 mb-6">
                DocuID™ meets the most stringent security and compliance requirements, 
                providing organizations with the confidence to protect their most sensitive information.
              </BodyText>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-teal-primary" />
                  <BodyText>Zero-knowledge encryption architecture</BodyText>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-teal-primary" />
                  <BodyText>Multi-layered security controls</BodyText>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-teal-primary" />
                  <BodyText>Comprehensive audit logging</BodyText>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-teal-primary" />
                  <BodyText>Real-time threat detection</BodyText>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-primary/10 to-navy-primary/10 p-8 rounded-lg">
              <Heading3 color="dark-navy" className="mb-4">
                Compliance Certifications
              </Heading3>
              <div className="grid grid-cols-2 gap-4">
                {['SOX', 'HIPAA', 'GDPR', 'SOC 2', 'ISO 27001', 'NIST'].map((cert, index) => (
                  <Badge key={index} variant="outline" className="justify-center p-2 border-teal-primary text-teal-primary">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* CTA Section */}
      <FadeInOnScroll>
        <Container className="bg-gradient-to-r from-teal-primary to-navy-primary text-white text-center">
          <Heading2 className="mb-4">
            Ready to Revolutionize Document Security?
          </Heading2>
          <BodyText className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join organizations worldwide who trust DocuID™ to protect their most sensitive documents.
          </BodyText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-teal-primary hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-primary">
                Contact Sales
              </Button>
            </Link>
          </div>
        </Container>
      </FadeInOnScroll>
    </div>
  );
}
