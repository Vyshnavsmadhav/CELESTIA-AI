"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-surface/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-outline/20 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
      <div className="flex justify-between items-center w-full px-6 md:px-section-padding-h py-6 max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-primary"
          >
            grain
          </span>
          <span className="font-hanken text-[32px] font-light tracking-tighter text-primary">
            <Link href="/">ARCHITECT.AI</Link>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a
            className="font-inter text-[12px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary transition-all duration-300 px-3 py-2 rounded-none scale-[0.98] active:scale-95"
            href="/#problems"
          >
            Strategy
          </a>
          <a
            className="font-inter text-[12px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary transition-all duration-300 px-3 py-2 rounded-none scale-[0.98] active:scale-95"
            href="/#philosophy"
          >
            Philosophy
          </a>
          <a
            className="font-inter text-[12px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary transition-all duration-300 px-3 py-2 rounded-none scale-[0.98] active:scale-95"
            href="/#problems"
          >
            Methodology
          </a>
        </nav>

        {/* Schedule Call Action */}
        <div className="hidden md:block">
          <Link href="/contact" className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-3 rounded-none font-inter text-[12px] font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer">
            LET'S CONNECT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-outline/20 bg-surface px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            <a
              onClick={() => setIsOpen(false)}
              className="font-inter text-[14px] font-medium uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary py-2"
              href="/#problems"
            >
              Strategy
            </a>
            <a
              onClick={() => setIsOpen(false)}
              className="font-inter text-[14px] font-medium uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary py-2"
              href="/#philosophy"
            >
              Philosophy
            </a>
            <a
              onClick={() => setIsOpen(false)}
              className="font-inter text-[14px] font-medium uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary py-2"
              href="/#problems"
            >
              Methodology
            </a>
          </nav>
          <Link
            onClick={() => setIsOpen(false)}
            href="/contact"
            className="w-full bg-primary text-on-primary py-4 rounded-none font-inter text-[12px] font-semibold uppercase tracking-widest hover:bg-inverse-surface transition-colors cursor-pointer text-center"
          >
            LET'S CONNECT
          </Link>
        </div>
      )}
    </header>
  );
}
