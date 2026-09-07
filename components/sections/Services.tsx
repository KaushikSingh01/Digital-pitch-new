import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICE_CARDS } from "@/lib/services";
import { Icon } from "@/components/ui/Icon";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Everything Your Business Needs To{" "}
              <span className="text-gradient-blue">Grow Online</span>
            </>
          }
          subtitle="One partner for your websites, rankings, Google visibility, AI agents, automation and lead generation — all built to work together."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((card, i) => (
            <Reveal key={card.name} delay={(i % 3) * 0.06}>
              <GlassCard tilt glowBorder className="h-full">
                <div className="flex h-full flex-col">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 ring-1 ring-inset ring-white/10">
                    <Icon name={card.icon} className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{card.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {card.blurb}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
