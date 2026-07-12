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
      <div className="mb-stack-lg">
        <h2 className="font-hanken text-[40px] sm:text-[56px] md:text-[68px] font-light leading-[1.1] tracking-[-0.02em] text-primary uppercase">
          OUR STORY
        </h2>
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
