import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

// NOTE: "100+ Websites Built" is a PLACEHOLDER metric until verified with real
// business data. Replace `value`/`placeholder` below once confirmed. Non-numeric
// items are capability statements, not performance claims.
type Stat = {
  value?: number;
  suffix?: string;
  label: string;
  placeholder?: boolean;
  static?: string;
};

const STATS: Stat[] = [
  { value: 100, suffix: "+", label: "Websites Built", placeholder: true },
  { static: "Google", label: "Visibility Solutions" },
  { static: "24/7", label: "AI Automation" },
  { static: "Global", label: "Client Support" },
];

export function TrustBar() {
  return (
    <section aria-label="Key highlights" className="relative border-y border-white/5 bg-ink-950/60">
      <div className="container-x py-10 lg:py-12">
        <dl className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center">
                <dd className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  <span className="text-gradient-blue">
                    {s.value != null ? (
                      <Counter to={s.value} suffix={s.suffix} />
                    ) : (
                      s.static
                    )}
                  </span>
                </dd>
                <dt className="mt-2 text-sm text-slate-400 sm:text-base">
                  {s.label}
                  {s.placeholder && (
                    /* eslint-disable-next-line react/no-unescaped-entities */
                    <span className="ml-1 align-super text-[10px] text-slate-600" title="Placeholder metric — replace with verified data">
                      *
                    </span>
                  )}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
        <p className="mt-6 text-center text-[11px] text-slate-600">
          {/* Placeholder disclosure — remove once metric is verified */}
          * Illustrative figure shown until verified business data is provided.
        </p>
      </div>
    </section>
  );
}
