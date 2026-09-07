"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Send, CheckCircle2, Loader2 } from "lucide-react";
import {
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  CONTACT,
  whatsappPrimaryWithMessage,
} from "@/lib/site";
import { Button } from "./Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400/50 focus:bg-white/[0.05] focus:outline-none";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

    // If a lead endpoint is configured, POST to it. Otherwise, hand off to
    // WhatsApp with the details pre-filled so no lead is ever lost.
    if (!endpoint) {
      const msg =
        `New enquiry from the website:%0A%0A` +
        `Name: ${data.name || "-"}%0A` +
        `Business: ${data.business || "-"}%0A` +
        `Email: ${data.email || "-"}%0A` +
        `Phone: ${data.phone || "-"}%0A` +
        `Website: ${data.website || "-"}%0A` +
        `Service: ${data.service || "-"}%0A` +
        `Budget: ${data.budget || "-"}%0A` +
        `Message: ${data.message || "-"}`;
      window.open(`${CONTACT.whatsappPrimaryHref}?text=${msg}`, "_blank", "noopener,noreferrer");
      setStatus("success");
      form.reset();
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl glass-strong p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-cyan-400" />
        <h3 className="mt-4 text-xl font-semibold text-white">Thank you!</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-400">
          Your details are on their way. Our team will get back to you shortly to
          plan your growth engine.
        </p>
        <Button
          href={whatsappPrimaryWithMessage}
          variant="whatsapp"
          size="md"
          className="mt-6"
        >
          <MessageCircle className="h-5 w-5" />
          Or chat with us now
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl glass-strong p-6 sm:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your full name" required />
        <Field label="Business Name" name="business" placeholder="Company / brand" />
        <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
        <Field label="Phone / WhatsApp" name="phone" type="tel" placeholder="+1 234 567 890" required />
        <Field label="Website" name="website" placeholder="yourwebsite.com" className="sm:col-span-2" />

        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Service Required
          </label>
          <select id="service" name="service" className={inputBase} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s} className="bg-ink-900">
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="budget" className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Budget Range
          </label>
          <select id="budget" name="budget" className={inputBase} defaultValue="">
            <option value="" disabled>
              Select a budget
            </option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b} className="bg-ink-900">
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us what you want to grow, improve or automate…"
            className={inputBase}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          Something went wrong sending your enquiry. Please try again or message us on WhatsApp.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="h-5 w-5" /> Get My Free Consultation
            </>
          )}
        </Button>

        <div className="flex items-center gap-3 sm:ml-2">
          <span className="text-sm text-slate-400">Prefer WhatsApp?</span>
          <Button href={whatsappPrimaryWithMessage} variant="whatsapp" size="md">
            <MessageCircle className="h-5 w-5" /> Chat Now
          </Button>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">
        By submitting, you agree to be contacted about your enquiry. We never share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={inputBase}
      />
    </div>
  );
}
