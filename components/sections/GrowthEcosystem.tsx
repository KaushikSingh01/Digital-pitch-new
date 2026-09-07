import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

const FLOW = [
  { label: "Google Search", icon: "Search" },
  { label: "Website", icon: "MonitorSmartphone" },
  { label: "AI Agent", icon: "Bot" },
  { label: "Qualified Lead", icon: "Target" },
  { label: "CRM", icon: "Layers" },
  { label: "Automated Follow-Up", icon: "Workflow" },
  { label: "Sale", icon: "CheckCircle2" },
];

export function GrowthEcosystem() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Digital Growth Ecosystem"
          title={
            <>
              From Search To Sale — We Build The Entire{" "}
              <span className="text-gradient-blue">Growth Engine</span>
            </>
          }
          subtitle="DigitalPitch Technologies doesn't just deliver isolated services. We build connected customer-acquisition and automation systems, so every stage feeds the next."
        />

        <div className="mt-14">
          <ol className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-2">
            {FLOW.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.06} className="lg:flex-1">
                <div className="flex items-center gap-3 lg:flex-col lg:text-center">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl glass ring-1 ring-inset ring-white/10">
                    <Icon name={step.icon} className="h-6 w-6 text-cyan-300" />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-electric-500 text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-slate-200 lg:mt-3">
                    {step.label}
                  </span>
                </div>
                {i < FLOW.length - 1 && (
                  <div className="ml-7 flex h-6 items-center lg:hidden" aria-hidden="true">
                    <ArrowRight className="h-4 w-4 rotate-90 text-slate-600" />
                  </div>
                )}
              </Reveal>
            ))}
          </ol>
          {/* connector line for desktop */}
          <div className="relative mt-8 hidden lg:block" aria-hidden="true">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
