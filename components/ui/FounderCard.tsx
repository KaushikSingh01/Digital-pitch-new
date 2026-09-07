import Image from "next/image";
import { Linkedin, MessageCircle, Sparkles } from "lucide-react";
import type { Founder } from "@/lib/company";
import { GlassCard } from "./GlassCard";

export function FounderCard({ founder }: { founder: Founder }) {
  return (
    <GlassCard glowBorder className="h-full !p-0 overflow-hidden">
      <div className="flex h-full flex-col">
        {/* Portrait — full photo, never cropped. Blurred copy fills the frame behind. */}
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          {/* blurred backdrop (same image) so the contained photo has no empty bars */}
          <Image
            src={founder.photo}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="scale-110 object-cover opacity-30 blur-2xl"
          />
          <div className="absolute inset-0 bg-ink-950/40" />
          {/* full, uncropped foreground */}
          <Image
            src={founder.photo}
            alt={`${founder.name} — ${founder.role}, DigitalPitch Technologies`}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-contain"
            priority
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900 to-transparent" />
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold tracking-tight text-white">{founder.name}</h3>
          <p className="mt-1 text-sm font-semibold text-cyan-300">{founder.role}</p>
          <p className="text-xs uppercase tracking-wide text-slate-500">{founder.focus}</p>

          {founder.note && (
            <p className="mt-3 inline-flex items-center gap-1.5 self-start rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
              <Sparkles className="h-3.5 w-3.5" />
              {founder.note}
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-slate-400">{founder.bio}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {founder.expertise.map((e) => (
              <span
                key={e}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300"
              >
                {e}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-3 pt-6">
            <a
              href={founder.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={founder.linkedin}
              aria-label={`${founder.name} on LinkedIn (coming soon)`}
              className="grid h-9 w-9 place-items-center rounded-full glass text-slate-300 transition-colors hover:text-white"
              title="LinkedIn — coming soon"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
