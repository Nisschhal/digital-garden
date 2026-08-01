"use client";
import { Reveal } from "@/components/ui/reveal";
import MagneticButton from "@/components/ui/magnetic-button";
import { useLang } from "@/context/LangContext";

export default function FinalCTA() {
  const { t } = useLang();
  return (
    <section className="relative bg-terrace-deep dark:bg-[#0E1613] text-on-dark py-20 sm:py-24 md:py-[130px] text-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none animate-glow"
        style={{ background: "radial-gradient(700px 400px at 50% -10%, color-mix(in srgb, var(--marigold) 18%, transparent), transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-[620px] mx-auto px-5 sm:px-8">
        <Reveal as="h2" className="font-display font-medium text-on-dark text-[clamp(26px,3vw,38px)] leading-[1.14] tracking-[-0.01em] max-w-none mx-auto">
          {t.finalCta.headline}
        </Reveal>
        <Reveal as="p" delay={0.05} className="text-[clamp(15.5px,1.15vw,17px)] text-on-dark/70 mt-[18px] max-w-none mx-auto">
          {t.finalCta.body}
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex justify-center">
          <MagneticButton
            as="a"
            href="demo.html"
            strength={12}
            className="inline-flex items-center gap-2 bg-marigold text-terrace-deep font-semibold text-[15px] px-6 py-3.5 rounded-full hover:brightness-95 transition-[filter]"
          >
            {t.finalCta.cta}
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
