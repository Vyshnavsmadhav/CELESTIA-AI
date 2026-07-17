"use client";

import React from "react";

interface VintageStoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  illustration: React.ReactNode;
}

export default function VintageStoryCard({
  icon,
  title,
  description,
  illustration,
}: VintageStoryCardProps) {
  return (
    <div
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        animationFillMode: "both",
      }}
      className="relative w-full max-w-[840px] aspect-[16/10] p-[10px] group hover:-translate-y-2 hover:scale-[1.01] transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] animate-vintage-fade-up"
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

      {/* Main Grid Layout (40% Left / 60% Right) - Sits on top of the deckled background */}
      <div className="relative z-10 w-full h-full flex p-6 sm:p-7 md:p-8">
        
        {/* Left Column (42% Width) */}
        <div className="w-[42%] h-full flex flex-col justify-between pr-4 select-none relative">
          
          {/* Top Row: Small Icon */}
          <div className="text-primary/70 w-5 h-5 flex items-center justify-start scale-110">
            {icon}
          </div>

          {/* Middle: Title, Divider, Description */}
          <div className="my-auto flex flex-col justify-center">
            <h3 
              className="text-primary font-light text-[20px] sm:text-[23px] md:text-[25px] leading-[1.2] mb-3 tracking-[0.12em] uppercase"
              style={{
                fontFamily: "Georgia, serif"
              }}
            >
              {title}
            </h3>
            
            {/* Thin Distressed Divider Line */}
            <div className="w-16 h-[1px] bg-primary/25 mb-4" />
            
            <p className="text-on-surface-variant text-[11.5px] sm:text-[12.5px] leading-[1.65] max-w-full font-light line-clamp-4 pr-1">
              {description}
            </p>
          </div>

          {/* Bottom Brand Label */}
          <div>
            <span className="font-mono text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-on-surface-variant/40 leading-none">
              CELESTIA AI
            </span>
          </div>
        </div>

        {/* Right Column (58% Width) */}
        <div className="w-[58%] h-full relative overflow-hidden select-none rounded-[4px]">
          {/* Faded Monochrome Illustration */}
          <div className="absolute inset-0 flex items-center justify-end p-1 opacity-[0.85] group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="w-full h-full max-w-[95%] max-h-[95%] flex items-center justify-center filter contrast-[1.05] brightness-[0.98]">
              {illustration}
            </div>
          </div>

          {/* Soft mask/fade overlay where right meets left */}
          <div 
            className="absolute inset-y-0 left-0 w-[40%] pointer-events-none"
            style={{
              background: "linear-gradient(to right, var(--color-surface-container) 0%, rgba(234, 240, 234, 0.95) 25%, rgba(234, 240, 234, 0.6) 65%, transparent 100%)"
            }}
          />
        </div>
      </div>
    </div>
  );
}

