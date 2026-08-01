"use client";
/**
 * TracingBeam — a wiggling scroll-progress line with a glowing gradient dot
 * that travels down it as you read. Adapted from Aceternity UI (MIT): the
 * mechanics are unchanged, the gradient and dot colors are retoned from the
 * generic cyan/purple/violet set to Digital Garden's terrace/marigold pair.
 */
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Only starts advancing once the cards have scrolled to the vertical
    // center of the viewport — roughly "50% into view" — rather than
    // lighting up the instant the top edge appears at the bottom of the screen.
    offset: ["start center", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  // A one-shot measurement missed the mobile layout: cards go from a 2-column
  // grid to a single stacked column under the md breakpoint, which is much
  // taller, so a height captured once at mount (or at a wider viewport) left
  // the beam and dot stopping short of the last card. A ResizeObserver keeps
  // svgHeight in sync with the actual rendered height at any breakpoint.
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const update = () => setSvgHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      <div className="absolute top-3 -left-4 md:-left-20">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(20, 35, 25, 0.18) 0px 3px 8px",
          }}
          className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-mist-line shadow-sm"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "var(--paper-raised)" : "var(--terrace)",
              borderColor: scrollYProgress.get() > 0 ? "var(--mist-line)" : "var(--terrace-deep)",
            }}
            className="h-2 w-2 rounded-full border border-mist-line bg-paper-raised"
          />
        </motion.div>
        <div className="relative ml-4">
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight} // Set the SVG height
            className="block"
            aria-hidden="true"
          >
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="var(--ink-faint)"
              strokeOpacity="0.18"
              transition={{
                duration: 10,
              }}
            ></motion.path>
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="url(#dg-tracing-gradient)"
              strokeWidth="1.25"
              className="motion-reduce:hidden"
              transition={{
                duration: 10,
              }}
            ></motion.path>
            <defs>
              <motion.linearGradient
                id="dg-tracing-gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1} // set y1 for gradient
                y2={y2} // set y2 for gradient
              >
                <stop stopColor="var(--terrace-bright)" stopOpacity="0"></stop>
                <stop stopColor="var(--terrace-bright)"></stop>
                <stop offset="0.325" stopColor="var(--marigold)"></stop>
                <stop offset="1" stopColor="var(--terrace-deep)" stopOpacity="0"></stop>
              </motion.linearGradient>
            </defs>
          </svg>

          {/* Travels down beside the path, tracking the same y1 value that
              drives the gradient — so it always sits right at the bright
              leading edge of the beam instead of parked at the top. */}
          <motion.div
            className="motion-reduce:hidden pointer-events-none absolute left-[26px] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-terrace shadow-[0_0_10px_2px_rgba(47,104,68,0.55)]"
            style={{ top: y1 }}
          />
        </div>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
