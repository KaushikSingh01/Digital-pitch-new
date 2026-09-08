"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

type Slide = {
  eyebrow: string;
  title: string;
  highlight: string;
  desc: string;
  icon: string;
  cta: { label: string; href: string };
  accent: "blue" | "cyan" | "violet" | "green";
};

const SLIDES: Slide[] = [
  {
    eyebrow: "Our Specialty",
    title: "Google Business Profile —",
    highlight: "Setup To Verified",
    desc: "We handle the full Google Business Profile process end to end: setup, verification preparation and ongoing optimization, so you show up on Search and Maps.",
    icon: "Store",
    cta: { label: "See Our GBP Process", href: "/services/google-business-profile" },
    accent: "blue",
  },
  {
    eyebrow: "Local SEO",
    title: "Win The",
    highlight: "Google Map Pack",
    desc: "Rank where nearby customers are searching. We optimise your profile, reviews, citations and local relevance to drive calls and visits.",
    icon: "MapPin",
    cta: { label: "Improve Local Ranking", href: "/services/local-seo" },
    accent: "cyan",
  },
  {
    eyebrow: "Web & SaaS",
    title: "Websites & Software",
    highlight: "Built To Convert",
    desc: "Fast, modern websites and custom SaaS tools — engineered to rank on Google and turn visitors into enquiries.",
    icon: "MonitorSmartphone",
    cta: { label: "Build My Website", href: "/services/website-development" },
    accent: "violet",
  },
  {
    eyebrow: "AI Automation",
    title: "Put Your Business",
    highlight: "On Autopilot",
    desc: "AI agents and automations that answer instantly, qualify leads, book appointments and follow up — around the clock.",
    icon: "Workflow",
    cta: { label: "Automate My Business", href: "/services/ai-automation" },
    accent: "green",
  },
];

const ACCENT: Record<Slide["accent"], string> = {
  blue: "from-electric-500/30 to-cyan-500/10",
  cyan: "from-cyan-500/30 to-electric-500/10",
  violet: "from-violet-500/30 to-electric-500/10",
  green: "from-emerald-500/25 to-cyan-500/10",
};

export function ShowcaseSlider() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();
  const paused = useRef(false);

  const go = useCallback((next: number, d: number) => {
    setDir(d);
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(t);
  }, [reduce]);

  const s = SLIDES[index];

  return (
    <section aria-roledescription="carousel" aria-label="Service showcase" className="section-pad pt-8">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-3xl border-glow"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh" />

          <div className="relative min-h-[360px] px-6 py-12 sm:px-10 lg:min-h-[380px] lg:px-14">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: reduce ? 0 : dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reduce ? 0 : dir * -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid items-center gap-8 lg:grid-cols-2"
              >
                <div>
                  <span className="eyebrow">{s.eyebrow}</span>
                  <h2 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    {s.title}{" "}
                    <span className="text-gradient-blue">{s.highlight}</span>
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">{s.desc}</p>
                  <Button href={s.cta.href} variant="primary" size="lg" className="mt-7">
                    {s.cta.label}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>

                {/* Visual */}
                <div className="relative mx-auto grid aspect-square w-full max-w-xs place-items-center lg:max-w-sm">
                  <div className={cn("absolute inset-6 rounded-full bg-gradient-to-br blur-2xl", ACCENT[s.accent])} />
                  <div className="relative grid h-32 w-32 place-items-center rounded-3xl glass-strong shadow-glow-cyan ring-1 ring-inset ring-white/10 sm:h-40 sm:w-40">
                    <Icon name={s.icon} className="h-16 w-16 text-cyan-200 sm:h-20 sm:w-20" strokeWidth={1.2} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2" role="tablist" aria-label="Choose slide">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => go(i, i > index ? 1 : -1)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === index ? "w-8 bg-cyan-400" : "w-2 bg-white/20 hover:bg-white/40",
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(index - 1, -1)}
                  aria-label="Previous slide"
                  className="grid h-10 w-10 place-items-center rounded-full glass text-slate-200 transition-colors hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => go(index + 1, 1)}
                  aria-label="Next slide"
                  className="grid h-10 w-10 place-items-center rounded-full glass text-slate-200 transition-colors hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
