"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { ensureGsap } from "@/lib/gsapSetup";

/**
 * Buttery momentum scroll (Lenis) wired into GSAP's ticker so
 * ScrollTrigger-driven animations stay perfectly in sync with it.
 * Fully skipped when the user prefers reduced motion.
 */
export default function useSmoothScroll(reduced: boolean) {
  useEffect(() => {
    if (reduced) return;
    const { gsap, ScrollTrigger } = ensureGsap();

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      // Lenis hijacks wheel events for the whole document by default, which
      // starves nested scrollable regions (the AI chat thread, the hero
      // dashboard's tab stage) of their own native scroll — the page would
      // scroll right through them. Anything marked data-lenis-prevent (or a
      // scrollable ancestor of one) is left alone to scroll normally.
      prevent: (node: Element) =>
        node instanceof HTMLElement && (node.hasAttribute("data-lenis-prevent") || !!node.closest("[data-lenis-prevent]")),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [reduced]);
}
