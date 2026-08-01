"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import useReducedMotion from "@/hooks/useReducedMotion";
import { ensureGsap } from "@/lib/gsapSetup";
import { images } from "@/data/images";
import { useLang } from "@/context/LangContext";

export default function Grounding() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || !imgRef.current) return;
    const { gsap } = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -8 },
        { yPercent: 8, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 0.6 } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} className="relative h-[62vh] min-h-[420px] max-h-[640px] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div ref={imgRef} className="absolute inset-0 h-[124%] -translate-y-[8%]">
          <Image
            src={images.riceTerraces}
            alt="Terraced rice fields in Pharping, Nepal — the same stepped, layered shape the product's information architecture is built around."
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-ink/40" />

      <div className="relative z-10 h-full flex items-end sm:items-center">
        <div className="max-w-[1180px] w-full mx-auto px-5 sm:px-8 pb-10 sm:pb-0">
          <Reveal as="p" className="text-[12.5px] font-bold tracking-[0.14em] uppercase text-marigold mb-3">
            {t.grounding.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display font-medium text-on-dark text-[clamp(26px,4vw,42px)] leading-[1.16] max-w-[16ch]">
            {t.grounding.headline}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
