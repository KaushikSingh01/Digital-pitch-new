import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const CAPABILITIES = [
  "Answer customer questions",
  "Qualify leads",
  "Schedule appointments",
  "Respond instantly",
  "Handle website chat",
  "Customer support",
  "Lead nurturing",
  "CRM updates",
  "Automated follow-ups",
  "Sales assistance",
];

const WORKFLOW = ["Customer", "AI Agent", "Qualification", "Appointment", "CRM", "Follow-Up"];

export function AIAgents() {
  return (
    <section id="ai-agents" className="section-pad scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="AI Agents"
          title={
            <>
              AI Employees That Work{" "}
              <span className="text-gradient-blue">24/7</span>
            </>
          }
          subtitle="Never miss another enquiry. Our AI agents answer, qualify, book and follow up automatically — capturing customers even while you sleep."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Capabilities */}
          <Reveal>
            <GlassCard className="h-full" glowBorder>
              <h3 className="text-lg font-semibold text-white">What your AI agent handles</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {CAPABILITIES.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Icon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    {c}
                  </li>
                ))}
              </ul>
              <Button href="/services/ai-agents" variant="primary" size="md" className="mt-7">
                Build My AI Agent
                <ArrowRight className="h-4 w-4" />
              </Button>
            </GlassCard>
          </Reveal>

          {/* Workflow */}
          <Reveal delay={0.1}>
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold text-white">How it flows</h3>
              <ol className="mt-6 space-y-0">
                {WORKFLOW.map((step, i) => (
                  <li key={step}>
                    <div className="flex items-center gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric-500/30 to-cyan-500/10 text-sm font-bold text-cyan-200 ring-1 ring-inset ring-white/10">
                        {i + 1}
                      </span>
                      <span className="text-base font-medium text-slate-200">{step}</span>
                    </div>
                    {i < WORKFLOW.length - 1 && (
                      <div className="ml-5 h-6 w-px bg-gradient-to-b from-cyan-500/50 to-transparent" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
