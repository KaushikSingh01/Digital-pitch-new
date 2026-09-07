// -----------------------------------------------------------------------------
// Central site configuration. All contact details live here so they stay
// consistent across every component and page. Do NOT hard-code contact info
// anywhere else — import from this file.
// -----------------------------------------------------------------------------

export const SITE = {
  name: "DigitalPitch Technologies",
  shortName: "DigitalPitch",
  tagline: "Build. Rank. Automate. Grow.",
  description:
    "DigitalPitch Technologies builds the entire online growth engine for businesses — high-converting websites, Google rankings, Local SEO, AI agents, automation and lead generation.",
  url: "https://digitalpitchtech.com",
  domainLabel: "digitalpitchtech.com",
  locale: "en_US",
} as const;

// Base URL resolves from env in production, falls back to canonical domain.
export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || SITE.url;

// -----------------------------------------------------------------------------
// Contact details — single source of truth.
// -----------------------------------------------------------------------------

export const CONTACT = {
  email: "info@digitalpitchtech.com",
  emailHref: "mailto:info@digitalpitchtech.com",

  // Primary WhatsApp (Cyprus number)
  whatsappPrimaryDisplay: "+357 94 569450",
  whatsappPrimaryHref: "https://wa.me/35794569450",

  // India — Call & WhatsApp
  indiaDisplay: "+91 90685 29250",
  whatsappIndiaHref: "https://wa.me/919068529250",
  callIndiaHref: "tel:+919068529250",

  // Schema / structured-data telephone (E.164)
  telephoneE164: "+35794569450",
} as const;

// Pre-filled WhatsApp message (URL-encoded when used).
export const WHATSAPP_MESSAGE =
  "Hello DigitalPitch Technologies, I'm interested in your digital services and would like to discuss my business.";

export const whatsappPrimaryWithMessage = `${CONTACT.whatsappPrimaryHref}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const whatsappIndiaWithMessage = `${CONTACT.whatsappIndiaHref}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "AI Solutions", href: "/#ai-agents" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// Footer service links map to real service routes.
export const FOOTER_SERVICES: NavItem[] = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "SEO", href: "/services/seo" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Google Business Profile", href: "/services/google-business-profile" },
  { label: "AI Agents", href: "/services/ai-agents" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "Domain & Hosting", href: "/services/domain-hosting" },
];

export const FOOTER_COMPANY: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LEGAL: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

// Social placeholders — replace href values when accounts are live.
export type SocialItem = { label: string; href: string; icon: string };
export const SOCIALS: SocialItem[] = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "X (Twitter)", href: "#", icon: "twitter" },
  { label: "YouTube", href: "#", icon: "youtube" },
];

// Lead-form service dropdown options.
export const SERVICE_OPTIONS = [
  "Digital Marketing",
  "Website Development",
  "SEO",
  "Local SEO",
  "Google Business Profile",
  "AI Agent",
  "AI Automation",
  "Lead Generation",
  "Domain & Hosting",
  "Google Ads",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under $500 / mo",
  "$500 – $1,500 / mo",
  "$1,500 – $5,000 / mo",
  "$5,000+ / mo",
  "One-time project",
] as const;
