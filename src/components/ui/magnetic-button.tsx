"use client";
import { useRef, type ElementType, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import useReducedMotion from "@/hooks/useReducedMotion";

/**
 * Subtle magnetic pull toward the cursor — used sparingly, only on the
 * page's two or three primary CTAs, so it reads as a considered detail
 * rather than a gimmick applied everywhere.
 */
export default function MagneticButton({
  as = "a",
  className = "",
  children,
  strength = 14,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  strength?: number;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const MotionTag = (motion as unknown as Record<string, ElementType>)[as as string] ?? motion.a;

  if (reduced) {
    const Plain = as as ElementType;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileTap={{ scale: 0.96 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
