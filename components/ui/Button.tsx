import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap active:scale-[0.97] active:transition-none";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-gradient-to-r from-electric-500 to-cyan-500 shadow-glow hover:shadow-glow-cyan hover:-translate-y-0.5",
  secondary:
    "text-white glass-strong hover:bg-white/10 hover:-translate-y-0.5",
  ghost: "text-slate-200 hover:text-white hover:bg-white/5",
  whatsapp:
    "text-white bg-[#25D366] hover:bg-[#1fbe5b] shadow-[0_18px_50px_-18px_rgba(37,211,102,0.6)] hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
};

type AsButton = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: never;
};

export function Button(props: AsLink | AsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const isExternal =
      props.external ||
      props.href.startsWith("http") ||
      props.href.startsWith("tel:") ||
      props.href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={props.href}
          className={classes}
          target={props.href.startsWith("http") ? "_blank" : undefined}
          rel={props.href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
