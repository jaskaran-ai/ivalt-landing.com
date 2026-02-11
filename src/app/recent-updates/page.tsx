import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Recent Updates | iVALT",
  description:
    "Latest news, updates and announcements from iVALT, a leading provider of identity verification and security solutions.",
  keywords:
    "iVALT, recent updates, company news, identity verification, security solutions, 5FA, OnDemand ID, DocuID",
  openGraph: {
    title: "Recent Updates | iVALT",
    description: "Latest news, updates and announcements from iVALT.",
    url: "https://ivalt.com/recent-updates",
    type: "website",
  },
  alternates: {
    canonical: "https://ivalt.com/recent-updates",
  },
};

interface Update {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  path: string;
}

const recentUpdates: Update[] = [
  {
    id: "docuid",
    title: "iVALT Revolutionizes Document Security with Launch of DocuID®",
    date: "April 22, 2025",
    summary:
      "iVALT, an innovator in identity verification and security solutions, today announced the launch of DocuID, a groundbreaking document protection service that empowers document owners with unprecedented control over access to their critical information.",
    imageSrc:
      "/press-release/images/ivalt-revolutionizes-document-security-with-launch-of-DocuID-net.png",
    imageAlt: "iVALT DocuID Launch",
    path: "/recent-updates/ivalt-revolutionizes-document-security-with-launch-of-DocuID",
  },
  {
    id: "ondemand-id",
    title:
      "iVALT® Launches OnDemand ID providing 5+ Factors of Identity Validation",
    date: "February 10, 2025",
    summary:
      "iVALT®, a leading innovator of Zero Trust identity solutions, today announced the official launch of OnDemand ID™, a groundbreaking universal 5+factor identity product that empowers enterprises with the highest level of identity verification available.",
    imageSrc:
      "/press-release/images/ivalt-launches-ondemand-id-providing-5-factors-of-Identity-validation.png",
    imageAlt: "iVALT OnDemand ID Launch",
    path: "/recent-updates/ondemand-id-providing-5-factors-of-Identity-validation",
  },
  {
    id: "psono",
    title:
      "Psono Selects iVALT to Transform Digital Security with 5-Factor Authentication",
    date: "January 10, 2025",
    summary:
      "Psono, a leader in secure password management using end-to-end encryption, chose iVALT to dramatically upgrade digital security using iVALT's biometric and industry-leading 5 factor authentication (5FA).",
    imageSrc: "/press-release/images/psono-collaborates-with-ivalt.png",
    imageAlt: "Psono Selects iVALT 5FA",
    path: "/recent-updates/psono-selects-ivalt-5fa",
  },
];

export default function RecentUpdatesPage() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Recent Updates"
          description="Stay updated with the latest news and announcements from iVALT"
        />

        <div className="space-y-16">
          {recentUpdates.map((update) => (
            <div
              key={update.id}
              className="bg-white rounded-xl hover:shadow-sm overflow-hidden lg:flex"
            >
              <div className="lg:w-2/5 relative h-64 lg:h-auto ">
                <Image
                  src={update.imageSrc}
                  alt={update.imageAlt}
                  className="object-contain px-4 "
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className="p-8 lg:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-teal-primary font-semibold mb-2">
                    {update.date}
                  </div>
                  <h2 className="text-2xl font-bold text-navy-primary mb-4">
                    {update.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {update.summary}
                  </p>
                </div>
                <div>
                  <Link
                    href={update.path}
                    className="inline-flex items-center px-6 py-3 bg-teal-primary hover:bg-teal-primary/80 text-white font-medium rounded-md transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
