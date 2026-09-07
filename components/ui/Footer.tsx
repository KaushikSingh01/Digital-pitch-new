import Link from "next/link";
import { Linkedin, Instagram, Facebook, Twitter, Youtube, MessageCircle, Phone, Mail, Globe } from "lucide-react";
import {
  SITE,
  CONTACT,
  FOOTER_SERVICES,
  FOOTER_COMPANY,
  FOOTER_LEGAL,
  SOCIALS,
  whatsappPrimaryWithMessage,
} from "@/lib/site";
import { Logo } from "./Logo";

const socialIcons: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {SITE.tagline}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Your entire digital growth stack — Google Business Profile, SEO,
              websites, SaaS and AI automation — under one roof.
            </p>
            <a
              href="https://gbplocalradar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-cyan-300 transition-colors hover:text-cyan-200"
            >
              Our product: GBP LocalRadar ↗
            </a>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => {
                const I = socialIcons[s.icon] ?? Globe;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl glass text-slate-300 transition-colors hover:text-white"
                  >
                    <I className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_SERVICES.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_COMPANY.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LEGAL.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={whatsappPrimaryWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-500">WhatsApp</span>
                    <span className="break-words">{CONTACT.whatsappPrimaryDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.callIndiaHref}
                  className="group flex items-start gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-500">Call &amp; WhatsApp</span>
                    <span className="break-words">{CONTACT.indiaDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="group flex items-start gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-500">Email</span>
                    <span className="break-all">{CONTACT.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-500">Website</span>
                    <span className="break-all">{SITE.domainLabel}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs font-medium tracking-wide text-slate-500">
            {SITE.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
