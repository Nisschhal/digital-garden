"use client";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import TerraceDivider from "@/components/ui/terrace-divider";
import { IconBadge, IconFlame, IconTrophy } from "@/components/ui/icons";
import { SproutFull } from "@/components/ui/sprout";
import { images } from "@/data/images";
import { useLang } from "@/context/LangContext";

const icons = [IconBadge, IconFlame, IconTrophy];
const positions = ["top-[10%] left-[4%] sm:left-[6%]", "top-[42%] right-[4%] sm:right-[6%]", "bottom-[10%] left-[16%]"];
const tilts = ["-3deg", "3deg", "2deg"];

export default function Gamify() {
  const { t } = useLang();
  return (
    <section className="relative py-24 sm:py-28 md:py-[160px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <h2 className="font-display font-medium text-[clamp(26px,3vw,38px)] leading-[1.14] tracking-[-0.01em] max-w-[14ch]">
            {t.gamify.headline}
          </h2>
          <p className="text-[clamp(15.5px,1.15vw,17px)] text-ink-soft mt-[18px]">{t.gamify.body}</p>
        </Reveal>

        <Reveal delay={0.1} className="relative h-[260px] sm:h-[300px] order-first md:order-last">
          <div className="absolute inset-0 rounded-[28px] overflow-hidden">
            <Image
              src={images.studentsLaptop}
              alt="A diverse group of students collaborating around a laptop, smiling."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-marigold-tint/70 via-transparent to-transparent" />

            <StaggerGroup stagger={0.15} amount={0.5}>
              {t.gamify.cards.map((label, i) => {
                const Icon = icons[i];
                return (
                  <StaggerItem
                    key={label}
                    as="div"
                    className={`absolute ${positions[i]} bg-card/85 backdrop-blur-md backdrop-saturate-150 border border-paper-raised/60 dark:border-border rounded-2xl shadow-[0_6px_20px_rgba(20,35,25,0.08)] dark:shadow-none px-4 py-3 flex items-center gap-2.5 text-[13px] font-bold animate-idle-float`}
                    style={{ "--tilt": tilts[i] } as React.CSSProperties}
                  >
                    <Icon className="w-[22px] h-[22px] text-marigold-deep shrink-0" />
                    {label}
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>

          <SproutFull className="absolute -bottom-5 -right-4 w-[86px] h-auto drop-shadow-[0_6px_14px_rgba(20,35,25,0.12)] z-10" />
        </Reveal>
      </div>
      <TerraceDivider fill="var(--mist)" />
    </section>
  );
}
