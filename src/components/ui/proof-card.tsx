import { Reveal } from "./reveal";
import { IconSpark, IconDoc } from "./icons";
import GlassCard from "./glass-card";

/**
 * A small, concrete proof snippet — a real-looking answer or a real-looking
 * auto-drafted line, not a claim about one.
 */
export function QACard({
  q,
  a,
  tone = "terrace",
  className = "",
}: {
  q: string;
  a: string;
  tone?: "terrace" | "marigold";
  className?: string;
}) {
  const accent = tone === "marigold" ? "text-marigold-deep bg-marigold-tint" : "text-terrace-deep bg-terrace/10 dark:bg-terrace/15";
  return (
    <Reveal delay={0.15} className={`w-full max-w-[260px] ${className}`}>
      <GlassCard innerClassName="p-4">
        <p className="text-[11px] font-bold text-ink-faint uppercase tracking-wide mb-1.5">You ask</p>
        <p className="text-[13px] font-semibold text-ink leading-snug mb-2.5">&ldquo;{q}&rdquo;</p>
        <div className={`flex items-start gap-2 rounded-lg px-2.5 py-2 ${accent}`}>
          <IconSpark className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <p className="text-[12.5px] font-semibold leading-snug">{a}</p>
        </div>
      </GlassCard>
    </Reveal>
  );
}

export function DraftCard({ label, snippet, className = "" }: { label: string; snippet: string; className?: string }) {
  return (
    <Reveal delay={0.15} className={`w-full max-w-[260px] ${className}`}>
      <GlassCard innerClassName="p-4">
        <div className="flex items-center gap-1.5 mb-2.5">
          <IconDoc className="w-3.5 h-3.5 text-terrace shrink-0" />
          <p className="text-[11px] font-bold text-terrace-deep uppercase tracking-wide">{label}</p>
        </div>
        <p className="text-[12.5px] text-ink-soft leading-relaxed italic border-l-2 border-mist-line pl-2.5">{snippet}</p>
      </GlassCard>
    </Reveal>
  );
}
