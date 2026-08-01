"use client";
import { Reveal } from "@/components/ui/reveal";
import { SproutFace } from "@/components/ui/sprout";
import { IconHome, IconGradCap, IconWallet, IconChatBubble } from "@/components/ui/icons";
import AIConversation from "@/components/smoothui/ai-conversation";
import { useLang } from "@/context/LangContext";

export default function ParentScreen() {
  const { t } = useLang();
  const s = t.tourScreens.parent;

  return (
    <div>
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-9 h-9 rounded-full bg-terrace/15 flex items-center justify-center font-display text-[13px] font-semibold text-terrace-deep">A</div>
        <div>
          <p className="text-[13px] font-bold text-ink leading-tight">Aayush Sharma</p>
          <p className="text-[11px] text-ink-faint leading-tight">{s.grade}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-mist rounded-2xl p-3.5 mb-3">
        <svg viewBox="0 0 44 44" className="w-11 h-11 shrink-0 -rotate-90">
          <circle cx="22" cy="22" r="18" fill="none" stroke="var(--mist-line)" strokeWidth="4" />
          <circle
            cx="22" cy="22" r="18" fill="none" stroke="var(--terrace)" strokeWidth="4" strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 18}
            strokeDashoffset={2 * Math.PI * 18 * (1 - 0.94)}
          />
        </svg>
        <div>
          <p className="text-[11px] font-semibold text-ink-faint leading-tight">{s.attendanceLabel}</p>
          <p className="font-display text-[18px] text-terrace-deep leading-tight">94%</p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 bg-marigold-tint rounded-2xl p-3.5 mb-3">
        <IconWallet className="w-5 h-5 text-marigold-deep shrink-0" />
        <div className="flex-1">
          <p className="text-[11.5px] font-bold text-marigold-deep leading-tight">{s.feeDue}</p>
          <p className="text-[10.5px] text-marigold-deep/70 leading-tight mt-0.5">{s.payWith}</p>
        </div>
      </div>

      <Reveal className="bg-card border border-border rounded-2xl p-3.5">
        <div className="flex items-center gap-1.5 mb-2">
          <SproutFace className="w-5 h-5" animated={false} />
          <p className="text-[11px] font-bold text-ink-faint uppercase tracking-wide">{s.askHeader}</p>
        </div>
        {/* Same real scroll-following chat viewport as the AI Demo section —
            keeps the exchange readable even if a longer answer wraps past
            the card's fixed height inside the phone frame. */}
        <AIConversation className="h-[92px]">
          <div className="flex flex-col gap-1.5 pr-0.5">
            <p className="text-[12px] font-semibold text-ink">{s.askQ}</p>
            <p className="text-[11.5px] text-terrace-deep font-semibold leading-snug">{s.askA}</p>
          </div>
        </AIConversation>
      </Reveal>

      <div className="flex items-center justify-around mt-5 pt-3 border-t border-border">
        <IconHome className="w-5 h-5 text-terrace-deep" />
        <IconGradCap className="w-5 h-5 text-ink-faint" />
        <IconWallet className="w-5 h-5 text-ink-faint" />
        <IconChatBubble className="w-5 h-5 text-ink-faint" />
      </div>
    </div>
  );
}
