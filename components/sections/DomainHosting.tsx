import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const ITEMS = [
  { name: "Domain Registration", icon: "Globe" },
  { name: "DNS Setup", icon: "Layers" },
  { name: "SSL", icon: "Lock" },
  { name: "Cloud Hosting", icon: "Cloud" },
  { name: "Website Migration", icon: "RefreshCw" },
  { name: "Business Email", icon: "Mail" },
  { name: "Website Backups", icon: "Server" },
  { name: "Security", icon: "ShieldCheck" },
  { name: "Performance Optimization", icon: "Zap" },
];

// Futuristic cloud/server visual (CSS).
function CloudVisual() {
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center" aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-mesh blur-2xl" />
      <div className="relative flex flex-col items-center gap-4">
        <div className="grid h-20 w-20 place-items-center rounded-2xl glass-strong shadow-glow-cyan">
          <Icon name="Cloud" className="h-10 w-10 text-cyan-300" strokeWidth={1.4} />
        </div>
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex h-16 w-12 flex-col justify-around rounded-lg border border-white/10 bg-ink-800/80 p-2 motion-safe:animate-float"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              <span className="h-1.5 w-full rounded bg-cyan-400/60" />
              <span className="h-1.5 w-2/3 rounded bg-white/20" />
              <span className="h-1.5 w-full rounded bg-electric-500/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DomainHosting() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Domain & Hosting"
          title={
            <>
              Everything Under{" "}
              <span className="text-gradient-blue">One Roof</span>
            </>
          }
          subtitle="Fast, secure, managed cloud hosting with your domain, SSL, business email and backups — so your website stays fast, safe and online."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {ITEMS.map((item) => (
                <div key={item.name} className="flex items-center gap-3 rounded-xl glass px-4 py-3">
                  <Icon name={item.icon} className="h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="text-sm text-slate-200">{item.name}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard className="flex flex-col items-center text-center">
              <CloudVisual />
              <Button href="/services/domain-hosting" variant="primary" size="md" className="mt-4">
                Set Up My Hosting
                <ArrowRight className="h-4 w-4" />
              </Button>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
