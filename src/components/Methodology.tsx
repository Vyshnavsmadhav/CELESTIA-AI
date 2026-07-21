"use client";

import React, { useEffect, useRef, useState } from "react";

const pillars = [
  {
    number: "",
    title: "WE TACKLE HIGH IMPACT PROBLEMS OF B2B BUSINESSES..",
    description: "We help our clients solve some of their most pressing business challenges across a broad range of topics ranging from Commercial Excellence to Procurement, Operational Excellence and Human Resources - in doing so, we focus on margin improvement.",
    image: "/images/methodology/business_problems.png"
  },
  {
    number: "",
    title: "BY BUILDING CUSTOM TOOLS..",
    description: "We develop custom AI tools and AI agents from first principles, to match your specific workflows and design requirements. We do not force-fit existing solutions, instead we design your visual interface and underlying logic for your use-case.",
    image: "/images/methodology/custom_ai_tools.png"
  },
  {
    number: "",
    title: "THAT WE JOINTLY DESIGN AND DEPLOY, TO CAPTURE IMPACT..",
    description: "Our team owns your entire tool journey, starting from structuring your problem statement to designing the solution, deploying it within your existing architecture and demonstrating impact. We handhold your users to ensure full adoption and value capture.",
    image: "/images/methodology/joint_deployment.png"
  },
  {
    number: "",
    title: "WHILE ENSURING RISK-FREE COMMERCIALS FOR YOU..",
    description: "Our operating model is fully satisfaction-based. This means that we only invoice you after complete delivery of project and only if it solves your specific business problem. This ensures that you have a risk-free commercial arrangement.",
    image: "/images/methodology/risk_free.png"
  },
];

type Pillar = {
  number: string;
  title: string;
  description: string;
  image: string;
};

function MethodologyStep({ pillar }: { pillar: Pillar }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Trigger reveal when 25% of the section is visible
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Subtle parallax relative to the window center (Max movement ~12px)
    if (!isVisible) return; // Only parallax after reveal
    const x = (e.clientX / window.innerWidth - 0.5) * 24; 
    const y = (e.clientY / window.innerHeight - 0.5) * 24;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[60vh] flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 px-4 md:px-12 w-full py-16 overflow-hidden"
    >
      {/* Left Image Parallax Wrapper */}
      <div 
        className="hidden lg:block w-1/4 max-w-[320px]"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          transition: 'transform 400ms cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      >
        {/* Left Image Reveal Animation */}
        <div 
          className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl"
          style={{
             transform: isVisible ? `translate3d(0, 0, 0)` : `translate3d(-120%, 0, 0)`,
             opacity: isVisible ? 1 : 0,
             transition: "all 1000ms cubic-bezier(0.22, 1, 0.36, 1)"
          }}
        >
          <img src={pillar.image} alt="" className="w-full h-full object-cover scale-x-[-1]" />
        </div>
      </div>

      {/* Center Text Reveal */}
      <div 
        ref={textRef}
        className="flex flex-col items-center justify-center w-full lg:w-1/2"
      >
        {pillar.number && (
          <span className="font-mono text-xl md:text-2xl text-primary/40 font-semibold tracking-[0.2em] mb-4 uppercase transition-all duration-1000 delay-100"
            style={{
              transform: isVisible ? "translate3d(0,0,0)" : "translate3d(0, 30px, 0)",
              opacity: isVisible ? 1 : 0,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
            }}>
            Phase {pillar.number}
          </span>
        )}
        <h2 className="font-hanken text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[1.2] tracking-tight text-primary drop-shadow-sm mb-6 mix-blend-multiply bg-white/40 px-6 py-4 rounded-2xl backdrop-blur-md w-full text-center transition-all duration-1000 delay-200"
            style={{
              transform: isVisible ? "translate3d(0,0,0)" : "translate3d(0, 30px, 0)",
              opacity: isVisible ? 1 : 0,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
            }}>
          {pillar.title}
        </h2>
        <p className="font-inter text-[16px] md:text-[18px] leading-relaxed text-on-surface-variant w-full font-light bg-white/60 p-6 rounded-xl backdrop-blur-sm text-center transition-all duration-1000 delay-300"
            style={{
              transform: isVisible ? "translate3d(0,0,0)" : "translate3d(0, 30px, 0)",
              opacity: isVisible ? 1 : 0,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
            }}>
          {pillar.description}
        </p>
      </div>

      {/* Right Image Parallax Wrapper (Moves opposite direction) */}
      <div 
        className="hidden lg:block w-1/4 max-w-[320px]"
        style={{
          transform: `translate3d(${mousePos.x * -1}px, ${mousePos.y * -1}px, 0)`,
          transition: 'transform 400ms cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      >
        {/* Right Image Reveal Animation */}
        <div 
          className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl"
          style={{
             transform: isVisible ? `translate3d(0, 0, 0)` : `translate3d(120%, 0, 0)`,
             opacity: isVisible ? 1 : 0,
             transition: "all 1000ms cubic-bezier(0.22, 1, 0.36, 1)"
          }}
        >
          <img src={pillar.image} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default function Methodology() {
  return (
    <section 
      className="relative bg-surface flex flex-col items-center py-24 overflow-hidden border-y border-outline/10"
      id="methodology"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Intro Text */}
        <div className="flex flex-col items-center justify-center text-center px-4 mb-24">
          <h2 className="font-hanken text-[48px] sm:text-[64px] md:text-[96px] font-light leading-none tracking-tight text-primary uppercase">
            WHAT WE DO
          </h2>
        </div>

        {pillars.map((pillar, i) => (
          <MethodologyStep key={i} pillar={pillar} />
        ))}
      </div>
    </section>
  );
}
