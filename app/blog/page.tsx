import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on websites, SEO, Local SEO, Google Business Profile, AI agents, automation and lead generation from DigitalPitch Technologies.",
  alternates: { canonical: "/blog" },
};

// PLACEHOLDER blog topics — wire to a CMS or MDX when content is ready.
const TOPICS = [
  { title: "How to rank in the Google map pack", cat: "Local SEO" },
  { title: "Turning your website into a lead machine", cat: "Websites" },
  { title: "What an AI agent can do for your business", cat: "AI Agents" },
  { title: "Automations that save hours every week", cat: "AI Automation" },
  { title: "SEO basics every business owner should know", cat: "SEO" },
  { title: "Choosing domain, hosting and business email", cat: "Domain & Hosting" },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />

      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid mask-fade-b opacity-40" />
        <div className="container-x pb-14">
          <SectionHeading
            eyebrow="Blog"
            title={
              <>
                Insights To Help You{" "}
                <span className="text-gradient-blue">Grow</span>
              </>
            }
            subtitle="Practical guidance on getting found, converting visitors and automating your business. Articles are coming soon — topics below are placeholders."
          />
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.06}>
                <article className="flex h-full flex-col rounded-2xl glass p-6">
                  <span className="text-[11px] font-medium uppercase tracking-wide text-cyan-300">
                    {t.cat}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold text-white">{t.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-slate-400">
                    Coming soon — a practical guide for business owners.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500">
                    Coming soon
                  </span>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-col items-center gap-4 text-center">
              <p className="text-slate-300">Want help applying these ideas to your business?</p>
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
