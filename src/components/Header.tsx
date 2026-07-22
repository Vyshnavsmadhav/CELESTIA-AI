"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
  hideUntilScroll?: boolean;
}

export default function Header({ hideUntilScroll = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(!hideUntilScroll);

  useEffect(() => {
    if (!hideUntilScroll) {
      return;
    }

    const handleScroll = () => {
      // Show navbar if scrolled past 80% of viewport height
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hideUntilScroll]);

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.location.pathname === "/about") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-outline/20 shadow-[0_20px_50px_rgba(0,0,0,0.03)] bg-surface/80 backdrop-blur-xl ${
      isScrolled 
        ? "translate-y-0 opacity-100" 
        : "-translate-y-full opacity-0 pointer-events-none"
    }`}>
      <div className="flex justify-between items-center w-full px-6 md:px-section-padding-h py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <span className="font-hanken text-[32px] font-light tracking-tighter text-primary">
            <Link href="/">Celestia AI</Link>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link
            className="font-inter text-[12px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary transition-all duration-300 px-3 py-2 rounded-none scale-[0.98] active:scale-95"
            href="/"
          >
            HOME
          </Link>
          <Link
            onClick={handleAboutClick}
            className="font-inter text-[12px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary transition-all duration-300 px-3 py-2 rounded-none scale-[0.98] active:scale-95"
            href="/about"
          >
            ABOUT
          </Link>
          <Link
            className="font-inter text-[12px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary transition-all duration-300 px-3 py-2 rounded-none scale-[0.98] active:scale-95"
            href="/#problems"
          >
            OUR APPROACH
          </Link>
          <Link
            onClick={handleAboutClick}
            className="font-inter text-[12px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary transition-all duration-300 px-3 py-2 rounded-none scale-[0.98] active:scale-95"
            href="/about"
          >
            ABOUT US
          </Link>
        </nav>

        {/* Schedule Call Action */}
        <div className="hidden md:block">
          <Link href="/contact" className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-3 rounded-none font-inter text-[12px] font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer">
            LET&apos;S CONNECT
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
            <Link
              onClick={() => setIsOpen(false)}
              className="font-inter text-[14px] font-medium uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary py-2"
              href="/"
            >
              HOME
            </Link>
            <Link
              onClick={(e) => {
                if (typeof window !== "undefined" && window.location.pathname === "/about") {
                  handleAboutClick(e);
                } else {
                  setIsOpen(false);
                }
              }}
              className="font-inter text-[14px] font-medium uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary py-2"
              href="/about"
            >
              ABOUT
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="font-inter text-[14px] font-medium uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary py-2"
              href="/#problems"
            >
              OUR APPROACH
            </Link>
            <Link
              onClick={(e) => {
                if (typeof window !== "undefined" && window.location.pathname === "/about") {
                  handleAboutClick(e);
                } else {
                  setIsOpen(false);
                }
              }}
              className="font-inter text-[14px] font-medium uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary py-2"
              href="/about"
            >
              ABOUT US
            </Link>
          </nav>
          <Link
            onClick={() => setIsOpen(false)}
            href="/contact"
            className="w-full bg-primary text-on-primary py-4 rounded-none font-inter text-[12px] font-semibold uppercase tracking-widest hover:bg-inverse-surface transition-colors cursor-pointer text-center"
          >
            LET&apos;S CONNECT
          </Link>
        </div>
      )}
    </header>
  );
}
