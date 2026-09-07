import type { Metadata } from "next";
import { SITE, CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="pt-28 sm:pt-32 lg:pt-40">
      <div className="container-x max-w-3xl pb-20">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">
          Template — replace with your finalised legal policy before publishing.
        </p>

        <div className="prose-invert mt-8 space-y-6 text-sm leading-relaxed text-slate-300">
          <p>
            This Privacy Policy explains how {SITE.name} (&quot;we&quot;, &quot;us&quot;) collects,
            uses and protects information you provide through {SITE.domainLabel}.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-white">Information we collect</h2>
            <p className="mt-2">
              We collect details you submit through our contact and lead forms — such as
              your name, business name, email, phone number and message — so we can respond
              to your enquiry. We may also collect basic analytics data about how visitors
              use our website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">How we use your information</h2>
            <p className="mt-2">
              We use your information to respond to enquiries, provide our services, and
              improve our website. We do not sell your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p className="mt-2">
              For any privacy questions, contact us at{" "}
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
