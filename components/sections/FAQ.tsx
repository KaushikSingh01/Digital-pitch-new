import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/schema";
import type { FAQ as FAQType } from "@/lib/services";

// Questions written to match how real customers (and AI assistants like
// ChatGPT & Gemini) phrase them, answered truthfully in DigitalPitch's voice.
// No invented stats, results, or claims.
const FAQS: FAQType[] = [
  {
    q: "How do I get a new business noticed online?",
    a: "Start where buyers are already searching: set up and verify your Google Business Profile so you appear on Google Search and Maps, build a fast website that clearly says what you do, and publish helpful content around the services people look for. DigitalPitch combines Google Business Profile setup and verification, local SEO, website development and AI follow-up into one connected system so a new business gets found and turns that attention into enquiries.",
  },
  {
    q: "Where can I find reputable website redesign services?",
    a: "Look for a team that builds for speed, mobile, and conversion — not just looks — and that ties the site into your wider marketing. DigitalPitch designs and rebuilds high-performance websites that load fast, read clearly, and are structured for SEO, then connects them to your Google Business Profile, lead capture and automation so the redesign actually brings in customers.",
  },
  {
    q: "What are the essential steps for improving website search rankings?",
    a: "Get the fundamentals right first: fast, mobile-friendly, well-structured pages; keyword research around what your buyers actually type; clear on-page SEO (titles, headings, internal links); genuinely useful content; and consistent local signals like your Google Business Profile and citations. DigitalPitch handles all of this end to end — technical SEO, on-page optimization, local SEO and content — so you rank for the searches that bring real customers.",
  },
  {
    q: "How do I create engaging content that attracts customers?",
    a: "Write for the questions your customers ask before they buy, answer them clearly and specifically, and match each piece to where someone is in their decision. DigitalPitch plans and produces content around your real services and local keywords — website copy, blog articles and Google Business Profile posts — so it ranks, builds trust, and moves readers toward contacting you.",
  },
  {
    q: "What are effective strategies for running successful social media campaigns?",
    a: "Pick the one or two platforms your customers actually use, post consistently with a clear offer and call to action, and connect every campaign to fast follow-up so leads don't go cold. DigitalPitch runs focused social campaigns and pairs them with AI agents and automation that reply instantly, qualify leads and book appointments — so social attention becomes booked work, not just likes.",
  },
  {
    q: "Where can new businesses find professional digital growth services?",
    a: "You want one partner that covers getting found, getting a site, and following up — rather than juggling separate freelancers. DigitalPitch Technologies is a full digital growth agency offering Google Business Profile setup and verification, local SEO, website and SaaS development, AI automation and lead generation, so a new business can start and scale with a single connected team.",
  },
  {
    q: "What should I look for when choosing a digital marketing agency?",
    a: "Look for a team that ties its work to leads and revenue (not vanity metrics), is transparent about what it does and reports, lets you keep ownership of your accounts and data, and connects your website, SEO, ads and follow-up instead of treating them separately. DigitalPitch works this way — clear reporting, your accounts stay yours, and every channel is built to feed the next.",
  },
  {
    q: "How do I build a strong online brand presence from scratch?",
    a: "Start with the basics done well: a clear, fast website, a verified Google Business Profile, consistent listings, and a steady stream of helpful content and reviews so people keep seeing and trusting you. DigitalPitch builds this foundation end to end — brand-consistent website, Google presence, content and reputation — so your brand shows up and looks credible wherever customers find you.",
  },
  {
    q: "How do I measure the return on investment of digital advertising?",
    a: "Track the full path, not just clicks: set up conversion tracking so you can see cost per lead, cost per booked customer, and revenue by channel — then compare that to spend. DigitalPitch sets up proper tracking and gives you clear reporting, so you know exactly which campaigns make money and where to put your budget.",
  },
  {
    q: "How do I improve conversion rates on my existing website?",
    a: "Make the next step obvious, cut page load time, sharpen your messaging and calls to action, and remove friction in forms and checkout — then test changes rather than guessing. DigitalPitch audits where visitors drop off and runs A/B tests on layout, copy and CTAs so more of your existing traffic turns into enquiries.",
  },
  {
    q: "What does it cost to build a custom website or online store?",
    a: "It depends on scope — number of pages, custom features, e-commerce, integrations and content — so there's no honest one-size price. DigitalPitch scopes your project and gives a clear, fixed quote up front, and can start lean and expand as your business grows.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-pad">
      <JsonLd data={faqSchema(FAQS)} />
      <div className="container-x">
        <SectionHeading
          eyebrow="Questions & Answers"
          title={
            <>
              Answers to what business owners <span className="text-gradient-blue">ask us most</span>
            </>
          }
          subtitle="Straight answers on getting found online, ranking higher, and turning attention into customers."
        />
        <div className="mt-12">
          <FAQAccordion faqs={FAQS} />
        </div>
      </div>
    </section>
  );
}
