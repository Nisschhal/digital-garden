"use client";
/**
 * Sliding-pill tab indicator — tracks the active tab button's bounding box
 * inside its container so a background pill can spring smoothly from one
 * tab to the next, instead of just swapping a className. Adapted from the
 * KokonutUI SmoothTab measurement pattern.
 */
import { useLayoutEffect, useRef, useState } from "react";

export default function useTabIndicator(activeKey: string) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [box, setBox] = useState({ width: 0, left: 0, height: 0, top: 0 });

  const registerRef = (key: string) => (el: HTMLElement | null) => {
    if (el) buttonRefs.current.set(key, el);
    else buttonRefs.current.delete(key);
  };

  useLayoutEffect(() => {
    const update = () => {
      const el = buttonRefs.current.get(activeKey);
      const container = containerRef.current;
      if (!el || !container) return;
      const elRect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setBox({
        width: elRect.width,
        left: elRect.left - containerRect.left,
        height: elRect.height,
        top: elRect.top - containerRect.top,
      });
    };
    const raf = requestAnimationFrame(update);
    window.addEventListener("resize", update);

    // Watching only `activeKey` misses cases where the SAME active button's
    // own content changes width — a language switch producing a longer
    // Nepali label, or a webfont finishing its swap. A ResizeObserver on the
    // active button (and container) catches those automatically instead of
    // leaving the pill sized for whatever text it first measured.
    let ro: ResizeObserver | null = null;
    const el = buttonRefs.current.get(activeKey);
    if (el && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(update);
      ro.observe(el);
      if (containerRef.current) ro.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
      ro?.disconnect();
    };
  }, [activeKey]);

  return { containerRef, registerRef, box };
}
