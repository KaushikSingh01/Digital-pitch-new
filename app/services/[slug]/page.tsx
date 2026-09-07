import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle, ArrowRight, ArrowLeft, AlertCircle, CheckCircle2 } from "lucide-react";
import { SERVICES, SERVICE_SLUGS, getService } from "@/lib/services";
import { BASE_URL, SITE, CONTACT, whatsappPrimaryWithMessage } from "@/lib/site";
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ContactCards } from "@/components/ui/ContactCards";
import { JsonLd } from "@/components/ui/JsonLd";

// Statically render all service pages at build time.
export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  const url = `/services/${service.slug}`;
  return {
    title: service.name,
    description: service.intro,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.name} | ${SITE.name}`,
      description: service.intro,
      url: `${BASE_URL}${url}`,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: service.name }],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const url = `/services/${service.slug}`;
  const schemas = [
    serviceSchema(service),
    faqSchema(service.faq),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/#services" },
      { name: service.name, url },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid mask-fade-b opacity-40" />
        <div className="container-x pb-14 lg:pb-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <li><Link href="/" className="hover:text-cyan-300">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/#services" className="hover:text-cyan-300">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-300">{service.name}</li>
            </ol>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="eyebrow">
                  <Icon name={service.icon} className="h-3.5 w-3.5" />
                  {service.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-gradient">{service.heading}</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
                  {service.intro}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                    {service.ctaLabel}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button href={whatsappPrimaryWithMessage} variant="whatsapp" size="lg" className="w-full sm:w-auto">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Visual */}
            <Reveal delay={0.1}>
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="pointer-events-none absolute inset-0 bg-mesh blur-2xl" />
                <div className="relative grid h-full place-items-center rounded-3xl glass-strong">
                  <div className="grid h-28 w-28 place-items-center rounded-3xl bg-gradient-to-br from-electric-500/30 to-cyan-500/10 shadow-glow-cyan ring-1 ring-inset ring-white/10">
                    <Icon name={service.icon} className="h-14 w-14 text-cyan-200" strokeWidth={1.3} />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Problems We Solve"
            title={<>The Challenges Holding Your Business Back</>}
            align="left"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.problems.map((p, i) => (
              <Reveal key={i} delay={(i % 2) * 0.06}>
                <div className="flex items-start gap-3 rounded-2xl glass p-5">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  <p className="text-sm text-slate-300">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            eyebrow="Benefits"
            title={<>What You Get With <span className="text-gradient-blue">{service.short}</span></>}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl glass p-6 transition-all duration-300 hover:shadow-glow">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 ring-1 ring-inset ring-white/10">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading eyebrow="How It Works" title={<>Our Simple, Proven Process</>} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.howItWorks.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.06}>
                <div className="relative h-full rounded-2xl glass p-6">
                  <span className="text-3xl font-black tracking-tighter text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Why Choose */}
      <section className="section-pad">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <GlassCard glowBorder className="h-full">
              <h2 className="text-xl font-semibold text-white">Features</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard className="h-full">
              <h2 className="text-xl font-semibold text-white">Why Choose DigitalPitch</h2>
              <ul className="mt-5 space-y-4">
                {service.whyChoose.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-500/15">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300" />
                    </span>
                    {w}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" size="md" className="mt-7">
                {service.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading eyebrow="FAQ" title={<>Frequently Asked Questions</>} />
          <div className="mt-12">
            <FAQAccordion faqs={service.faq} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border-glow px-6 py-14 sm:px-12">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh" />
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to get started with{" "}
                  <span className="text-gradient-blue">{service.short}</span>?
                </h2>
                <p className="mt-4 max-w-lg text-slate-300">
                  Book a free consultation or message us on WhatsApp — we&apos;ll map the
                  fastest path to results for your business.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact" variant="primary" size="lg">
                    {service.ctaLabel}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button href={whatsappPrimaryWithMessage} variant="whatsapp" size="lg">
                    <MessageCircle className="h-5 w-5" />
                    {CONTACT.whatsappPrimaryDisplay}
                  </Button>
                </div>
              </div>
              <ContactCards />
            </div>
          </div>

          {/* Related services */}
          <div className="mt-14">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Explore more services
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full glass px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {s.short}
                </Link>
              ))}
            </div>
            <Link
              href="/#services"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
