import React from "react";
import VintageStoryCard from "./VintageStoryCard";

interface DomainItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

const domains: DomainItem[] = [
  {
    id: "origins",
    number: "01",
    title: "Origins & Mission",
    description: "Celestia AI has its founding roots in the European capital of Brussels, where ex-McKinsey & Company Partners and Managers came together in 2025 to deliver custom-built AI solutions. In our work with Fortune-500 CXOs, we saw high conviction but a clear shortage of clarity on where AI can deliver performance impact at scale.",
  },
  {
    id: "impact",
    number: "02",
    title: "Expertise & Impact",
    description: "Thanks to AI, we develop and deploy custom tools in a matter of weeks at a fraction of the cost to help clients capture bottom line impact. Our team brings deep industry and consulting experience across Commercial, Operational, and Procurement excellence to support you on this journey.",
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
