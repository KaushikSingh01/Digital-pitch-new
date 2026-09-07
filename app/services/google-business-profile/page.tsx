import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldAlert, CheckCircle2, MapPin } from "lucide-react";
import { BASE_URL, SITE, CONTACT, whatsappPrimaryWithMessage } from "@/lib/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { getService } from "@/lib/services";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";

const URL = "/services/google-business-profile";

export const metadata: Metadata = {
  title: "Google Business Profile Optimization & Local SEO",
  description:
    "DigitalPitch Technologies helps eligible businesses establish, optimize and strengthen their Google Business Profile across Google Search and Maps — from setup and verification preparation through ongoing Local SEO. No guaranteed rankings.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Google Business Profile Optimization & Local SEO | DigitalPitch Technologies",
    description:
      "From profile setup and verification preparation to ongoing Local SEO and performance improvement.",
    url: `${BASE_URL}${URL}`,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Google Business Profile services" }],
  },
};

type Stage = {
  no: string;
  title: string;
  heading?: string;
  intro?: string;
  items?: string[];
  purpose?: string;
  note?: string;
};

const STAGES: Stage[] = [
  {
    no: "01",
    title: "Business Eligibility & Profile Audit",
    items: [
      "Business model",
      "Existing Google listing",
      "Duplicate profiles",
      "Business name",
      "Address / service area",
      "Categories",
      "Website",
      "Phone",
      "Existing profile issues",
    ],
    purpose: "Identify potential problems before any changes are made.",
  },
  {
    no: "02",
    title: "Profile Setup or Claim",
    intro: "We support businesses that:",
    items: [
      "Need a new eligible Business Profile",
      "Have an existing unclaimed listing",
      "Need access to an existing profile",
      "Need ownership / manager configuration",
    ],
    note: "We do not claim to control Google approval.",
  },
  {
    no: "03",
    title: "Verification Preparation",
    heading: "Prepare Your Business For Google Verification",
    intro:
      "Google determines which verification methods are available for each Business Profile. DigitalPitch helps business owners prepare accurate business information and supporting business evidence before completing the verification option Google provides. Possible Google-selected methods may include video, phone/text, email, live video or other available methods.",
    note: "We manage the full verification process with you, end to end. Note: Google decides which verification method is offered and makes the final approval — we prepare everything to give your profile the best chance.",
  },
  {
    no: "04",
    title: "Profile Foundation",
    intro: "After verification, we optimize:",
    items: [
      "Business name accuracy",
      "Primary category",
      "Secondary categories",
      "Business description",
      "Address / service area",
      "Hours",
      "Phone",
      "Website",
      "Services",
      "Products (where applicable)",
      "Attributes",
      "Photos",
    ],
  },
  {
    no: "05",
    title: "Local SEO Optimization",
    heading: "Build Relevance Around The Searches That Matter",
    items: [
      "Local keyword research",
      "Competitor analysis",
      "Category strategy",
      "Service optimization",
      "Location relevance",
      "Website / GBP alignment",
      "Local landing pages",
      "On-page Local SEO",
      "Internal linking",
      "Structured data",
    ],
  },
  {
    no: "06",
    title: "Reputation & Engagement",
    items: [
      "Review strategy",
      "Review response guidance",
      "Photos",
      "Videos",
      "Google Posts (where appropriate)",
      "Q&A monitoring",
      "Profile updates",
      "Offer / service updates",
    ],
    note: "We never offer or generate fake reviews.",
  },
  {
    no: "07",
    title: "Local Authority",
    items: [
      "Citation consistency",
      "NAP consistency",
      "Relevant local directories",
      "Industry citations",
      "Website authority",
      "Local backlinks",
      "Brand mentions",
    ],
  },
  {
    no: "08",
    title: "Map Visibility Tracking",
    heading: "Track Visibility — Not Guesswork",
    items: [
      "Important local keywords",
      "Search visibility",
      "Profile interactions",
      "Calls",
      "Website clicks",
      "Directions (where available)",
      "Review growth",
      "Competitor movement",
    ],
  },
  {
    no: "09",
    title: "Ongoing Management",
    items: [
      "Profile monitoring",
      "Information updates",
      "New photos / content",
      "Review monitoring",
      "Competitive analysis",
      "Local SEO improvements",
      "Performance reporting",
    ],
  },
  {
    no: "10",
    title: "Profile Issue Support",
    items: [
      "Re-verification guidance",
      "Suspension / restriction assessment",
      "Duplicate profile issues",
      "Ownership problems",
      "Profile edits",
      "Google support documentation preparation",
    ],
    note: "We do not promise reinstatement.",
  },
];

