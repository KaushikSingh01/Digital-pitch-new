import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

// Real capability bar — no fabricated statistics, awards, or customer counts.
const ITEMS = [
  { label: "Google Business Profile & Local SEO", icon: "MapPin" },
  { label: "Web & SaaS Development", icon: "MonitorSmartphone" },
  { label: "AI Automation", icon: "Workflow" },
  { label: "Lead Generation Technology", icon: "Target" },
];

export function TrustBar() {
  return (
    <section aria-label="What DigitalPitch Technologies does" className="relative border-y border-white/5 bg-ink-950/60">
      <div className="container-x py-8 lg:py-10">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            DigitalPitch Technologies
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.07}>
              <div className="flex items-center gap-3 rounded-xl glass px-4 py-3">
                <Icon name={it.icon} className="h-5 w-5 shrink-0 text-cyan-300" />
                <span className="text-sm font-medium text-slate-200">{it.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-5 text-center text-sm text-slate-500">
            In-house product:{" "}
            <a
              href="https://gbplocalradar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-300 hover:text-cyan-200"
            >
              GBP LocalRadar ↗
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
