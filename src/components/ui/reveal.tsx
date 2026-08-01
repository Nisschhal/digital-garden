"use client";
import { motion } from "motion/react";
import type { ElementType, ReactNode } from "react";

/**
 * Standard scroll reveal: fade + rise, once, with a small stagger
 * option for children. The workhorse entrance language used across
 * every section — the AI-demo section is the one place that breaks
 * from it with its own bespoke choreography.
 */
export function Reveal({
  as: Tag = "div",
  children,
  delay = 0,
  y = 22,
  className = "",
  once = true,
  amount = 0.3,
  ...rest
}: {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  amount?: number;
} & Record<string, unknown>) {
  const MotionTag = (motion as unknown as Record<string, ElementType>)[Tag as string] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.68, 0.32, 0.99] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Parent for staggered-children reveals. Pair with <StaggerItem>. */
export function StaggerGroup({
  as: Tag = "div",
  children,
  className = "",
  stagger = 0.09,
  amount = 0.25,
  once = true,
  ...rest
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
  once?: boolean;
} & Record<string, unknown>) {
  const MotionTag = (motion as unknown as Record<string, ElementType>)[Tag as string] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  as: Tag = "div",
  children,
  className = "",
  y = 18,
  scale,
  ...rest
}: {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  y?: number;
  scale?: boolean;
} & Record<string, unknown>) {
  const MotionTag = (motion as unknown as Record<string, ElementType>)[Tag as string] ?? motion.div;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y, scale: scale ? 0.94 : 1 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: [0.22, 0.68, 0.32, 0.99] },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
