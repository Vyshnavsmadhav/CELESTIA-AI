import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Register ScrollTrigger globally on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Lenis smooth scroll
  const lenis = new Lenis();

  // Connect Lenis to ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);

  // Synchronize GSAP ticker to run Lenis updates
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Turn off lag smoothing for tighter animation synchronization
  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger };
