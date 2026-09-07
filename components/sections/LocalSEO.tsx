import { ArrowRight, Star, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const ITEMS = [
  "Google Business Profile Optimization",
  "Google Maps SEO",
  "Local Citations",
  "Review Strategy",
  "Local Keyword Research",
  "GBP Content",
  "Local Landing Pages",
  "Competitor Analysis",
];

// Local-search-style visual (original illustration — not Google's UI).
function LocalSearchMock() {
  const results = [
    { name: "Your Business", rating: "5.0", featured: true },
    { name: "Competitor A", rating: "4.2", featured: false },
    { name: "Competitor B", rating: "4.0", featured: false },
  ];
  return (
    <div className="rounded-2xl glass-strong p-5" aria-hidden="true">
      <div className="flex items-center gap-2 rounded-xl bg-white/[0.04] px-4 py-2.5 text-sm text-slate-400 ring-1 ring-inset ring-white/10">
        <Icon name="Search" className="h-4 w-4 text-cyan-300" />
        <span>your service near me</span>
      </div>
      <div className="mt-4 space-y-2.5">
        {results.map((r) => (
          <div
            key={r.name}
            className={`flex items-center justify-between rounded-xl px-4 py-3 ring-1 ring-inset ${
              r.featured
                ? "bg-gradient-to-r from-electric-500/20 to-cyan-500/10 ring-cyan-400/40"
                : "bg-white/[0.02] ring-white/5"
            }`}
          >
            <div className="flex items-center gap-3">
              <MapPin className={`h-4 w-4 ${r.featured ? "text-cyan-300" : "text-slate-500"}`} />
              <span className={`text-sm font-medium ${r.featured ? "text-white" : "text-slate-400"}`}>
                {r.name}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-amber-300">
              <Star className="h-3.5 w-3.5 fill-amber-300" />
              {r.rating}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LocalSEO() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Google Business Profile & Local SEO"
          title={
            <>
              Get Found Where Customers Are{" "}
              <span className="text-gradient-blue">Searching</span>
            </>
          }
          subtitle="When people search for your service nearby, we make sure you're the business they find, trust and call first."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <GlassCard>
              <ul className="grid gap-3 sm:grid-cols-2">
                {ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Icon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/services/local-seo" variant="primary" size="md" className="mt-7">
                Improve My Google Ranking
                <ArrowRight className="h-4 w-4" />
              </Button>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <LocalSearchMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
