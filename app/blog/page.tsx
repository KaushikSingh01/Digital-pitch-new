import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { POSTS } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on Google Business Profile, verification, Local SEO, Google Maps, AI automation and web development from DigitalPitch Technologies.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogPage() {
  const posts = [...POSTS].sort((a, b) => +new Date(b.date) - +new Date(a.date));

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
                <span className="text-gradient-blue">Get Found & Grow</span>
              </>
            }
            subtitle="Practical, no-fluff guides on Google Business Profile, verification, Local SEO, AI automation and building websites that convert."
          />
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-300">
                      {p.category}
                    </span>
                  </div>
                  <h2 className="mt-4 text-lg font-semibold leading-snug text-white group-hover:text-cyan-100">
                    {p.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                    <span>{formatDate(p.date)}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {p.readingTime}
                    </span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-col items-center gap-4 text-center">
              <p className="text-slate-300">Want help applying any of this to your business?</p>
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
