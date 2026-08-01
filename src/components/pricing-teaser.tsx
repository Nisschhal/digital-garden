"use client";
import { Reveal } from "@/components/ui/reveal";
import MagneticButton from "@/components/ui/magnetic-button";
import { useLang } from "@/context/LangContext";

export default function PricingTeaser() {
  const { t } = useLang();
  return (
    <section className="bg-background py-16 sm:py-20 md:py-[100px] text-center">
      <div className="max-w-[640px] mx-auto px-5 sm:px-8">
        <Reveal as="h2" className="font-display font-medium text-[clamp(26px,3vw,38px)] leading-[1.14] tracking-[-0.01em]">
          {t.pricingTeaser.headline}
        </Reveal>
        <Reveal as="p" delay={0.05} className="text-[clamp(15.5px,1.15vw,17px)] text-ink-soft mt-[18px]">
          {t.pricingTeaser.body}
        </Reveal>
        <Reveal delay={0.1} className="mt-[30px] flex justify-center">
          <MagneticButton
            as="a"
            href="pricing.html"
            strength={10}
            className="inline-flex items-center gap-2 bg-terrace text-on-dark font-semibold text-[15px] px-6 py-3.5 rounded-full shadow-[0_1px_2px_rgba(20,35,25,0.08)] hover:bg-terrace-deep transition-colors"
          >
            {t.pricingTeaser.cta}
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
