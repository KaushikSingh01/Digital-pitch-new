import { Star, Quote, MessageCircle } from "lucide-react";
import { REVIEWS } from "@/lib/company";
import { REVIEW_URL, whatsappPrimaryWithMessage } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-slate-600"}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const hasReviews = REVIEWS.length > 0;
  const reviewHref = REVIEW_URL || whatsappPrimaryWithMessage;

  return (
    <section id="reviews" className="section-pad scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Reviews"
          title={
            <>
              What Clients{" "}
              <span className="text-gradient-blue">Say</span>
            </>
          }
          subtitle="Verified reviews from businesses we've worked with."
        />

        {hasReviews ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={i} delay={(i % 3) * 0.07}>
                <figure className="flex h-full flex-col rounded-2xl glass p-6">
                  <div className="flex items-center justify-between">
                    <Stars rating={r.rating} />
                    <Quote className="h-6 w-6 text-cyan-400/40" aria-hidden="true" />
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-electric-500/30 to-cyan-500/20 text-sm font-bold text-white">
                      {r.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{r.name}</span>
                      {(r.location || r.date) && (
                        <span className="block text-xs text-slate-500">
                          {[r.location, r.date].filter(Boolean).join(" · ")}
                        </span>
                      )}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          // Honest state — no fabricated reviews. Invites real Google reviews.
          <Reveal>
            <div className="mx-auto mt-14 max-w-2xl rounded-2xl border-glow p-8 text-center sm:p-10">
              <div className="mx-auto mb-4 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="text-xl font-semibold text-white">Worked with us? We&apos;d love your review.</h3>
              <p className="mx-auto mt-3 max-w-md text-sm text-slate-400">
                We only publish real, verified client reviews here. If we&apos;ve helped your business,
                leaving a review takes a minute and means a lot.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={reviewHref} variant="primary" size="md" external={!!REVIEW_URL}>
                  <Star className="h-4 w-4" /> Leave a Review
                </Button>
                <Button href={whatsappPrimaryWithMessage} variant="whatsapp" size="md">
                  <MessageCircle className="h-4 w-4" /> Message Us
                </Button>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
