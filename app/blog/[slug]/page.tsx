import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, MessageCircle } from "lucide-react";
import { POSTS, POST_SLUGS, getPost, type Block } from "@/lib/blog";
import { BASE_URL, SITE, whatsappPrimaryWithMessage } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${post.title} | ${SITE.name}`,
      description: post.description,
      url: `${BASE_URL}${url}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: "/og.png", width: 1200, height: 630, alt: post.title }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function Content({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.type === "h2")
          return <h2 key={i} className="mt-10 text-2xl font-bold tracking-tight text-white">{b.text}</h2>;
        if (b.type === "p")
          return <p key={i} className="text-[15px] leading-relaxed text-slate-300">{b.text}</p>;
        if (b.type === "ul")
          return (
            <ul key={i} className="space-y-2.5">
              {b.items.map((it, j) => (
                <li key={j} className="flex items-start gap-2.5 text-[15px] text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {it}
                </li>
              ))}
            </ul>
          );
        return (
          <ol key={i} className="space-y-2.5">
            {b.items.map((it, j) => (
              <li key={j} className="flex items-start gap-3 text-[15px] text-slate-300">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-electric-500/20 text-[11px] font-bold text-cyan-200">
                  {j + 1}
                </span>
                {it}
              </li>
            ))}
          </ol>
        );
      })}
    </div>
  );
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = `/blog/${post.slug}`;
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/icon-512.png` },
    },
    mainEntityOfPage: `${BASE_URL}${url}`,
    image: `${BASE_URL}/og.png`,
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url },
          ]),
        ]}
      />

      <article className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid mask-fade-b opacity-40" />
        <div className="container-x max-w-3xl pb-16">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <li><Link href="/" className="hover:text-cyan-300">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-cyan-300">Blog</Link></li>
            </ol>
          </nav>

          <Reveal>
            <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-300">
              {post.category}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
              <span>By {post.author}</span>
              <span className="text-slate-700">·</span>
              <span>{formatDate(post.date)}</span>
              <span className="text-slate-700">·</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readingTime}</span>
            </div>
          </Reveal>

          <div className="my-8 h-px w-full bg-white/10" />

          <Reveal delay={0.12}>
            <Content blocks={post.content} />
          </Reveal>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border-glow p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">Want help putting this into action?</h2>
            <p className="mt-2 text-sm text-slate-300">
              DigitalPitch Technologies specialises in Google Business Profile, Local SEO and automation. Book a free consultation or message us.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" size="md">
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={whatsappPrimaryWithMessage} variant="whatsapp" size="md">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </Button>
            </div>
          </div>

          <Link href="/blog" className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
        </div>
      </article>

      {/* Related */}
      <section className="section-pad pt-0">
        <div className="container-x">
          <h2 className="text-lg font-semibold text-white">Related articles</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="text-[11px] font-medium uppercase tracking-wide text-cyan-300">{p.category}</span>
                <h3 className="mt-2 text-sm font-semibold leading-snug text-white">{p.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
