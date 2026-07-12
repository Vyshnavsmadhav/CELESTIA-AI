"use client";

import React, { useEffect, useRef, useState } from "react";

interface PillarItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Methodology() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const pillars: PillarItem[] = [
    {
      number: "01",
      title: "Diagnostics & Alignment",
      description: "We initiate each engagement with a deep-dive analysis of your core financial levers and operational constraints. Before writing a single line of code, we map out the business case to align technical development with P&L performance.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Isometric grid lines */}
          <path d="M15 50 L50 30 L85 50 L50 70 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
          <path d="M32.5 40 L67.5 60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
          <path d="M32.5 60 L67.5 40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
          
          {/* Central isometric diamond / prism */}
          <g className="text-primary">
            {/* Top Face */}
            <path d="M50 25 L65 32.5 L50 40 L35 32.5 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.2" />
            {/* Left Face */}
            <path d="M35 32.5 L50 40 L50 58 L35 50.5 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
            {/* Right Face */}
            <path d="M50 40 L65 32.5 L65 50.5 L50 58 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2" />
          </g>
          
          {/* Projections / Alignment dots */}
          <line x1="50" y1="12" x2="50" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
          <circle cx="50" cy="12" r="2" fill="currentColor" />
          <line x1="50" y1="58" x2="50" y2="78" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
          <circle cx="50" cy="78" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Architectural Engineering",
      description: "Our solutions are custom-built to integrate natively with legacy systems. We design robust pipelines, high-throughput microservices, and dedicated LLM agent orchestration networks optimized for latency, security, and scalability.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stacked isometric layers */}
          {/* Bottom Layer */}
          <g className="opacity-40">
            <path d="M20 65 L50 50 L80 65 L50 80 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" />
            <path d="M20 68 L50 53 L80 68" stroke="currentColor" strokeWidth="1" />
            <line x1="20" y1="65" x2="20" y2="68" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="80" x2="50" y2="83" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="65" x2="80" y2="68" stroke="currentColor" strokeWidth="1" />
          </g>
          
          {/* Middle Layer */}
          <g className="opacity-70">
            <path d="M20 48 L50 33 L80 48 L50 63 Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" />
            <path d="M20 51 L50 36 L80 51" stroke="currentColor" strokeWidth="1" />
            <line x1="20" y1="48" x2="20" y2="51" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="63" x2="50" y2="66" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="48" x2="80" y2="51" stroke="currentColor" strokeWidth="1" />
          </g>

          {/* Top Layer */}
          <g className="text-primary">
            <path d="M20 30 L50 15 L80 30 L50 45 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" />
            <path d="M20 33 L50 18 L80 33" stroke="currentColor" strokeWidth="1.2" />
            <line x1="20" y1="30" x2="20" y2="33" stroke="currentColor" strokeWidth="1.2" />
            <line x1="50" y1="45" x2="50" y2="48" stroke="currentColor" strokeWidth="1.2" />
            <line x1="80" y1="30" x2="80" y2="33" stroke="currentColor" strokeWidth="1.2" />
          </g>

          {/* Vertical Connecting Lines */}
          <line x1="35" y1="38" x2="35" y2="56" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.5" />
          <line x1="65" y1="38" x2="65" y2="56" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.5" />
          <line x1="50" y1="45" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.5" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Integration & Delivery",
      description: "We orchestrate seamless transition phases by deploying AI tools incrementally. Our hand-in-hand user enablement ensures zero downtime and rapid client adoption, embedding automated intelligence cleanly into daily workflows.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Isometric Pipeline / Track */}
          <path d="M15 65 L45 50 L85 70" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
          
          {/* Moving blocks on track */}
          {/* Block 1 (Left, low opacity) */}
          <g className="opacity-40">
            <path d="M22 55 L32 50 L27 47.5 L17 52.5 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
            <path d="M17 52.5 L27 47.5 L27 53.5 L17 58.5 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
          </g>

          {/* Block 2 (Center, fully integrated) */}
          <g className="text-primary">
            {/* Top */}
            <path d="M45 42 L57 36 L47 31.5 L35 37.5 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
            {/* Left */}
            <path d="M35 37.5 L47 31.5 L47 43.5 L35 49.5 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2" />
            {/* Right */}
            <path d="M47 31.5 L57 36 L57 48 L47 53.5 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" />
          </g>
          
          {/* Target marker (dashed rings) */}
          <ellipse cx="47" cy="54" rx="14" ry="7" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
          
          {/* Top connection pointer */}
          <line x1="47" y1="12" x2="47" y2="28" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
          <polygon points="47,29 45,26 49,26" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Velocity & Optimization",
      description: "Post-deployment, our feedback loops continually refine agent performance and response accuracy. We analyze system telemetry and live feedback in real time to capture new margin gains and accelerate process velocity.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Concentric growing rings */}
          <g className="opacity-20">
            <path d="M50 75 C69.33 75 85 68.28 85 60 C85 51.72 69.33 45 50 45 C30.67 45 15 51.72 15 60 C15 68.28 30.67 75 50 75 Z" stroke="currentColor" strokeWidth="1" />
          </g>
          <g className="opacity-50">
            <path d="M50 63 C63.8 63 75 58.07 75 52 C75 45.93 63.8 41 50 41 C36.2 41 25 45.93 25 52 C25 58.07 36.2 63 50 63 Z" stroke="currentColor" strokeWidth="1" />
          </g>
          
          {/* Central rising structure */}
          <g className="text-primary">
            {/* Base */}
            <path d="M50 51 C58.28 51 65 47.87 65 44 C65 40.13 58.28 37 50 37 C41.72 37 35 40.13 35 44 C35 47.87 41.72 51 50 51 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" />
            
            {/* Core rising prism */}
            <path d="M50 20 L58 26 L50 32 L42 26 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
            <path d="M42 26 L50 32 L50 46 L42 40 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2" />
            <path d="M50 32 L58 26 L58 40 L50 46 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" />
          </g>
          
          {/* Rising directional arrow indicators */}
          <path d="M50 10 L47 14 L53 14 Z" fill="currentColor" />
          <line x1="50" y1="14" x2="50" y2="18" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-surface py-[120px] md:py-[160px] px-6 md:px-section-padding-h border-t border-b border-outline/10 overflow-hidden"
      id="methodology"
    >
      <div className="max-w-container-max mx-auto">
        {/* Large, left-aligned headline with fade-up */}
        <h2
          className={`font-hanken text-[40px] sm:text-[56px] md:text-[68px] font-light leading-[1.1] tracking-[-0.02em] text-primary max-w-full lg:max-w-[65%] mb-20 md:mb-28 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Our Operational Blueprint: Sequenced principles engineered to navigate enterprise complexity and secure margin transformation.
        </h2>

        {/* Responsive Content Grid with subtle vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
              className={`group relative flex flex-col pt-10 pb-12 px-6 lg:px-10 bg-transparent transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                /* Bottom border for mobile/tablet */
                border-b border-outline/10 last:border-b-0
                /* Desktop configuration: Vertical divider on the right of all but the last item, no bottom border */
                lg:border-b-0 lg:border-r lg:border-outline/10 lg:last:border-r-0
                /* Tablet configuration: Right divider for odd items, bottom divider for first two items */
                md:even:border-l md:even:border-outline/10 md:even:border-b md:[&:nth-child(3)]:border-b-0 md:[&:nth-child(4)]:border-b-0 md:even:border-r-0 lg:even:border-l-0 lg:even:border-r
              `}
            >
              {/* Thin accent line at the top that expands on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />

              {/* Number and Icon Alignment */}
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-[14px] text-outline font-semibold tracking-wider">
                  {pillar.number}
                </span>
                <div className="text-on-surface-variant group-hover:text-primary transition-colors duration-300">
                  {pillar.icon}
                </div>
              </div>

              {/* Title with Strong Hierarchy */}
              <h3 className="font-hanken text-[22px] md:text-[24px] font-semibold text-primary mb-4 leading-tight tracking-[0.01em]">
                {pillar.title}
              </h3>

              {/* Description Paragraph (3-5 lines) */}
              <p className="font-inter text-[15px] leading-[26px] text-on-surface-variant font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
