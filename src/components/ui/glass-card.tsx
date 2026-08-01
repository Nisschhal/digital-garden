import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * GlassCard — the frosted, layered card treatment (outer soft frame + inner
 * blurred panel with a hairline border) adapted from the KokonutUI TweetCard
 * pattern, retoned to Digital Garden's paper/mist palette instead of
 * black/white. Used anywhere a small floating "card" needs that same
 * soothing, slightly-elevated glass feel — proof snippets, floating badges,
 * dropdown panels.
 */
export default function GlassCard({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl p-1",
        "bg-gradient-to-br from-ink/[0.04] to-ink/[0.01] dark:from-on-dark/[0.06] dark:to-on-dark/[0.015]",
        "shadow-[0_6px_20px_rgba(20,35,25,0.07)] dark:shadow-none",
        className
      )}
    >
      <div
        className={cn(
          "relative rounded-xl bg-paper-raised/90 backdrop-blur-md backdrop-saturate-150",
          "border border-mist-line",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
