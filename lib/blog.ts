// -----------------------------------------------------------------------------
// Blog content. Original, educational articles — no fabricated stats, guarantees
// or client claims. Rendered by /blog and /blog/[slug].
// -----------------------------------------------------------------------------

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string; // ISO
  readingTime: string;
  tags: string[];
  content: Block[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "google-business-profile-verification-guide",
    title: "Google Business Profile Verification: A Practical 2026 Guide",
    description:
      "How Google Business Profile verification actually works in 2026, why profiles get stuck, and how to prepare your business so verification goes smoothly.",
    category: "Google Business Profile",
    author: "Naveen Singh",
    date: "2026-08-18",
    readingTime: "7 min read",
    tags: ["GBP", "Verification", "Local SEO"],
    content: [
      { type: "p", text: "Verification is the gate between your business and the Google Search and Maps visibility you want. Until your Google Business Profile is verified, you can't fully manage it — and customers may not see accurate information. Yet verification is where many business owners get stuck, often because of small, avoidable mistakes made before they ever click 'verify'." },
      { type: "p", text: "This guide explains how verification works in 2026, why profiles get delayed, and — most importantly — what you can do to give your profile the best possible chance. One honest note up front: Google controls verification. It decides which method you're offered and makes the final approval. No agency can guarantee it. What we can do is prepare everything correctly so the process is as fast and clean as possible." },
      { type: "h2", text: "What verification actually is" },
      { type: "p", text: "Verification is Google confirming that your business is real and that you're authorised to manage its profile. Once verified, you control your name, categories, hours, photos, services and posts, and you can respond to reviews. Without verification, your profile is either unmanaged or limited." },
      { type: "h2", text: "Why profiles get stuck" },
      { type: "p", text: "Most delays trace back to inconsistent or unclear business information. The common culprits:" },
      { type: "ul", items: [
        "Business name that doesn't match signage, your website and legal documents",
        "An address or service area that conflicts with other places you appear online",
        "Duplicate profiles for the same business competing with each other",
        "A brand-new website or phone number with no supporting footprint yet",
        "Categories or descriptions that don't clearly match what the business does",
      ]},
      { type: "h2", text: "How to prepare before you verify" },
      { type: "p", text: "Preparation is the part you fully control. Get these right and verification usually becomes a formality:" },
      { type: "ol", items: [
        "Lock your exact business name, address (or service area) and phone number, and use them identically everywhere.",
        "Fix or remove duplicate listings so Google sees one clear profile.",
        "Have supporting evidence ready — signage, a matching website, business documents — in case Google asks.",
        "Choose the most accurate primary category; it heavily influences how you're understood and ranked.",
        "Make sure your website clearly states the same business details as your profile.",
      ]},
      { type: "h2", text: "After verification: don't stop there" },
      { type: "p", text: "Verification gets you in the door — it doesn't get you ranked. Once you're verified, the work that drives calls and visits begins: complete every field, add real photos, publish services, gather and respond to reviews, and build local relevance around the searches your customers actually make." },
      { type: "p", text: "At DigitalPitch Technologies, Google Business Profile setup, verification preparation and optimization is our core specialty. We handle the full process with you and focus on legitimate, durable visibility — never guaranteed rankings or shortcuts." },
    ],
  },
  {
    slug: "rank-in-google-map-pack",
    title: "How to Rank in the Google Map Pack: A Local SEO Checklist",
    description:
      "The map pack drives most local calls and visits. Here's a practical checklist of the factors that influence local ranking and how to work on each.",
    category: "Local SEO",
    author: "Naveen Singh",
    date: "2026-08-05",
    readingTime: "8 min read",
    tags: ["Local SEO", "Map Pack", "Google Maps"],
    content: [
      { type: "p", text: "When someone searches for a service 'near me', Google shows a short list of local businesses on a map — the map pack. For most local businesses, being in that list is where the calls and store visits come from. Ranking there isn't luck; it's the result of relevance, distance and prominence signals you can influence." },
      { type: "h2", text: "1. Nail your Google Business Profile basics" },
      { type: "p", text: "Your profile is the foundation. Complete every field, choose the most accurate primary category, add relevant secondary categories, list your services, and keep hours and contact details current. An incomplete profile rarely competes." },
      { type: "h2", text: "2. Get your NAP consistent everywhere" },
      { type: "p", text: "Name, Address and Phone number should be identical across your website, profile and every directory. Inconsistencies confuse Google and weaken trust. This quiet factor is one of the most overlooked." },
      { type: "h2", text: "3. Build local relevance on your website" },
      { type: "ul", items: [
        "Create clear service pages that describe what you do",
        "Add location or service-area pages where it genuinely makes sense",
        "Use natural local keywords in titles, headings and copy",
        "Add structured data so Google understands your business",
      ]},
      { type: "h2", text: "4. Earn reviews — and respond to them" },
      { type: "p", text: "Review volume, recency and your responses all matter, and they strongly influence whether a searcher chooses you. Build a simple, consistent process to ask happy customers for reviews, and reply to every one professionally. Never buy or fake reviews — it's against Google's policies and it's a serious risk." },
      { type: "h2", text: "5. Strengthen local authority" },
      { type: "p", text: "Consistent citations in relevant directories, mentions from local and industry sources, and quality links to your site build the prominence Google looks for. This compounds over time." },
      { type: "h2", text: "6. Track the right things" },
      { type: "p", text: "Watch your calls, direction requests, website clicks, review growth and rankings for the specific keywords that matter to you — not vanity metrics. Tracking tells you what's working so you can double down." },
      { type: "p", text: "A realistic expectation: local SEO compounds. Foundations first, then relevance and authority, then steady improvement. Anyone promising an instant guaranteed #1 is selling something Google doesn't allow them to control." },
    ],
  },
  {
    slug: "google-business-profile-optimization-checklist",
    title: "Google Business Profile Optimization: 12 Things Most Businesses Miss",
    description:
      "A verified profile is only the start. Here are twelve optimization steps that turn a basic Google Business Profile into one that actually earns calls.",
    category: "Google Business Profile",
    author: "Naveen Singh",
    date: "2026-07-22",
    readingTime: "6 min read",
    tags: ["GBP", "Optimization", "Local SEO"],
    content: [
      { type: "p", text: "Most businesses verify their Google Business Profile, fill in the obvious fields, and stop. That leaves a lot of visibility on the table. Optimization is what separates a profile that just exists from one that consistently turns searches into calls and visits." },
      { type: "h2", text: "The twelve most-missed steps" },
      { type: "ol", items: [
        "Choosing a precise primary category (and adding accurate secondary ones)",
        "Writing a clear, keyword-aware business description that reads naturally",
        "Listing every service with its own short description",
        "Adding real, high-quality photos — and refreshing them regularly",
        "Filling in attributes (accessibility, payments, amenities) that customers filter by",
        "Keeping hours accurate, including special and holiday hours",
        "Publishing Google Posts for offers and updates where appropriate",
        "Monitoring and answering the Q&A section before competitors' answers appear",
        "Building a steady stream of reviews and replying to each one",
        "Aligning your website's information exactly with your profile",
        "Removing or resolving duplicate listings",
        "Reviewing profile insights and adjusting based on what customers actually do",
      ]},
      { type: "h2", text: "Why this matters" },
      { type: "p", text: "Every one of these is a signal — to Google about relevance, and to customers about whether you're the business to trust. Together they lift both your ranking potential and your conversion rate." },
      { type: "p", text: "Optimization is ongoing, not one-and-done. Google adds features, competitors improve, and customer behaviour shifts. A profile that's actively managed keeps its edge; one that's set and forgotten slowly slides." },
    ],
  },
  {
    slug: "ai-agents-for-small-business",
    title: "AI Agents for Small Business: Turn Missed Enquiries Into Booked Jobs",
    description:
      "Every missed message is a missed customer. Here's how AI agents answer, qualify and book around the clock — and where they fit in a real business.",
    category: "AI Automation",
    author: "Kaushik Singh",
    date: "2026-07-09",
    readingTime: "6 min read",
    tags: ["AI Agents", "Automation", "Lead Generation"],
    content: [
      { type: "p", text: "The hardest leads to win are the ones you never answered. A customer messages after hours, doesn't hear back fast enough, and books the competitor who replied first. For most small businesses, response speed — not marketing spend — is the biggest hidden leak." },
      { type: "h2", text: "What an AI agent actually does" },
      { type: "p", text: "An AI agent is a trained assistant that handles conversations on your website chat and messaging channels. Done well, it feels natural and on-brand, and hands off cleanly to a human when needed. In practice it can:" },
      { type: "ul", items: [
        "Answer common questions instantly, day or night",
        "Qualify leads by asking the right questions",
        "Book appointments straight into your calendar",
        "Log everything in your CRM",
        "Follow up so leads don't go cold",
      ]},
      { type: "h2", text: "Where it fits (and where it doesn't)" },
      { type: "p", text: "An AI agent is not a replacement for good people — it's a way to make sure no enquiry is ignored and your team spends time on the conversations that matter. The best setups are built around your real sales process, not a generic chatbot script." },
      { type: "h2", text: "Getting started sensibly" },
      { type: "ol", items: [
        "Map how a good enquiry should be answered, qualified and routed",
        "Train the agent on your services, tone and frequently asked questions",
        "Connect it to your website, WhatsApp, calendar and CRM",
        "Monitor real conversations and refine over the first few weeks",
      ]},
      { type: "p", text: "Start with one clear job — instant response and booking — prove it works, then expand. That's how automation earns its place instead of adding noise." },
    ],
  },
  {
    slug: "website-that-converts",
    title: "From Website to Customer: Building a Lead Engine That Converts",
    description:
      "A pretty website isn't the goal — enquiries are. Here's what actually turns visitors into customers, from speed and clarity to strong calls to action.",
    category: "Web Development",
    author: "Kaushik Singh",
    date: "2026-06-24",
    readingTime: "7 min read",
    tags: ["Websites", "Conversion", "SEO"],
    content: [
      { type: "p", text: "A website's job isn't to look impressive — it's to turn a visitor into an enquiry. Plenty of good-looking sites quietly lose customers every day because they're slow, unclear, or make it hard to take the next step. Here's what separates a brochure from a lead engine." },
      { type: "h2", text: "Speed is a feature" },
      { type: "p", text: "Visitors leave slow pages, and search engines favour fast ones. Performance — fast loading, stable layout, quick interaction — is one of the highest-leverage things you can fix, and it helps both conversions and rankings." },
      { type: "h2", text: "Clarity beats cleverness" },
      { type: "p", text: "Within seconds, a visitor should understand what you do, who it's for, and what to do next. Clear headlines, simple language and an obvious path forward outperform clever copy every time." },
      { type: "h2", text: "Make the next step obvious" },
      { type: "ul", items: [
        "One primary call to action, repeated at natural points",
        "Click-to-call and click-to-WhatsApp on mobile",
        "A short form that asks only what you need",
        "Trust signals — real work, real people, real contact details",
      ]},
      { type: "h2", text: "Build it to be found" },
      { type: "p", text: "Conversion and SEO aren't separate projects. Clean, semantic structure, sensible metadata and fast performance mean Google can crawl and rank your pages while visitors enjoy using them. The two reinforce each other." },
      { type: "p", text: "The best websites are measured, not just admired. Track where enquiries come from, watch where visitors drop off, and keep improving. A lead engine is something you tune — not something you launch and forget." },
    ],
  },
  {
    slug: "nap-consistency-local-citations",
    title: "Local Citations & NAP Consistency: The Quiet Ranking Factor",
    description:
      "Citations and consistent business details rarely get attention, but they quietly build the trust local rankings depend on. Here's how to get them right.",
    category: "Local SEO",
    author: "Naveen Singh",
    date: "2026-06-10",
    readingTime: "5 min read",
    tags: ["Local SEO", "Citations", "NAP"],
    content: [
      { type: "p", text: "Citations aren't glamorous, which is exactly why so many businesses neglect them — and why getting them right can quietly pull you ahead of competitors who don't. A citation is any online mention of your business's Name, Address and Phone number (NAP), whether on a directory, a review site or a local listing." },
      { type: "h2", text: "Why consistency matters" },
      { type: "p", text: "Google cross-references your business details across the web to decide how much to trust them. When your NAP is identical everywhere, that trust is strong. When it's inconsistent — an old address here, a different phone format there — Google hesitates, and hesitation costs you visibility." },
      { type: "h2", text: "How to get citations right" },
      { type: "ol", items: [
        "Decide the single, exact version of your name, address and phone number",
        "Audit where your business is already listed and fix inconsistencies",
        "Claim listings on the directories that matter for your industry and area",
        "Add citations gradually and keep them accurate over time",
        "Re-check whenever your details change — one update everywhere",
      ]},
      { type: "h2", text: "Quality over quantity" },
      { type: "p", text: "A handful of accurate, relevant citations beats hundreds of low-quality ones. Focus on directories real customers use and sources relevant to your industry and location." },
      { type: "p", text: "Citations work best as part of a bigger local strategy — alongside an optimized Google Business Profile, a strong website and a steady flow of reviews. On their own they're a quiet helper; together with the rest, they're part of what makes local rankings stick." },
    ],
  },
];

export const POST_SLUGS = POSTS.map((p) => p.slug);
export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
