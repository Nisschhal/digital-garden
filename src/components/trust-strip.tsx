"use client";
import { useLang } from "@/context/LangContext";

function Segment({ items, hidden = false }: { items: readonly string[]; hidden?: boolean }) {
  return (
    <div
      className="flex items-center gap-10 pr-10 shrink-0"
      role={hidden ? undefined : "list"}
      aria-hidden={hidden || undefined}
      aria-label={hidden ? undefined : "Compliance and trust badges"}
    >
      {items.map((label, i) => (
        <span key={i} role={hidden ? undefined : "listitem"} className="flex items-center gap-10 text-[13.5px] font-semibold text-terrace-deep whitespace-nowrap">
          {label}
          <span className="text-ink-faint font-normal">·</span>
        </span>
      ))}
    </div>
  );
}

export default function TrustStrip() {
  const { t } = useLang();
  return (
    <section className="group bg-mist border-y border-border py-5 overflow-hidden">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Segment items={t.trustStrip} />
        <Segment items={t.trustStrip} hidden />
      </div>
    </section>
  );
}
