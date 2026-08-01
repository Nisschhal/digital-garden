"use client";
import { forwardRef, type ReactNode } from "react";
import { motion } from "motion/react";

/**
 * The hero's laptop-style showcase frame — a large bezel wrapping the real
 * product screen, tilted in 3D perspective via a transform applied to the
 * forwarded ref (see hero.tsx). Modeled on Mercury's homepage hero.
 *
 * Uses `surface-dark`/`on-dark` (fixed tokens, not the theme-reactive
 * `ink`/`paper`) — this bezel is meant to always look like dark device
 * chrome, in both light and dark site themes, not flip color with them.
 */
export const LaptopShowcase = forwardRef<HTMLDivElement, { children: ReactNode }>(function LaptopShowcase(
  { children },
  ref
) {
  return (
    <div ref={ref} className="w-full">
      <div className="rounded-t-2xl bg-surface-dark pt-3 px-3 sm:pt-4 sm:px-4 shadow-[0_30px_70px_-20px_rgba(20,35,25,0.18)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-center pb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-on-dark/20" />
        </div>
        <div className="rounded-t-lg overflow-hidden bg-paper-raised">{children}</div>
      </div>
      <div className="h-3 sm:h-4 bg-surface-dark rounded-b-md relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/4 h-full bg-on-dark/15 rounded-b-md" />
      </div>
    </div>
  );
});

/** Browser-window chrome, reused across every desktop "screen" mockup. */
export function DeviceFrame({ title, children, dark = false }: { title: string; children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`rounded-3xl border overflow-hidden shadow-[0_16px_40px_-16px_rgba(20,35,25,0.14)] dark:shadow-none ${
        dark ? "bg-terrace-deep border-terrace-deep/60" : "bg-paper-raised border-mist-line"
      }`}
    >
      <div className={`flex items-center gap-2 px-4 py-3 border-b ${dark ? "border-on-dark/10 bg-on-dark/5" : "border-mist-line bg-mist/60"}`}>
        <span className="w-2.5 h-2.5 rounded-full bg-[#E2902E]/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-terrace/40" />
        <span className={`w-2.5 h-2.5 rounded-full ${dark ? "bg-on-dark/30" : "bg-ink-faint/40"}`} />
        <span className={`ml-2 text-[11.5px] font-semibold ${dark ? "text-on-dark/60" : "text-ink-faint"}`}>{title}</span>
        <span className={`ml-auto flex items-center gap-1.5 text-[11px] font-bold ${dark ? "text-marigold" : "text-terrace-deep"}`}>
          <motion.span
            className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-marigold" : "bg-terrace"}`}
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          Live
        </span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

/** Phone chrome, used only for the Parent screen. */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[300px]">
      <div className="rounded-[38px] border-[6px] border-surface-dark bg-surface-dark p-1.5 shadow-[0_16px_40px_-16px_rgba(20,35,25,0.16)] dark:shadow-none">
        <div className="rounded-[28px] bg-paper-raised overflow-hidden">
          <div className="flex items-center justify-center pt-2.5 pb-1">
            <span className="w-16 h-[5px] rounded-full bg-on-dark/15" />
          </div>
          <div className="px-4 pb-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
