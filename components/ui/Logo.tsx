import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="DigitalPitch Technologies — home"
    >
      <Image
        src="/logo-mark.png"
        alt="DigitalPitch Technologies logo"
        width={477}
        height={601}
        priority
        className="h-9 w-auto drop-shadow-[0_0_14px_rgba(34,211,238,0.25)]"
      />
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
