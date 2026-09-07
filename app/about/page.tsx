import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { FOUNDERS, LOCALRADAR } from "@/lib/company";
import {
  breadcrumbSchema,
  personSchema,
  softwareApplicationSchema,
} from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Leadership } from "@/components/sections/Leadership";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description:
    "DigitalPitch Technologies brings marketing expertise and software engineering under one company — Google Business Profile, Local SEO, websites, SaaS, lead generation, AI agents and automation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
    ]),
    ...FOUNDERS.map((f) =>
      personSchema({ name: f.name, role: `${f.role} — ${f.focus}`, bio: f.bio, photo: f.photo, slug: f.slug }),
    ),
    softwareApplicationSchema({ name: LOCALRADAR.name, url: LOCALRADAR.url, description: LOCALRADAR.description }),
  ];

  return (
    <>
      <JsonLd data={schemas} />

      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid mask-fade-b opacity-40" />
        <div className="container-x pb-14">
          <SectionHeading
            eyebrow="About Us"
            title={
              <>
                We Build Digital{" "}
                <span className="text-gradient-blue">Growth Systems</span>
              </>
            }
            subtitle={`${SITE.name} brings together marketing expertise and software engineering under one company.`}
          />
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl glass p-7">
              <p className="text-sm leading-relaxed text-slate-300">
                Our work spans Google Business Profile management, Local SEO, search
                optimization, website development, SaaS products, lead generation, AI
                agents and business automation.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Rather than treating each service as a separate product, we connect them
                into systems designed to help businesses get discovered, capture
                opportunities and respond faster.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-2xl border-glow p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Our Product</p>
                <h2 className="mt-3 text-xl font-bold text-white">{LOCALRADAR.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {LOCALRADAR.tagline}
                </p>
              </div>
              <Button href={LOCALRADAR.url} variant="secondary" size="md" external className="mt-6 self-start">
                Visit GBP LocalRadar <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership (reused) */}
      <Leadership id="team" />

      <section className="section-pad pt-0">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-lg text-slate-300">Ready to build your growth engine?</p>
              <Button href="/contact" variant="primary" size="lg">
                Book Free Consultation <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