// Illustrative ranking-grid placeholder (not real rankings).
function RankingGrid() {
  const cells = Array.from({ length: 25 });
  return (
    <div className="rounded-2xl glass-strong p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-cyan-300">Local ranking grid</span>
        <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-300">Placeholder</span>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {cells.map((_, i) => (
          <div
            key={i}
            className="grid aspect-square place-items-center rounded-lg text-[11px] font-bold text-white/80"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.35), rgba(6,182,212,0.20))",
            }}
          >
            <span className="opacity-40">–</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-slate-600">
        Visual placeholder — connects to real geo-grid ranking data once tracking is set up. No rankings are fabricated.
      </p>
    </div>
  );
}

export default function GBPPage() {
  const svc = getService("google-business-profile");
  const faqs = svc?.faq ?? [];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Google Business Profile Optimization & Local SEO",
      name: "Google Business Profile Optimization & Local SEO",
      description: metadata.description,
      url: `${BASE_URL}${URL}`,
      provider: { "@type": "Organization", name: SITE.name, url: BASE_URL, email: CONTACT.email, telephone: CONTACT.telephoneE164 },
      areaServed: { "@type": "Place", name: "Local & Worldwide" },
    },
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/#services" },
      { name: "Google Business Profile", url: URL },
    ]),
    ...(faqs.length ? [faqSchema(faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={schemas} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid mask-fade-b opacity-40" />
        <div className="container-x pb-14 lg:pb-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <li><Link href="/" className="hover:text-cyan-300">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/#services" className="hover:text-cyan-300">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-300">Google Business Profile</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Google Business Profile & Local SEO</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient">Google Business Profile — From Setup To Local Growth</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
                Your Google Business Profile is often the first interaction a local customer has with
                your business. DigitalPitch Technologies helps eligible businesses establish, optimize
                and strengthen their presence across Google Search and Maps — from initial profile setup
                and verification preparation through ongoing Local SEO and performance improvement.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary" size="lg">
                  Get GBP Audit <ArrowRight className="h-5 w-5" />
                </Button>
                <Button href={whatsappPrimaryWithMessage} variant="whatsapp" size="lg">
                  <MessageCircle className="h-5 w-5" /> WhatsApp Naveen
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="The GBP Journey"
            title={<>A Clear, Compliant Path To <span className="text-gradient-blue">Local Visibility</span></>}
            subtitle="Ten stages, from eligibility and setup through ongoing management and issue support."
          />

          <div className="mt-14 space-y-5">
            {STAGES.map((s, i) => (
              <Reveal key={s.no} delay={(i % 2) * 0.05}>
                <GlassCard className="lg:!p-7">
                  <div className="grid gap-5 lg:grid-cols-[auto,1fr] lg:gap-8">
                    <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                      <span className="text-4xl font-black tracking-tighter text-white/10">{s.no}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                      {s.heading && <p className="mt-1 text-sm font-medium text-cyan-300">{s.heading}</p>}
                      {s.intro && <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.intro}</p>}

                      {s.items && (
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                          {s.items.map((it) => (
                            <li key={it} className="flex items-start gap-2 text-sm text-slate-300">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                              {it}
                            </li>
                          ))}
                        </ul>
                      )}

                      {s.no === "08" && (
                        <div className="mt-5 max-w-md">
                          <RankingGrid />
                        </div>
                      )}

                      {s.purpose && (
                        <p className="mt-4 text-sm text-slate-400"><span className="font-semibold text-slate-300">Purpose:</span> {s.purpose}</p>
                      )}

                      {s.note && (
                        <p className="mt-4 flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm text-amber-200/90">
                          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
                          {s.note}
                        </p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust message */}
      <section className="section-pad pt-0">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl border-glow p-8 text-center sm:p-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                No Shortcuts. <span className="text-gradient-blue">No Ranking Guarantees.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Google local results are algorithmic. DigitalPitch focuses on legitimate profile
                optimization, stronger local relevance, accurate business information, reputation
                signals and broader local authority. We do not sell guaranteed #1 rankings or
                guaranteed Google approvals.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad pt-0">
        <div className="container-x">
          <div className="rounded-3xl glass-strong p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Need Help With Your Google Business Profile?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-400">
              Get a profile audit or message Naveen directly — we&apos;ll review your listing and map the
              fastest compliant path to more local visibility.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Get GBP Audit <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href={whatsappPrimaryWithMessage} variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" /> WhatsApp Naveen
              </Button>
              <a
                href={CONTACT.whatsappIndiaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-cyan-300 hover:text-cyan-200"
              >
                or India: {CONTACT.indiaDisplay} ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
