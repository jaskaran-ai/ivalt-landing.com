import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { Heading1, Heading2, Heading3, BodyText } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, Phone, Video, Users, AlertTriangle, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const keyFeatures = [
  {
    icon: Clock,
    title: "Real-Time Customer Identity",
    description: "Instantly verify customer identity during live interactions and communications"
  },
  {
    icon: Shield,
    title: "Proactive Agent Identity",
    description: "Continuously authenticate agents and representatives in real-time"
  },
  {
    icon: AlertTriangle,
    title: "Stops Social Engineering & Deepfakes",
    description: "Advanced AI detection prevents sophisticated impersonation attacks"
  },
  {
    icon: Users,
    title: "Highly Secure Account Access",
    description: "Multi-factor biometric authentication for critical account operations"
  }
];

const useCases = [
  {
    title: "Financial Services",
    icon: Phone,
    description: "Secure phone banking, wire transfers, and account modifications",
    scenarios: [
      "High-value transaction verification",
      "Account recovery processes", 
      "Customer service authentication",
      "Investment advisory calls"
    ]
  },
  {
    title: "Healthcare Communications",
    icon: Video,
    description: "Protect telemedicine consultations and patient information sharing",
    scenarios: [
      "Telemedicine appointments",
      "Medical records access",
      "Prescription authorization",
      "Insurance verification calls"
    ]
  },
  {
    title: "Customer Support",
    icon: Users,
    description: "Authenticate customers and agents in support interactions",
    scenarios: [
      "Account modification requests",
      "Technical support access",
      "Billing inquiries",
      "Service cancellations"
    ]
  },
  {
    title: "Legal & Professional Services",
    icon: Shield,
    description: "Secure confidential communications and document access",
    scenarios: [
      "Client consultations",
      "Document review sessions",
      "Contract negotiations",
      "Confidential briefings"
    ]
  }
];

const threatsPrevented = [
  {
    threat: "Deepfake Audio/Video",
    description: "AI-generated synthetic media used to impersonate individuals",
    prevention: "Advanced biometric analysis detects artificial audio and video patterns"
  },
  {
    threat: "Social Engineering",
    description: "Manipulation tactics to gain unauthorized access to information",
    prevention: "Real-time identity verification prevents unauthorized access attempts"
  },
  {
    threat: "Account Takeover",
    description: "Fraudulent access to customer accounts through stolen credentials",
    prevention: "Continuous biometric monitoring ensures legitimate account access"
  },
  {
    threat: "Insider Threats",
    description: "Malicious activities by authorized users with legitimate access",
    prevention: "Ongoing agent authentication prevents unauthorized actions"
  }
];

const technicalFeatures = [
  { feature: "Biometric Modalities", value: "Voice, Face, Behavioral patterns" },
  { feature: "Real-time Processing", value: "< 100ms verification latency" },
  { feature: "AI Detection", value: "Deepfake and synthetic media recognition" },
  { feature: "Integration", value: "Phone systems, video platforms, web applications" },
  { feature: "Scalability", value: "Millions of concurrent verifications" },
  { feature: "Compliance", value: "GDPR, CCPA, BIPA compliant" }
];

