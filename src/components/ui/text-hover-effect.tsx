"use client";
/**
 * TextHoverEffect — a huge outlined wordmark that reveals a brand-color
 * gradient fill following the cursor. Retoned for Digital Garden: the
 * rainbow gradient stops became terrace/marigold, the stroke color is
 * tuned for the footer's permanently-dark background (not a light/dark
 * pair), the font falls back to Noto Sans Devanagari so the Nepali brand
 * name renders correctly, and the text is length-locked via `textLength`
 * so it fits the viewBox whether it's "Digital Garden" or "डिजिटल गार्डन".
 */
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 900 130"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient id="dgTextGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="var(--marigold)" />
              <stop offset="30%" stopColor="var(--marigold-deep)" />
              <stop offset="55%" stopColor="var(--terrace-bright)" />
              <stop offset="80%" stopColor="var(--terrace)" />
              <stop offset="100%" stopColor="var(--terrace-deep)" />
            </>
          )}
        </linearGradient>
        <motion.radialGradient
          id="dgRevealMask"
          gradientUnits="userSpaceOnUse"
          r="22%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="dgTextMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dgRevealMask)" />
        </mask>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        textLength="820"
        lengthAdjust="spacingAndGlyphs"
        strokeWidth="0.5"
        style={{ opacity: hovered ? 0.7 : 0, stroke: "color-mix(in srgb, var(--on-dark) 14%, transparent)" }}
        className="fill-transparent font-display text-6xl font-semibold"
      >
        {text}
      </text>

      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        textLength="820"
        lengthAdjust="spacingAndGlyphs"
        strokeWidth="0.5"
        style={{ stroke: "color-mix(in srgb, var(--on-dark) 14%, transparent)" }}
        className="fill-transparent font-display text-6xl font-semibold"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        textLength="820"
        lengthAdjust="spacingAndGlyphs"
        stroke="url(#dgTextGradient)"
        strokeWidth="0.5"
        mask="url(#dgTextMask)"
        className="fill-transparent font-display text-6xl font-semibold"
      >
        {text}
      </text>
    </svg>
  );
};
