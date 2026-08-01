"use client";
import { Reveal } from "@/components/ui/reveal";
import MagneticButton from "@/components/ui/magnetic-button";
import { IconCompass } from "@/components/ui/icons";
import { useLang } from "@/context/LangContext";

export default function Proof() {
  const { t } = useLang();
  return (
    <section className="bg-mist py-20 sm:py-24 md:py-[130px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <Reveal
          className="rounded-[28px] border border-border px-7 py-11 sm:px-12 sm:py-16 md:p-[72px] text-center"
          style={{ background: "linear-gradient(180deg, var(--paper-raised), var(--mist) 180%)" }}
        >
          <IconCompass className="w-[34px] h-[34px] text-terrace mx-auto mb-5" />
          <h2 className="font-display font-medium text-[clamp(26px,3vw,38px)] leading-[1.14] tracking-[-0.01em] max-w-none mx-auto">
            {t.proof.headline}
          </h2>
          <p className="text-[clamp(15.5px,1.15vw,17px)] text-ink-soft mt-[18px] max-w-[56ch] mx-auto">{t.proof.body}</p>
          <div className="mt-[30px] flex justify-center">
            <MagneticButton
              as="a"
              href="contact.html"
              strength={10}
              className="inline-flex items-center gap-2 bg-terrace text-on-dark font-semibold text-[15px] px-6 py-3.5 rounded-full shadow-[0_1px_2px_rgba(20,35,25,0.08)] hover:bg-terrace-deep transition-colors"
            >
              {t.proof.cta}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
