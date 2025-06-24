import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { Heading1, Heading2, Heading3, BodyText } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Smartphone, Fingerprint, Eye, Scan, Globe, Shield, Zap, Users, Clock, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const biometricModes = [
  {
    icon: Fingerprint,
    title: "Fingerprint Recognition",
    description: "Advanced ridge pattern analysis with anti-spoofing technology",
    accuracy: "99.8%"
  },
  {
    icon: Eye,
    title: "Facial Recognition",
    description: "3D facial mapping with liveness detection and emotion analysis",
    accuracy: "99.95%"
  },
  {
    icon: Scan,
    title: "Iris Recognition",
    description: "High-precision iris pattern matching with superior accuracy",
    accuracy: "99.99%"
  },
  {
    icon: Smartphone,
    title: "Voice Recognition",
    description: "Vocal pattern analysis with noise cancellation technology",
    accuracy: "99.2%"
  }
];

const keyCapabilities = [
  {
    icon: Globe,
    title: "Universal Access",
    description: "One identity works everywhere - any device, any application, any location"
  },
  {
    icon: Smartphone,
    title: "Mobile-Centric Design",
    description: "Purpose-built for mobile devices with offline capability"
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description: "Zero-knowledge architecture ensures biometric data never leaves device"
  },
  {
    icon: Zap,
    title: "Instant Verification",
    description: "Sub-second authentication with continuous background verification"
  }
];

const useCases = [
  {
    category: "Financial Services",
    applications: [
      {
        title: "Mobile Banking",
        description: "Secure transactions with biometric confirmation",
        benefits: ["Fraud reduction", "User convenience", "Regulatory compliance"]
      },
      {
        title: "ATM Access",
        description: "Cardless withdrawals using biometric verification",
        benefits: ["Enhanced security", "Reduced skimming", "Better UX"]
      },
      {
        title: "Digital Payments",
        description: "Biometric authorization for high-value transactions",
        benefits: ["Transaction security", "Dispute reduction", "Trust building"]
      }
    ]
  },
  {
    category: "Healthcare",
    applications: [
      {
        title: "Patient Identification",
        description: "Accurate patient matching across healthcare systems",
        benefits: ["Medical errors reduction", "HIPAA compliance", "Better outcomes"]
      },
      {
        title: "Prescription Access",
        description: "Secure medication dispensing with biometric verification",
        benefits: ["Drug abuse prevention", "Patient safety", "Audit trails"]
      },
      {
        title: "Medical Records",
        description: "Secure access to electronic health records",
        benefits: ["Data protection", "Access control", "Privacy compliance"]
      }
    ]
  },
  {
    category: "Government & Border Security",
    applications: [
      {
        title: "Border Control",
        description: "Seamless traveler verification at checkpoints",
        benefits: ["Security enhancement", "Processing speed", "Fraud prevention"]
      },
      {
        title: "Digital ID Cards",
        description: "Biometric-enabled government identification",
        benefits: ["Identity assurance", "Service delivery", "Fraud reduction"]
      },
      {
        title: "Voting Systems",
        description: "Secure and verifiable election processes",
        benefits: ["Election integrity", "Voter verification", "Transparency"]
      }
    ]
  }
];

const technicalSpecs = [
  { feature: "Biometric Accuracy", value: "FAR < 0.001%, FRR < 0.1%" },
  { feature: "Processing Speed", value: "< 500ms end-to-end verification" },
  { feature: "Template Size", value: "< 2KB per biometric modality" },
  { feature: "Platform Support", value: "iOS, Android, Windows, Linux, Web" },
  { feature: "Standards Compliance", value: "ISO/IEC 19794, NIST, FIDO2" },
  { feature: "Security Certification", value: "Common Criteria EAL4+, FIPS 140-2" }
];

const deploymentOptions = [
  {
    type: "Cloud-Native",
    description: "Fully managed cloud service with global scalability",
    features: ["Auto-scaling", "Global CDN", "99.99% uptime", "Managed updates"]
  },
  {
    type: "On-Premises",
    description: "Private deployment for maximum control and compliance",
    features: ["Data sovereignty", "Custom integration", "Air-gapped option", "Full control"]
  },
  {
    type: "Hybrid",
    description: "Combined cloud and on-premises deployment",
    features: ["Flexible data placement", "Gradual migration", "Best of both", "Risk mitigation"]
  },
  {
    type: "Edge Computing",
    description: "Local processing for ultra-low latency requirements",
    features: ["Offline capability", "Reduced bandwidth", "Local processing", "Privacy enhanced"]
  }
];

