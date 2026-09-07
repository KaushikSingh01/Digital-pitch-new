// -----------------------------------------------------------------------------
// Data-driven service definitions. Every /services/[slug] page renders from
// this file, so all 9 service pages share one maintainable template.
// Copy is benefit-focused for business owners (more visibility, more leads,
// more customers, less manual work).
// -----------------------------------------------------------------------------

export type FAQ = { q: string; a: string };
export type Step = { title: string; description: string };

export interface Service {
  slug: string;
  name: string;
  /** lucide-react icon name (see components/ui/Icon.tsx) */
  icon: string;
  /** short label used in cards / nav */
  short: string;
  /** one-line benefit hook for cards */
  cardBlurb: string;
  /** hero eyebrow */
  eyebrow: string;
  /** hero H1 */
  heading: string;
  /** hero supporting paragraph */
  intro: string;
  problems: string[];
  benefits: { title: string; description: string }[];
  howItWorks: Step[];
  features: string[];
  whyChoose: string[];
  faq: FAQ[];
  /** conversion-focused CTA label specific to the service */
  ctaLabel: string;
  /** accent for subtle per-service theming: 'blue' | 'cyan' | 'violet' */
  accent: "blue" | "cyan" | "violet";
}

export const SERVICES: Service[] = [
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    icon: "Megaphone",
    short: "Digital Marketing",
    cardBlurb: "Full-funnel campaigns that turn attention into paying customers.",
    eyebrow: "Digital Marketing",
    heading: "Marketing That Brings You Customers, Not Just Clicks",
    intro:
      "Most marketing spends your budget on traffic that never converts. We build measurable, full-funnel campaigns across search, social and content that attract the right people, warm them up, and hand your sales team qualified leads.",
    problems: [
      "You're spending on ads but can't tell what's actually driving revenue.",
      "Traffic comes in but very few visitors ever contact you.",
      "Marketing feels scattered across channels with no single strategy.",
      "You have no clear reporting on cost per lead or return on spend.",
    ],
    benefits: [
      { title: "More Qualified Leads", description: "Campaigns targeted at buyers who are ready to act, not just browsers." },
      { title: "Lower Cost Per Lead", description: "Continuous optimization cuts wasted spend and improves ROI month over month." },
      { title: "One Connected Strategy", description: "Search, social, content and email working together instead of in silos." },
      { title: "Transparent Reporting", description: "Clear dashboards showing spend, leads, cost per lead and revenue impact." },
    ],
    howItWorks: [
      { title: "Audit & Strategy", description: "We map your funnel, audience and competitors, then set targets and a channel plan." },
      { title: "Build Campaigns", description: "Landing pages, ad creative, tracking and audiences are set up for conversions." },
      { title: "Launch & Optimize", description: "We test, refine bids, creative and messaging weekly to drive down cost per lead." },
      { title: "Scale What Works", description: "Winning channels get more budget; we expand into new audiences profitably." },
    ],
    features: [
      "Paid search & social campaigns",
      "Conversion-focused landing pages",
      "Full conversion tracking & analytics",
      "Audience research & targeting",
      "Ad creative & copywriting",
      "Retargeting & remarketing",
      "Monthly performance reporting",
      "A/B testing & optimization",
    ],
    whyChoose: [
      "We tie every campaign to leads and revenue, not vanity metrics.",
      "Your website, SEO and automation are built to work with your ads.",
      "No long lock-ins — we earn the next month with results.",
    ],
    faq: [
      { q: "How soon will I see results?", a: "Paid channels can generate leads within the first weeks, while organic and content compounds over months. We set realistic milestones up front." },
      { q: "Do I need a big budget to start?", a: "No. We start where your budget is comfortable, prove ROI, then scale spend as results come in." },
      { q: "Will I own my ad accounts and data?", a: "Yes. You keep full ownership of all accounts, audiences and tracking — always." },
    ],
    ctaLabel: "Grow My Business",
    accent: "blue",
  },
  {
    slug: "website-development",
    name: "Website Design & Development",
    icon: "MonitorSmartphone",
    short: "Website Development",
    cardBlurb: "Fast, modern websites engineered to convert visitors into leads.",
    eyebrow: "Website Design & Development",
    heading: "Websites Designed To Convert",
    intro:
      "A slow, dated website quietly loses you customers every day. We design and build fast, modern, mobile-first websites with clear messaging and strong calls to action — engineered to rank on Google and turn visitors into enquiries.",
    problems: [
      "Your current site is slow, outdated, or hard to use on mobile.",
      "Visitors land on your site but don't contact you.",
      "The site isn't built to be found on Google.",
      "You can't easily update content or track what's working.",
    ],
    benefits: [
      { title: "Higher Conversions", description: "Clear layouts, strong CTAs and fast load times turn more visitors into leads." },
      { title: "Built To Rank", description: "Clean, semantic, SEO-ready code so Google can crawl and index every page." },
      { title: "Flawless On Mobile", description: "Genuinely responsive design that looks and performs great on every device." },
      { title: "Fast & Reliable", description: "Optimized for Core Web Vitals — quick loading keeps visitors and rankings." },
    ],
    howItWorks: [
      { title: "Discovery", description: "We learn your business, goals and customers, then plan sitemap and messaging." },
      { title: "Design", description: "Premium, on-brand UI/UX designed around the actions you want visitors to take." },
      { title: "Build", description: "Fast, accessible, SEO-ready development with analytics and conversion tracking." },
      { title: "Launch & Support", description: "We deploy, test everything, and stay on to optimize and maintain." },
    ],
    features: [
      "Responsive design (mobile-first)",
      "SEO-ready structure & metadata",
      "Fast loading & Core Web Vitals",
      "Lead generation focused",
      "Modern UI/UX",
      "Analytics integration",
      "Conversion tracking",
      "Easy content updates",
    ],
    whyChoose: [
      "We build for leads and rankings, not just looks.",
      "Your site connects to SEO, ads and AI automation from day one.",
      "Performance, accessibility and SEO are baked in, not bolted on.",
    ],
    faq: [
      { q: "How long does a website take?", a: "Most business sites launch in a few weeks depending on scope and content readiness. We give you a clear timeline up front." },
      { q: "Will I be able to edit it myself?", a: "Yes. We set up straightforward content editing and walk you through it, or handle updates for you if you prefer." },
      { q: "Do you handle hosting and domain too?", a: "Absolutely — we can register your domain, set up hosting, SSL and business email all under one roof." },
    ],
    ctaLabel: "Build My Website",
    accent: "cyan",
  },
  {
    slug: "seo",
    name: "Search Engine Optimization",
    icon: "TrendingUp",
    short: "SEO",
    cardBlurb: "Rank for the searches your customers actually make.",
    eyebrow: "Search Engine Optimization",
    heading: "Turn Search Traffic Into Customers",
    intro:
      "Ranking on page one is only useful if it brings buyers. Our SEO combines technical fixes, on-page optimization, content and authority-building to grow rankings for the keywords that drive real enquiries — not just traffic.",
    problems: [
      "You're invisible on Google for the terms customers search.",
      "Traffic is flat or falling and you don't know why.",
      "Competitors outrank you even though your service is better.",
      "Past SEO work never translated into actual leads.",
    ],
    benefits: [
      { title: "More Visibility", description: "Climb the rankings for high-intent keywords your customers use." },
      { title: "Sustainable Traffic", description: "Organic growth that keeps working without paying for every click." },
      { title: "Better Quality Leads", description: "We target buying-intent searches, so more visitors are ready to act." },
      { title: "Clear Reporting", description: "Transparent tracking of rankings, traffic and conversions." },
    ],
    howItWorks: [
      { title: "Technical Audit", description: "We fix crawlability, speed, indexing and structure issues holding you back." },
      { title: "Keyword & Content", description: "We map buyer-intent keywords and build content that earns rankings." },
      { title: "On-Page & Authority", description: "Optimized pages plus quality backlinks build trust with Google." },
      { title: "Measure & Improve", description: "We track rankings and conversions and refine the strategy every month." },
    ],
    features: [
      "Technical SEO",
      "On-page SEO",
      "Local SEO",
      "Content strategy",
      "Quality backlinks",
      "Keyword research",
      "Competitor analysis",
      "SEO reporting",
    ],
    whyChoose: [
      "We optimize for leads and revenue, not just ranking screenshots.",
      "SEO is connected to your site build and content for compounding gains.",
      "Honest, white-hat methods that protect your site long term.",
    ],
    faq: [
      { q: "How long until SEO works?", a: "SEO is a compounding investment; meaningful movement typically shows over a few months and strengthens over time. We prioritize quick technical wins early." },
      { q: "Can you guarantee position one?", a: "No credible agency can guarantee a specific position — Google's algorithm isn't controllable. We focus on steady, measurable ranking and lead growth." },
      { q: "Do you do local and national SEO?", a: "Both. We tailor the approach to whether you serve a local area, multiple regions, or nationwide." },
    ],
    ctaLabel: "Improve My Rankings",
    accent: "blue",
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    icon: "MapPin",
    short: "Local SEO",
    cardBlurb: "Dominate the map pack and local searches near you.",
    eyebrow: "Local SEO",
    heading: "Get Found Where Customers Are Searching Nearby",
    intro:
      "When someone searches for your service 'near me', you want to be the first result they call. We optimize your Google presence, local listings and reviews so you show up in the map pack and local results — and win the customer.",
    problems: [
      "You don't appear in the Google map pack for local searches.",
      "Competitors with worse service rank above you locally.",
      "Your business listings are inconsistent or incomplete.",
      "You have too few reviews to build trust.",
    ],
    benefits: [
      { title: "Map Pack Visibility", description: "Show up in the top local results where most calls and visits come from." },
      { title: "More Calls & Visits", description: "Local searchers have high intent — being visible drives direct enquiries." },
      { title: "Stronger Reputation", description: "A steady review strategy builds trust and improves ranking." },
      { title: "Consistent Listings", description: "Accurate name, address and phone data across the web boosts local trust." },
    ],
    howItWorks: [
      { title: "Local Audit", description: "We review your Google Business Profile, citations, reviews and competitors." },
      { title: "Optimize Profile", description: "We optimize your profile, categories, services, photos and posts." },
      { title: "Citations & Reviews", description: "We build consistent local citations and a review-generation system." },
      { title: "Local Content", description: "Location pages and local keywords help you rank across your service area." },
    ],
    features: [
      "Google Business Profile optimization",
      "Google Maps SEO",
      "Local citations",
      "Review strategy",
      "Local keyword research",
      "GBP content & posts",
      "Local landing pages",
      "Competitor analysis",
    ],
    whyChoose: [
      "We focus on the calls and store visits that local rankings create.",
      "Reviews, listings and your website all work together.",
      "Transparent tracking of local rankings and enquiries.",
    ],
    faq: [
      { q: "What is the map pack?", a: "It's the group of three local businesses Google shows on the map for local searches. Ranking there drives a large share of calls and visits." },
      { q: "Do reviews really affect ranking?", a: "Yes. Volume, recency and responses to reviews influence local ranking and strongly affect whether customers choose you." },
      { q: "Can you help multi-location businesses?", a: "Yes — we optimize and manage local SEO across multiple locations with consistent data." },
    ],
    ctaLabel: "Improve My Google Ranking",
    accent: "cyan",
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile Optimization",
    icon: "Store",
    short: "Google Business Profile",
    cardBlurb: "A fully optimized profile that turns searches into calls.",
    eyebrow: "Google Business Profile",
    heading: "Make Your Google Profile Your Best Salesperson",
    intro:
      "Your Google Business Profile is often the first thing customers see — and where they decide to call, visit, or scroll past. We optimize every detail so your profile ranks higher, looks credible, and converts searchers into customers.",
    problems: [
      "Your profile is incomplete, unverified, or rarely updated.",
      "You're missing categories, services or photos that drive ranking.",
      "You don't post updates or respond to reviews.",
      "Competitors' profiles simply look more trustworthy than yours.",
    ],
    benefits: [
      { title: "Higher Local Ranking", description: "A complete, optimized profile ranks better in maps and local results." },
      { title: "More Direct Actions", description: "More calls, direction requests and website clicks straight from search." },
      { title: "Stronger Credibility", description: "Great photos, accurate info and reviews make customers choose you." },
      { title: "Always Fresh", description: "Regular posts and updates signal an active, trustworthy business." },
    ],
    howItWorks: [
      { title: "Profile Audit", description: "We assess completeness, categories, reviews and ranking factors." },
      { title: "Full Optimization", description: "Categories, services, description, attributes and photos are optimized." },
      { title: "Content & Reviews", description: "We set up posting and a review strategy to keep the profile active." },
      { title: "Monitor & Improve", description: "We track insights and refine to keep growing actions and ranking." },
    ],
    features: [
      "Profile optimization & verification",
      "Category & service optimization",
      "Photo & media optimization",
      "Google Posts & updates",
      "Review generation & responses",
      "Q&A management",
      "Insights & performance tracking",
      "Spam & competitor monitoring",
    ],
    whyChoose: [
      "We treat your profile as a lead channel, not a checkbox.",
      "Your profile, reviews and website reinforce each other.",
      "Ongoing management keeps you ahead of local competitors.",
    ],
    faq: [
      { q: "I already have a profile — can you still help?", a: "Yes. Most existing profiles are missing ranking and conversion elements. We optimize what you have for better results." },
      { q: "Do you manage reviews for me?", a: "We set up a system to earn more reviews and can respond professionally to protect your reputation." },
      { q: "Is this the same as Local SEO?", a: "It's a core part of it. Profile optimization pairs with citations, local content and reviews for full Local SEO." },
    ],
    ctaLabel: "Optimize My Profile",
    accent: "violet",
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    icon: "Bot",
    short: "AI Agents",
    cardBlurb: "AI employees that answer, qualify and book — 24/7.",
    eyebrow: "AI Agents",
    heading: "AI Employees That Work 24/7",
    intro:
      "Every missed message is a missed customer. Our AI agents answer questions instantly, qualify leads, book appointments and update your CRM around the clock — so you capture and convert enquiries even while you sleep.",
    problems: [
      "Leads message after hours and go cold before you reply.",
      "Your team spends hours answering the same repetitive questions.",
      "Enquiries slip through the cracks and never get followed up.",
      "You can't afford to staff support and sales 24/7.",
    ],
    benefits: [
      { title: "Instant Responses", description: "Every enquiry gets an immediate, on-brand reply — day or night." },
      { title: "Qualified Leads", description: "The agent asks the right questions and passes on ready-to-buy prospects." },
      { title: "More Booked Appointments", description: "Agents schedule calls and visits directly into your calendar." },
      { title: "Less Manual Work", description: "Repetitive questions and data entry are handled automatically." },
    ],
    howItWorks: [
      { title: "Map Your Flow", description: "We define how enquiries should be answered, qualified and routed." },
      { title: "Build The Agent", description: "We train the agent on your services, tone, FAQs and booking rules." },
      { title: "Connect Systems", description: "We link it to your website chat, WhatsApp, calendar and CRM." },
      { title: "Launch & Refine", description: "We monitor conversations and improve responses and conversion." },
    ],
    features: [
      "Answer customer questions",
      "Qualify leads automatically",
      "Schedule appointments",
      "Instant 24/7 responses",
      "Website chat handling",
      "Customer support",
      "Lead nurturing",
      "CRM updates & follow-ups",
    ],
    whyChoose: [
      "Agents are built around your sales process, not a generic bot.",
      "They plug into your website, WhatsApp, CRM and calendar.",
      "You capture and convert leads without adding headcount.",
    ],
    faq: [
      { q: "Will it sound robotic to my customers?", a: "No. We train the agent on your tone and services so conversations feel natural and on-brand, with a clean handoff to a human when needed." },
      { q: "Where can the agent work?", a: "On your website chat, WhatsApp, and other messaging channels — wherever your customers reach out." },
      { q: "Can it book into my calendar?", a: "Yes. It can qualify a lead and book appointments directly into your calendar and log everything in your CRM." },
    ],
    ctaLabel: "Build My AI Agent",
    accent: "cyan",
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    icon: "Workflow",
    short: "AI Automation",
    cardBlurb: "Put lead handling and follow-up on autopilot.",
    eyebrow: "AI Automation",
    heading: "Put Your Business On Autopilot",
    intro:
      "Manual follow-up, data entry and hand-offs cost you time and lost deals. We connect your website, CRM, email, WhatsApp and calendar with AI-powered automations so every lead is captured, processed and followed up — instantly and reliably.",
    problems: [
      "Leads sit in an inbox instead of being followed up fast.",
      "Your team copies data between tools by hand.",
      "Follow-ups depend on someone remembering to send them.",
      "Your tools don't talk to each other.",
    ],
    benefits: [
      { title: "Instant Follow-Up", description: "Every new lead is contacted within seconds, when interest is highest." },
      { title: "Zero Manual Entry", description: "Data flows automatically between your website, CRM and tools." },
      { title: "Nothing Falls Through", description: "Reliable workflows ensure every lead is processed and nurtured." },
      { title: "More Time To Sell", description: "Your team focuses on closing, not admin." },
    ],
    howItWorks: [
      { title: "Map The Process", description: "We document how leads should flow from capture to sale." },
      { title: "Design Workflows", description: "We build AI-powered automations across your existing tools." },
      { title: "Connect & Test", description: "We integrate your stack and test every path end to end." },
      { title: "Monitor & Optimize", description: "We track performance and refine to remove bottlenecks." },
    ],
    features: [
      "Website lead capture",
      "AI processing & routing",
      "CRM automation",
      "Email automation",
      "WhatsApp / SMS automation",
      "Appointment scheduling",
      "Sales team hand-off",
      "Integrations: Gmail, Sheets, Slack, Calendar, APIs",
    ],
    whyChoose: [
      "We automate around your real process, not a template.",
      "Works with the tools you already use.",
      "Frees your team from repetitive admin and lost leads.",
    ],
    faq: [
      { q: "Which tools can you connect?", a: "Common tools like Gmail, Google Sheets, CRMs, WhatsApp, Slack, calendars and anything with an API. We map to your existing stack." },
      { q: "Is this reliable enough to trust?", a: "Yes. We build, test and monitor each workflow so leads are handled consistently, with alerts if anything needs attention." },
      { q: "Do I need to replace my current tools?", a: "Usually not. We connect what you have; we only recommend changes when they clearly help." },
    ],
    ctaLabel: "Automate My Business",
    accent: "violet",
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    icon: "Target",
    short: "Lead Generation",
    cardBlurb: "A predictable pipeline of qualified enquiries.",
    eyebrow: "Lead Generation",
    heading: "A Predictable Pipeline Of Qualified Leads",
    intro:
      "Feast-or-famine enquiries make growth impossible to plan. We combine SEO, ads, landing pages and AI follow-up into a connected system that consistently attracts, captures and qualifies leads — so your sales team always has people to talk to.",
    problems: [
      "Enquiries are unpredictable — busy one month, quiet the next.",
      "You rely on referrals with no system to generate demand.",
      "Leads you do get are low quality or hard to reach.",
      "You have no clear cost per lead or pipeline visibility.",
    ],
    benefits: [
      { title: "Consistent Enquiries", description: "A repeatable system that fills your pipeline month after month." },
      { title: "Higher Quality Leads", description: "Targeting and qualification mean more ready-to-buy prospects." },
      { title: "Faster Response", description: "AI follow-up reaches leads instantly, boosting conversion." },
      { title: "Predictable Growth", description: "Clear cost per lead lets you plan and scale with confidence." },
    ],
    howItWorks: [
      { title: "Define Your Ideal Lead", description: "We clarify who you want and where to reach them." },
      { title: "Build The Engine", description: "SEO, ads and landing pages are set up to capture demand." },
      { title: "Capture & Qualify", description: "AI agents and automation qualify and route every lead." },
      { title: "Optimize The Funnel", description: "We improve cost per lead and conversion continuously." },
    ],
    features: [
      "Multi-channel lead capture",
      "High-converting landing pages",
      "Paid search & social",
      "SEO-driven organic leads",
      "AI qualification & follow-up",
      "CRM integration",
      "Lead scoring & routing",
      "Cost-per-lead reporting",
    ],
    whyChoose: [
      "We build the whole engine — traffic, capture, qualify, follow-up.",
      "Leads are qualified before they reach your team.",
      "Transparent reporting on cost per lead and pipeline.",
    ],
    faq: [
      { q: "What counts as a qualified lead?", a: "We define it with you up front — based on service, budget, location and readiness — so you only spend time on real prospects." },
      { q: "How fast can you start generating leads?", a: "Paid channels can produce leads quickly, while SEO adds compounding volume over time. We combine both for stability and growth." },
      { q: "Do you follow up on leads too?", a: "Yes — our AI agents and automations can respond instantly and nurture leads until they're ready for your team." },
    ],
    ctaLabel: "Get More Leads",
    accent: "blue",
  },
  {
    slug: "domain-hosting",
    name: "Domain & Hosting",
    icon: "Server",
    short: "Domain & Hosting",
    cardBlurb: "Domain, hosting, SSL and email — all under one roof.",
    eyebrow: "Domain & Hosting",
    heading: "Everything Under One Roof",
    intro:
      "Juggling separate providers for domain, hosting, email and security is slow and risky. We set up and manage fast, secure cloud hosting with your domain, SSL, business email and backups — so your website stays fast, safe and online.",
    problems: [
      "Your site is slow or goes down at the worst times.",
      "Domain, hosting and email are scattered across providers.",
      "You're unsure if backups and security are handled.",
      "Nobody clearly owns performance and uptime.",
    ],
    benefits: [
      { title: "Fast & Reliable", description: "Optimized cloud hosting keeps your site quick and available." },
      { title: "Secure By Default", description: "SSL, backups and security hardening protect your business." },
      { title: "One Point Of Contact", description: "Domain, hosting, email and support handled by one team." },
      { title: "Stress-Free Setup", description: "We migrate and configure everything so you don't have to." },
    ],
    howItWorks: [
      { title: "Assess Needs", description: "We size hosting to your traffic and growth plans." },
      { title: "Set Up & Secure", description: "Domain, DNS, SSL, email and backups configured correctly." },
      { title: "Migrate Safely", description: "We move your existing site with zero-drama, minimal downtime." },
      { title: "Manage & Monitor", description: "Ongoing performance, updates, security and backups." },
    ],
    features: [
      "Domain registration",
      "DNS setup",
      "SSL certificates",
      "Cloud hosting",
      "Website migration",
      "Business email",
      "Automated backups",
      "Security & performance optimization",
    ],
    whyChoose: [
      "One team owns your uptime, speed and security.",
      "Hosting is tuned for the sites and SEO we build.",
      "No finger-pointing between providers when something breaks.",
    ],
    faq: [
      { q: "Can you move my existing website?", a: "Yes. We handle migration end to end with minimal downtime and verify everything works before switching over." },
      { q: "Do you set up business email?", a: "We can configure professional email on your domain along with hosting, SSL and backups." },
      { q: "What about security and backups?", a: "SSL, regular backups and security hardening are part of our managed hosting, so your site stays protected." },
    ],
    ctaLabel: "Set Up My Hosting",
    accent: "cyan",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// Homepage services grid — includes routed services plus extra offerings
// listed in the brief that map to the closest service page.
export type ServiceCard = {
  name: string;
  icon: string;
  blurb: string;
  href: string;
};

export const SERVICE_CARDS: ServiceCard[] = [
  { name: "Google Business Profile", icon: "Store", blurb: "Setup, verification & optimization — our specialty.", href: "/services/google-business-profile" },
  { name: "Google Maps Ranking", icon: "Map", blurb: "Show up first when locals search nearby.", href: "/services/google-business-profile" },
  { name: "Local SEO", icon: "MapPin", blurb: "Own the map pack and 'near me' searches.", href: "/services/local-seo" },
  { name: "Website Design & Development", icon: "MonitorSmartphone", blurb: "Fast, modern sites engineered to convert.", href: "/services/website-development" },
  { name: "Search Engine Optimization", icon: "TrendingUp", blurb: "Rank for the searches your buyers actually make.", href: "/services/seo" },
  { name: "AI Agents", icon: "Bot", blurb: "AI employees that answer and book 24/7.", href: "/services/ai-agents" },
  { name: "AI Automation", icon: "Workflow", blurb: "Put lead handling and follow-up on autopilot.", href: "/services/ai-automation" },
  { name: "Lead Generation", icon: "Target", blurb: "A predictable pipeline of qualified leads.", href: "/services/lead-generation" },
  { name: "Digital Marketing", icon: "Megaphone", blurb: "Full-funnel campaigns that turn attention into customers.", href: "/services/digital-marketing" },
  { name: "Google Ads / PPC", icon: "MousePointerClick", blurb: "Profitable paid traffic that converts.", href: "/services/digital-marketing" },
  { name: "Social Media Marketing", icon: "Share2", blurb: "Build audience and demand on social.", href: "/services/digital-marketing" },
  { name: "Online Reputation Management", icon: "ShieldCheck", blurb: "Earn reviews and protect your brand.", href: "/services/local-seo" },
  { name: "Domain Registration", icon: "Globe", blurb: "Secure the perfect domain for your brand.", href: "/services/domain-hosting" },
  { name: "Web Hosting", icon: "Server", blurb: "Fast, secure, managed cloud hosting.", href: "/services/domain-hosting" },
];
