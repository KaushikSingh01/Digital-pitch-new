import Image from "next/image";
import { ExternalLink, TrendingUp, Link2, MapPin } from "lucide-react";
import { SEO_PORTFOLIO, SEO_PORTFOLIO_DATE } from "@/lib/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function SeoPortfolio() {
  return (
    <section id="portfolio" className="section-pad scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Historical SEO Portfolio"
          title={
            <>
              Selected Past{" "}
              <span className="text-gradient-blue">SEO Projects</span>
            </>
          }
          subtitle="Dated SEMrush snapshots from selected projects our team has worked on. Shown as historical evidence — not current performance claims."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SEO_PORTFOLIO.map((p, i) => (
            <Reveal key={p.domain} delay={(i % 2) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl glass">
                {/* Screenshot */}
                <a
                  href={p.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/9] w-full overflow-hidden bg-white"
                  aria-label={`Open full SEMrush snapshot for ${p.client}`}
                >
                  <Image
                    src={p.image}
                    alt={`SEMrush domain overview (March 2020) for ${p.domain} — historical SEO snapshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-ink-950/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-300 ring-1 ring-inset ring-white/10">
                    {SEO_PORTFOLIO_DATE}
                  </span>
                </a>

                {/* Details */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold text-white">{p.client}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                    <span className="text-slate-700">·</span>
                    <span className="truncate">{p.domain}</span>
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-inset ring-white/10">
                      <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-slate-500">
                        <TrendingUp className="h-3.5 w-3.5 text-cyan-300" /> Organic traffic
                      </p>
                      <p className="mt-1 text-xl font-bold text-white">{p.organicTraffic}</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-inset ring-white/10">
                      <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-slate-500">
                        <Link2 className="h-3.5 w-3.5 text-cyan-300" /> Backlinks
                      </p>
                      <p className="mt-1 text-xl font-bold text-white">{p.backlinks}</p>
                    </div>
                  </div>

                  <a
                    href={p.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                  >
                    View full snapshot <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-[11px] leading-relaxed text-slate-600">
            Historical SEMrush snapshots dated March 2020 from selected past projects. Presented as
            dated evidence of prior SEO work, not as guarantees or current performance. Third-party
            names and domains remain the property of their respective owners.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
