"use client";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { useLang } from "@/context/LangContext";

export default function Security() {
  const { t } = useLang();
  return (
    <section className="bg-mist py-24 sm:py-28 md:py-[160px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-[1fr_0.95fr] gap-10 md:gap-[70px] items-center">
        <Reveal>
          <p className="flex items-center gap-2.5 text-[13px] font-bold tracking-[0.09em] uppercase text-terrace mb-4">
            <span className="w-[22px] h-[1.5px] bg-terrace inline-block" />
            {t.security.eyebrow}
          </p>
          <h2 className="font-display font-medium text-[clamp(26px,3vw,38px)] leading-[1.14] tracking-[-0.01em] max-w-[15ch]">
            {t.security.headline}
          </h2>
          <p className="text-[clamp(15.5px,1.15vw,17px)] text-ink-soft mt-[18px]">{t.security.body}</p>
        </Reveal>

        <StaggerGroup className="relative flex items-center justify-center h-[280px] sm:h-[300px]" stagger={0.18} amount={0.6}>
          <StaggerItem as="div" scale className="relative w-[300px] h-[300px] max-w-full rounded-full bg-mist-line/70">
            <StaggerItem as="div" scale className="absolute top-[45px] left-1/2 -translate-x-1/2 w-[210px] h-[210px] rounded-full bg-terrace/[0.16]" />
            <StaggerItem as="div" scale className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] rounded-full bg-terrace/90 flex items-center justify-center">
              <span className="text-on-dark text-[11.5px] font-bold text-center leading-tight px-2">{t.security.own}</span>
            </StaggerItem>
            <span className="absolute top-0.5 left-1/2 -translate-x-1/2 text-[12px] font-bold text-terrace-deep bg-card border border-border px-2.5 py-1.5 rounded-full whitespace-nowrap">
              {t.security.whole}
            </span>
            <span className="absolute top-[46px] left-1 text-[12px] font-bold text-terrace-deep bg-card border border-border px-2.5 py-1.5 rounded-full whitespace-nowrap">
              {t.security.section}
            </span>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
