import { ImageIcon, EyeOff } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

// "Real Work. Real Screens." — screenshot placeholders for real proof.
// Sensitive customer info can be blurred/hidden when real screens are added.
const CATEGORIES = [
  { label: "Google Business Profiles", icon: "Store" },
  { label: "Verified Profiles", icon: "ShieldCheck" },
  { label: "Google Maps Visibility", icon: "MapPin" },
  { label: "Local Ranking Grids", icon: "Map" },
  { label: "Website Projects", icon: "MonitorSmartphone" },
  { label: "SEO Dashboards", icon: "BarChart3" },
  { label: "AI Automations", icon: "Workflow" },
  { label: "GBP LocalRadar", icon: "Search" },
  { label: "SaaS Dashboards", icon: "Layers" },
];

export function ProofGallery() {
  return (
    <section id="proof" className="section-pad scroll-mt-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Proof"
          title={
            <>
              Real Work. <span className="text-gradient-blue">Real Screens.</span>
            </>
          }
          subtitle="A gallery of real screenshots — profiles, ranking grids, dashboards and product screens. We're adding these with sensitive client details blurred; slots are ready below."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.label} delay={(i % 3) * 0.06}>
              <div className="group relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl glass p-6 text-center">
                <div className="absolute inset-0 bg-grid-faint bg-grid opacity-40" aria-hidden="true" />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/10 ring-1 ring-inset ring-white/10">
                  <Icon name={c.icon} className="h-6 w-6 text-cyan-300" />
                </span>
                <p className="relative text-sm font-semibold text-slate-200">{c.label}</p>
                <span className="relative inline-flex items-center gap-1.5 text-[11px] text-slate-500">
                  <ImageIcon className="h-3.5 w-3.5" />
                  Screenshot slot
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-slate-600">
            <EyeOff className="h-3.5 w-3.5" />
            Sensitive customer information will be blurred or hidden in all published screenshots.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
