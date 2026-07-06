import React from "react";

export default function Philosophy() {
  return (
    <section className="px-6 md:px-section-padding-h py-section-padding-v bg-surface-container-highest" id="philosophy">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-10 md:col-start-2 text-center">
          <h2 className="font-hanken text-[48px] md:text-[80px] font-light leading-[52px] md:leading-[90px] tracking-[-0.01em] md:tracking-[-0.02em] text-primary mb-stack-md">
            Business problems first,
            <br />
            software second.
          </h2>
          <p className="font-inter text-[18px] leading-[32px] text-on-surface-variant max-w-3xl mx-auto">
            The majority of enterprise AI initiatives fail because they start with an algorithm rather than an economic imperative. Our philosophy inverses this dynamic. We design solutions anchored entirely in your P&amp;L, ensuring that deployment equates to immediate, measurable value.
          </p>
        </div>
      </div>
    </section>
  );
}
