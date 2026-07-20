import React from "react";
import VintageStoryCard from "./VintageStoryCard";

interface DomainItem {
  id: string;
  number: string;
  title: string;
  title: string;
  description: React.ReactNode | React.ReactNode[];
}

const domains: DomainItem[] = [
  {
    id: "origins",
    number: "01",
    title: "",
    description: [
      <React.Fragment key="p1">
        Celestia AI has it's founding roots in the bustling European capital of Brussels, in Belgium, where a couple of <strong>ex-McKinsey & Company Partners</strong> and Managers came together in the summer of 2025 with a simple mission - a mission to deliver <strong>fast, impactful AI solutions</strong> that are fully <strong>custom-built</strong> for B2B enterprises.
      </React.Fragment>,
      <React.Fragment key="p2">
        Our experience working with <strong>CXOs</strong> of large <strong>Fortune-500 B2B enterprises</strong> has been that there is a lot of conviction, but just a shortage of clarity on where can AI really deliver <strong>performance impact</strong> in the world of B2B. There are solid use-cases across the board (think Service Agents for customer care, or KYC automation in Banking etc.). However, one area that we find particularly exciting is in developing tools that need to be used at <strong>scale</strong> (e.g., pricing solutions).
      </React.Fragment>
    ],
  },
  {
    id: "impact",
    number: "02",
    title: "",
    description: [
      <React.Fragment key="p1">
        Thanks to AI, we can now develop and deploy <strong>custom tools</strong> at a <strong>fraction of the cost</strong> and in a matter of <strong>weeks</strong> to rapidly help our clients capture <strong>bottom line impact</strong>! Our founding team and network of experts has extensive experience on Commercial Excellence, Operational Excellence, Procurement and Human Relations topics - both in the industry and as management consultants to CXOs globally. And we're excited to partner with you on this journey!
      </React.Fragment>
    ],
  },
];

export default function Domains() {
  return (
    <section className="px-6 md:px-section-padding-h py-section-padding-v max-w-container-max mx-auto hairline-t" id="problems">
      <div className="mb-stack-lg">
        <h2 className="font-hanken text-[40px] sm:text-[56px] md:text-[68px] font-light leading-[1.1] tracking-[-0.02em] text-primary uppercase">
          OUR STORY
        </h2>
      </div>
      
      {/* Sticky Stacked Vintage Story Cards */}
      <div className="flex flex-col gap-24 mt-stack-lg items-center relative pb-32">
        {domains.map((domain, index) => (
          <div
            key={domain.id}
            className="sticky w-full max-w-[840px] transition-all duration-500"
            style={{
              top: `calc(15vh + ${index * 40}px)`,
              zIndex: index + 1,
            }}
          >
            <VintageStoryCard
              title={domain.title}
              description={domain.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
