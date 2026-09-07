import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCards } from "@/components/ui/ContactCards";
import { LeadForm } from "@/components/ui/LeadForm";

export function ContactSection() {
  return (
    <section id="contact" className="section-pad scroll-mt-24">
      <div className="container-x">
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

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:items-start">
          <Reveal className="lg:col-span-2">
            <ContactCards />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <LeadForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
