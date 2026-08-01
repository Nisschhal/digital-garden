"use client";
/**
 * FlowField — canvas particle background, adapted for the Digital Garden hero.
 * Streams of small terrace-green / marigold particles drift through an organic
 * noise field while gently pulling toward the section's center — a visual for
 * "every scattered school workflow now converging into one place with AI."
 *
 * Sits transparently over the hero's existing light gradient (never paints an
 * opaque background of its own), stays confined to its parent's bounds rather
 * than the viewport, and is skipped entirely under prefers-reduced-motion.
 *
 * Adapted from the FlowField pattern by @dorian_baffier / kokonutui.com (MIT).
 */
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  speed: number;
  hue: number;
  life: number;
  maxLife: number;
}

// Two brand hue bands — terrace green and marigold — picked per-particle so
// streams read as "on brand" rather than a rainbow.
const HUE_BANDS = [
  { start: 132, range: 34 }, // terrace green
  { start: 28, range: 24 }, // marigold
] as const;

function fieldAngle(x: number, y: number, t: number): number {
  const s = 0.0025;
  return (
    Math.sin(x * s + t * 0.0007) * Math.PI +
    Math.cos(y * s + t * 0.0005) * Math.PI +
    Math.sin((x + y) * s * 0.6 + t * 0.0009) * Math.PI * 0.6 +
    Math.cos((x - y) * s * 0.4 + t * 0.0006) * Math.PI * 0.4
  );
}

export interface FlowFieldProps {
  className?: string;
  /** Skip mounting the animation entirely (prefers-reduced-motion). */
  reduced?: boolean;
  /** Roughly how many particles to draw; kept low — this is a hint, not a hero image. */
  count?: number;
}

export default function FlowField({ className, reduced = false, count = 130 }: FlowFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
    let width = 0;
    let height = 0;
    let animId = 0;
    let time = 0;
    let particles: Particle[] = [];

    const spawnParticle = (): Particle => {
      const band = HUE_BANDS[Math.floor(Math.random() * HUE_BANDS.length)];
      const maxLife = 260 + Math.floor(Math.random() * 260);
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 0.5 + Math.random() * 0.9,
        hue: band.start + Math.random() * band.range,
        life: Math.floor(Math.random() * maxLife),
        maxLife,
      };
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: count }, spawnParticle);
    };

    const render = () => {
      time++;
      // Erase (not paint) previous trails so the canvas stays fully transparent
      // and the hero's own light gradient always shows through underneath.
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      const cx = width / 2;
      const cy = height * 0.42;

      for (const p of particles) {
        const angle = fieldAngle(p.x, p.y, time);
        let vx = Math.cos(angle) * p.speed;
        let vy = Math.sin(angle) * p.speed;

        // Gentle pull toward the hero's optical center — everything
        // converging into one place, not just drifting at random.
        const dx = cx - p.x;
        const dy = cy - p.y;
        const dist = Math.hypot(dx, dy) || 1;
        vx += (dx / dist) * 0.1;
        vy += (dy / dist) * 0.1;

        p.x += vx;
        p.y += vy;
        p.life++;

        if (p.life > p.maxLife || p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
          p.life = 0;
          const band = HUE_BANDS[Math.floor(Math.random() * HUE_BANDS.length)];
          p.hue = band.start + Math.random() * band.range;
          continue;
        }

        const progress = p.life / p.maxLife;
        const fadeIn = Math.min(progress * 8, 1);
        const fadeOut = Math.min((1 - progress) * 6, 1);
        const alpha = fadeIn * fadeOut * 0.4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 62%, 46%, ${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    resize();
    render();

    const ro = new ResizeObserver(() => resize());
    ro.observe(parent);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [reduced, count]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
