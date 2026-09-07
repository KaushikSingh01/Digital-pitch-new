import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

const BENEFITS = [
  { title: "Strategy + Execution", icon: "Target", desc: "We don't just advise — we build and run the systems that deliver results." },
  { title: "Website + SEO", icon: "MonitorSmartphone", desc: "Sites engineered to rank and convert, not just look good." },
  { title: "Google Visibility", icon: "MapPin", desc: "Search and maps rankings that put you in front of ready buyers." },
  { title: "AI Automation", icon: "Workflow", desc: "AI agents and workflows that respond instantly and never miss a lead." },
  { title: "Lead Generation", icon: "Users", desc: "A connected engine that fills your pipeline predictably." },
  { title: "Scalable Infrastructure", icon: "Server", desc: "Fast, secure hosting and systems that grow with you." },
  { title: "Transparent Reporting", icon: "BarChart3", desc: "Clear dashboards showing spend, leads and real revenue impact." },
  { title: "Ongoing Support", icon: "ShieldCheck", desc: "A partner that keeps optimising long after launch." },
];

export function WhyUs() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why DigitalPitch"
          title={
            <>
              One Partner. Your Entire{" "}
              <span className="text-gradient-blue">Digital Growth Stack.</span>
            </>
          }
          subtitle="Stop stitching together freelancers and tools. Get every part of your online growth from one team that makes it all work together."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl glass p-6 transition-all duration-300 hover:shadow-glow">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 ring-1 ring-inset ring-white/10">
                  <Icon name={b.icon} className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-base font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
