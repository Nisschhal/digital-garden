"use client";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import MagneticButton from "@/components/ui/magnetic-button";
import { IconLayers, IconSystem } from "@/components/ui/icons";
import useReducedMotion from "@/hooks/useReducedMotion";
import { ensureGsap } from "@/lib/gsapSetup";
import { useLang } from "@/context/LangContext";

export default function Wedge() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const baseRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduced) return;
    const { gsap } = ensureGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%", toggleActions: "play none none reverse" },
      });
      tl.fromTo(baseRef.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.65, ease: "power3.out" })
        .fromTo(topRef.current, { y: -70, opacity: 0, rotate: -3 }, { y: 0, opacity: 1, rotate: 0, duration: 0.7, ease: "back.out(1.6)" }, "-=0.3")
        .fromTo(tagRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }, "-=0.15");
    }, sectionRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-28 md:py-[160px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-20 items-center">
        <div className="max-w-[520px]">
          <Reveal as="p" className="flex items-center gap-2.5 text-[13px] font-bold tracking-[0.09em] uppercase text-terrace mb-4">
            <span className="w-[22px] h-[1.5px] bg-terrace inline-block" />
            {t.wedge.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display font-medium text-[clamp(26px,3vw,38px)] leading-[1.14] tracking-[-0.01em]">
            {t.wedge.headline}
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-[clamp(15.5px,1.15vw,17px)] text-ink-soft mt-5">
            {t.wedge.body}
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <MagneticButton
              as="a"
              href="migration.html"
              strength={10}
              className="inline-flex items-center gap-2 bg-terrace text-on-dark font-semibold text-[15px] px-6 py-3.5 rounded-full shadow-[0_1px_2px_rgba(20,35,25,0.08)] hover:bg-terrace-deep transition-colors"
            >
              {t.wedge.cta}
            </MagneticButton>
          </Reveal>
        </div>

        <div className="relative h-[280px] sm:h-[320px] flex flex-col justify-end" aria-hidden="true">
          <div ref={topRef} className="relative z-10 -mb-[50px] ml-[26px] -mr-3.5 rounded-2xl bg-terrace text-on-dark px-6 py-[18px] font-semibold text-[14.5px] shadow-[0_8px_20px_rgba(30,70,48,0.14)]">
            <span ref={tagRef} className="absolute -top-[34px] left-6 text-[11px] font-bold uppercase tracking-[0.06em] text-terrace-deep bg-marigold-tint px-2.5 py-1.5 rounded-full">
              {t.wedge.tag}
            </span>
            <div className="flex items-center gap-2.5">
              <IconLayers className="w-5 h-5 shrink-0" />
              {t.wedge.aiTitle}
            </div>
            <p className="text-[12px] font-medium text-on-dark/75 mt-1.5 pl-[30px]">{t.wedge.aiBody}</p>
          </div>
          <div ref={baseRef} className="rounded-2xl bg-card border-[1.5px] border-border text-ink-soft px-6 py-[18px] font-semibold text-[14.5px] h-[116px] flex flex-col justify-center">
            <div className="flex items-center gap-2.5">
              <IconSystem className="w-5 h-5 shrink-0" />
              {t.wedge.existingTitle}
            </div>
            <p className="text-[12px] font-medium text-ink-faint mt-1.5 pl-[30px]">{t.wedge.existingBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
