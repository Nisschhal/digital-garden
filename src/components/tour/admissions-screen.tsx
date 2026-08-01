"use client";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { IconFunnel } from "@/components/ui/icons";
import { useLang } from "@/context/LangContext";

const counts = [24, 16, 9, 7];
const tones = ["mist", "mist", "marigold", "terrace"] as const;
const names = [
  ["Nisha G.", "Rohan B."],
  ["Anmol S.", "Priya K."],
  ["Deepak R."],
  ["Sujata P."],
];

export default function AdmissionsScreen() {
  const { t } = useLang();
  const s = t.tourScreens.admissions;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-[12.5px] font-bold text-ink-faint uppercase tracking-wide">{s.header}</p>
        <IconFunnel className="w-4 h-4 text-terrace-deep" />
      </div>

      <StaggerGroup className="grid grid-cols-4 gap-2" stagger={0.08} amount={0.6}>
        {s.columns.map((label, i) => (
          <StaggerItem key={label} as="div" y={14} className="flex flex-col gap-1.5">
            <div
              className={`rounded-lg px-2 py-1.5 text-center ${
                tones[i] === "terrace" ? "bg-terrace text-on-dark" : tones[i] === "marigold" ? "bg-marigold-tint text-marigold-deep" : "bg-mist text-ink-soft"
              }`}
            >
              <p className="text-[9.5px] font-bold uppercase tracking-wide leading-tight">{label}</p>
              <p className="text-[15px] font-display font-medium leading-tight">{counts[i]}</p>
            </div>
            {names[i].map((n) => (
              <div key={n} className="bg-card border border-border rounded-md px-1.5 py-1.5 text-[9.5px] font-semibold text-ink truncate">
                {n}
              </div>
            ))}
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div className="mt-5 flex items-center gap-1.5 text-[11.5px] font-semibold text-terrace-deep bg-mist rounded-lg px-2.5 py-1.5">
        {s.conversion} <span className="font-bold">29%</span>{s.conversionRest}
      </div>

      <p className="text-[11.5px] text-ink-soft mt-4 leading-relaxed">{s.body}</p>
    </div>
  );
}
