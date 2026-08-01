"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import { useLang } from "@/context/LangContext";
import { LogoMark, IconChevron, IconMenu, IconClose } from "@/components/ui/icons";
import MagneticButton from "@/components/ui/magnetic-button";
import GlassCard from "@/components/ui/glass-card";
import { Sun, Moon } from "lucide-react";

const schoolHrefs = ["teachers.html", "parents.html", "students.html"];

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const schoolLinks = schoolHrefs.map((href, i) => ({ href, label: t.nav.schoolLinks[i] }));

  return (
    <header className="sticky top-0 z-100 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-6 py-4">
        <a href="#main" className="flex items-center gap-2.5 font-display font-semibold text-[19px] tracking-tight shrink-0">
          <motion.span
            className="inline-block"
            animate={{ rotate: [0, -4, 0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <LogoMark className="w-[26px] h-[26px]" />
          </motion.span>
          <span>{t.brand}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[14.5px] font-medium">
            <li><a href="product.html" className="text-ink-soft hover:text-ink transition-colors">{t.nav.product}</a></li>
            <li className="relative group">
              <button className="flex items-center gap-1.5 text-ink-soft hover:text-ink transition-colors" aria-expanded="false" aria-haspopup="true">
                <span>{t.nav.schools}</span>
                <IconChevron className="w-[11px] h-[11px] transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 min-w-[190px] opacity-0 invisible -translate-y-1.5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
                <GlassCard innerClassName="p-2">
                  {schoolLinks.map((l) => (
                    <a key={l.href} href={l.href} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-ink hover:bg-mist hover:text-terrace-deep">
                      {l.label}
                    </a>
                  ))}
                </GlassCard>
              </div>
            </li>
            <li><a href="ai-features.html" className="text-ink-soft hover:text-ink transition-colors">{t.nav.ai}</a></li>
            <li><a href="pricing.html" className="text-ink-soft hover:text-ink transition-colors">{t.nav.pricing}</a></li>
            <li><a href="about.html" className="text-ink-soft hover:text-ink transition-colors">{t.nav.about}</a></li>
            <li><a href="contact.html" className="text-ink-soft hover:text-ink transition-colors">{t.nav.contact}</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-ink-soft hover:text-ink hover:border-terrace transition-colors"
          >
            {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <div className="hidden sm:flex items-center border border-border rounded-full p-[3px] text-[13px] font-semibold bg-card" role="group" aria-label="Language">
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-3 py-1 rounded-full transition-colors ${lang === "en" ? "bg-mist text-terrace-deep" : "text-ink-faint"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("ne")}
              aria-pressed={lang === "ne"}
              className={`px-3 py-1 rounded-full transition-colors ${lang === "ne" ? "bg-mist text-terrace-deep" : "text-ink-faint"}`}
            >
              नेपाली
            </button>
          </div>

          <MagneticButton
            as="a"
            href="demo.html"
            strength={10}
            className="hidden sm:inline-flex items-center gap-2 bg-terrace text-on-dark font-semibold text-[15px] px-6 py-3 rounded-full shadow-[0_1px_2px_rgba(20,35,25,0.08)] hover:bg-terrace-deep transition-colors"
          >
            {t.nav.ctaDemo}
          </MagneticButton>

          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 0.68, 0.32, 0.99] }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <ul className="p-4 flex flex-col text-[15px] font-medium">
              <li><a href="product.html" className="block py-3.5 border-b border-border">{t.nav.product}</a></li>
              <li>
                <button
                  className="w-full flex items-center justify-between py-3.5 border-b border-border"
                  onClick={() => setDropdownOpen((v) => !v)}
                  aria-expanded={dropdownOpen}
                >
                  <span>{t.nav.schools}</span>
                  <IconChevron className={`w-[11px] h-[11px] transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4"
                    >
                      {schoolLinks.map((l) => (
                        <a key={l.href} href={l.href} className="block py-2.5 text-ink-soft">{l.label}</a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li><a href="ai-features.html" className="block py-3.5 border-b border-border">{t.nav.ai}</a></li>
              <li><a href="pricing.html" className="block py-3.5 border-b border-border">{t.nav.pricing}</a></li>
              <li><a href="about.html" className="block py-3.5 border-b border-border">{t.nav.about}</a></li>
              <li><a href="contact.html" className="block py-3.5 border-b border-border">{t.nav.contact}</a></li>
              <li className="pt-4"><a href="demo.html" className="block text-center bg-terrace text-on-dark font-semibold text-[15px] px-6 py-3 rounded-full">{t.nav.ctaDemo}</a></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