export default function OnDemandIDPage() {
  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      {/* Hero Section */}
      <FadeInOnScroll>
        <Container className="pt-8 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-teal-primary text-teal-primary">
              Real-Time Identity Verification
            </Badge>
            <Heading1 color="dark-navy" className="mb-6">
              On-Demand ID™
              <span className="block text-teal-primary mt-2">
                Real-Time Identity for All Communications
              </span>
            </Heading1>
            <BodyText className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stop fraud before it happens with continuous, real-time identity verification. 
              Protect every customer interaction, agent communication, and account access point.
            </BodyText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-primary hover:bg-navy-primary">
                Watch Demo
              </Button>
              <Button variant="outline" size="lg" className="border-navy-primary text-navy-primary">
                Get Started
              </Button>
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Problem Statement */}
      <FadeInOnScroll>
        <Container className="bg-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Heading2 color="dark-navy" className="mb-6">
                The Growing Threat Landscape
              </Heading2>
              <BodyText className="text-gray-600 mb-6">
                Cybercriminals are using sophisticated AI-powered attacks, deepfakes, and social engineering 
                to bypass traditional security measures. Static authentication is no longer enough.
              </BodyText>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <BodyText className="font-medium">300% increase in deepfake attacks</BodyText>
                    <BodyText className="text-sm text-gray-500">AI-generated audio and video</BodyText>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <BodyText className="font-medium">$43 billion lost to fraud annually</BodyText>
                    <BodyText className="text-sm text-gray-500">Social engineering attacks</BodyText>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                  <div>
                    <BodyText className="font-medium">95% of breaches involve human error</BodyText>
                    <BodyText className="text-sm text-gray-500">Inadequate identity verification</BodyText>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-lg border border-red-100">
              <Heading3 color="dark-navy" className="mb-4">
                Traditional Methods Fail Because:
              </Heading3>
              <div className="space-y-3">
                <BodyText className="text-gray-600">❌ One-time authentication at login</BodyText>
                <BodyText className="text-gray-600">❌ No continuous verification</BodyText>
                <BodyText className="text-gray-600">❌ Vulnerable to AI-generated attacks</BodyText>
                <BodyText className="text-gray-600">❌ Cannot detect real-time threats</BodyText>
              </div>
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Key Features */}
      <FadeInOnScroll>
        <Container className="bg-[#FAF9F7]">
          <SectionTitle 
            title="Real-Time Protection Features" 
            description="On-Demand ID™ provides continuous identity verification throughout every interaction"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="p-6 border-l-4 border-teal-primary bg-white">
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
        <Container className="bg-white">
          <SectionTitle 
            title="How On-Demand ID™ Works" 
            description="Seamless integration that works with any communication channel"
          />
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-teal-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <Heading3 color="dark-navy" className="mb-3">
                Integration
              </Heading3>
              <BodyText className="text-gray-600">
                Simple API integration with existing communication systems
              </BodyText>
            </div>
            <div className="text-center">
              <div className="bg-navy-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <Heading3 color="dark-navy" className="mb-3">
                Capture
              </Heading3>
              <BodyText className="text-gray-600">
                Real-time biometric data collection during communications
              </BodyText>
            </div>
            <div className="text-center">
              <div className="bg-light-teal text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <Heading3 color="dark-navy" className="mb-3">
                Verify
              </Heading3>
              <BodyText className="text-gray-600">
                AI-powered analysis and continuous identity verification
              </BodyText>
            </div>
            <div className="text-center">
              <div className="bg-dark-navy text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <Heading3 color="dark-navy" className="mb-3">
                Protect
              </Heading3>
              <BodyText className="text-gray-600">
                Instant alerts and automated response to threats
              </BodyText>
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Use Cases */}
      <FadeInOnScroll>
        <Container className="bg-[#FAF9F7]">
          <SectionTitle 
            title="Industry Applications" 
            description="Protect high-risk communications across industries and use cases"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 bg-white">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-teal-primary/10 p-3 rounded-lg">
                    <useCase.icon className="w-6 h-6 text-teal-primary" />
                  </div>
                  <div>
                    <Heading3 color="dark-navy" className="mb-2">
                      {useCase.title}
                    </Heading3>
                    <BodyText className="text-gray-600">
                      {useCase.description}
                    </BodyText>
                  </div>
                </div>
                <div className="space-y-2">
                  <BodyText className="font-medium text-gray-800 mb-2">Key Scenarios:</BodyText>
                  {useCase.scenarios.map((scenario, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-teal-primary" />
                      <BodyText className="text-sm text-gray-600">{scenario}</BodyText>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Threats Prevented */}
      <FadeInOnScroll>
        <Container className="bg-white">
          <SectionTitle 
            title="Advanced Threat Prevention" 
            description="Stop sophisticated attacks that bypass traditional security measures"
          />
          <div className="space-y-6">
            {threatsPrevented.map((threat, index) => (
              <Card key={index} className="p-6 border-l-4 border-red-400">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <Heading3 color="dark-navy" className="mb-2 text-red-600">
                      {threat.threat}
                    </Heading3>
                    <BodyText className="text-gray-600 text-sm">
                      {threat.description}
                    </BodyText>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-teal-primary rounded-full flex items-center justify-center mx-auto">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <BodyText className="text-sm text-gray-500 mt-2">Protected by On-Demand ID™</BodyText>
                  </div>
                  <div>
                    <BodyText className="text-gray-600 text-sm">
                      <span className="font-medium text-teal-primary">Prevention:</span> {threat.prevention}
                    </BodyText>
                  </div>
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
            title="Technical Capabilities" 
            description="Enterprise-grade performance with real-time processing"
          />
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {technicalFeatures.map((feature, index) => (
                <div key={index} className="flex justify-between items-start py-3 border-b border-gray-100">
                  <BodyText className="font-medium text-gray-800 flex-shrink-0 mr-4">
                    {feature.feature}:
                  </BodyText>
                  <BodyText className="text-gray-600 text-right">
                    {feature.value}
                  </BodyText>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* ROI & Benefits */}
      <FadeInOnScroll>
        <Container className="bg-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Heading2 color="dark-navy" className="mb-6">
                Measurable Business Impact
              </Heading2>
              <BodyText className="text-gray-600 mb-6">
                Organizations using On-Demand ID™ see immediate improvements in security posture 
                and significant cost savings from prevented fraud.
              </BodyText>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-teal-primary" />
                  <BodyText><span className="font-bold text-teal-primary">95%</span> reduction in social engineering attacks</BodyText>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-teal-primary" />
                  <BodyText><span className="font-bold text-teal-primary">80%</span> decrease in account takeover incidents</BodyText>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-teal-primary" />
                  <BodyText><span className="font-bold text-teal-primary">$2.4M</span> average annual fraud savings</BodyText>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-teal-primary" />
                  <BodyText><span className="font-bold text-teal-primary">60%</span> improvement in customer trust</BodyText>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-primary/10 to-navy-primary/10 p-8 rounded-lg">
              <Heading3 color="dark-navy" className="mb-4">
                Implementation Benefits
              </Heading3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-teal-primary" />
                  <BodyText className="text-sm">Quick 2-week implementation</BodyText>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-teal-primary" />
                  <BodyText className="text-sm">No infrastructure changes required</BodyText>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-teal-primary" />
                  <BodyText className="text-sm">Seamless user experience</BodyText>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-teal-primary" />
                  <BodyText className="text-sm">24/7 monitoring and support</BodyText>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* CTA Section */}
      <FadeInOnScroll>
        <Container className="bg-gradient-to-r from-teal-primary to-navy-primary text-white text-center">
          <Heading2 className="mb-4">
            Stop Fraud in Real-Time
          </Heading2>
          <BodyText className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't wait for the next attack. Protect your organization with continuous, 
            real-time identity verification.
          </BodyText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-teal-primary hover:bg-gray-100">
              Request Demo
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-primary">
                Talk to Expert
              </Button>
            </Link>
          </div>
        </Container>
      </FadeInOnScroll>
    </div>
  );
}
