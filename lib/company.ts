// -----------------------------------------------------------------------------
// Real company data: leadership and the in-house SaaS product (GBP LocalRadar).
// No fabricated stats, awards, or credentials. Photos are the founders' own.
// -----------------------------------------------------------------------------
import { CONTACT } from "./site";

export const LOCALRADAR_URL = "https://gbplocalradar.com/";

export interface Founder {
  slug: string;
  name: string;
  role: string;
  focus: string;
  photo: string;
  bio: string;
  expertise: string[];
  note?: string;
  linkedin: string; // placeholder "#" until real profile is added
  whatsapp: string;
  whatsappLabel: string;
}

export const FOUNDERS: Founder[] = [
  {
    slug: "naveen-singh",
    name: "Naveen Singh",
    role: "Founder & CEO",
    focus: "Google Business Profile & Local SEO Lead",
    photo: "/team-naveen.jpg",
    bio: "Naveen Singh leads DigitalPitch Technologies' Google Business Profile, Local SEO and digital marketing operations. His core focus is helping local businesses build a stronger presence across Google Search and Maps — through compliant profile setup, verification preparation, profile optimization, local SEO strategy, competitor research and ongoing visibility improvement.",
    expertise: [
      "Google Business Profile",
      "Google Maps SEO",
      "Local SEO",
      "GBP Verification Support",
      "GBP Optimization",
      "Local Ranking Strategy",
      "SEO",
      "Digital Marketing",
      "Lead Generation",
      "Online Reputation",
    ],
    linkedin: "#",
    whatsapp: CONTACT.whatsappPrimaryHref,
    whatsappLabel: CONTACT.whatsappPrimaryDisplay,
  },
  {
    slug: "kaushik-singh",
    name: "Kaushik Singh",
    role: "Co-Founder & Technology Lead",
    focus: "Web, SaaS & AI Automation",
    photo: "/team-kaushik.jpg",
    bio: "Kaushik Singh leads the technology and product side of DigitalPitch Technologies. He specializes in building modern websites, SaaS platforms, business automation systems and AI-powered workflows that help companies reduce manual work, capture more opportunities and scale their digital operations.",
    expertise: [
      "Website Development",
      "SaaS Development",
      "AI Agents",
      "AI Automation",
      "Workflow Automation",
      "API Integration",
      "Lead Generation Technology",
      "Web Applications",
      "Business Automation",
      "Product Development",
    ],
    note: "Creator / Lead Developer of GBP LocalRadar",
    linkedin: "#",
    whatsapp: CONTACT.whatsappIndiaHref,
    whatsappLabel: CONTACT.indiaDisplay,
  },
];

// Historical SEO portfolio — DATED past-project evidence (SEMrush snapshots,
// March 2020). Shown as historical evidence, NOT current performance claims.
// Figures are read directly from the supplied screenshots.
export interface SeoProject {
  client: string;
  domain: string;
  location: string;
  organicTraffic: string;
  backlinks: string;
  image: string;
}

export const SEO_PORTFOLIO_DATE = "SEMrush · Mar 2020";

export const SEO_PORTFOLIO: SeoProject[] = [
  { client: "A.S.I.S.T. Translation & Interpreting", domain: "asisttranslations.com", location: "Ohio, USA", organicTraffic: "499", backlinks: "2K", image: "/portfolio/seo-asist.png" },
  { client: "Ziff Davis B2B", domain: "ziffdavisb2b.com", location: "California, USA", organicTraffic: "295", backlinks: "28.7K", image: "/portfolio/seo-ziffdavis.png" },
  { client: "TMP Organics Butcher & Supermarket", domain: "tmporganicsbutcherandsupermarket.com.au", location: "Queensland, Australia", organicTraffic: "63", backlinks: "381", image: "/portfolio/seo-tmp.png" },
  { client: "Spider Business Center", domain: "spiderbc.com", location: "Dubai", organicTraffic: "27", backlinks: "1.6K", image: "/portfolio/seo-spider.png" },
];

// GBP LocalRadar — in-house SaaS product.
export const LOCALRADAR = {
  name: "GBP LocalRadar",
  url: LOCALRADAR_URL,
  tagline:
    "Google Maps lead discovery technology built for Local SEO agencies, freelancers and sales teams.",
  description:
    "GBP LocalRadar is an in-house SaaS product created to help users discover local businesses with unclaimed or weak Google Business Profiles and turn public Google Maps business information into structured prospecting workflows.",
  creator: "Kaushik Singh",
  creatorRole: "Co-Founder & Technology Lead, DigitalPitch Technologies",
  status: "Live Product",
  features: [
    { title: "Business Discovery", icon: "Search", desc: "Search local businesses by category and location." },
    { title: "Claim Signals", icon: "Target", desc: "Identify listings showing signals associated with unclaimed or weak profiles." },
    { title: "Radius Search", icon: "MapPin", desc: "Explore businesses across a selected geographical radius." },
    { title: "Business Contact Data", icon: "Layers", desc: "Organize available business phone, website and location information." },
    { title: "Direct Map Links", icon: "Map", desc: "Open discovered businesses directly in Google Maps." },
    { title: "CSV Export", icon: "BarChart3", desc: "Export discovered leads into a structured CSV workflow." },
    { title: "Saved Searches", icon: "RefreshCw", desc: "Reuse searches and continue prospecting." },
    { title: "API / Automation", icon: "Workflow", desc: "Fits into larger lead-generation and agency automation workflows." },
  ],
  // Demo data — clearly NOT real customers or real search results.
  demo: {
    query: "Air Duct Cleaning Service",
    location: "Houston, Texas",
    radius: "50 KM",
    rows: [
      { name: "Demo Business A", category: "Air Duct Cleaning", signal: "Unclaimed", phone: "—" },
      { name: "Demo Business B", category: "HVAC & Air Ducts", signal: "Weak profile", phone: "—" },
      { name: "Demo Business C", category: "Air Duct Cleaning", signal: "No website", phone: "—" },
      { name: "Demo Business D", category: "Duct & Vent Cleaning", signal: "Unclaimed", phone: "—" },
    ],
  },
} as const;
