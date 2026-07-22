/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function AnimatedTimelineJimmy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  
  // Refs for the 4 card elements
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      
      // Initialize stroke-dashoffset to be fully hidden
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    }

    const ctx = gsap.context(() => {
      // 1. Animate the line drawing
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Start drawing as soon as it enters the screen
          end: "bottom bottom", // Finish drawing when the bottom hits the screen bottom
          scrub: true,
        },
      });

      // 2. Animate the cards revealing when the line reaches them
      const cards = [
        { ref: card1Ref, yPos: 350 },
        { ref: card2Ref, yPos: 850 },
        { ref: card3Ref, yPos: 1350 },
        { ref: card4Ref, yPos: 1850 },
      ];

      cards.forEach((card) => {
        gsap.fromTo(
          card.ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              // Trigger exactly when the node reaches the 70% mark of the viewport (matching the ray)
              start: `top+=${card.yPos} 70%`,
              toggleActions: "play none none reverse",
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, [pathLength]);

  return (
    <div ref={containerRef} className="relative w-full max-w-[1200px] mx-auto h-[2200px] my-32 px-4 md:px-12">
      
      {/* Jimmy's Profile Picture at the Start - Aligned to right (X=960 in viewBox scale) */}
      <div className="absolute top-0 right-[20%] md:right-[240px] translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-surface shadow-lg">
          <img 
            src="/images/founders/JIMMY JOY.webp" 
            alt="Jimmy Joy" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-hanken text-[20px] tracking-tight font-medium text-on-surface uppercase mt-4">
          Jimmy Joy
        </h3>
      </div>

      {/* SVG Timeline Path - Shifted right and entering center */}
      <svg 
        className="absolute top-0 left-0 w-full h-full pointer-events-none" 
        viewBox="0 0 1200 2200" 
        preserveAspectRatio="xMidYMin slice"
      >
        <path
          ref={pathRef}
          // Starts at X=960 (right), curves to center X=600, then waves left and right. Trims at the last node (825, 1850).
          d="M 960,0 C 960,50 600,50 600,100 C 300,225 300,475 600,600 C 900,725 900,975 600,1100 C 300,1225 300,1475 600,1600 C 750,1662.5 825,1756.25 825,1850"
          fill="none"
          stroke="var(--color-on-surface)"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-40"
        />
        
        {/* Decorative nodes at the crests of the waves */}
        {/* Left crests */}
        <circle cx="375" cy="350" r="6" fill="var(--color-on-surface)" />
        <circle cx="375" cy="1350" r="6" fill="var(--color-on-surface)" />
        {/* Right crests */}
        <circle cx="825" cy="850" r="6" fill="var(--color-on-surface)" />
        <circle cx="825" cy="1850" r="6" fill="var(--color-on-surface)" />
      </svg>

      {/* Cards positioned alternating around the center */}
      
      {/* Card 1: Right of the left crest */}
      <div 
        ref={card1Ref}
        className="absolute top-[200px] right-4 md:right-[100px] w-[90%] md:w-[450px] p-8 border border-outline/20 bg-surface shadow-sm rounded-xl"
      >
        <p className="font-inter text-[16px] md:text-[18px] leading-relaxed text-on-surface">
          Formerly <strong>Associate Partner</strong> at <strong>McKinsey & Company</strong>, Jimmy is a co-founder of Celestia AI and leads technology innovation.
        </p>
      </div>

      {/* Card 2: Left of the right crest */}
      <div 
        ref={card2Ref}
        className="absolute top-[700px] left-4 md:left-[100px] w-[90%] md:w-[450px] p-8 border border-outline/20 bg-surface shadow-sm rounded-xl"
      >
        <p className="font-inter text-[16px] md:text-[18px] leading-relaxed text-on-surface">
          At McKinsey, Jimmy worked closely with CXOs of Fortune-100 companies, driving large global <strong>commercial excellence programs</strong> via tech enablement.
        </p>
      </div>

      {/* Card 3: Right of the left crest */}
      <div 
        ref={card3Ref}
        className="absolute top-[1200px] right-4 md:right-[100px] w-[90%] md:w-[450px] p-8 border border-outline/20 bg-surface shadow-sm rounded-xl"
      >
        <p className="font-inter text-[16px] md:text-[18px] leading-relaxed text-on-surface">
          Prior to McKinsey, he led various sales and strategy roles at <strong>AI, health-tech and media</strong> companies.
        </p>
      </div>

      {/* Card 4: Left of the right crest */}
      <div 
        ref={card4Ref}
        className="absolute top-[1700px] left-4 md:left-[100px] w-[90%] md:w-[450px] p-8 border border-outline/20 bg-surface shadow-sm rounded-xl flex flex-col items-end gap-6 text-right"
      >
        <p className="font-inter text-[16px] md:text-[18px] leading-relaxed text-on-surface w-full">
          Jimmy is also an <strong>advisor at Venture One / AI71</strong> (UAE&apos;s government-owned AI enterprise).
        </p>
        
        <a 
          href="https://www.linkedin.com/in/jimmyjoy/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-on-surface px-6 py-3 rounded-full font-medium hover:bg-on-surface hover:text-surface transition-colors w-max"
        >
          Connect on LinkedIn
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>

    </div>
  );
}
