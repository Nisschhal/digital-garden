"use client";
import { motion } from "motion/react";

/**
 * A small recurring character — a sprout with an AI "spark" — used
 * sparingly to give the AI angle warmth and a bit of personality instead
 * of it reading as purely clinical.
 */
export function SproutFace({ className = "", animated = true }: { className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="22" r="14" fill="#2F6844" />
      <circle cx="15.5" cy="21" r="2" fill="#FAF8F3" />
      <circle cx="24.5" cy="21" r="2" fill="#FAF8F3" />
      <path d="M15 26C16.5 28 23.5 28 25 26" stroke="#FAF8F3" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 8C20 8 14 9 15 15C15 15 21 14 20 8Z" fill="#3C8058" />
      <path d="M20 8C20 8 26 9 25 15C25 15 19 14 20 8Z" fill="#2F6844" />
      {animated ? (
        <motion.path
          d="M31 6L32.3 9.7L36 11L32.3 12.3L31 16L29.7 12.3L26 11L29.7 9.7L31 6Z"
          fill="#E2902E"
          animate={{ opacity: [1, 0.5, 1], scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "31px 11px" }}
        />
      ) : (
        <path d="M31 6L32.3 9.7L36 11L32.3 12.3L31 16L29.7 12.3L26 11L29.7 9.7L31 6Z" fill="#E2902E" />
      )}
    </svg>
  );
}

export function SproutFull({ className = "", animated = true }: { className?: string; animated?: boolean }) {
  const Wrap = animated ? motion.svg : "svg";
  const animProps = animated
    ? {
        animate: { y: [0, -8, 0], rotate: [-2, 2, -2] },
        transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
      }
    : {};
  return (
    <Wrap viewBox="0 0 120 140" fill="none" className={className} aria-hidden="true" {...animProps}>
      <path d="M38 112H82L77 132C77 135 74 137 71 137H49C46 137 43 135 43 132L38 112Z" fill="#E7EFE3" stroke="#D3E0CD" strokeWidth="1.5" />
      <ellipse cx="60" cy="112" rx="24" ry="6" fill="#CFE0CF" />
      <ellipse cx="60" cy="82" rx="26" ry="28" fill="#2F6844" />
      <path d="M60 56C60 56 46 52 44 38C44 38 60 36 62 54Z" fill="#3C8058" />
      <path d="M60 56C60 56 74 52 76 38C76 38 60 36 58 54Z" fill="#2F6844" />
      <path d="M60 50C60 50 62 34 78 26C78 26 82 44 62 52Z" fill="#3C8058" />
      <circle cx="52" cy="80" r="3" fill="#FAF8F3" />
      <circle cx="68" cy="80" r="3" fill="#FAF8F3" />
      <path d="M50 90C53 95 67 95 70 90" stroke="#FAF8F3" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M34 88C30 86 26 88 24 92" stroke="#2F6844" strokeWidth="4" strokeLinecap="round" />
      <path d="M86 88C90 86 94 88 96 92" stroke="#2F6844" strokeWidth="4" strokeLinecap="round" />
      <motion.path
        d="M92 44L94 50L100 52L94 54L92 60L90 54L84 52L90 50L92 44Z"
        fill="#E2902E"
        animate={animated ? { opacity: [1, 0.4, 1], scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "92px 52px" }}
      />
    </Wrap>
  );
}
