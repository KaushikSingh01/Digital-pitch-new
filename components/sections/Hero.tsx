import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/3d/HeroVisual";
import { whatsappPrimaryWithMessage } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Backgrounds */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-mesh" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid mask-fade-b opacity-[0.5]" />

      <div className="container-x grid items-center gap-12 pb-16 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              Your entire digital growth stack
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              <span className="text-gradient">BUILD. RANK.</span>
              <br />
              <span className="text-gradient-blue">AUTOMATE. GROW.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
              We specialise in Google Business Profile setup, verification and
              optimization — getting your business seen on Google Search and Maps.
              Around that, we build high-performance websites, SEO, SaaS tools and
              AI automation into one complete growth system.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Start Growing
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="/#services" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Our Services
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-5 flex items-center justify-center gap-2 lg:justify-start">
              <a
                href={whatsappPrimaryWithMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
              {["GBP Setup & Verification", "Local SEO", "Google Maps", "Web & SaaS", "AI Automation"].map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* 3D visual */}
        <Reveal delay={0.1} className="relative">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
