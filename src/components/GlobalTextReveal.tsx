"use client";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function GlobalTextReveal() {
  useEffect(() => {
    // A small timeout ensures all DOM nodes are rendered before batching
    const ctx = gsap.context(() => {
      setTimeout(() => {
        ScrollTrigger.batch(".reveal-text", {
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 1,
              ease: "power3.out",
              overwrite: true,
            });
          },
          once: true,
        });
      }, 100);
    });
    return () => ctx.revert();
  }, []);

  return null;
}
