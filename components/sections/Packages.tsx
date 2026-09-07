import { Check, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

// Pricing is intentionally NOT hard-coded — every quote is custom.
const PACKAGES = [
  {
    name: "STARTER",
    tagline: "For businesses establishing their online presence.",
    features: [
      "Professional website",
      "On-page SEO setup",
      "Google Business Profile setup",
      "Mobile optimization",
      "Basic analytics & tracking",
      "WhatsApp / contact integration",
    ],
    recommended: false,
  },
  {
    name: "GROWTH",
    tagline: "For businesses wanting consistent online growth and leads.",
    features: [
      "Everything in Starter",
      "Ongoing SEO & Local SEO",
      "Google Maps ranking",
      "Lead-generation campaigns",
      "Conversion optimization",
      "Monthly performance reporting",
    ],
    recommended: false,
  },
  {
    name: "AI GROWTH",
    tagline: "For businesses ready to automate marketing, leads and operations.",
    features: [
      "Everything in Growth",
      "Custom AI agent (24/7)",
      "AI automation workflows",
      "CRM & follow-up automation",
      "WhatsApp / email / SMS flows",
      "Priority support & strategy",
    ],
    recommended: true,
  },
];

export function Packages() {
  return (
    <section id="packages" className="section-pad scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Packages"
          title={
            <>
              Plans Built Around{" "}
              <span className="text-gradient-blue">Your Goals</span>
            </>
          }
          subtitle="Every business is different, so every quote is custom. Pick the direction that fits and we'll tailor the details."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300",
                  p.recommended
                    ? "border-glow shadow-glow-cyan lg:-translate-y-3"
                    : "glass hover:shadow-glow",
                )}
              >
                {p.recommended && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-electric-500 to-cyan-500 px-4 py-1 text-xs font-bold text-white shadow-glow">
                    <Sparkles className="h-3.5 w-3.5" />
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-bold tracking-tight text-white">{p.name}</h3>
                <p className="mt-2 min-h-[48px] text-sm text-slate-400">{p.tagline}</p>

                <div className="my-5 h-px w-full bg-white/10" />

                <ul className="flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={p.recommended ? "primary" : "secondary"}
                  size="md"
                  className="mt-7 w-full"
                >
                  Get Custom Quote
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
