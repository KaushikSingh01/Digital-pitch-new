import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="DigitalPitch Technologies — home"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-cyan-500 shadow-glow">
        <span className="text-sm font-black tracking-tighter text-white">DP</span>
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-bold tracking-tight text-white">
          DigitalPitch
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-300/80">
          Technologies
        </span>
      </span>
    </Link>
  );
}
