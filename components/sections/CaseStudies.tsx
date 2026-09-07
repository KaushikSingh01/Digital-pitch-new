import { Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

// Reusable case-study architecture. NO invented results.
// Each slot supports: category, location, challenge, starting situation, work,
// period, result, before/after/maps/website screenshots, testimonial, date.
// Until real data is entered, cards render "Case Study Coming Soon".
export type CaseStudy = {
  category: string;
  location?: string;
  challenge?: string;
  startingSituation?: string;
  work?: string;
  period?: string;
  result?: string;
  beforeImage?: string;
  afterImage?: string;
  mapsImage?: string;
  websiteImage?: string;
  testimonial?: string;
  date?: string;
  published?: boolean; // false until real, verified data is added
};

// Placeholder slots — flip `published: true` and fill fields when real data exists.
const CASE_STUDIES: CaseStudy[] = [
  { category: "Local Services", published: false },
  { category: "Google Business Profile", published: false },
  { category: "Website & SEO", published: false },
];

export function CaseStudies() {
  return (
    <section id="portfolio" className="section-pad scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Case Studies"
          title={
            <>
              Real Work, <span className="text-gradient-blue">Real Results</span>
            </>
          }
          subtitle="We publish case studies only with real, verified client data — no invented numbers. Detailed studies are being prepared and will appear here."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <article className="flex h-full flex-col rounded-2xl glass p-6">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-300">
                  {c.category}
                </span>
                {c.published ? (
                  <>
                    <h3 className="mt-4 text-lg font-semibold text-white">{c.category}</h3>
                    <p className="mt-2 text-sm text-slate-400">{c.result}</p>
                  </>
                ) : (
                  <div className="mt-4 flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-4 py-10 text-center">
                    <Clock className="h-7 w-7 text-slate-600" />
                    <p className="mt-3 text-sm font-semibold text-slate-300">Case Study Coming Soon</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Verified results will be published here.
                    </p>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
