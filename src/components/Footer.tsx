import React from "react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-stack-lg pb-stack-md border-t border-outline/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-6 md:px-section-padding-h max-w-container-max mx-auto">
        <div className="md:col-span-4 flex flex-col justify-between">
          <span className="font-hanken text-[32px] md:text-[48px] uppercase tracking-tighter text-primary mb-8 md:mb-0">
            ARCHITECT.AI
          </span>
        </div>
        <div className="md:col-span-8 flex flex-col justify-between">
          <nav className="flex flex-wrap gap-x-8 gap-y-4 mb-stack-lg md:justify-end">
            <a
              className="font-inter text-[16px] leading-[28px] text-on-surface-variant hover:opacity-70 transition-opacity cursor-pointer uppercase"
              href="#"
            >
              Strategy
            </a>
            <a
              className="font-inter text-[16px] leading-[28px] text-on-surface-variant hover:opacity-70 transition-opacity cursor-pointer uppercase"
              href="#"
            >
              Operations
            </a>
            <a
              className="font-inter text-[16px] leading-[28px] text-on-surface-variant hover:opacity-70 transition-opacity cursor-pointer uppercase"
              href="#"
            >
              Leadership
            </a>
            <a
              className="font-inter text-[16px] leading-[28px] text-on-surface-variant hover:opacity-70 transition-opacity cursor-pointer uppercase"
              href="#"
            >
              Contact
            </a>
          </nav>
          <div className="flex justify-start md:justify-end">
            <span className="font-inter text-[14px] leading-[20px] text-on-surface-variant text-sm">
              © 2026 ARCHITECT AI ADVISORY. ALL RIGHTS RESERVED.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
