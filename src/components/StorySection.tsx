"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function StorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLSpanElement | HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Create a scroll-triggered staggering animation
      gsap.fromTo(
        textRefs.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%", // Triggers when the top of the section reaches 75% of the viewport height
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper to push refs safely
  const addToRefs = (el: any) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-section-padding-h bg-[#f7f6f2]">
      <div className="max-w-container-max mx-auto relative p-8 md:p-12">
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
              <span ref={addToRefs} className="block opacity-0">Behind Every Great</span>
              <span ref={addToRefs} className="block opacity-0">Business</span>
              <span ref={addToRefs} className="block opacity-0">Is a Better System —</span>
              <span ref={addToRefs} className="italic text-white/90 font-light mt-2 block opacity-0">We Build It.</span>
            </h2>
          </div>
          <div className="md:col-span-5 lg:col-span-5 lg:col-start-8 pt-8 md:pt-32">
            <p ref={addToRefs} className="text-white/90 font-inter text-[14px] md:text-[16px] leading-[1.7] opacity-0">
              Most businesses don&apos;t need more software—they need better systems. At Celestia AI, we begin by understanding how your business operates, identifying what slows it down, and engineering custom AI solutions that fit your workflows, your people, and your long-term goals. Every solution is designed from first principles because no two businesses face the same challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
