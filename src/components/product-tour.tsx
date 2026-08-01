"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { DeviceFrame, PhoneFrame } from "@/components/ui/device-frame";
import { IconWarnTriangle, IconWallet, IconFunnel, IconChatBubble } from "@/components/ui/icons";
import AdminScreen from "@/components/tour/admin-screen";
import FinanceScreen from "@/components/tour/finance-screen";
import AdmissionsScreen from "@/components/tour/admissions-screen";
import ParentScreen from "@/components/tour/parent-screen";
import { useLang } from "@/context/LangContext";
import useTabIndicator from "@/hooks/useTabIndicator";

const tabKeys = ["admin", "finance", "admissions", "parents"] as const;
type TabKey = (typeof tabKeys)[number];
const icons: Record<TabKey, typeof IconWarnTriangle> = {
  admin: IconWarnTriangle,
  finance: IconWallet,
  admissions: IconFunnel,
  parents: IconChatBubble,
};
const screens: Record<TabKey, () => React.ReactElement> = {
  admin: AdminScreen,
  finance: FinanceScreen,
  admissions: AdmissionsScreen,
  parents: ParentScreen,
};

export default function ProductTour() {
  const { t } = useLang();
  const [active, setActive] = useState<TabKey>("admin");
  const tabs = t.productTour.tabs;
  const tab = tabs[active];
  const Screen = screens[active];
  const { containerRef, registerRef, box } = useTabIndicator(active);

  return (
    <section className="py-24 sm:py-28 md:py-[160px]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="max-w-[640px] mx-auto text-center">
          <Reveal as="p" className="flex items-center justify-center gap-2.5 text-[13px] font-bold tracking-[0.09em] uppercase text-terrace mb-4">
            <span className="w-[22px] h-[1.5px] bg-terrace inline-block" />
            {t.productTour.eyebrow}
            <span className="w-[22px] h-[1.5px] bg-terrace inline-block" />
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display font-medium text-[clamp(26px,3vw,38px)] leading-[1.14] tracking-[-0.01em] max-w-none mx-auto">
            {t.productTour.headline}
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-[clamp(15.5px,1.15vw,17px)] text-ink-soft mt-[18px] max-w-none mx-auto">
            {t.productTour.body}
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex justify-center mt-9">
          <div ref={containerRef} className="relative flex flex-wrap justify-center gap-2 p-1" role="tablist" aria-label="Product tour">
            {box.width > 0 && (
              <motion.div
                className="absolute rounded-full bg-terrace"
                animate={{ width: box.width, height: box.height, x: box.left, y: box.top }}
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                style={{ top: 0, left: 0 }}
              />
            )}
            {tabKeys.map((key) => {
              const Icon = icons[key];
              return (
                <button
                  key={key}
                  ref={registerRef(key)}
                  role="tab"
                  aria-selected={active === key}
                  onClick={() => setActive(key)}
                  className={`relative z-10 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-[13.5px] sm:text-[14px] font-semibold transition-colors border ${
                    active === key ? "text-on-dark border-transparent" : "text-ink-soft border-border hover:border-terrace"
                  }`}
                >
                  <Icon className="w-[15px] h-[15px]" />
                  {tabs[key].label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <p className="text-center text-[13.5px] font-medium text-ink-faint mt-5 max-w-[520px] mx-auto min-h-[2.6em]">{tab.caption}</p>

        <div className="mt-6 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 0.68, 0.32, 0.99] }}
              className="w-full max-w-[560px]"
            >
              {active === "parents" ? (
                <PhoneFrame>
                  <Screen />
                </PhoneFrame>
              ) : (
                <DeviceFrame title={tab.frameTitle}>
                  <Screen />
                </DeviceFrame>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
