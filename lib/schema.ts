// -----------------------------------------------------------------------------
// JSON-LD structured data generators. Do NOT add a fake business address.
// -----------------------------------------------------------------------------
import { BASE_URL, SITE, CONTACT } from "./site";
import type { FAQ, Service } from "./services";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: BASE_URL,
    email: CONTACT.email,
    telephone: CONTACT.telephoneE164,
    description: SITE.description,
    slogan: SITE.tagline,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/og.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONTACT.telephoneE164,
        contactType: "sales",
        email: CONTACT.email,
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+919068529250",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    founder: [
      { "@type": "Person", name: "Naveen Singh", jobTitle: "Founder & CEO" },
      { "@type": "Person", name: "Kaushik Singh", jobTitle: "Co-Founder & Technology Lead" },
    ],
    knowsAbout: [
      "Google Business Profile",
      "Local SEO",
      "Search Engine Optimization",
      "Website Development",
      "SaaS Development",
      "AI Automation",
      "Lead Generation",
    ],
    sameAs: [] as string[], // add social profile URLs when live
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: BASE_URL,
    publisher: { "@type": "Organization", name: SITE.name },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.intro,
    url: `${BASE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: BASE_URL,
      email: CONTACT.email,
      telephone: CONTACT.telephoneE164,
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function personSchema(p: {
  name: string;
  role: string;
  bio: string;
  photo: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    jobTitle: p.role,
    description: p.bio,
    image: `${BASE_URL}${p.photo}`,
    url: `${BASE_URL}/about#${p.slug}`,
    worksFor: { "@type": "Organization", name: SITE.name, url: BASE_URL },
  };
}

export function softwareApplicationSchema(app: {
  name: string;
  url: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: app.url,
    description: app.description,
    publisher: { "@type": "Organization", name: SITE.name, url: BASE_URL },
  };
}

export type Crumb = { name: string; url: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${BASE_URL}${c.url}`,
    })),
  };
}
