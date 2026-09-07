import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const FEATURES = [
  "Responsive Design",
  "SEO Ready",
  "Fast Loading",
  "Lead Generation Focused",
  "Mobile Optimized",
  "Modern UI/UX",
  "Analytics",
  "Conversion Tracking",
];

// Floating device mockups (pure CSS — lightweight).
function DeviceMockups() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-xl" aria-hidden="true">
      {/* Desktop */}
      <div className="absolute left-0 top-4 w-[78%] motion-safe:animate-float-slow">
        <div className="rounded-t-xl border border-white/10 bg-ink-800/80 p-2 shadow-glow">
          <div className="mb-2 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-amber-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
          </div>
          <div className="space-y-2 rounded-lg bg-gradient-to-br from-electric-500/10 to-transparent p-3">
            <div className="h-3 w-1/3 rounded bg-cyan-400/40" />
            <div className="h-2 w-3/4 rounded bg-white/10" />
            <div className="h-2 w-2/3 rounded bg-white/10" />
            <div className="mt-3 h-6 w-24 rounded-full bg-gradient-to-r from-electric-500 to-cyan-500" />
          </div>
        </div>
        <div className="mx-auto h-3 w-1/4 rounded-b bg-ink-700" />
      </div>
      {/* Tablet */}
      <div className="absolute bottom-2 left-[6%] w-[34%] motion-safe:animate-float">
        <div className="rounded-xl border border-white/10 bg-ink-800/90 p-2 shadow-card">
          <div className="space-y-1.5 rounded-lg bg-white/[0.03] p-2">
            <div className="h-2 w-1/2 rounded bg-violet-400/40" />
            <div className="h-1.5 w-full rounded bg-white/10" />
            <div className="h-1.5 w-4/5 rounded bg-white/10" />
          </div>
        </div>
      </div>
      {/* Phone */}
      <div className="absolute bottom-0 right-2 w-[22%] motion-safe:animate-float-slow">
        <div className="rounded-2xl border border-white/10 bg-ink-800/95 p-1.5 shadow-glow-cyan">
          <div className="space-y-1.5 rounded-xl bg-gradient-to-b from-cyan-500/10 to-transparent p-2">
            <div className="h-1.5 w-2/3 rounded bg-cyan-400/50" />
            <div className="h-1.5 w-full rounded bg-white/10" />
            <div className="h-4 w-full rounded-full bg-gradient-to-r from-electric-500 to-cyan-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WebDev() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Website Development"
          title={
            <>
              Websites Designed To{" "}
              <span className="text-gradient-blue">Convert</span>
            </>
          }
          subtitle="Fast, modern, mobile-first websites with clear messaging and strong calls to action — built to rank on Google and turn visitors into enquiries."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <DeviceMockups />
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 rounded-xl glass px-4 py-3 text-sm text-slate-200">
                    <Icon name="CheckCircle2" className="h-4 w-4 shrink-0 text-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href="/services/website-development" variant="primary" size="md" className="mt-7">
                Build My Website
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
