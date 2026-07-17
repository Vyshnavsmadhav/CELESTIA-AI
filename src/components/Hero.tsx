"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device or preference for reduced motion
    const hoverMediaQuery = window.matchMedia("(hover: hover)");
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsTouch(!hoverMediaQuery.matches || motionMediaQuery.matches);

    // Initial center position for mouse parallax
    if (containerRef.current) {
      setMouseCoords({ x: 0, y: 0 });
    }
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize to a range of -0.5 to 0.5
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      setMouseCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouch]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight || 800;
      // Calculate scroll progress (0 to 1) for the first viewport height
      const progress = Math.min(scrollY / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic opacity and translation for exit scroll effect
  const contentOpacity = 1 - scrollProgress * 0.6; // fades down to 40% opacity
  const contentTranslateY = scrollProgress * -50; // translates up by 50px

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center overflow-hidden bg-black text-white cursor-default"
    >
      {/* Background Video - KEPT EXACTLY AS IN CURRENT REPO (Do not change/resize) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80"
      >
        <source src="/VN20260716_101340.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/45 md:to-transparent z-10 pointer-events-none" />

      {/* Ambient Volumetric Lighting Overlay (Low opacity natural lighting) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div 
          className="absolute -top-[30%] -left-[20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(223,190,130,0.05)_0%,rgba(255,255,255,0.01)_30%,transparent_60%)] animate-light-sweep pointer-events-none"
        />
      </div>


      {/* Continuous Floating Ambient Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Floating Panel 1: Top Right Area */}
        <div
          style={{
            transform: isTouch
              ? "none"
              : `translate3d(${mouseCoords.x * 20}px, ${mouseCoords.y * 20}px, 0)`,
            transition: isTouch ? "none" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
          className="absolute top-[15%] right-[10%] w-[180px] h-[320px] hidden lg:block"
        >
          <div className="w-full h-full bg-white/[0.012] border border-white/[0.04] backdrop-blur-[2px] rounded-none animate-float-1" />
        </div>

        {/* Floating Panel 2: Bottom Left Area */}
        <div
          style={{
            transform: isTouch
              ? "none"
              : `translate3d(${mouseCoords.x * -15}px, ${mouseCoords.y * -15}px, 0)`,
            transition: isTouch ? "none" : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
          className="absolute bottom-[10%] left-[5%] w-[240px] h-[120px] hidden md:block"
        >
          <div className="w-full h-full bg-white/[0.008] border border-white/[0.03] backdrop-blur-[1px] rounded-none animate-float-2" />
        </div>

        {/* Floating Panel 3: Mid Right Area */}
        <div
          style={{
            transform: isTouch
              ? "none"
              : `translate3d(${mouseCoords.x * 28}px, ${mouseCoords.y * 28}px, 0)`,
            transition: isTouch ? "none" : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
          className="absolute top-[45%] right-[25%] w-[140px] h-[140px] hidden xl:block"
        >
          <div className="w-full h-full bg-white/[0.01] border border-white/[0.03] backdrop-blur-[1.5px] rounded-none animate-float-3" />
        </div>
      </div>

      {/* Content Container aligned with site grid */}
      <div 
        style={{
          opacity: contentOpacity,
          transform: `translate3d(0, ${contentTranslateY}px, 0)`,
          transition: "transform 0.1s linear, opacity 0.1s linear",
        }}
        className="max-w-container-max mx-auto w-full px-6 md:px-section-padding-h relative z-20 py-stack-lg flex items-center justify-center min-h-[calc(100vh-80px)]"
      >
        <div className="flex flex-col items-center justify-center text-center max-w-3xl">
          
          {/* Headline with Fade-in and Mouse Parallax */}
          <div
            className="opacity-0 animate-entrance"
            style={{
              animationDelay: "200ms",
              transform: isTouch
                ? "none"
                : `translate3d(${mouseCoords.x * 4}px, ${mouseCoords.y * 4}px, 0)`,
              transition: isTouch ? "none" : "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <h1 className="font-hanken text-[42px] sm:text-[60px] lg:text-[72px] font-light leading-[1.1] tracking-[-0.02em] text-white mb-stack-md">
              We build AI that changes how enterprises operate.
            </h1>
          </div>

          {/* Paragraph with Fade-in, Staggered delay, and Mouse Parallax */}
          <div
            className="opacity-0 animate-entrance"
            style={{
              animationDelay: "350ms",
              transform: isTouch
                ? "none"
                : `translate3d(${mouseCoords.x * 2}px, ${mouseCoords.y * 2}px, 0)`,
              transition: isTouch ? "none" : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <p className="font-inter text-[16px] sm:text-[18px] leading-[1.6] text-white/80 max-w-xl">
              Bespoke AI solutions engineered for complex business problems. We align bleeding-edge technology with fundamental economic drivers to deliver measurable margin improvement and operational velocity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
