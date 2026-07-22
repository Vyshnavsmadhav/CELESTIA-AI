"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function StorySection() {
  const containerRef = useRef<HTMLElement>(null);

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 3D float effect for the green box
      gsap.fromTo(
        boxRef.current,
        {
          y: 100,
          rotationX: 15,
          scale: 0.95,
        },
        {
          y: 0,
          rotationX: 0,
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "top 40%",
            scrub: 1,
          }
        }
      );


    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pb-0 pt-0 px-6 md:px-section-padding-h overflow-visible -mb-4 z-10 bg-[#09090b]">
      <div 
        ref={boxRef} 
        className="max-w-container-max mx-auto relative p-8 md:p-12 -mt-16 md:-mt-32 z-20"
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        {/* Stepped sharp-edged border */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-0" 
          preserveAspectRatio="none" 
          viewBox="0 0 100 100"
        >
          <path 
            d="M 0,4 Q 0,0 4,0 L 38,0 Q 42,0 42,4 L 42,36 Q 42,40 46,40 L 96,40 Q 100,40 100,44 L 100,96 Q 100,100 96,100 L 4,100 Q 0,100 0,96 Z" 
            fill="#243628" 
            stroke="#243628" 
            strokeWidth="1.5" 
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-7 lg:col-span-6">
            <h2 className="text-white font-hanken text-[32px] md:text-[44px] lg:text-[52px] leading-[1.2] font-medium tracking-tight">
              <span className="reveal-text translate-y-8 block opacity-0">Behind Every Great</span>
              <span className="reveal-text translate-y-8 block opacity-0">Business</span>
              <span className="reveal-text translate-y-8 block opacity-0">Is a Better System —</span>
              <span className="reveal-text translate-y-8 italic text-white/90 font-light mt-2 block opacity-0">We Build It.</span>
            </h2>
          </div>
          <div className="md:col-span-5 lg:col-span-5 lg:col-start-8 pt-8 md:pt-32">
            <p className="reveal-text translate-y-8 text-white/90 font-inter text-[14px] md:text-[16px] leading-[1.7] opacity-0">
              Most businesses don&apos;t need more software—they need better systems. At Celestia AI, we begin by understanding how your business operates, identifying what slows it down, and engineering custom AI solutions that fit your workflows, your people, and your long-term goals. Every solution is designed from first principles because no two businesses face the same challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
