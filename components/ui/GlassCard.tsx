"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  /** enable subtle 3D mouse tilt */
  tilt?: boolean;
  /** show animated gradient border */
  glowBorder?: boolean;
  /** cursor-tracked spotlight edge (on by default) */
  spotlight?: boolean;
};

export function GlassCard({
  children,
  className,
  tilt = false,
  glowBorder = false,
  spotlight = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    // spotlight position (always, if enabled)
    if (spotlight) {
      el.style.setProperty("--mx", `${((px + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${((py + 0.5) * 100).toFixed(1)}%`);
    }
    // optional tilt
    if (tilt) {
      const max = 6;
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-5px)`;
    }
  }

  function handleLeave() {
    if (!ref.current) return;
    if (tilt) ref.current.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative rounded-2xl p-6 transition-[transform,box-shadow] duration-300 will-change-transform",
        glowBorder ? "border-glow" : "glass",
        spotlight && "spotlight",
        "hover:shadow-card-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}
