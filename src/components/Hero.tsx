"use client";

import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  
  // Elements to animate
  const centerClusterRef = useRef<HTMLDivElement>(null);
  const mainVideoRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  
  // Initial Hero Text
  const heroTextRef = useRef<HTMLDivElement>(null);

  // Scroll Texts
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);
  
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsTouch(motionMediaQuery.matches);
  }, []);

  useLayoutEffect(() => {
    if (isTouch) return;

    const ctx = gsap.context(() => {
      // Timeline pinned to the container's scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5, // Smooth scrubbing
        },
      });

      // Phase 0: Fade out hero text
      tl.to(heroTextRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: "power2.inOut"
      }, 0);

      // Phase 1: Scale down from full screen and add border radius FIRST
      tl.to(centerClusterRef.current, {
        width: "60%",
        maxWidth: "400px",
        height: "33.75vw", 
        maxHeight: "225px",
        duration: 1.2,
        ease: "power2.inOut"
      }, 0);

      tl.to(mainVideoRef.current, {
        borderRadius: "24px",
        duration: 1.2,
        ease: "power2.inOut"
      }, 0);
      
      // Phase 1.5: THEN tilt into 3D and spread layers
      tl.to(centerClusterRef.current, {
        rotateX: 20,
        rotateY: -25,
        rotateZ: 5,
        duration: 1.2,
        ease: "power2.inOut"
      }, 1.2);

      tl.to(layer1Ref.current, {
        z: 80, // Move forward in 3D space
        opacity: 1,
        borderRadius: "24px",
        duration: 1.2,
        ease: "power2.out"
      }, 1.2);
      
      tl.to(layer2Ref.current, {
        z: 160,
        opacity: 1,
        borderRadius: "24px",
        duration: 1.2,
        ease: "power2.out"
      }, 1.2);

      // Phase 2: Move entire cluster right, fade in left text
      tl.to(centerClusterRef.current, {
        x: "22vw", // move right
        duration: 1.2,
        ease: "power2.inOut"
      }, 2.4);
      
      tl.to(textLeftRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 2.6);

      // Hold phase
      tl.to({}, { duration: 0.8 }, 3.6);

      // Phase 3: Move cluster left, fade out left text, fade in right text
      tl.to(textLeftRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.in"
      }, 4.4);

      tl.to(centerClusterRef.current, {
        x: "-22vw", // move left
        rotateY: 25, // flip rotation slightly
        rotateX: 15,
        duration: 1.5,
        ease: "power2.inOut"
      }, 4.4);

      tl.to(textRightRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 4.9);
      
      // Hold before unpinning
      tl.to({}, { duration: 1 }, 5.9);

    }, containerRef);

    return () => ctx.revert();
  }, [isTouch]);

  return (
    <section ref={containerRef} className="relative w-full h-[600vh] bg-[#09090b] overflow-clip">
      <div 
        ref={stickyRef} 
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        
        {/* Initial Hero Text Overlay */}
        <div 
          ref={heroTextRef}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pointer-events-none"
        >
          <h1 className="font-hanken text-[42px] sm:text-[60px] lg:text-[72px] font-light leading-[1.1] tracking-[-0.02em] text-white mb-6">
            We build AI that changes how enterprises operate.
          </h1>
          <p className="font-inter text-[16px] sm:text-[18px] leading-[1.6] text-white/80 max-w-xl mx-auto">
            Bespoke AI solutions engineered for complex business problems. We align bleeding-edge technology with fundamental economic drivers to deliver measurable margin improvement and operational velocity.
          </p>
        </div>

        {/* Left Text (Scroll Phase) */}
        <div 
          ref={textLeftRef}
          className="absolute left-[8%] md:left-[10%] w-[84%] md:w-[35%] opacity-0 translate-y-10 flex flex-col gap-6 z-40 pointer-events-none"
        >
          <div className="flex items-center gap-2 text-white/50 uppercase tracking-widest text-xs font-semibold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            APPLICATIONS
          </div>
          <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-light leading-[1.1] tracking-tight font-hanken">
            AI systems that actually work.
          </h2>
          <p className="text-white/60 text-lg font-inter max-w-md">
            Most AI deployments in enterprise and government fail. We find the right use case, build the system, and own the outcome.
          </p>
          <div className="mt-4">
             <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium text-sm inline-flex items-center gap-2 pointer-events-auto">
                For Enterprise
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </button>
          </div>
        </div>

        {/* Right Text (Scroll Phase) */}
        <div 
          ref={textRightRef}
          className="absolute right-[8%] md:right-[10%] w-[84%] md:w-[35%] opacity-0 translate-y-10 flex flex-col gap-6 z-40 pointer-events-none"
        >
          <div className="flex items-center gap-2 text-white/50 uppercase tracking-widest text-xs font-semibold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            DATA
          </div>
          <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-light leading-[1.1] tracking-tight font-hanken">
            The data powering the world's best AI.
          </h2>
          <p className="text-white/60 text-lg font-inter max-w-md">
            The models at the frontier run on Scale data. We source contributors with advanced degrees and deliver at the tier frontier AI demands.
          </p>
        </div>

        {/* 3D Cluster */}
        <div 
          ref={centerClusterRef} 
          className="absolute inset-0 w-full h-full z-10 m-auto flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main Video Layer (Initially full screen) */}
          <div 
            ref={mainVideoRef}
            className="absolute inset-0 w-full h-full bg-[#000] overflow-hidden flex items-center justify-center z-10"
            style={{ transform: "translateZ(0px)" }}
          >
             <video
               autoPlay
               loop
               muted
               playsInline
               className="absolute inset-0 w-full h-full object-cover object-center z-0"
             >
               <source src="/VN20260716_101340.mp4" type="video/mp4" />
             </video>
             {/* Light overlay for initial hero text readability */}
             <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
          </div>

          {/* Layer 1 (Clear Glass Panel) */}
          <div 
            ref={layer1Ref}
            className="absolute inset-0 w-full h-full border border-white/20 pointer-events-none opacity-0 z-20 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.02)]"
            style={{ transform: "translateZ(0px)" }}
          >
          </div>

          {/* Layer 2 (Glass Panel) */}
          <div 
            ref={layer2Ref}
            className="absolute inset-0 w-full h-full border border-white/10 pointer-events-none opacity-0 z-30 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            style={{ transform: "translateZ(0px)" }}
          >
          </div>
        </div>
      </div>
    </section>
  );
}
