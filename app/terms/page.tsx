import type { Metadata } from "next";
import { SITE, CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms & Conditions for ${SITE.name}.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <article className="pt-28 sm:pt-32 lg:pt-40">
      <div className="container-x max-w-3xl pb-20">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-slate-500">
          Template — replace with your finalised terms before publishing.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-300">
          <p>
            These Terms &amp; Conditions govern your use of {SITE.domainLabel} and the
            services provided by {SITE.name}.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-white">Use of our website</h2>
            <p className="mt-2">
              By using this website you agree to use it lawfully and not to misuse any
              content or functionality. All content is provided for general information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Services</h2>
            <p className="mt-2">
              Specific service scope, deliverables, timelines and fees are agreed
              separately in a proposal or contract before work begins.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p className="mt-2">
              Questions about these terms? Email{" "}
              <a href={CONTACT.emailHref} className="text-cyan-300 hover:text-cyan-200">
                {CONTACT.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
