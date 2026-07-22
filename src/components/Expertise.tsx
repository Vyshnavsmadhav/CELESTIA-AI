"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const industries = [
  { name: "Healthcare", image: "/images/domains/healthcare.png" },
  { name: "Finance", image: "/images/domains/finance.png" },
  { name: "Manufacturing", image: "/images/domains/manufacturing.png" },
  { name: "Retail", image: "/images/domains/retail.png" },
  { name: "Government", image: "/images/domains/government.png" },
  { name: "Energy", image: "/images/domains/energy.png" },
];

export default function Expertise() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-surface relative z-10 border-b border-outline/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant/50 mb-6">
            Domain Expertise
          </span>
          <h2 className="font-hanken text-[36px] md:text-[52px] font-light leading-[1.1] tracking-tight text-primary">
            Built for the most complex industries.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              ref={addToRefs}
              className="group relative h-[320px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 opacity-0"
            >
              <div className="absolute inset-0 bg-[#09090b] z-0">
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 group-hover:opacity-80 transition-all duration-700 ease-in-out" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <h3 className="font-hanken text-[28px] md:text-[32px] font-medium text-white group-hover:translate-x-2 transition-transform duration-500 ease-out">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
