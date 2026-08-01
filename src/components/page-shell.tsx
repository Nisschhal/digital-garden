"use client";
import { LangProvider } from "@/context/LangContext";
import useReducedMotion from "@/hooks/useReducedMotion";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import ScrollProgress from "@/components/ui/scroll-progress";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import TrustStrip from "@/components/trust-strip";
import PersonaSelector from "@/components/persona-selector";
import Problem from "@/components/problem";
import Grounding from "@/components/grounding";
import Wedge from "@/components/wedge";
import AIDemo from "@/components/ai-demo";
import ValueBlocks from "@/components/value-blocks";
import ProductTour from "@/components/product-tour";
import Modules from "@/components/modules";
import Gamify from "@/components/gamify";
import Security from "@/components/security";
import PricingTeaser from "@/components/pricing-teaser";
import Proof from "@/components/proof";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

function PageInner() {
  const reduced = useReducedMotion();
  useSmoothScroll(reduced);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <PersonaSelector />
        <Problem />
        <Grounding />
        <Wedge />
        <AIDemo />
        <ValueBlocks />
        <ProductTour />
        <Modules />
        <Gamify />
        <Security />
        <PricingTeaser />
        <Proof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default function PageShell() {
  return (
    <LangProvider>
      <PageInner />
    </LangProvider>
  );
}
