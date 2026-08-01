"use client";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { IconShieldCheck, IconWarnTriangle } from "@/components/ui/icons";
import { useLang } from "@/context/LangContext";

export default function AdminScreen() {
  const { t } = useLang();
  const s = t.tourScreens.admin;
  return (
    <div>
      <p className="text-[12.5px] font-bold text-ink-faint uppercase tracking-wide mb-3">{s.header}</p>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="rounded-xl bg-mist px-3.5 py-3 flex items-start gap-2">
          <IconShieldCheck className="w-4 h-4 text-terrace mt-0.5 shrink-0" />
          <div>
            <p className="text-[11px] font-semibold text-ink-faint leading-tight">{s.emisLabel}</p>
            <p className="text-[13px] font-bold text-terrace-deep leading-tight mt-0.5">{s.emisValue}</p>
          </div>
        </div>
        <div className="rounded-xl bg-mist px-3.5 py-3 flex items-start gap-2">
          <IconShieldCheck className="w-4 h-4 text-terrace mt-0.5 shrink-0" />
          <div>
            <p className="text-[11px] font-semibold text-ink-faint leading-tight">{s.boardLabel}</p>
            <p className="text-[13px] font-bold text-terrace-deep leading-tight mt-0.5">{s.boardValue}</p>
          </div>
        </div>
      </div>

      <p className="text-[12.5px] font-bold text-ink-faint uppercase tracking-wide mb-2.5">{s.flaggedHeader}</p>
      <StaggerGroup className="flex flex-col gap-2" stagger={0.09} amount={0.6}>
        {s.flags.map((f) => (
          <StaggerItem key={f.grade + f.reason} as="div" className="flex items-center gap-2.5 bg-mist/70 rounded-xl px-3 py-2.5">
            <IconWarnTriangle className={`w-4 h-4 shrink-0 ${f.risk === "High" || f.risk === "उच्च" ? "text-marigold-deep" : "text-ink-faint"}`} />
            <div className="flex-1 min-w-0">
              <p className="text-[12.5px] font-semibold text-ink leading-snug truncate">{f.grade}</p>
              <p className="text-[11.5px] text-ink-faint leading-snug truncate">{f.reason}</p>
            </div>
            <span
              className={`shrink-0 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                f.risk === "High" || f.risk === "उच्च" ? "bg-marigold-tint text-marigold-deep" : "bg-terrace/10 text-terrace-deep"
              }`}
            >
              {f.risk}
            </span>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
