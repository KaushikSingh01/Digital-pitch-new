import { FOUNDERS } from "@/lib/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FounderCard } from "@/components/ui/FounderCard";

export function Leadership({ id = "leadership" }: { id?: string }) {
  return (
    <section id={id} className="section-pad scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              The People Behind{" "}
              <span className="text-gradient-blue">DigitalPitch</span>
            </>
          }
          subtitle="Specialists in Google visibility, software, automation and digital growth."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.slug} delay={i * 0.1}>
              <FounderCard founder={f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
