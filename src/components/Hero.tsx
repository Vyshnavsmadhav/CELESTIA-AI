"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
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

    // GSAP Staggered Page-Load animation
    const hasMotion = !motionMediaQuery.matches;
    const loadCtx = gsap.context(() => {
      gsap.fromTo(
        [headingRef.current, paragraphRef.current],
        {
          opacity: 0,
          y: hasMotion ? 30 : 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    });

    // GSAP Scroll-Triggered video, panel, and camera transitions (only when motion is enabled)
    let scrollCtx: gsap.Context | undefined;
    if (hasMotion) {
      scrollCtx = gsap.context(() => {
        // Background video parallax (slowest movement)
        gsap.to(videoRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
          yPercent: 6,
          scale: 1.03,
          ease: "none",
        });

        // Cinematic Camera perspective rotation & scale
        gsap.to(cameraRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
          rotateX: -4,
          rotateY: 2,
          scale: 0.97,
          ease: "none",
        });

        // Decorative floating panels parallax (slightly faster movement)
        // Panel 1: Top Right Area
        if (panelRefs.current[0]) {
          gsap.to(panelRefs.current[0], {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
            yPercent: 20,
            ease: "none",
          });
        }

        // Panel 2: Bottom Left Area
        if (panelRefs.current[1]) {
          gsap.to(panelRefs.current[1], {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
            yPercent: -24,
            ease: "none",
          });
        }

        // Panel 3: Mid Right Area
        if (panelRefs.current[2]) {
          gsap.to(panelRefs.current[2], {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
            yPercent: 15,
            ease: "none",
          });
        }

        // Panel 4: Glass Shape A (behind text, slow parallax)
        if (panelRefs.current[3]) {
          gsap.to(panelRefs.current[3], {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
            yPercent: 10,
            ease: "none",
          });
        }

        // Panel 5: Glass Shape B (behind text, slow parallax)
        if (panelRefs.current[4]) {
          gsap.to(panelRefs.current[4], {
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
            yPercent: -12,
            ease: "none",
          });
        }

        // Foreground content parallax (minimal movement)
        gsap.to(contentRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
          yPercent: -6,
          opacity: 0.15,
          ease: "none",
        });
      });
    }

    return () => {
      loadCtx.revert();
      if (scrollCtx) scrollCtx.revert();
    };
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

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center overflow-hidden bg-black text-white cursor-default"
      style={{
        perspective: "1200px",
        perspectiveOrigin: "center center",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Background Video - KEPT EXACTLY AS IN CURRENT REPO (Do not change/resize) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80"
        style={{ willChange: "transform, filter" }}
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

      {/* Cinematic Camera Wrapper containing panels and text */}
      <div
        ref={cameraRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Continuous Floating Ambient Architectural Elements */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {/* Floating Panel 1: Top Right Area */}
          <div
            ref={(el) => { panelRefs.current[0] = el; }}
            className="absolute top-[15%] right-[10%] w-[180px] h-[320px] hidden lg:block"
          >
            <div
              style={{
                transform: isTouch
                  ? "none"
                  : `translate3d(${mouseCoords.x * 20}px, ${mouseCoords.y * 20}px, 0)`,
                transition: isTouch ? "none" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              className="w-full h-full"
            >
              <div className="w-full h-full bg-white/[0.012] border border-white/[0.04] backdrop-blur-[2px] rounded-none animate-float-1" />
            </div>
          </div>

          {/* Floating Panel 2: Bottom Left Area */}
          <div
            ref={(el) => { panelRefs.current[1] = el; }}
            className="absolute bottom-[10%] left-[5%] w-[240px] h-[120px] hidden md:block"
          >
            <div
              style={{
                transform: isTouch
                  ? "none"
                  : `translate3d(${mouseCoords.x * -15}px, ${mouseCoords.y * -15}px, 0)`,
                transition: isTouch ? "none" : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              className="w-full h-full"
            >
              <div className="w-full h-full bg-white/[0.008] border border-white/[0.03] backdrop-blur-[1px] rounded-none animate-float-2" />
            </div>
          </div>

          {/* Floating Panel 3: Mid Right Area */}
          <div
            ref={(el) => { panelRefs.current[2] = el; }}
            className="absolute top-[45%] right-[25%] w-[140px] h-[140px] hidden xl:block"
          >
            <div
              style={{
                transform: isTouch
                  ? "none"
                  : `translate3d(${mouseCoords.x * 28}px, ${mouseCoords.y * 28}px, 0)`,
                transition: isTouch ? "none" : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              className="w-full h-full"
            >
              <div className="w-full h-full bg-white/[0.01] border border-white/[0.03] backdrop-blur-[1.5px] rounded-none animate-float-3" />
            </div>
          </div>

          {/* Decorative Glass Shape 4: Behind Text (Left) */}
          <div
            ref={(el) => { panelRefs.current[3] = el; }}
            className="absolute top-[35%] left-[20%] w-[130px] h-[130px] hidden lg:block"
            style={{ zIndex: 5 }}
          >
            <div
              style={{
                transform: isTouch
                  ? "none"
                  : `translate3d(${mouseCoords.x * 12}px, ${mouseCoords.y * 12}px, 0)`,
                transition: isTouch ? "none" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              className="w-full h-full"
            >
              <div className="w-full h-full bg-white/[0.02] border border-white/10 backdrop-blur-[3px] rounded-3xl shadow-lg animate-float-1" style={{ animationDelay: "-2s" }} />
            </div>
          </div>

          {/* Decorative Glass Shape 5: Behind Text (Right) */}
          <div
            ref={(el) => { panelRefs.current[4] = el; }}
            className="absolute bottom-[30%] right-[22%] w-[180px] h-[90px] hidden md:block"
            style={{ zIndex: 5 }}
          >
            <div
              style={{
                transform: isTouch
                  ? "none"
                  : `translate3d(${mouseCoords.x * -8}px, ${mouseCoords.y * -8}px, 0)`,
                transition: isTouch ? "none" : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              className="w-full h-full"
            >
              <div className="w-full h-full bg-white/[0.02] border border-white/10 backdrop-blur-[3px] rounded-[20px] shadow-lg animate-float-2" style={{ animationDelay: "-5s" }} />
            </div>
          </div>
        </div>

        {/* Content Container aligned with site grid */}
        <div 
          ref={contentRef}
          className="max-w-container-max mx-auto w-full px-6 md:px-section-padding-h relative z-20 py-stack-lg flex items-center justify-center min-h-[calc(100vh-80px)] pointer-events-auto"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="flex flex-col items-center justify-center text-center max-w-3xl">
            
            {/* Headline with Fade-in and Mouse Parallax */}
            <div
              style={{
                transform: isTouch
                  ? "none"
                  : `translate3d(${mouseCoords.x * 4}px, ${mouseCoords.y * 4}px, 0)`,
                transition: isTouch ? "none" : "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              <h1 
                ref={headingRef}
                style={{ opacity: 0 }}
                className="font-hanken text-[42px] sm:text-[60px] lg:text-[72px] font-light leading-[1.1] tracking-[-0.02em] text-white mb-stack-md"
              >
                We build AI that changes how enterprises operate.
              </h1>
            </div>

            {/* Paragraph with Fade-in, Staggered delay, and Mouse Parallax */}
            <div
              style={{
                transform: isTouch
                  ? "none"
                  : `translate3d(${mouseCoords.x * 2}px, ${mouseCoords.y * 2}px, 0)`,
                transition: isTouch ? "none" : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              <p 
                ref={paragraphRef}
                style={{ opacity: 0 }}
                className="font-inter text-[16px] sm:text-[18px] leading-[1.6] text-white/80 max-w-xl"
              >
                Bespoke AI solutions engineered for complex business problems. We align bleeding-edge technology with fundamental economic drivers to deliver measurable margin improvement and operational velocity.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
