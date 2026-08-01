"use client";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { useLang } from "@/context/LangContext";

export default function Modules() {
  const { t } = useLang();
  return (
    <section className="bg-mist py-20 sm:py-24 md:py-[120px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <Reveal as="p" className="flex items-center gap-2.5 text-[13px] font-bold tracking-[0.09em] uppercase text-terrace mb-4">
          <span className="w-[22px] h-[1.5px] bg-terrace inline-block" />
          {t.modules.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.05} className="font-display font-medium text-[clamp(26px,3vw,38px)] leading-[1.14] tracking-[-0.01em]">
          {t.modules.headline}
        </Reveal>

        <StaggerGroup className="flex flex-wrap gap-3 mt-9" stagger={0.05}>
          {t.modules.items.map((m, i) => (
            <StaggerItem
              key={i}
              as="span"
              scale
              whileHover={{ y: -3, rotate: -0.6 }}
              className="bg-card border border-border px-[22px] py-3.5 rounded-full text-[14.5px] font-semibold flex items-center gap-2.5 cursor-default transition-colors hover:border-terrace"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terrace" />
              {m}
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal as="p" delay={0.1} className="text-ink-soft text-[15px] max-w-[52ch] mt-7">
          {t.modules.footer}
        </Reveal>
      </div>
    </section>
  );
}
