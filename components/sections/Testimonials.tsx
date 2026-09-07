import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

// PLACEHOLDER TESTIMONIALS — these are NOT real customer reviews.
// Do not present as genuine. Replace with verified testimonials (with consent)
// before publishing real quotes.
const TESTIMONIALS = [
  {
    quote:
      "Placeholder testimonial — replace with a real, verified client quote. This space shows how a customer success story will appear.",
    name: "Client Name",
    role: "Business Owner",
  },
  {
    quote:
      "Placeholder testimonial — replace with a real, verified client quote once available. Example of feedback about results and support.",
    name: "Client Name",
    role: "Founder",
  },
  {
    quote:
      "Placeholder testimonial — replace with a real, verified client quote. Illustrates tone and length only, not an actual review.",
    name: "Client Name",
    role: "Marketing Manager",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What Clients Will{" "}
              <span className="text-gradient-blue">Say</span>
            </>
          }
          subtitle="The quotes below are placeholders shown for layout only — real, verified client testimonials will replace them."
        />

        <div className="mt-14 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 no-scrollbar lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className="min-w-[85%] snap-center sm:min-w-[60%] lg:min-w-0">
              <figure className="flex h-full flex-col rounded-2xl glass p-7">
                <Quote className="h-8 w-8 text-cyan-400/50" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-electric-500/30 to-cyan-500/20 text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{t.name}</span>
                    <span className="block text-xs text-slate-500">{t.role}</span>
                  </span>
                  <span className="ml-auto rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-300/90">
                    Placeholder
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
