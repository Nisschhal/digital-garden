"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Retoned + downsized from the original Aceternity "Background Boxes":
 * 150x100 (15,000 nodes) on a required dark slate bg + rainbow hover colors
 * dropped to 40x45 (~1,800 nodes) with brand-hue hover colors and hairline
 * borders that read on Digital Garden's light paper/mist gradient instead.
 * Kept intentionally oversized relative to its container (then clipped by
 * the parent's overflow-hidden) — that oversizing plus the skew is what
 * makes the isometric grid fill an arbitrary section regardless of size.
 */
export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(40).fill(1);
  const cols = new Array(45).fill(1);
  const colors = [
    "#2F6844", // terrace
    "#3C8058", // terrace-bright
    "#1E4630", // terrace-deep
    "#E2902E", // marigold
    "#B96F1D", // marigold-deep
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-8 w-16 border-l"
          style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                opacity: 0.5,
                transition: { duration: 0 },
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r"
              style={{ borderColor: "color-mix(in srgb, var(--ink) 10%, transparent)" }}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-ink/15"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
