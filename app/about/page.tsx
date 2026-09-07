import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description:
    "DigitalPitch Technologies is a digital growth agency combining websites, SEO, Google visibility, AI agents and automation into one connected growth engine.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { title: "Results Over Vanity", icon: "Target", desc: "We measure success in leads, customers and revenue — not clicks or impressions." },
  { title: "One Connected System", icon: "Layers", desc: "Websites, SEO, ads and AI work together, so each part amplifies the rest." },
  { title: "Transparency", icon: "BarChart3", desc: "Clear reporting and honest advice — you always know what's working and why." },
  { title: "Built To Scale", icon: "Rocket", desc: "We build infrastructure and automation designed to grow with your business." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />

      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid mask-fade-b opacity-40" />
        <div className="container-x pb-14">
          <SectionHeading
            eyebrow="About Us"
            title={
              <>
                Your Entire Digital{" "}
                <span className="text-gradient-blue">Growth Partner</span>
              </>
            }
            subtitle={`${SITE.name} helps businesses win online by combining high-converting websites, Google rankings, AI agents and automation into one connected growth engine.`}
          />
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl glass p-7">
              <h2 className="text-xl font-semibold text-white">Who we are</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                DigitalPitch Technologies is a digital marketing and technology agency.
                We bring together everything a modern business needs to grow online —
                website design and development, SEO and Local SEO, Google Business
                Profile optimization, AI agents, AI automation, lead generation, domain
                and hosting, and paid advertising.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Instead of juggling multiple freelancers and disconnected tools, our
                clients get one team that builds and runs a complete, connected growth
                system — and stays accountable to real results.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl glass p-7">
              <h2 className="text-xl font-semibold text-white">What drives us</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                We believe great marketing should be measurable, honest and built to
                compound. Every website we build is engineered to rank and convert;
                every campaign is tied to leads and revenue; and every automation is
                designed to save you time while capturing more customers.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Our mission is simple: help businesses get more visibility, more leads
                and more customers — with less manual work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading eyebrow="Our Values" title={<>How We Work</>} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 ring-1 ring-inset ring-white/10">
                    <Icon name={v.icon} className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-col items-center gap-4 text-center">
              <p className="text-lg text-slate-300">Ready to build your growth engine?</p>
              <Button href="/contact" variant="primary" size="lg">
                Book Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
