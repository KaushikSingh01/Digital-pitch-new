"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { hasWebGL } from "./webgl";

// 3D scene is loaded only on the client, lazily, so it never blocks first paint.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <CoreFallback />,
});

// Floating service labels are real HTML (crawlable, accessible).
const LABELS: { text: string; className: string }[] = [
  { text: "SEO", className: "left-[6%] top-[14%]" },
  { text: "Websites", className: "right-[4%] top-[10%]" },
  { text: "Google", className: "left-[0%] top-[46%]" },
  { text: "AI Agents", className: "right-[0%] top-[40%]" },
  { text: "Automation", className: "right-[8%] bottom-[16%]" },
  { text: "Leads", className: "left-[10%] bottom-[12%]" },
  { text: "Hosting", className: "left-[38%] top-[2%]" },
  { text: "Marketing", className: "right-[30%] bottom-[3%]" },
];

// CSS-only glowing orb — used as fallback and while the scene loads.
function CoreFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
      <div className="relative h-52 w-52 sm:h-64 sm:w-64">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-500/40 via-cyan-500/30 to-violet-500/30 blur-2xl" />
        <div className="absolute inset-6 rounded-full border border-cyan-400/30 bg-ink-900/60 shadow-glow-cyan" />
        <div className="absolute inset-10 rounded-full border border-white/10 bg-gradient-to-br from-electric-500/20 to-transparent motion-safe:animate-float-slow" />
        <div className="absolute inset-[42%] rounded-full bg-cyan-400/70 blur-[2px] motion-safe:animate-pulse" />
      </div>
    </div>
  );
}

export function HeroVisual() {
  const reduce = useReducedMotion();
  const [webgl, setWebgl] = useState<boolean | null>(null);

  useEffect(() => {
    setWebgl(hasWebGL());
  }, []);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[560px]"
      role="img"
      aria-label="Interactive 3D network sphere connecting SEO, websites, Google, AI agents, automation, leads, hosting and marketing"
    >
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh blur-2xl" />

      {/* 3D scene, CSS fallback if no WebGL. Reduced motion => static-ish scene. */}
      {webgl === false ? <CoreFallback /> : webgl === true ? <HeroScene reduced={!!reduce} /> : <CoreFallback />}

      {/* Floating service labels (HTML, SEO-friendly) */}
      <ul className="pointer-events-none absolute inset-0">
        {LABELS.map((l, i) => (
          <li
            key={l.text}
            className={`absolute ${l.className}`}
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium text-slate-200 shadow-card motion-safe:animate-float">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
              {l.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
