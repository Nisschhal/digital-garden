"use client";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/reveal";
import TerraceDivider from "@/components/ui/terrace-divider";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useLang } from "@/context/LangContext";

export default function Problem() {
  const { t } = useLang();

  return (
    <section className="relative bg-mist pt-20 sm:pt-24 pb-24 sm:pb-32 md:pb-[140px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="max-w-[640px]">
          <Reveal as="p" className="flex items-center gap-2.5 text-[13px] font-bold tracking-[0.09em] uppercase text-terrace mb-4">
            <span className="w-[22px] h-[1.5px] bg-terrace inline-block" />
            {t.problem.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display font-medium text-[clamp(26px,3vw,38px)] leading-[1.14] tracking-[-0.01em]">
            {t.problem.headline}
          </Reveal>
        </div>

        {/* A wiggling scroll-progress beam runs beside the cards instead of a
            static stepped line — traces down as you actually read through them. */}
        <TracingBeam className="mt-[52px] max-w-none pl-8 md:pl-24">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.problem.items.map((p, i) => (
              <StaggerItem key={i} as="div" y={26} className="relative rounded-2xl border border-border p-2 md:rounded-[20px] md:p-2.5">
                <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={1.5} />
                <div className="relative flex h-full gap-5 overflow-hidden rounded-xl bg-card p-6 md:p-7">
                  <span className="font-display text-[26px] text-mist-line font-medium leading-none shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[17px] font-bold mb-2 tracking-[-0.01em]">{p.title}</h3>
                    <p className="text-[14.5px] text-ink-soft">{p.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </TracingBeam>
      </div>

      <TerraceDivider fill="var(--paper)" flip />
    </section>
  );
}
