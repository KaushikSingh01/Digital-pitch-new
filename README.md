# DigitalPitch Technologies — Website

Premium, 3D, conversion-focused website for **DigitalPitch Technologies** — a digital
marketing, website development, SEO, Google Business Profile, AI agents, AI automation
and lead-generation agency.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**,
**React Three Fiber / Three.js**, **Framer Motion** and **Lucide** icons.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm start
```

### Environment variables

Copy `.env.example` to `.env.local` and adjust as needed:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL (defaults to `https://digitalpitchtech.com`). Used for metadata, canonical URLs, sitemap and schema. |
| `NEXT_PUBLIC_LEAD_ENDPOINT` | Optional. If set, the lead form POSTs JSON here (e.g. a Formspree URL or your own `/api` route). If empty, the form hands off to WhatsApp with the details pre-filled so no lead is lost. |

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. Set `NEXT_PUBLIC_SITE_URL=https://digitalpitchtech.com` (and `NEXT_PUBLIC_LEAD_ENDPOINT` if used) in Project → Settings → Environment Variables.
4. Add your domain `digitalpitchtech.com` in Project → Settings → Domains.

No other configuration is required — the build is a standard Next.js app.

---

## Project structure

```
app/
  layout.tsx              # Root layout, metadata, Org/WebSite JSON-LD, nav/footer/WhatsApp
  page.tsx                # Homepage (composes all sections)
  globals.css             # Tailwind + design tokens + glassmorphism utilities
  sitemap.ts robots.ts    # SEO route handlers
  manifest.ts             # PWA manifest
  contact/  about/  blog/ # Standalone pages
  services/[slug]/        # Data-driven service page template (9 services)
  privacy-policy/ terms/  # Legal templates
  not-found.tsx           # 404
components/
  3d/                     # HeroScene (R3F), HeroVisual (lazy + WebGL fallback), webgl check
  sections/               # All homepage sections + service page building blocks
  ui/                     # Navbar, Footer, FloatingWhatsApp, Button, GlassCard, LeadForm, etc.
lib/
  site.ts                 # ⭐ Single source of truth: contact details, nav, options
  services.ts             # ⭐ All 9 service definitions (drives /services/[slug])
  schema.ts               # JSON-LD generators (Organization, Service, FAQ, Breadcrumb)
public/                   # Favicon, OG image, PWA icons
```

### Where to edit common things

- **Contact details / phone / WhatsApp / email:** `lib/site.ts` (used everywhere).
- **Services (copy, features, FAQ):** `lib/services.ts`.
- **Colors / theme:** `tailwind.config.ts` + `app/globals.css`.

---

## Contact details wired in

- Primary WhatsApp: **+357 94 569450** → `https://wa.me/35794569450`
- India Call & WhatsApp: **+91 90685 29250** → `tel:+919068529250` / `https://wa.me/919068529250`
- Email: **info@digitalpitchtech.com** → `mailto:info@digitalpitchtech.com`
- Canonical domain: **https://digitalpitchtech.com**

---

## Placeholders to replace before launch

These are **clearly marked in code** and use no fabricated data:

- `components/sections/TrustBar.tsx` — "100+ Websites Built" is an illustrative placeholder with a visible disclaimer. Replace with verified figures.
- `components/sections/Portfolio.tsx` — placeholder projects & metrics (labelled "Placeholder").
- `components/sections/Testimonials.tsx` — placeholder testimonials (labelled "Placeholder"). **Never present as real reviews.**
- `components/sections/SEOSection.tsx` — ranking climb is an illustrative animation, not a guarantee.
- `lib/site.ts` `SOCIALS` — social links are `#` placeholders; add real profile URLs.
- `app/privacy-policy` and `app/terms` — legal templates; replace with finalised policies.

---

## Performance & accessibility

- 3D scene is lazy-loaded (`next/dynamic`, `ssr: false`) and never blocks first paint.
- CSS fallback renders when WebGL is unavailable; particle count is reduced on mobile.
- `prefers-reduced-motion` is respected across animations and the 3D scene.
- Headings, copy and CTAs are standard, crawlable HTML — 3D is enhancement only.
- Semantic landmarks, skip link, focus-visible rings, aria-labels on icon buttons.
```
