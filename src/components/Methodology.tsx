"use client";

import React, { useEffect, useRef, useState } from "react";

interface PillarItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Methodology() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const [visibleMobileCards, setVisibleMobileCards] = useState<boolean[]>([false, false, false, false]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          sectionObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            const isMobile = entry.target.getAttribute("data-mobile") === "true";
            if (!isNaN(index)) {
              if (isMobile) {
                setVisibleMobileCards((prev) => {
                  const updated = [...prev];
                  updated[index] = true;
                  return updated;
                });
              } else {
                setVisibleCards((prev) => {
                  const updated = [...prev];
                  updated[index] = true;
                  return updated;
                });
              }
              cardObserver.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    mobileCardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      cardObserver.disconnect();
    };
  }, []);

  // Sync touch/click outside to dismiss active tooltips
  useEffect(() => {
    if (hoveredIndex === null) return;
    const handleOuterClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".methodology-card-wrapper")) {
        setHoveredIndex(null);
      }
    };
    document.addEventListener("click", handleOuterClick);
    return () => document.removeEventListener("click", handleOuterClick);
  }, [hoveredIndex]);

  const pillars: PillarItem[] = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your business objectives, existing workflows, and operational challenges to identify the highest-impact AI opportunities.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 50 L50 30 L85 50 L50 70 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
          <path d="M32.5 40 L67.5 60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
          <path d="M32.5 60 L67.5 40" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
          
          <g className="text-primary discovery-prism">
            <path d="M50 25 L65 32.5 L50 40 L35 32.5 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1.2" />
            <path d="M35 32.5 L50 40 L50 58 L35 50.5 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
            <path d="M50 40 L65 32.5 L65 50.5 L50 58 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2" />
          </g>
          
          <line x1="50" y1="12" x2="50" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
          <circle cx="50" cy="12" r="2" fill="currentColor" />
          <line x1="50" y1="58" x2="50" y2="78" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
          <circle cx="50" cy="78" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Strategy",
      description: "We design a scalable AI roadmap, define system architecture, select appropriate technologies, and establish an implementation plan aligned with your business goals.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="opacity-40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-1.5">
            <path d="M20 65 L50 50 L80 65 L50 80 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" />
            <path d="M20 68 L50 53 L80 68" stroke="currentColor" strokeWidth="1" />
            <line x1="20" y1="65" x2="20" y2="68" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="80" x2="50" y2="83" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="65" x2="80" y2="68" stroke="currentColor" strokeWidth="1" />
          </g>
          
          <g className="opacity-70 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0.5">
            <path d="M20 48 L50 33 L80 48 L50 63 Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" />
            <path d="M20 51 L50 36 L80 51" stroke="currentColor" strokeWidth="1" />
            <line x1="20" y1="48" x2="20" y2="51" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="63" x2="50" y2="66" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="48" x2="80" y2="51" stroke="currentColor" strokeWidth="1" />
          </g>

          <g className="text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5">
            <path d="M20 30 L50 15 L80 30 L50 45 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" />
            <path d="M20 33 L50 18 L80 33" stroke="currentColor" strokeWidth="1.2" />
            <line x1="20" y1="30" x2="20" y2="33" stroke="currentColor" strokeWidth="1.2" />
            <line x1="50" y1="45" x2="50" y2="48" stroke="currentColor" strokeWidth="1.2" />
            <line x1="80" y1="30" x2="80" y2="33" stroke="currentColor" strokeWidth="1.2" />
          </g>

          <line x1="35" y1="38" x2="35" y2="56" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.5" />
          <line x1="65" y1="38" x2="65" y2="56" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.5" />
          <line x1="50" y1="45" x2="50" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.5" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Development",
      description: "We build, integrate, and deploy intelligent solutions that seamlessly connect with your existing tools, processes, and infrastructure.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 65 L45 50 L85 70" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
          
          <g className="opacity-40">
            <path d="M22 55 L32 50 L27 47.5 L17 52.5 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
            <path d="M17 52.5 L27 47.5 L27 53.5 L17 58.5 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
          </g>

          <g className="text-primary development-block">
            <path d="M45 42 L57 36 L47 31.5 L35 37.5 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
            <path d="M35 37.5 L47 31.5 L47 43.5 L35 49.5 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2" />
            <path d="M47 31.5 L57 36 L57 48 L47 53.5 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" />
          </g>
          
          <ellipse cx="47" cy="54" rx="14" ry="7" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
          <line x1="47" y1="12" x2="47" y2="28" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
          <polygon points="47,29 45,26 49,26" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Optimization",
      description: "After deployment, we continuously monitor, refine, and optimize system performance using real-world data to maximize business value.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="opacity-20 opt-ring-1">
            <path d="M50 75 C69.33 75 85 68.28 85 60 C85 51.72 69.33 45 50 45 C30.67 45 15 51.72 15 60 C15 68.28 30.67 75 50 75 Z" stroke="currentColor" strokeWidth="1" />
          </g>
          <g className="opacity-50 opt-ring-2">
            <path d="M50 63 C63.8 63 75 58.07 75 52 C75 45.93 63.8 41 50 41 C36.2 41 25 45.93 25 52 C25 58.07 36.2 63 50 63 Z" stroke="currentColor" strokeWidth="1" />
          </g>
          
          <g className="text-primary">
            <path d="M50 51 C58.28 51 65 47.87 65 44 C65 40.13 58.28 37 50 37 C41.72 37 35 40.13 35 44 C35 47.87 41.72 51 50 51 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" />
            <path d="M50 20 L58 26 L50 32 L42 26 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
            <path d="M42 26 L50 32 L50 46 L42 40 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.2" />
            <path d="M50 32 L58 26 L58 40 L50 46 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" />
          </g>
          
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
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pathSurge {
          0% {
            stroke-dashoffset: 2315;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes floatPrism {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes blockSlide {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(6px, 3px); }
        }
        @keyframes ringPulse {
          0%, 100% { transform: scale(0.96); opacity: 0.15; }
          50% { transform: scale(1.04); opacity: 0.45; }
        }
        
        .discovery-prism {
          transform-origin: 50px 32.5px;
          animation: floatPrism 3s ease-in-out infinite;
        }
        .development-block {
          animation: blockSlide 4.5s ease-in-out infinite;
        }
        .opt-ring-1 {
          transform-origin: 50px 60px;
          animation: ringPulse 3s ease-in-out infinite;
        }
        .opt-ring-2 {
          transform-origin: 50px 52px;
          animation: ringPulse 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .surge-path {
          stroke-dasharray: 180 2135;
          animation: pathSurge 3.5s linear infinite;
          transition: opacity 0.4s ease, stroke-width 0.4s ease, filter 0.4s ease;
        }
      `}} />

      <div className="max-w-container-max mx-auto">
        <h2
          className={`font-hanken text-[40px] sm:text-[56px] md:text-[68px] font-light leading-[1.1] tracking-[-0.02em] text-primary max-w-full lg:max-w-[65%] mb-16 md:mb-24 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          WHAT WE DO?
        </h2>

        <div className="hidden md:block relative w-[640px] h-[1260px] mx-auto">
          <svg
            className="absolute inset-0 w-full h-full text-[var(--color-outline-variant)] pointer-events-none z-0"
            viewBox="0 0 640 1260"
            fill="none"
          >
            <path
              d="M 120 120 L 480 120 A 40 40 0 0 1 520 160 L 520 590 A 40 40 0 0 1 480 630 L 160 630 A 40 40 0 0 0 120 670 L 120 930 A 40 40 0 0 0 160 970 L 480 970 A 40 40 0 0 1 520 1010 L 520 1140"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="5 5"
              className="opacity-25"
            />
            <path
              d="M 120 120 L 480 120 A 40 40 0 0 1 520 160 L 520 590 A 40 40 0 0 1 480 630 L 160 630 A 40 40 0 0 0 120 670 L 120 930 A 40 40 0 0 0 160 970 L 480 970 A 40 40 0 0 1 520 1010 L 520 1140"
              stroke="currentColor"
              strokeLinecap="round"
              className={`surge-path ${
                hoveredIndex !== null
                  ? "opacity-90 stroke-[3.5px] [filter:drop-shadow(0_0_5px_rgba(0,0,0,0.18))]"
                  : "opacity-15 stroke-[1.5px]"
              }`}
            />
          </svg>

          {pillars.map((pillar, index) => {
            const isLeft = index % 2 === 0;
            const isHovered = hoveredIndex === index;
            const xPos = isLeft ? "left-0" : "left-[400px]";
            const yPos = [
              "top-[0px]",
              "top-[340px]",
              "top-[680px]",
              "top-[1020px]"
            ][index];

            return (
              <div
                key={pillar.number}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-index={index}
                data-mobile="false"
                style={{
                  transitionDelay: visibleCards[index] ? `${index * 150}ms` : "0ms",
                }}
                className={`absolute ${xPos} ${yPos} w-[240px] h-[240px] methodology-card-wrapper transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
                `}
              >
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative w-full h-full flex flex-col justify-between p-8 bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)]/30 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06),_0_2px_8px_rgba(0,0,0,0.02)] cursor-pointer z-10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[var(--color-surface-container-low)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-[20px]" />
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] rounded-t-[20px] z-10" />

                  <div className="flex justify-between items-start relative z-10">
                    <span className="font-mono text-[14px] text-outline font-semibold tracking-wider">
                      {pillar.number}
                    </span>
                    <div className="text-on-surface-variant group-hover:text-primary transition-colors duration-300">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="font-hanken text-[22px] font-semibold text-primary mb-2 leading-tight tracking-[0.01em] relative z-10">
                    {pillar.title}
                  </h3>
                </div>

                <div
                  className={`absolute z-30 p-6 rounded-[20px] bg-white border border-[var(--color-outline-variant)]/20 shadow-[0_12px_32px_rgba(0,0,0,0.06),_0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] top-1/2 w-[320px] pointer-events-none
                    ${isLeft ? "left-[280px]" : "right-[280px]"}
                    ${isHovered
                      ? "opacity-100 translate-y-[-50%]"
                      : "opacity-0 translate-y-[-40%]"
                    }
                  `}
                >
                  <p className="font-inter text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] text-on-surface-variant font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="md:hidden relative flex flex-col items-center gap-[140px] py-10 px-4">
          <div className="absolute top-[80px] bottom-[160px] left-1/2 w-[2px] bg-[var(--color-outline-variant)] opacity-20 -translate-x-1/2 z-0" />

          {pillars.map((pillar, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={pillar.number}
                ref={(el) => {
                  mobileCardRefs.current[index] = el;
                }}
                data-index={index}
                data-mobile="true"
                style={{
                  transitionDelay: visibleMobileCards[index] ? `${index * 150}ms` : "0ms",
                }}
                className={`relative z-10 w-[240px] h-[240px] methodology-card-wrapper transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${visibleMobileCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
                `}
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setHoveredIndex(isHovered ? null : index);
                  }}
                  className="group relative w-full h-full flex flex-col justify-between p-8 bg-[var(--color-surface-container-lowest)] border border-[var(--color-outline-variant)]/30 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95 cursor-pointer z-10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[var(--color-surface-container-low)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-[20px]" />
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] rounded-t-[20px] z-10" />

                  <div className="flex justify-between items-start relative z-10">
                    <span className="font-mono text-[14px] text-outline font-semibold tracking-wider">
                      {pillar.number}
                    </span>
                    <div className="text-on-surface-variant group-hover:text-primary transition-colors duration-300">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="font-hanken text-[22px] font-semibold text-primary mb-2 leading-tight tracking-[0.01em] relative z-10">
                    {pillar.title}
                  </h3>
                </div>

                <div
                  className={`absolute z-30 p-6 rounded-[20px] bg-white border border-[var(--color-outline-variant)]/20 shadow-[0_12px_32px_rgba(0,0,0,0.06),_0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] top-[250px] left-1/2 w-[280px] sm:w-[300px] -translate-x-1/2 pointer-events-none
                    ${isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                    }
                  `}
                >
                  <p className="font-inter text-[14px] leading-[22px] text-on-surface-variant font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

