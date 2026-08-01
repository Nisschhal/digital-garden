"use client";
import { motion, useScroll, useSpring } from "motion/react";

/** Thin terrace-green progress line pinned under the nav. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-terrace origin-left z-[110]"
      aria-hidden="true"
    />
  );
}
