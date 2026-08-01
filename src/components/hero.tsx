"use client";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLang } from "@/context/LangContext";
import useReducedMotion from "@/hooks/useReducedMotion";
import { ensureGsap } from "@/lib/gsapSetup";
import TerraceDivider from "@/components/ui/terrace-divider";
import MagneticButton from "@/components/ui/magnetic-button";
import { LaptopShowcase } from "@/components/ui/device-frame";
import { IconArrow } from "@/components/ui/icons";
import HeroScreen from "@/components/hero-screen";
import FlowField from "@/components/ui/flow-field";
import { Boxes } from "@/components/ui/background-boxes";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.68, 0.32, 0.99] } },
};

export default function Hero() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const { gsap, ScrollTrigger } = ensureGsap();
    const ctx = gsap.context(() => {
      if (laptopRef.current && pinWrapRef.current) {
        gsap.set(laptopRef.current, { transformPerspective: 1600, transformOrigin: "50% 100%" });
        gsap.fromTo(
          laptopRef.current,
          { rotateX: 26, scale: 0.88 },
          {
            rotateX: 0,
            scale: 1,
            ease: "none",
            // Tied to the SAME element and end point the pin engages at
            // ("center center") so the tilt is always fully resolved to flat
            // by the moment it locks in place — never still tilting mid-pin.
            scrollTrigger: { trigger: pinWrapRef.current, start: "top bottom", end: "center center", scrub: 0.4 },
          }
        );
      }
      if (copyRef.current) {
        // Gentle upward parallax on the headline block as the laptop rises to meet it —
        // the same title-translate the reference component does via scrollYProgress.
        gsap.fromTo(
          copyRef.current,
          { y: 0 },
          {
            y: -36,
            ease: "none",
            scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 0.4 },
          }
        );
      }

      if (pinWrapRef.current) {
        // Once the laptop settles flat and reaches the middle of the viewport,
        // hold it there — the tabs inside stay reachable while the page keeps
        // "scrolling" underneath, instead of the mockup racing past unread.
        ScrollTrigger.create({
          trigger: pinWrapRef.current,
          start: "center center",
          end: "+=560",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        });
      }
    }, heroRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={heroRef}
      className="relative pt-14 sm:pt-20 md:pt-24 pb-0 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, var(--mist) 0%, var(--marigold-tint) 46%, var(--paper) 82%)",
      }}
    >
      {/* Isometric hover-grid — a playful "poke it" layer behind the copy.
          Masked so it's only a hint near the edges, never competes with text. */}
      <div
        className="absolute inset-0 overflow-hidden opacity-[0.55]"
        style={{ maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, transparent 25%, black 95%)" }}
      >
        <Boxes />
      </div>

      <FlowField className="z-0" reduced={reduced} count={130} />

      <div ref={copyRef} className="relative z-10 max-w-[900px] mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="flex items-center justify-center gap-2.5 text-[13px] font-bold tracking-[0.09em] uppercase text-terrace mb-4">
            <span className="w-[22px] h-[1.5px] bg-terrace inline-block" />
            {t.hero.eyebrow}
            <span className="w-[22px] h-[1.5px] bg-terrace inline-block" />
          </motion.p>
          <motion.h1 variants={item} className="font-display font-medium text-[clamp(30px,4.6vw,50px)] leading-[1.1] tracking-[-0.015em] max-w-[16ch] mx-auto">
            {t.hero.headline}
          </motion.h1>
          <motion.p variants={item} className="text-[clamp(15.5px,1.15vw,17px)] text-ink-soft max-w-[54ch] mt-[18px] mx-auto">
            {t.hero.sub}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mt-9">
            <MagneticButton
              as="a"
              href="demo.html"
              className="inline-flex items-center gap-2 bg-terrace text-on-dark font-semibold text-[15px] px-6 py-3.5 rounded-full shadow-[0_1px_2px_rgba(20,35,25,0.08)] hover:bg-terrace-deep transition-colors"
            >
              {t.nav.ctaDemo}
            </MagneticButton>
            <a href="#ai-demo" className="group inline-flex items-center gap-1.5 font-semibold text-[14.5px] text-terrace-deep py-3 px-1.5">
              <span className="border-b border-transparent group-hover:border-terrace-deep transition-colors">{t.hero.ctaSeeHow}</span>
              <IconArrow className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        ref={pinWrapRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 0.68, 0.32, 0.99] }}
        className="relative z-10 max-w-[980px] mx-auto px-5 sm:px-8 mt-14 sm:mt-16"
      >
        <LaptopShowcase ref={laptopRef}>
          <HeroScreen />
        </LaptopShowcase>
      </motion.div>

      <div className="h-16 sm:h-24" />
      <TerraceDivider fill="var(--mist)" />
    </section>
  );
}
