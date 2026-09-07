import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const PIPELINE = [
  { label: "Website Lead", icon: "MonitorSmartphone" },
  { label: "AI Processing", icon: "Sparkles" },
  { label: "CRM", icon: "Layers" },
  { label: "Email", icon: "Mail" },
  { label: "WhatsApp / SMS", icon: "MessageCircle" },
  { label: "Appointment", icon: "Calendar" },
  { label: "Sales Team", icon: "Users" },
];

const INTEGRATIONS = ["Gmail", "Google Sheets", "CRM", "Website", "WhatsApp", "Slack", "Calendar", "AI", "APIs"];

export function AIAutomation() {
  return (
    <section id="ai-automation" className="section-pad scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="AI Automation"
          title={
            <>
              Put Your Business On{" "}
              <span className="text-gradient-blue">Autopilot</span>
            </>
          }
          subtitle="Connect your website, CRM, email, WhatsApp and calendar so every lead is captured, processed and followed up instantly — with zero manual work."
        />

        {/* Pipeline */}
        <div className="mt-14">
          <Reveal>
            <GlassCard glowBorder>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7 lg:items-stretch">
                {PIPELINE.map((step, i) => (
                  <div key={step.label} className="relative flex items-center gap-3 lg:flex-col lg:text-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-inset ring-white/10">
                      <Icon name={step.icon} className="h-5 w-5 text-cyan-300" />
                    </div>
                    <span className="text-sm font-medium text-slate-200 lg:mt-2">{step.label}</span>
                    {i < PIPELINE.length - 1 && (
                      <ArrowRight className="ml-auto h-4 w-4 rotate-90 text-slate-600 lg:absolute lg:-right-3 lg:top-5 lg:ml-0 lg:rotate-0" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>

        {/* Integrations */}
        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Works with the tools you already use
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {INTEGRATIONS.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full glass px-4 py-2 text-sm font-medium text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
            <Button href="/services/ai-automation" variant="primary" size="md" className="mt-8">
              Automate My Business
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
