"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function AnimatedTimeline() {
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
          start: "top center", // Start drawing when the top of the container hits the center of the viewport
          end: "bottom center", // Finish drawing when the bottom hits the center
          scrub: 1, // Smooth scrubbing
        },
      });

      // 2. Animate the cards revealing when the line reaches them
      // We estimate the scroll progress needed for each card based on its Y position
      // The timeline is 2000px high. 
      // Card 1 is at Y=250 (12.5% down)
      // Card 2 is at Y=750 (37.5% down)
      // Card 3 is at Y=1250 (62.5% down)
      // Card 4 is at Y=1750 (87.5% down)

      const cards = [
        { ref: card1Ref, yPos: 250 },
        { ref: card2Ref, yPos: 750 },
        { ref: card3Ref, yPos: 1250 },
        { ref: card4Ref, yPos: 1750 },
      ];

      cards.forEach((card, index) => {
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
              // Start the animation when the container has scrolled down by yPos pixels, adjusted by viewport height
              start: `top+=${card.yPos - 200} center`,
              toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, [pathLength]);

  return (
    <div ref={containerRef} className="relative w-full max-w-[1000px] mx-auto h-[2000px] my-32">
      
      {/* Imane's Profile Picture at the Start */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-surface shadow-lg">
          <img 
            src="/images/founders/IMANE AJEBLI.webp" 
            alt="Imane Ajebli" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-hanken text-[20px] tracking-tight font-medium text-on-surface uppercase mt-4">
          Imane Ajebli
        </h3>
      </div>

      {/* SVG Timeline Path */}
      <svg 
        className="absolute top-0 left-0 w-full h-full pointer-events-none" 
        viewBox="0 0 1000 2000" 
        preserveAspectRatio="xMidYMin slice"
      >
        <path
          ref={pathRef}
          d="M 500,0 C 800,125 800,375 500,500 C 200,625 200,875 500,1000 C 800,1125 800,1375 500,1500 C 200,1625 200,1875 500,2000"
          fill="none"
          stroke="var(--color-on-surface)"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-40"
        />
        
        {/* Decorative nodes at the crests of the waves */}
        <circle cx="725" cy="250" r="6" fill="var(--color-on-surface)" />
        <circle cx="275" cy="750" r="6" fill="var(--color-on-surface)" />
        <circle cx="725" cy="1250" r="6" fill="var(--color-on-surface)" />
        <circle cx="275" cy="1750" r="6" fill="var(--color-on-surface)" />
      </svg>

      {/* Card 1: Left */}
      <div 
        ref={card1Ref}
        className="absolute top-[100px] left-4 md:left-[50px] w-[90%] md:w-[400px] p-8 border border-outline/20 bg-surface shadow-sm rounded-xl"
      >
        <p className="font-inter text-[16px] md:text-[18px] leading-relaxed text-on-surface">
          Formerly <strong>Senior Engagement Manager at McKinsey & Company</strong>, Imane is a <strong>co-founder</strong> of Celestia AI and leads client delivery and operations.
        </p>
      </div>

      {/* Card 2: Right */}
      <div 
        ref={card2Ref}
        className="absolute top-[600px] right-4 md:right-[50px] w-[90%] md:w-[400px] p-8 border border-outline/20 bg-surface shadow-sm rounded-xl"
      >
        <p className="font-inter text-[16px] md:text-[18px] leading-relaxed text-on-surface">
          At McKinsey, Imane drove large <strong>commercial growth and transformation programs</strong> across industries, with CXOs of leading companies, as well as governments.
        </p>
      </div>

      {/* Card 3: Left */}
      <div 
        ref={card3Ref}
        className="absolute top-[1100px] left-4 md:left-[50px] w-[90%] md:w-[400px] p-8 border border-outline/20 bg-surface shadow-sm rounded-xl"
      >
        <p className="font-inter text-[16px] md:text-[18px] leading-relaxed text-on-surface">
          Prior to McKinsey, she worked in the <strong>S&OP team of Apple</strong>, in the UK.
        </p>
      </div>

      {/* Card 4: Right */}
      <div 
        ref={card4Ref}
        className="absolute top-[1600px] right-4 md:right-[50px] w-[90%] md:w-[400px] p-8 border border-outline/20 bg-surface shadow-sm rounded-xl flex flex-col gap-6"
      >
        <p className="font-inter text-[16px] md:text-[18px] leading-relaxed text-on-surface">
          Imane is also a <strong>Professor of Strategy Consulting</strong> for Masters students at <strong>SKEMA Business School.</strong>
        </p>
        
        <a 
          href="https://www.linkedin.com/in/imaneajebli/" 
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
