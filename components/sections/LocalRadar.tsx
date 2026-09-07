import { ArrowUpRight, MapPin, Search, ExternalLink } from "lucide-react";
import { LOCALRADAR } from "@/lib/company";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

function DemoCard() {
  const d = LOCALRADAR.demo;
  return (
    <div className="rounded-2xl glass-strong p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
          Live-style preview
        </span>
        <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-300">
          Demo Data
        </span>
      </div>

      {/* search bar */}
      <div className="grid gap-2 sm:grid-cols-3">
        <div className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-2 text-xs text-slate-300 ring-1 ring-inset ring-white/10 sm:col-span-2">
          <Search className="h-3.5 w-3.5 text-cyan-300" />
          {d.query}
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-2 text-xs text-slate-300 ring-1 ring-inset ring-white/10">
          <MapPin className="h-3.5 w-3.5 text-cyan-300" />
          {d.location}
        </div>
      </div>
      <p className="mt-2 text-[11px] text-slate-500">Radius: {d.radius}</p>

      {/* rows */}
      <div className="mt-3 overflow-hidden rounded-xl ring-1 ring-inset ring-white/10">
        {d.rows.map((r, i) => (
          <div
            key={r.name}
            className={`flex items-center justify-between gap-3 px-4 py-3 text-sm ${
              i % 2 ? "bg-white/[0.02]" : "bg-transparent"
            }`}
          >
            <div className="min-w-0">
              <p className="truncate font-medium text-slate-200">{r.name}</p>
              <p className="truncate text-xs text-slate-500">{r.category}</p>
            </div>
            <span className="shrink-0 rounded-full bg-electric-500/15 px-2.5 py-1 text-[10px] font-medium text-cyan-200">
              {r.signal}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-slate-600">
        Demonstration only — these are not real businesses, customers, or live search results.
      </p>
    </div>
  );
}

export function LocalRadar() {
  return (
    <section id="localradar" className="section-pad scroll-mt-24">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">Built by DigitalPitch</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Meet <span className="text-gradient-blue">GBP LocalRadar</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              {LOCALRADAR.tagline}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* left: description + features + CTAs */}
          <Reveal>
            <div>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                {LOCALRADAR.description}
              </p>
              <p className="mt-3 text-sm text-slate-500">
                Built by <span className="text-slate-300">{LOCALRADAR.creator}</span> — {LOCALRADAR.creatorRole}.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {LOCALRADAR.features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3 rounded-xl glass px-4 py-3">
                    <Icon name={f.icon} className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <div>
                      <p className="text-sm font-semibold text-white">{f.title}</p>
                      <p className="text-xs leading-relaxed text-slate-400">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href={LOCALRADAR.url} variant="primary" size="md" external>
                  Try GBP LocalRadar
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button href={LOCALRADAR.url} variant="secondary" size="md" external>
                  Explore The Tool
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>

          {/* right: demo card */}
          <Reveal delay={0.1}>
            <DemoCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
