"use client";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { IconWallet } from "@/components/ui/icons";
import { useLang } from "@/context/LangContext";

const monthPct = [62, 71, 58, 80, 87];
const methodPct = [58, 31, 11];
const rows = [
  { name: "Aarav Thapa", amount: "NPR 8,500", status: "Paid" },
  { name: "Sunita Rai", amount: "NPR 12,000", status: "Paid" },
  { name: "Bishal K.", amount: "NPR 8,500", status: "Overdue" },
];

export default function FinanceScreen() {
  const { t } = useLang();
  const s = t.tourScreens.finance;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-[12.5px] font-bold text-ink-faint uppercase tracking-wide">{s.header}</p>
        <IconWallet className="w-4 h-4 text-terrace-deep" />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="rounded-xl bg-mist px-3.5 py-3">
          <p className="text-[11px] font-semibold text-ink-faint">{s.collectedLabel}</p>
          <p className="font-display text-[20px] text-terrace-deep leading-tight">NPR 42.8L</p>
          <p className="text-[10.5px] font-bold text-terrace mt-0.5">{s.collectedSub}</p>
        </div>
        <div className="rounded-xl bg-marigold-tint px-3.5 py-3">
          <p className="text-[11px] font-semibold text-marigold-deep/80">{s.outstandingLabel}</p>
          <p className="font-display text-[20px] text-marigold-deep leading-tight">NPR 6.2L</p>
          <p className="text-[10.5px] font-bold text-marigold-deep mt-0.5">{s.outstandingSub}</p>
        </div>
      </div>

      <p className="text-[11.5px] font-bold text-ink-faint uppercase tracking-wide mb-2">{s.trendLabel}</p>
      <StaggerGroup className="flex items-end gap-2.5 h-[64px] mb-5" stagger={0.07} amount={0.6}>
        {s.months.map((label, i) => (
          <div key={label} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
            <StaggerItem
              as="div"
              className="w-full rounded-t-md bg-terrace"
              style={{ height: 0 }}
              variants={{
                hidden: { height: 0, opacity: 0 },
                show: { height: `${monthPct[i]}%`, opacity: 1, transition: { duration: 0.6, ease: [0.22, 0.68, 0.32, 0.99] } },
              }}
            />
            <span className="text-[9.5px] font-semibold text-ink-faint">{label}</span>
          </div>
        ))}
      </StaggerGroup>

      <p className="text-[11.5px] font-bold text-ink-faint uppercase tracking-wide mb-2">{s.byMethodLabel}</p>
      <div className="flex flex-col gap-1.5 mb-5">
        {s.methods.map((label, i) => (
          <div key={label} className="flex items-center gap-2.5">
            <span className="text-[11.5px] text-ink-soft w-[92px] shrink-0">{label}</span>
            <div className="flex-1 h-[6px] rounded-full bg-mist overflow-hidden">
              <div className="h-full bg-terrace rounded-full" style={{ width: `${methodPct[i]}%` }} />
            </div>
            <span className="text-[11px] font-bold text-ink-faint w-[32px] text-right">{methodPct[i]}%</span>
          </div>
        ))}
      </div>

      <p className="text-[11.5px] font-bold text-ink-faint uppercase tracking-wide mb-2">{s.recentLabel}</p>
      <div className="flex flex-col gap-1.5">
        {rows.map((r) => (
          <div key={r.name} className="flex items-center justify-between text-[12px] bg-mist/70 rounded-lg px-3 py-2">
            <span className="font-semibold text-ink truncate">{r.name}</span>
            <span className="text-ink-faint">{r.amount}</span>
            <span className={`font-bold ${r.status === "Overdue" ? "text-marigold-deep" : "text-terrace-deep"}`}>
              {s.statuses[r.status as "Paid" | "Overdue"]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
