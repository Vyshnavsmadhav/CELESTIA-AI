"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function AnimatedPillarsText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate from a large scale down to its natural size (scale: 1)
      gsap.fromTo(
        textRef.current,
        { scale: 5, opacity: 0 }, // Start very big and invisible
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%", // Start when it enters the viewport
            end: "top 35%", // Finish when it reaches 35% from the top
            scrub: 1, // Smooth scrubbing
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={containerRef} className="w-full flex justify-center items-center py-12 md:py-24 overflow-hidden relative">
      <p 
        ref={textRef} 
        className="font-inter text-[48px] md:text-[64px] leading-tight text-on-surface font-bold whitespace-nowrap will-change-transform"
      >
        Our founding pillars....
      </p>
    </div>
  );
}