export default function UniversalBiometricPage() {
  return (
    <div className="bg-[#FAF9F7] min-h-screen">
      {/* Hero Section */}
      <FadeInOnScroll>
        <Container className="pt-8 pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-teal-primary text-teal-primary">
              Mobile-Centric Biometric Identity
            </Badge>
            <Heading1 color="dark-navy" className="mb-6">
              Universal Biometric ID®
              <span className="block text-teal-primary mt-2">
                Anyone, Anywhere, at Any Time, for Any Application
              </span>
            </Heading1>
            <BodyText className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The definitive mobile-centric identity platform that works everywhere. 
              One universal biometric identity for all your digital interactions.
            </BodyText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-primary hover:bg-navy-primary">
                Explore Platform
              </Button>
              <Button variant="outline" size="lg" className="border-navy-primary text-navy-primary">
                View Integration Guide
              </Button>
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Vision Statement */}
      <FadeInOnScroll>
        <Container className="bg-gradient-to-r from-teal-primary to-navy-primary text-white text-center">
          <Heading2 className="mb-6">
            Definitive Mobile-Centric Identity for Everything
          </Heading2>
          <BodyText className="text-xl opacity-90 max-w-3xl mx-auto">
            Universal Biometric ID® represents the future of digital identity - a single, 
            secure, and private biometric identity that seamlessly works across all applications, 
            devices, and services in our increasingly mobile world.
          </BodyText>
        </Container>
      </FadeInOnScroll>

      {/* Biometric Modalities */}
      <FadeInOnScroll>
        <Container className="bg-white">
          <SectionTitle 
            title="Advanced Biometric Recognition" 
            description="Multiple biometric modalities working together for unparalleled accuracy and security"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {biometricModes.map((mode, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="bg-teal-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <mode.icon className="w-8 h-8 text-teal-primary" />
                </div>
                <Heading3 color="dark-navy" className="mb-2">
                  {mode.title}
                </Heading3>
                <BodyText className="text-gray-600 text-sm mb-3">
                  {mode.description}
                </BodyText>
                <Badge variant="outline" className="border-teal-primary text-teal-primary">
                  {mode.accuracy} Accuracy
                </Badge>
              </Card>
            ))}
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Key Capabilities */}
      <FadeInOnScroll>
        <Container className="bg-[#FAF9F7]">
          <SectionTitle 
            title="Platform Capabilities" 
            description="Built for the mobile-first world with privacy and security at the core"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {keyCapabilities.map((capability, index) => (
              <Card key={index} className="p-6 border-l-4 border-teal-primary bg-white">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-primary/10 p-3 rounded-lg">
                    <capability.icon className="w-6 h-6 text-teal-primary" />
                  </div>
                  <div>
                    <Heading3 color="dark-navy" className="mb-2">
                      {capability.title}
                    </Heading3>
                    <BodyText className="text-gray-600">
                      {capability.description}
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
            title="How Universal Biometric ID® Works" 
            description="Seamless integration across any application or service"
          />
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-teal-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <Heading3 color="dark-navy" className="mb-3">
                Enrollment
              </Heading3>
              <BodyText className="text-gray-600 text-sm">
                One-time biometric enrollment creates your universal identity
              </BodyText>
            </div>
            <div className="text-center">
              <div className="bg-navy-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <Heading3 color="dark-navy" className="mb-3">
                Integration
              </Heading3>
              <BodyText className="text-gray-600 text-sm">
                Applications integrate via simple API or SDK
              </BodyText>
            </div>
            <div className="text-center">
              <div className="bg-light-teal text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <Heading3 color="dark-navy" className="mb-3">
                Authentication
              </Heading3>
              <BodyText className="text-gray-600 text-sm">
                Instant verification using any enrolled biometric
              </BodyText>
            </div>
            <div className="text-center">
              <div className="bg-dark-navy text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <Heading3 color="dark-navy" className="mb-3">
                Authorization
              </Heading3>
              <BodyText className="text-gray-600 text-sm">
                Granular permissions based on context and risk
              </BodyText>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-teal-primary to-navy-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <Heading3 color="dark-navy" className="mb-3">
                Audit
              </Heading3>
              <BodyText className="text-gray-600 text-sm">
                Complete audit trail and compliance reporting
              </BodyText>
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Use Cases by Industry */}
      <FadeInOnScroll>
        <Container className="bg-[#FAF9F7]">
          <SectionTitle 
            title="Industry Applications" 
            description="Transforming identity verification across every sector"
          />
          <div className="space-y-12">
            {useCases.map((industry, index) => (
              <div key={index}>
                <Heading3 color="dark-navy" className="mb-6 text-center">
                  {industry.category}
                </Heading3>
                <div className="grid md:grid-cols-3 gap-6">
                  {industry.applications.map((app, appIndex) => (
                    <Card key={appIndex} className="p-6 bg-white">
                      <Heading3 color="dark-navy" className="mb-3 text-lg">
                        {app.title}
                      </Heading3>
                      <BodyText className="text-gray-600 mb-4 text-sm">
                        {app.description}
                      </BodyText>
                      <div className="space-y-2">
                        {app.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-teal-primary" />
                            <BodyText className="text-xs text-gray-600">{benefit}</BodyText>
                          </div>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Technical Specifications */}
      <FadeInOnScroll>
        <Container className="bg-white">
          <SectionTitle 
            title="Technical Excellence" 
            description="Enterprise-grade performance with industry-leading accuracy"
          />
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="flex justify-between items-start py-3 border-b border-gray-200">
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

      {/* Deployment Options */}
      <FadeInOnScroll>
        <Container className="bg-[#FAF9F7]">
          <SectionTitle 
            title="Flexible Deployment Options" 
            description="Choose the deployment model that fits your requirements"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="p-6 bg-white">
                <Heading3 color="dark-navy" className="mb-3">
                  {option.type}
                </Heading3>
                <BodyText className="text-gray-600 text-sm mb-4">
                  {option.description}
                </BodyText>
                <div className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-teal-primary" />
                      <BodyText className="text-xs text-gray-600">{feature}</BodyText>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Privacy & Security */}
      <FadeInOnScroll>
        <Container className="bg-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Heading2 color="dark-navy" className="mb-6">
                Privacy by Design
              </Heading2>
              <BodyText className="text-gray-600 mb-6">
                Universal Biometric ID® is built with privacy as the foundation. 
                Your biometric data never leaves your device, ensuring maximum privacy and security.
              </BodyText>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-teal-primary" />
                  <BodyText>Zero-knowledge architecture</BodyText>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-teal-primary" />
                  <BodyText>On-device biometric processing</BodyText>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-teal-primary" />
                  <BodyText>Encrypted biometric templates</BodyText>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-teal-primary" />
                  <BodyText>GDPR, CCPA, BIPA compliant</BodyText>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-primary/10 to-navy-primary/10 p-8 rounded-lg">
              <Heading3 color="dark-navy" className="mb-4">
                Security Certifications
              </Heading3>
              <div className="grid grid-cols-2 gap-4">
                {['Common Criteria EAL4+', 'FIPS 140-2', 'ISO 27001', 'SOC 2 Type II', 'PCI DSS', 'NIST Compliance'].map((cert, index) => (
                  <Badge key={index} variant="outline" className="justify-center p-2 border-teal-primary text-teal-primary text-xs">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* Future-Ready */}
      <FadeInOnScroll>
        <Container className="bg-[#FAF9F7]">
          <div className="text-center max-w-4xl mx-auto">
            <Heading2 color="dark-navy" className="mb-6">
              Future-Ready Identity Platform
            </Heading2>
            <BodyText className="text-gray-600 mb-8">
              Universal Biometric ID® evolves with emerging technologies and standards, 
              ensuring your identity platform remains cutting-edge and compatible with future innovations.
            </BodyText>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="w-12 h-12 text-teal-primary mx-auto mb-4" />
                <Heading3 color="dark-navy" className="mb-2">
                  Continuous Updates
                </Heading3>
                <BodyText className="text-gray-600 text-sm">
                  Regular improvements and new features
                </BodyText>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-teal-primary mx-auto mb-4" />
                <Heading3 color="dark-navy" className="mb-2">
                  AI Enhancement
                </Heading3>
                <BodyText className="text-gray-600 text-sm">
                  Machine learning improves accuracy over time
                </BodyText>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-teal-primary mx-auto mb-4" />
                <Heading3 color="dark-navy" className="mb-2">
                  Standards Evolution
                </Heading3>
                <BodyText className="text-gray-600 text-sm">
                  Automatic compliance with emerging standards
                </BodyText>
              </div>
            </div>
          </div>
        </Container>
      </FadeInOnScroll>

      {/* CTA Section */}
      <FadeInOnScroll>
        <Container className="bg-gradient-to-r from-teal-primary to-navy-primary text-white text-center">
          <Heading2 className="mb-4">
            Experience the Future of Identity
          </Heading2>
          <BodyText className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the revolution in mobile-centric identity. One universal biometric identity 
            for all your digital needs.
          </BodyText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-teal-primary hover:bg-gray-100">
              Start Integration
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-primary">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </Container>
      </FadeInOnScroll>
    </div>
  );
}
