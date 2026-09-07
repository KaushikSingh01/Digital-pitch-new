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
};

export function GlassCard({ children, className, tilt = false, glowBorder = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!tilt || reduce || !ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const max = 6; // degrees — restrained
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${(px * 100 + 50).toFixed(1)}%`);
    el.style.setProperty("--my", `${(py * 100 + 50).toFixed(1)}%`);
  }

  function handleLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative rounded-2xl p-6 transition-[transform,box-shadow] duration-300 will-change-transform",
        glowBorder ? "border-glow" : "glass",
        "hover:shadow-glow",
        className,
      )}
      style={
        {
          // radial highlight follows cursor when tilting
          backgroundImage: tilt
            ? "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(59,130,246,0.10), transparent 40%)"
            : undefined,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
