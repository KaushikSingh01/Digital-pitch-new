import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Aurora } from "@/components/ui/Aurora";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationSchema, websiteSchema, softwareApplicationSchema } from "@/lib/schema";
import { SITE, BASE_URL } from "@/lib/site";
import { LOCALRADAR } from "@/lib/company";

// Self-hosted variable fonts (no runtime dependency on Google Fonts).
// Geist (body) + Sora (display) — a premium, characterful pairing.
const sora = localFont({
  src: "../fonts/sora-var.woff2",
  display: "swap",
  variable: "--font-display",
  weight: "100 800",
  fallback: ["system-ui", "arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE.name} — Build. Rank. Automate. Grow.`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "digital marketing agency",
    "website development",
    "SEO agency",
    "local SEO",
    "Google Business Profile optimization",
    "AI agents",
    "AI automation",
    "lead generation",
    "domain and hosting",
    "Google Ads",
  ],
  authors: [{ name: SITE.name, url: BASE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: BASE_URL,
    siteName: SITE.name,
    title: `${SITE.name} — Build. Rank. Automate. Grow.`,
    description: SITE.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Build. Rank. Automate. Grow.`,
    description: SITE.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#03060f",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-ink-950 font-sans text-slate-100 antialiased">
        <JsonLd
          data={[
            organizationSchema(),
            websiteSchema(),
            softwareApplicationSchema({
              name: LOCALRADAR.name,
              url: LOCALRADAR.url,
              description: LOCALRADAR.description,
            }),
          ]}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-electric-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Aurora />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
