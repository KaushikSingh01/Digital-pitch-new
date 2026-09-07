"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const CAPS = [
  "Technical SEO",
  "On-Page SEO",
  "Local SEO",
  "Content Strategy",
  "Backlinks",
  "Keyword Research",
  "Competitor Analysis",
  "SEO Reporting",
];

// Illustrative ranking climb — NOT a guaranteed-ranking claim.
const RANKS = [
  { pos: 27, w: "22%" },
  { pos: 12, w: "48%" },
  { pos: 5, w: "76%" },
  { pos: 1, w: "100%" },
];

function RankingClimb() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="rounded-2xl glass-strong p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
        Illustrative ranking progress
      </p>
      <div className="mt-5 space-y-4">
        {RANKS.map((r, i) => (
          <div key={r.pos} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-sm text-slate-400">Position {r.pos}</span>
            <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/[0.04]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-electric-500 to-cyan-400 transition-[width] duration-1000 ease-out"
                style={{ width: inView ? r.w : "0%", transitionDelay: `${i * 180}ms` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[11px] leading-relaxed text-slate-600">
        For illustration only. Rankings depend on many factors and cannot be guaranteed.
      </p>
    </div>
  );
}

export function SEOSection() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="SEO"
          title={
            <>
              Turn Search Traffic Into{" "}
              <span className="text-gradient-blue">Customers</span>
            </>
          }
          subtitle="Technical fixes, on-page optimization, content and authority-building that grow rankings for the keywords that drive real enquiries."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <GlassCard>
              <ul className="grid gap-3 sm:grid-cols-2">
                {CAPS.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <Icon name="CheckCircle2" className="h-4 w-4 shrink-0 text-cyan-400" />
                    {c}
                  </li>
                ))}
              </ul>
              <Button href="/services/seo" variant="primary" size="md" className="mt-7">
                Improve My Rankings
                <ArrowRight className="h-4 w-4" />
              </Button>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <RankingClimb />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
