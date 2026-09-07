import { MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { whatsappPrimaryWithMessage } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border-glow px-6 py-16 text-center sm:px-12 lg:py-20">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh" />
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ready To Build Your{" "}
              <span className="text-gradient-blue">Digital Growth Engine?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
              Let&apos;s build a system that attracts customers, converts leads and
              automates your business.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Book Free Strategy Call
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href={whatsappPrimaryWithMessage} variant="whatsapp" size="lg" className="w-full sm:w-auto">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
