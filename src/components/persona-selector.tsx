"use client";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { IconAdmin, IconTeacher, IconParent, IconStudent } from "@/components/ui/icons";
import { useLang } from "@/context/LangContext";

const icons = [IconAdmin, IconTeacher, IconParent, IconStudent];

export default function PersonaSelector() {
  const { t } = useLang();
  return (
    <section className="py-14 sm:py-20 md:py-[88px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <p className="flex items-center gap-2.5 text-[13px] font-bold tracking-[0.09em] uppercase text-terrace mb-4">
          <span className="w-[22px] h-[1.5px] bg-terrace inline-block" />
          {t.persona.eyebrow}
        </p>
        <h2 className="font-display font-medium text-[clamp(26px,3vw,38px)] leading-[1.14] tracking-[-0.01em] max-w-[18ch]">
          {t.persona.headline}
        </h2>

        <StaggerGroup as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden mt-9">
          {t.persona.items.map(({ tag, line }, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={i} as="div" className="bg-card p-7 flex flex-col gap-4 hover:bg-mist transition-colors duration-200" whileHover={{ y: -3 }}>
                <Icon className="w-[38px] h-[38px] text-terrace" />
                <h3 className="text-[13px] font-bold uppercase tracking-[0.06em] text-ink-faint">{tag}</h3>
                <p className="text-[15.5px] text-ink leading-[1.5]">{line}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
