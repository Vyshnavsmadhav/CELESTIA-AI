import React from "react";

interface DomainItem {
  id: string;
  number: string;
  title: string;
  description: string;
  link: string;
}

const domains: DomainItem[] = [
  {
    id: "commercial",
    number: "01",
    title: "Commercial Excellence",
    description: "Dynamic pricing optimization, churn prediction models, and automated contract negotiation agents designed to maximize lifetime value and reduce acquisition friction.",
    link: "#",
  },
  {
    id: "procurement",
    number: "02",
    title: "Procurement Excellence",
    description: "Spend analytics, vendor risk assessment, and autonomous RFQ generation to drive down direct costs and secure critical supply chain vulnerabilities.",
    link: "#",
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-stack-lg">
        {domains.map((domain) => (
          <div
            key={domain.id}
            className="p-10 hairline-all bg-surface-container-lowest cinematic-glow group hover:bg-surface transition-colors duration-500"
          >
            <span className="font-mono text-[14px] text-outline mb-6 block">
              {domain.number}
            </span>
            <h4 className="font-hanken text-[32px] leading-[40px] text-primary mb-4">
              {domain.title}
            </h4>
            <p className="font-inter text-[16px] leading-[28px] text-on-surface-variant mb-8">
              {domain.description}
            </p>
            <a
              className="inline-flex items-center gap-2 font-inter text-[12px] font-semibold uppercase tracking-[0.15em] text-primary group-hover:gap-4 transition-all duration-300"
              href={domain.link}
            >
              View Insights{" "}
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
