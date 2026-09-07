import type { Metadata } from "next";
import { MessageCircle, Phone, Mail, Globe } from "lucide-react";
import { SITE, BASE_URL, CONTACT } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCards } from "@/components/ui/ContactCards";
import { LeadForm } from "@/components/ui/LeadForm";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DigitalPitch Technologies. Book a free consultation for websites, SEO, Google visibility, AI agents and automation. WhatsApp, call or email us today.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />

      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid mask-fade-b opacity-40" />
        <div className="container-x pb-8">
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Let&apos;s Build Your{" "}
                <span className="text-gradient-blue">Growth Engine</span>
              </>
            }
            subtitle="Tell us what you want to grow, improve or automate. Our team will help you choose the right combination of websites, SEO, Google visibility and AI automation."
          />
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x">
          {/* Company summary */}
          <Reveal>
            <div className="rounded-2xl glass-strong p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white">{SITE.name}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <a href={CONTACT.whatsappPrimaryHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-slate-300 hover:text-white">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-500">WhatsApp</span>
                    <span className="break-words">{CONTACT.whatsappPrimaryDisplay}</span>
                  </span>
                </a>
                <a href={CONTACT.callIndiaHref} className="flex items-start gap-3 text-sm text-slate-300 hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-500">Call &amp; WhatsApp</span>
                    <span className="break-words">{CONTACT.indiaDisplay}</span>
                  </span>
                </a>
                <a href={CONTACT.emailHref} className="flex items-start gap-3 text-sm text-slate-300 hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-500">Email</span>
                    <span className="break-all">{CONTACT.email}</span>
                  </span>
                </a>
                <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-slate-300 hover:text-white">
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-500">Website</span>
                    <span className="break-all">{SITE.domainLabel}</span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pt-8">
        <div className="container-x grid gap-8 lg:grid-cols-5 lg:items-start">
          <Reveal className="lg:col-span-2">
            <div>
              <h2 className="mb-4 text-lg font-semibold text-white">Reach us directly</h2>
              <ContactCards />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
