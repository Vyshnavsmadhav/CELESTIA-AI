import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[795px] flex items-center px-6 md:px-section-padding-h max-w-container-max mx-auto py-stack-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full relative z-10">
        <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
          <h1 className="font-hanken text-[48px] md:text-[80px] font-light leading-[52px] md:leading-[90px] tracking-[-0.01em] md:tracking-[-0.02em] text-primary mb-stack-md max-w-4xl">
            We build AI that changes how enterprises operate.
          </h1>
          <p className="font-inter text-[18px] leading-[32px] text-on-surface-variant mb-stack-lg max-w-2xl">
            Bespoke AI solutions engineered for complex business problems. We align bleeding-edge technology with fundamental economic drivers to deliver measurable margin improvement and operational velocity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-none font-inter text-[12px] font-semibold uppercase tracking-widest hover:bg-inverse-surface transition-colors cursor-pointer">
              Schedule a Discovery Call
            </button>
            <button className="hairline-all bg-transparent text-primary px-10 py-4 rounded-none font-inter text-[12px] font-semibold uppercase tracking-widest hover:bg-surface-container-low transition-colors cursor-pointer">
              Explore Commercial Model
            </button>
          </div>
        </div>
      </div>
      
      {/* Hero Image positioned asymmetrically */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-4/5 hidden lg:block pr-section-padding-h">
        <div className="w-full h-full relative cinematic-glow">
          <img
            alt="Minimalist Boardroom"
            className="w-full h-full object-cover filter grayscale-[20%] contrast-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrIQyskvekOAFcd_4M3iH2voutsHFazvpfHvPvEmtxHb0C_pw5dZfj_0gg6825y32d3MbSY6MwjsguUDOX16pQb5Md9U-KO5dTdINZaqLJCGAw7DSIh_uxjKyPH_1547auKu4hrsfS9n0xpvRdFwVRXWf7GbyBxaZQZ2nY3Ov5as952ATAB9lvmekBv1kehH9_nnCW71U0nYVM-OsuWQu4urcc6Tog8oCC89Hi53DS-VlhTD7FbkhotzHF3XGitC6zwTWlpEHcAI4"
          />
        </div>
      </div>
    </section>
  );
}
