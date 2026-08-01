"use client";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { LogoMark } from "@/components/ui/icons";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { useLang } from "@/context/LangContext";

/**
 * Blur + rise-in reveal for each footer block, staggered by index —
 * the "soothing, subtle" entrance the reference used. Skipped entirely
 * under prefers-reduced-motion, same as every other reveal on the page.
 */
function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: {
  className?: ComponentProps<typeof motion.div>["className"];
  delay?: number;
  children: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative screen-line-top bg-surface-dark text-on-dark/60 dark:bg-black dark:text-white/55 pt-16 pb-8 overflow-hidden">
      {/* soft top glow — barely there in light mode, a proper shine in dark */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[220px] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, color-mix(in srgb, var(--terrace-bright) 22%, transparent), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur"
        style={{ background: "color-mix(in srgb, var(--on-dark) 25%, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap justify-between gap-10 pb-11 border-b border-on-dark/12 dark:border-white/10">
          <AnimatedContainer className="max-w-[280px]">
            <a href="#main" className="flex items-center gap-2.5 font-display font-semibold text-[19px] text-on-dark dark:text-white">
              <LogoMark dark className="w-[26px] h-[26px]" />
              {t.brand}
            </a>
            <p className="text-[14px] leading-[1.6] mt-3.5">{t.footer.tagline}</p>
          </AnimatedContainer>

          <div className="flex flex-wrap gap-10 sm:gap-14">
            {t.footer.columns.map((col, i) => (
              <AnimatedContainer key={col.title} delay={0.1 + i * 0.1}>
                <h4 className="text-[12px] font-bold uppercase tracking-[0.06em] text-on-dark/40 dark:text-white/35 mb-4">{col.title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((label) => (
                    <li key={label}>
                      <a href="#" className="text-[14px] hover:text-on-dark dark:hover:text-white transition-colors">{label}</a>
                    </li>
                  ))}
                </ul>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-7 text-[13px]">
          <span>{t.footer.copyright}</span>
          <a href="investors.html" className="opacity-55 hover:opacity-85 transition-opacity">{t.footer.investors}</a>
        </div>
      </div>

      {/* Giant wordmark strip — outlined brand name that fills with the
          terrace/marigold gradient as the cursor moves over it. */}
      <div className="relative h-[6.5rem] sm:h-[8.5rem] md:h-[10.5rem] mt-6 -mb-2">
        <TextHoverEffect text={t.brand} />
      </div>
    </footer>
  );
}
