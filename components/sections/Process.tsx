import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

const STEPS = [
  { no: "01", title: "Discover", icon: "Search", desc: "We learn your business, goals, customers and competitors to find the biggest growth opportunities." },
  { no: "02", title: "Strategy", icon: "Target", desc: "We map a clear plan across website, SEO, Google visibility, AI and automation — prioritised by impact." },
  { no: "03", title: "Build", icon: "MonitorSmartphone", desc: "We build fast, conversion-focused websites and set up the systems that capture and qualify leads." },
  { no: "04", title: "Rank", icon: "TrendingUp", desc: "We grow your visibility on Google search and maps so the right customers find you first." },
  { no: "05", title: "Automate", icon: "Workflow", desc: "AI agents and automations handle responses, follow-up and data entry around the clock." },
  { no: "06", title: "Scale", icon: "Rocket", desc: "We double down on what works, expand channels and scale your growth profitably." },
];

export function Process() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              A Clear Path From{" "}
              <span className="text-gradient-blue">Start To Scale</span>
            </>
          }
          subtitle="A proven, transparent process that takes you from first discovery call to a scalable growth engine."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={(i % 3) * 0.07}>
              <div className="group relative h-full rounded-2xl glass p-6 transition-all duration-300 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black tracking-tighter text-white/10">{s.no}</span>
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 ring-1 ring-inset ring-white/10">
                    <Icon name={s.icon} className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
