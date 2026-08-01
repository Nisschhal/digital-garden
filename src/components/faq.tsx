"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { IconPlus } from "@/components/ui/icons";
import { useLang } from "@/context/LangContext";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <StaggerItem as="div" y={14} className="border-b border-border">
      <button className="w-full flex items-center justify-between gap-5 py-[22px] px-1 text-left font-semibold text-[16.5px]" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <span>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 text-terrace">
          <IconPlus className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 0.68, 0.32, 0.99] }} className="overflow-hidden">
            <p className="px-1 pb-6 text-ink-soft text-[15px] max-w-[64ch] leading-[1.65]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </StaggerItem>
  );
}

export default function FAQ() {
  const { t } = useLang();
  return (
    <section className="py-20 sm:py-24 md:py-[130px]">
      <div className="max-w-[760px] mx-auto px-5 sm:px-8">
        <Reveal as="p" className="flex items-center gap-2.5 text-[13px] font-bold tracking-[0.09em] uppercase text-terrace mb-4">
          <span className="w-[22px] h-[1.5px] bg-terrace inline-block" />
          {t.faq.eyebrow}
        </Reveal>
        <Reveal as="h2" delay={0.05} className="font-display font-medium text-[clamp(26px,3vw,38px)] leading-[1.14] tracking-[-0.01em]">
          {t.faq.headline}
        </Reveal>

        <StaggerGroup className="mt-10" stagger={0.06}>
          {t.faq.items.map((f) => (
            <FAQItem key={f.q} {...f} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
