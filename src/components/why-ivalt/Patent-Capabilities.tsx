import React from 'react'
const Points = [
    {
        title: "Human-Bound Identity",
        desc: "Extends IAM Security via PKI to AI & IOT Ecosystems and Document Control (No Boundaries)",
    },
    {
        title: "Loop Backs",
        desc: "Software Redirects (Loop-Backs) to Stop Potentially Damaging ACTIONS in IAM and for Continuous TRUST Verifications for AI Compute",
    },
    {
        title: "AI Ecosystem Control and Compliance",
        desc: "End-to-End PKI Chains for Proof of Human & Non-Human Identities, Full Audit Accountability",
    },
    {
        title: "Protection from Social Engineering and AI Deepfakes",
        desc: "Force On-Demand ID Verifications to Stop Fake Call Impersonations, & Phishing",
    },
];

export const PatentCapabilities = () => {
  return (
      <div className="bg-white p-6 py-11 rounded-2xl  mt-16 shadow-md max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-6 text-center">
              iVALT’s Patented Capabilities
          </h1>
          <ul className="list-disc pl-5 space-y-7 text-gray-800">
              {Points.map((point, index) => (
                  <li
                      key={index}
                      className="flex flex-wrap gap-x-2 leading-relaxed text-base"
                  >
                      <span className="font-bold text-primary text-xl whitespace-nowrap">
                          {point.title}
                      </span>
                      <span className="text-primary font-semibold">→</span>
                      <span className="italic text-gray-800 text-xl flex-1">
                          {point.desc}
                      </span>
                  </li>
              ))}
          </ul>
      </div>

  )
}
