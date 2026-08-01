import type { ReactNode } from "react";

/**
 * The bordered-grid page rhythm: every section sits inside the same
 * 1180px column with hairline vertical rules on both sides (so the eye
 * always has a fixed edge to align to, the way Linear/Vercel-style docs
 * pages do), and the section's own content sits inside a rounded,
 * bordered card so the whole page reads as one consistent grid system
 * instead of independently-floating blocks.
 */
export function PageColumn({ children }: { children: ReactNode }) {
  return <div className="max-w-[1180px] mx-auto border-x border-border/70">{children}</div>;
}

export function SectionCard({
  children,
  className = "",
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={`mx-5 sm:mx-8 rounded-3xl border border-border bg-card ${padded ? "p-6 sm:p-10 md:p-14" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
