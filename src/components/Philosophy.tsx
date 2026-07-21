import React from "react";
import Link from "next/link";

export default function Philosophy() {
  const cursorSvg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40">
      <text y="25" x="20" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="white">now</text>
    </svg>
  `.trim());

  return (
    <section className="bg-surface-container-highest flex justify-center" id="philosophy">
      <Link 
        href="/contact"
        className="bg-black text-white w-full py-2 md:py-4 border-y border-gray-800 shadow-2xl overflow-hidden flex items-center"
        style={{ cursor: `url('data:image/svg+xml;utf8,${cursorSvg}') 40 20, pointer` }}
      >
        <div className="flex whitespace-nowrap animate-marquee-horizontal pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <h2 className="font-hanken text-[80px] sm:text-[120px] md:text-[180px] lg:text-[240px] font-bold tracking-tighter leading-none pr-8 md:pr-16">
                GET IN TOUCH NOW
              </h2>
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
}
