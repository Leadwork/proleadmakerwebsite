import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTASection from "@/components/home/CTASection";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";
import { siteConfig } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

const emojiForCategory = (cat: string): string => {
  const map: Record<string, string> = {
    "Signal-Based Prospecting": "📡",
    "B2B Lead Generation": "🎯",
    "Cold Email Outreach": "✉️",
    "Email Deliverability": "📬",
    "LinkedIn Lead Generation": "🔗",
    "Prospect List Building": "📋",
    "Sales Prospecting": "🚀",
    "Email Verification": "🔬",
  };
  return map[cat] ?? "📝";
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const html = renderMarkdown(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: siteConfig.social.founderLinkedin,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/Logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article hero */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-14 overflow-hidden hero-bg">
        <div
          className="orb w-[400px] h-[400px] top-[-120px] right-[8%]"
          style={{ background: "#7c3aed", opacity: 0.13 }}
          aria-hidden="true"
        />
        <div
          className="orb w-[320px] h-[320px] bottom-[-100px] left-[6%]"
          style={{ background: "#e91e8c", opacity: 0.13, animationDelay: "-5s" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5 justify-center">
            <Link
              href="/blog"
              className="text-xs font-semibold text-brand-purple-dark hover:text-brand-pink"
            >
              ← Back to Blog
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-purple-dark px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20">
              {emojiForCategory(post.category)} {post.category}
            </span>
            <span className="text-xs text-ink-400 font-semibold">
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink-950 font-display mb-5 text-center animate-fade-up leading-[1.1] tracking-tight">
            {post.title}
          </h1>
          <p className="text-center text-ink-600 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-ink-500">
            <span className="flex items-center gap-2">
              <span
                className="inline-block w-8 h-8 rounded-full text-white text-xs font-bold flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed, #c026d3, #e91e8c)",
                }}
                aria-hidden="true"
              >
                AA
              </span>
              <span className="font-semibold">{post.author}</span>
            </span>
            <span aria-hidden="true" className="text-ink-300">·</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div
            className="prose-light"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Inline CTA */}
          <CTASection variant="inline" />

          {/* Author bio */}
          <div className="mt-12 card p-6 md:p-7 grid grid-cols-[auto_1fr] gap-5 items-center">
            <div
              className="w-16 h-16 rounded-full text-white font-bold flex items-center justify-center text-lg"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed, #c026d3, #e91e8c)",
              }}
              aria-hidden="true"
            >
              AA
            </div>
            <div>
              <div className="text-sm font-bold text-ink-950 font-display">
                Written by {post.author}
              </div>
              <p className="text-xs text-ink-500 mt-1 leading-relaxed">
                Founder of Pro Lead Maker. 7+ years building signal-based B2B
                prospect lists for 617+ clients worldwide. Fiverr Level 2 and
                Upwork Top Rated.
              </p>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <section className="mt-14 pt-10 border-t border-ink-100">
              <h2 className="text-xl font-extrabold text-ink-950 mb-5 font-display">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="card p-5 group"
                  >
                    <span className="text-[10px] uppercase tracking-wider font-bold text-brand-purple-dark">
                      {r.category}
                    </span>
                    <h3 className="text-base font-bold text-ink-950 mt-1 mb-2 group-hover:text-brand-purple-dark transition-colors font-display">
                      {r.title}
                    </h3>
                    <p className="text-xs text-ink-500 leading-relaxed">
                      {r.excerpt.slice(0, 100)}…
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10 pt-8 border-t border-ink-100">
            <Link
              href="/blog"
              className="text-sm font-bold text-brand-purple-dark hover:text-brand-pink"
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
