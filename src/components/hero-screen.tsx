"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { useLang } from "@/context/LangContext";
import {
  IconDoc, IconFlag, IconBellCheck, IconHome, IconGradCap, IconWallet, IconFunnel, IconAdmin,
} from "@/components/ui/icons";
import AdminScreen from "@/components/tour/admin-screen";
import FinanceScreen from "@/components/tour/finance-screen";
import AdmissionsScreen from "@/components/tour/admissions-screen";

const navIcons = [IconHome, IconGradCap, IconWallet, IconFunnel, IconAdmin];
const navKeys = ["home", "exams", "fees", "admissions", "reports"] as const;
type NavKey = (typeof navKeys)[number];

const queueIcons = [IconDoc, IconFlag, IconBellCheck];
const queueTones = ["terrace", "marigold", "terrace"];
const sectionShape = [
  { key: "9A", pct: 82 },
  { key: "9B", pct: 76 },
  { key: "9C", pct: 54, flag: true },
  { key: "9D", pct: 88 },
  { key: "9E", pct: 79 },
];

type HeroScreenT = { nav: string[]; welcome: string; stats: { label: string; value: string }[]; queueHeader: string; queue: { text: string; tag: string }[]; chartHeader: string; banner: string };

function HomeContent({ hs }: { hs: HeroScreenT }) {
  return (
    <>
      <StaggerGroup className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-5" stagger={0.08} amount={0.6}>
        {hs.stats.map((s, i) => (
          <StaggerItem key={i} as="div" className="rounded-xl bg-mist px-3 py-3">
            <p className="text-[10.5px] sm:text-[11px] font-semibold text-ink-faint leading-tight">{s.label}</p>
            <p className="font-display text-[18px] sm:text-[22px] text-terrace-deep leading-tight mt-1">{s.value}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <p className="text-[11px] font-bold text-ink-faint uppercase tracking-wide mb-2.5">{hs.queueHeader}</p>
      <StaggerGroup className="flex flex-col gap-2" stagger={0.09} amount={0.6}>
        {hs.queue.map((item, i) => {
          const Icon = queueIcons[i];
          const tone = queueTones[i];
          return (
            <StaggerItem key={i} as="div" className="flex items-center gap-2.5 bg-mist/70 rounded-xl px-3 py-2.5">
              <Icon className={`w-4 h-4 shrink-0 ${tone === "marigold" ? "text-marigold-deep" : "text-terrace"}`} />
              <span className="text-[11.5px] sm:text-[12.5px] text-ink leading-snug flex-1">{item.text}</span>
              <span
                className={`shrink-0 hidden sm:inline text-[9.5px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                  tone === "marigold" ? "bg-marigold-tint text-marigold-deep" : "bg-terrace/10 text-terrace-deep"
                }`}
              >
                {item.tag}
              </span>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </>
  );
}

function ExamsContent({ hs }: { hs: HeroScreenT }) {
  return (
    <>
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-[11px] font-bold text-ink-faint uppercase tracking-wide">{hs.chartHeader}</p>
      </div>
      <StaggerGroup className="flex items-end gap-2.5 h-[110px] mb-4" stagger={0.07} amount={0.6}>
        {sectionShape.map((s) => (
          <div key={s.key} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
            <StaggerItem
              as="div"
              className={`w-full rounded-t-md ${s.flag ? "bg-marigold" : "bg-terrace"}`}
              style={{ height: 0 }}
              variants={{
                hidden: { height: 0, opacity: 0 },
                show: { height: `${s.pct}%`, opacity: 1, transition: { duration: 0.7, ease: [0.22, 0.68, 0.32, 0.99] } },
              }}
            />
            <span className={`text-[10px] font-bold ${s.flag ? "text-marigold-deep" : "text-ink-faint"}`}>{s.key}</span>
          </div>
        ))}
      </StaggerGroup>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex items-center gap-1.5 text-[11px] font-semibold text-marigold-deep bg-marigold-tint rounded-lg px-2.5 py-1.5"
      >
        {hs.banner}
      </motion.div>
    </>
  );
}

export default function HeroScreen() {
  const { t } = useLang();
  const hs = t.heroScreen;
  const [active, setActive] = useState<NavKey>("home");

  return (
    <div className="flex">
      <div className="hidden sm:flex flex-col gap-1 w-[180px] shrink-0 border-r border-mist-line px-4 py-5">
        <div className="flex items-center gap-2 px-2 mb-4">
          <span className="w-6 h-6 rounded-md bg-terrace/15 flex items-center justify-center font-display text-[11px] font-semibold text-terrace-deep">DG</span>
          <span className="text-[12.5px] font-bold text-ink truncate">Sunrise School</span>
        </div>
        {hs.nav.map((label, i) => {
          const Icon = navIcons[i];
          const key = navKeys[i];
          const isActive = active === key;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActive(key)}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12.5px] font-semibold text-left transition-colors cursor-pointer ${
                isActive ? "bg-terrace/10 text-terrace-deep" : "text-ink-faint hover:bg-mist hover:text-ink"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </button>
          );
        })}
      </div>

      <div className="flex-1 min-w-0 p-4 sm:p-6 flex flex-col">
        <div className="flex items-center justify-between mb-5 shrink-0">
          <div>
            <p className="text-[11.5px] font-semibold text-ink-faint">{hs.welcome}</p>
            <p className="font-display text-[18px] sm:text-[20px] text-ink leading-tight">Ramesh Adhikari</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-mist" />
          </div>
        </div>

        {/* The sidebar nav is hidden below sm, so mobile had no way to switch
            dashboard tabs at all — this compact icon row replaces it. */}
        <div className="flex sm:hidden items-center gap-1.5 mb-4 shrink-0 overflow-x-auto no-scrollbar">
          {hs.nav.map((label, i) => {
            const Icon = navIcons[i];
            const key = navKeys[i];
            const isActive = active === key;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActive(key)}
                aria-current={isActive ? "page" : undefined}
                aria-label={label}
                className={`flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-full text-[11.5px] font-semibold transition-colors cursor-pointer ${
                  isActive ? "bg-terrace/10 text-terrace-deep" : "text-ink-faint bg-mist"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                {label}
              </button>
            );
          })}
        </div>

        {/* Fixed-height stage so switching tabs never resizes the laptop frame —
            each screen has very different content length, so this scrolls
            internally on the rare screen that's taller than the stage rather
            than shifting the whole mockup's height around it. */}
        <div className="h-[360px] sm:h-[400px] overflow-y-auto overscroll-contain thin-scroll pr-0.5" data-lenis-prevent>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.22, 0.68, 0.32, 0.99] }}
            >
              {active === "home" && <HomeContent hs={hs} />}
              {active === "exams" && <ExamsContent hs={hs} />}
              {active === "fees" && <FinanceScreen />}
              {active === "admissions" && <AdmissionsScreen />}
              {active === "reports" && <AdminScreen />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
