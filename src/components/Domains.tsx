import React from "react";
import VintageStoryCard from "./VintageStoryCard";

interface DomainItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  artwork: React.ReactNode;
}

const domains: DomainItem[] = [
  {
    id: "commercial",
    number: "01",
    title: "Commercial Excellence",
    description: "Dynamic pricing optimization, churn prediction models, and automated contract negotiation agents designed to maximize lifetime value and reduce acquisition friction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2C12 2 13 8 13.5 9.5C14 11 15 12 17 12C15 12 14 13 13.5 14.5C13 16 12 22 12 22C12 22 11 16 10.5 14.5C10 13 9 12 7 12C9 12 10 11 10.5 9.5C11 8 12 2 12 2Z" fill="currentColor" />
      </svg>
    ),
    artwork: (
      <img
        src="/commercial_excellence_illustration.png"
        alt="Commercial Excellence"
        className="w-full h-full object-contain mix-blend-multiply opacity-[0.82]"
      />
    ),
  },
  {
    id: "procurement",
    number: "02",
    title: "Procurement Excellence",
    description: "Spend analytics, vendor risk assessment, and autonomous RFQ generation to drive down direct costs and secure critical supply chain vulnerabilities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12L20 7.5M12 12L4 7.5M12 12V21" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    artwork: (
      <img
        src="/procurement_excellence_illustration.png"
        alt="Procurement Excellence"
        className="w-full h-full object-contain mix-blend-multiply opacity-[0.82]"
      />
    ),
  },
];

export default function Domains() {
  return (
    <section className="px-6 md:px-section-padding-h py-section-padding-v max-w-container-max mx-auto hairline-t" id="problems">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-lg">
        <div className="md:col-span-4 md:col-start-1">
          <h2 className="font-inter text-[12px] font-semibold text-on-surface-variant uppercase tracking-[0.15em] mb-4">
            Strategic Domains
          </h2>
          <h3 className="font-hanken text-[32px] md:text-[48px] font-light tracking-[0.02em] md:tracking-[0.05em] text-primary">
            Where we apply intelligence.
          </h3>
        </div>
        <div className="md:col-span-6 md:col-start-7 flex items-end pb-2">
          <p className="font-inter text-[18px] leading-[32px] text-on-surface-variant">
            We do not build technology for technology&apos;s sake. We focus our architecture strictly on domains where margin impact is undeniable and scale is necessary.
          </p>
        </div>
      </div>
      
      {/* Grid rendering Vintage Story Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-stack-lg justify-items-center">
        {domains.map((domain) => (
          <VintageStoryCard
            key={domain.id}
            icon={domain.icon}
            title={domain.title}
            description={domain.description}
            illustration={domain.artwork}
          />
        ))}
      </div>
    </section>
  );
}
