import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";

// PLACEHOLDER PROJECTS — replace with real case studies once available.
// Metrics are illustrative and clearly marked as placeholders.
type Project = {
  title: string;
  category: string;
  services: string[];
  result: string;
  placeholder: boolean;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    title: "Sample Home Services Co.",
    category: "Local Services",
    services: ["Website", "Local SEO", "AI Agent"],
    result: "Placeholder: illustrative lead-growth result",
    placeholder: true,
    accent: "from-electric-500/25 to-cyan-500/10",
  },
  {
    title: "Sample E-commerce Brand",
    category: "Retail / DTC",
    services: ["Website", "SEO", "Automation"],
    result: "Placeholder: illustrative revenue-growth result",
    placeholder: true,
    accent: "from-violet-500/25 to-electric-500/10",
  },
  {
    title: "Sample Clinic Group",
    category: "Healthcare",
    services: ["GBP", "Local SEO", "Lead Gen"],
    result: "Placeholder: illustrative bookings result",
    placeholder: true,
    accent: "from-cyan-500/25 to-violet-500/10",
  },
];

function Mockup({ accent }: { accent: string }) {
  return (
    <div className={`rounded-xl border border-white/10 bg-gradient-to-br ${accent} p-3`} aria-hidden="true">
      <div className="mb-2 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>
      <div className="space-y-2 rounded-lg bg-ink-950/40 p-3">
        <div className="h-2.5 w-1/3 rounded bg-white/25" />
        <div className="h-2 w-3/4 rounded bg-white/10" />
        <div className="h-2 w-2/3 rounded bg-white/10" />
        <div className="mt-2 h-5 w-20 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="section-pad scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Work That Drives{" "}
              <span className="text-gradient-blue">Real Growth</span>
            </>
          }
          subtitle="A preview of the kind of projects we build. Case studies below use placeholder examples until verified client results are published."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <GlassCard tilt className="h-full">
                <Mockup accent={p.accent} />
                <div className="mt-5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-300">
                      {p.category}
                    </span>
                    {p.placeholder && (
                      <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-300/90">
                        Placeholder
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.services.map((s) => (
                      <span key={s} className="text-xs text-slate-400">
                        {s}
                        <span className="mx-1 text-slate-700">·</span>
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-slate-400">{p.result}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500">
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
