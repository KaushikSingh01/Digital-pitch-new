import { MessageCircle, Phone, Mail } from "lucide-react";
import { CONTACT, whatsappPrimaryWithMessage } from "@/lib/site";
import { cn } from "@/lib/cn";

type Card = {
  label: string;
  value: string;
  action: string;
  href: string;
  external?: boolean;
  icon: typeof Phone;
  tint: string;
};

const CARDS: Card[] = [
  {
    label: "WhatsApp",
    value: CONTACT.whatsappPrimaryDisplay,
    action: "Chat Now",
    href: whatsappPrimaryWithMessage,
    external: true,
    icon: MessageCircle,
    tint: "from-[#25D366]/25 to-transparent",
  },
  {
    label: "Call",
    value: CONTACT.indiaDisplay,
    action: "Call Now",
    href: CONTACT.callIndiaHref,
    icon: Phone,
    tint: "from-electric-500/25 to-transparent",
  },
  {
    label: "India WhatsApp",
    value: CONTACT.indiaDisplay,
    action: "Message Now",
    href: CONTACT.whatsappIndiaHref,
    external: true,
    icon: MessageCircle,
    tint: "from-cyan-500/25 to-transparent",
  },
  {
    label: "Email",
    value: CONTACT.email,
    action: "Email Us",
    href: CONTACT.emailHref,
    icon: Mail,
    tint: "from-violet-500/25 to-transparent",
  },
];

export function ContactCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {CARDS.map((c) => {
        const I = c.icon;
        return (
          <a
            key={c.label}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            className="group flex flex-col rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            <div className={cn("mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-inset ring-white/10", c.tint)}>
              <I className="h-6 w-6 text-white" />
            </div>
            <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {c.label}
            </span>
            <span className="mt-1 break-words text-base font-semibold text-white">
              {c.value}
            </span>
            <span className="mt-3 text-sm font-semibold text-cyan-300 transition-colors group-hover:text-cyan-200">
              {c.action} →
            </span>
          </a>
        );
      })}
    </div>
  );
}
