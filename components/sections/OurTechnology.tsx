import { ArrowUpRight } from "lucide-react";
import { LOCALRADAR } from "@/lib/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function OurTechnology() {
  return (
    <section id="our-technology" className="section-pad scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Technology"
          title={
            <>
              We Don&apos;t Just Use Technology.{" "}
              <span className="text-gradient-blue">We Build It.</span>
            </>
          }
          subtitle="DigitalPitch combines agency expertise with proprietary software development. Our technology team builds SaaS platforms, AI agents and automation workflows based on problems we encounter in real-world marketing and sales operations."
        />

        <div className="mt-14">
          <Reveal>
            <GlassCard glowBorder className="lg:!p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-electric-500/25 to-cyan-500/10 ring-1 ring-inset ring-white/10">
                      <Icon name="MapPin" className="h-6 w-6 text-cyan-300" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{LOCALRADAR.name}</h3>
                      <p className="text-sm text-slate-400">Google Maps Lead Discovery</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-1 font-medium text-green-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      {LOCALRADAR.status}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-slate-400">
                      Creator: {LOCALRADAR.creator}
                    </span>
                  </div>
                </div>
                <Button href={LOCALRADAR.url} variant="primary" size="md" external className="shrink-0">
                  Visit GBP LocalRadar
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
