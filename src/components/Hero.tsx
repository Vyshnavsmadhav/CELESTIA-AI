import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] w-full flex items-center overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-90"
      >
        <source src="/VN20260716_101340.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 md:to-transparent z-10" />

      {/* Grid Overlay for Tech Aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

      {/* Content Container aligned with site grid */}
      <div className="max-w-container-max mx-auto w-full px-6 md:px-section-padding-h relative z-20 py-stack-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full">
          <div className="col-span-1 md:col-span-8 flex flex-col justify-center animate-vintage-fade-up">
            <h1 className="font-hanken text-[48px] md:text-[80px] font-light leading-[52px] md:leading-[90px] tracking-[-0.01em] md:tracking-[-0.02em] text-white mb-stack-md max-w-4xl">
              We build AI that changes how enterprises operate.
            </h1>
            <p className="font-inter text-[18px] leading-[32px] text-white/80 mb-stack-lg max-w-2xl">
              Bespoke AI solutions engineered for complex business problems. We align bleeding-edge technology with fundamental economic drivers to deliver measurable margin improvement and operational velocity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-10 py-4 rounded-none font-inter text-[12px] font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg hover:shadow-white/10">
                Schedule a Discovery Call
              </button>
              <button className="border border-white/30 bg-transparent text-white px-10 py-4 rounded-none font-inter text-[12px] font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer">
                Explore Commercial Model
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
