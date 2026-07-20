"use client";

import React from "react";

interface VintageStoryCardProps {
  title: string;
  description: React.ReactNode;
}

export default function VintageStoryCard({
  title,
  description,
}: VintageStoryCardProps) {
  return (
    <div
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        animationFillMode: "both",
      }}
      className="relative w-full max-w-[840px] aspect-[16/9] p-[10px] group hover:-translate-y-2 hover:scale-[1.01] transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] animate-vintage-fade-up"
    >
      {/* SVG Displacement Filter for Deckled Edge */}
      <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}>
        <defs>
          <filter id="deckle-filter">
            {/* Rough turbulence noise */}
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            {/* Displace the graphic using the noise */}
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* 1. Deckled Paper Background (Distorted via SVG filter) */}
      <div 
        className="absolute inset-0 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]/60 shadow-[0_16px_36px_rgba(40,36,30,0.12),_0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden" 
        style={{
          filter: "url(#deckle-filter)",
        }}
      >
        {/* Paper Grain Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Soft Aged Paper Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.08]" 
          style={{
            background: "radial-gradient(circle, transparent 60%, var(--color-outline) 100%)"
          }}
        />

        {/* Vintage Inner Border Line */}
        <div className="absolute inset-[10px] pointer-events-none border border-[var(--color-outline-variant)]/30" />
      </div>

      {/* Main Layout - Sits on top of the deckled background */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 sm:p-9 md:p-10">
        
        {/* Spacer to push content down and keep layout consistent */}
        <div className="h-2" />

        {/* Middle: Title, Divider, Description */}
        <div className="my-auto flex flex-col justify-center max-w-2xl mx-auto text-center items-center">
          {title && (
            <>
              <h3 
                className="text-primary font-light text-[22px] sm:text-[25px] md:text-[28px] leading-[1.2] mb-3 tracking-[0.12em] uppercase"
                style={{
                  fontFamily: "Georgia, serif"
                }}
              >
                {title}
              </h3>
              
              {/* Thin Distressed Divider Line */}
              <div className="w-16 h-[1px] bg-primary/25 mb-4" />
            </>
          )}
          
          <div className="text-on-surface-variant text-[13px] sm:text-[14px] leading-[1.75] font-light max-w-xl text-left flex flex-col gap-4">
            {description}
          </div>
        </div>

        {/* Bottom Brand Label */}
        <div className="flex justify-center items-center w-full select-none">
          <span className="font-mono text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-on-surface-variant/40 leading-none">
            CELESTIA AI
          </span>
        </div>
      </div>
    </div>
  );
}
