"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { NAV, whatsappPrimaryWithMessage, type NavItem } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { Button } from "./Button";

function isExternal(href: string) {
  return href.startsWith("http");
}

function NavLink({ item }: { item: NavItem }) {
  if (item.children?.length) {
    return (
      <div className="group relative">
        <Link
          href={item.href}
          className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
        >
          {item.label}
          <ChevronDown className="h-3.5 w-3.5 opacity-70" />
        </Link>
        <div className="invisible absolute left-0 top-full z-50 min-w-[200px] translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div className="glass-strong rounded-xl border border-white/10 p-1.5 shadow-card">
            {item.children.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={isExternal(c.href) ? "_blank" : undefined}
                rel={isExternal(c.href) ? "noopener noreferrer" : undefined}
                className="block rounded-lg px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {c.label}
                <span className="ml-1 text-cyan-300">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <Link
      href={item.href}
      className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
    >
      {item.label}
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-strong border-b border-white/10 shadow-card"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Logo className="shrink-0" />

        {/* Desktop nav (xl and up) */}
        <ul className="hidden min-w-0 items-center gap-0.5 xl:flex">
          {NAV.map((item) => (
            <li key={item.label}>
              <NavLink item={item} />
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a
            href={whatsappPrimaryWithMessage}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
            className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366] text-white transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
          <Button href="/contact" variant="primary" size="sm">
            Free Consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl glass text-white xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "xl:hidden overflow-hidden transition-[max-height,opacity] duration-300",
          open ? "max-h-[90vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0",
        )}
      >
        <div className="glass-strong border-t border-white/10 px-5 pb-8 pt-2">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
                {item.children?.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={isExternal(c.href) ? "_blank" : undefined}
                    rel={isExternal(c.href) ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-8 py-2.5 text-sm text-cyan-300 hover:bg-white/5"
                  >
                    {c.label} ↗
                  </a>
                ))}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Button href={whatsappPrimaryWithMessage} variant="whatsapp" size="md" className="w-full">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Us
            </Button>
            <Button href="/contact" variant="primary" size="md" className="w-full">
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
