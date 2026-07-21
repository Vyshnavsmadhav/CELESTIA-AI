"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  
  // Elements to animate
  const centerClusterRef = useRef<HTMLDivElement>(null);
  const mainVideoRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  
  // Texts
  const textLeftRef = useRef<HTMLDivElement>(null);
  const textRightRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
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

      // Phase 1: Scale down and tilt into 3D, spread layers
      tl.to(mainVideoRef.current, {
        scale: 0.75,
        borderRadius: "24px",
        duration: 1,
        ease: "power2.inOut"
      }, 0);

      tl.to(centerClusterRef.current, {
        rotateX: 20,
        rotateY: -25,
        rotateZ: 5,
        duration: 1,
        ease: "power2.inOut"
      }, 0);
      
      tl.to(layer1Ref.current, {
        z: 80, // Move forward in 3D space
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, 0);
      
      tl.to(layer2Ref.current, {
        z: 160,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, 0);

      // Phase 2: Move entire cluster right, fade in left text
      tl.to(centerClusterRef.current, {
        x: "22vw", // move right
        duration: 1.2,
        ease: "power2.inOut"
      }, 1);
      
      tl.to(textLeftRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 1.2);

      // Hold phase
      tl.to({}, { duration: 0.8 }, 2.2);

      // Phase 3: Move cluster left, fade out left text, fade in right text
      tl.to(textLeftRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.in"
      }, 3);

      tl.to(centerClusterRef.current, {
        x: "-22vw", // move left
        rotateY: 25, // flip rotation slightly
        rotateX: 15,
        duration: 1.5,
        ease: "power2.inOut"
      }, 3);

      tl.to(textRightRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 3.5);
      
      // Hold before unpinning
      tl.to({}, { duration: 1 }, 4.3);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[500vh] bg-[#09090b] overflow-clip">
      <div 
        ref={stickyRef} 
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {/* Left Text */}
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

        {/* Right Text */}
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
            The data powering the world&apos;s best AI.
          </h2>
          <p className="text-white/60 text-lg font-inter max-w-md">
            The models at the frontier run on Scale data. We source contributors with advanced degrees and deliver at the tier frontier AI demands.
          </p>
        </div>

        {/* 3D Cluster */}
        <div 
          ref={centerClusterRef} 
          className="relative w-full max-w-[1000px] aspect-video z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main Video Layer */}
          <div 
            ref={mainVideoRef}
            className="absolute inset-0 w-full h-full bg-[#111] overflow-hidden flex items-center justify-center z-10"
            style={{ transform: "translateZ(0px)" }}
          >
             {/* Actual Video Placeholder */}
             <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900"></div>
             <div className="relative text-white/50 text-xl font-light flex flex-col items-center gap-4">
                <svg className="w-12 h-12 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Pilot Video</span>
             </div>
          </div>

          {/* Layer 1 (Wireframe Map) */}
          <div 
            ref={layer1Ref}
            className="absolute inset-0 w-full h-full border border-white/10 rounded-[24px] pointer-events-none opacity-0 z-20 backdrop-blur-sm bg-black/10 overflow-hidden"
            style={{ transform: "translateZ(0px)" }}
          >
            {/* Topography map placeholder */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 562" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M100 300 Q 250 200 400 350 T 700 250 T 900 400" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
               <path d="M150 250 Q 300 150 450 300 T 750 200 T 950 350" stroke="white" strokeWidth="0.5" />
               <path d="M50 350 Q 200 250 350 400 T 650 300 T 850 450" stroke="white" strokeWidth="0.5" />
               {/* Grid */}
               <g stroke="white" strokeWidth="0.5" strokeOpacity="0.2">
                  <line x1="0" y1="140" x2="1000" y2="140" />
                  <line x1="0" y1="281" x2="1000" y2="281" />
                  <line x1="0" y1="422" x2="1000" y2="422" />
                  <line x1="250" y1="0" x2="250" y2="562" />
                  <line x1="500" y1="0" x2="500" y2="562" />
                  <line x1="750" y1="0" x2="750" y2="562" />
               </g>
               <circle cx="400" cy="350" r="4" fill="white" />
               <circle cx="400" cy="350" r="12" stroke="white" strokeWidth="1" />
            </svg>
          </div>

          {/* Layer 2 (Data Analytics) */}
          <div 
            ref={layer2Ref}
            className="absolute inset-0 w-full h-full border border-blue-400/20 rounded-[24px] pointer-events-none opacity-0 z-30 overflow-hidden"
            style={{ transform: "translateZ(0px)", background: "radial-gradient(ellipse at 70% 30%, rgba(59,130,246,0.1) 0%, transparent 60%)" }}
          >
             <div className="absolute top-10 right-10 text-blue-300 font-mono text-[10px] tracking-widest leading-loose">
                SYS.OPS.992<br/>
                COORD: 34.0522° N<br/>
                COORD: 118.2437° W<br/>
                ALT: 45,000 FT<br/>
                SPD: MACH 1.2
             </div>
             
             {/* Reticle */}
             <svg className="absolute left-[40%] top-[40%] w-32 h-32 opacity-50" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="40" stroke="#60A5FA" strokeWidth="0.5" strokeDasharray="2 4" />
                <path d="M50 0 L50 20 M50 80 L50 100 M0 50 L20 50 M80 50 L100 50" stroke="#60A5FA" strokeWidth="1" />
                <rect x="35" y="35" width="30" height="30" stroke="#60A5FA" strokeWidth="0.5" />
             </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
