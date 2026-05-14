import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHero from "@/components/shared/PageHero";
import MiniCTA from "@/components/home/MiniCTA";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Expert insights on signal-based prospecting, B2B lead generation, cold email outreach, LinkedIn lead generation, email verification, and outreach systems that convert.",
};

const accentForCategory = (cat: string): string => {
  const map: Record<string, string> = {
    "Signal-Based Prospecting": "from-brand-purple/15 to-brand-magenta/15",
    "B2B Lead Generation": "from-brand-magenta/15 to-brand-pink/15",
    "Cold Email Outreach": "from-brand-pink/15 to-brand-purple/15",
    "Email Deliverability": "from-brand-purple/20 to-brand-pink/15",
    "LinkedIn Lead Generation": "from-brand-magenta/20 to-brand-purple/15",
    "Prospect List Building": "from-brand-purple/15 to-brand-pink/20",
    "Sales Prospecting": "from-brand-pink/20 to-brand-magenta/15",
    "Email Verification": "from-brand-magenta/15 to-brand-pink/20",
  };
  return map[cat] ?? "from-brand-purple/15 to-brand-pink/15";
};

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

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Blog & Insights"
        title="Expert Guides for B2B Outbound Teams"
        subtitle="Signal-based prospecting, cold email, deliverability, LinkedIn outreach, and the systems that actually book meetings."
      />

      {/* Featured post */}
      {featured && (
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <Link href={`/blog/${featured.slug}`} className="group block">
                <article className="card overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-0 hover:shadow-2xl hover:shadow-brand-purple/15">
                  <div
                    className={`aspect-[16/9] lg:aspect-auto bg-gradient-to-br ${accentForCategory(
                      featured.category
                    )} flex items-center justify-center relative overflow-hidden`}
                  >
                    <span
                      className="text-[7rem] opacity-50 transition-transform group-hover:scale-110 duration-500"
                      aria-hidden="true"
                    >
                      {emojiForCategory(featured.category)}
                    </span>
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white text-[10px] uppercase tracking-wider font-bold text-brand-magenta">
                      ⭐ Featured
                    </div>
                  </div>
                  <div className="p-7 md:p-9 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-brand-purple-dark px-2.5 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20">
                        {featured.category}
                      </span>
                      <span className="text-[11px] text-ink-400 font-semibold">
                        {featured.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-ink-950 mb-3 font-display group-hover:text-brand-purple-dark transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-sm md:text-base text-ink-600 leading-relaxed mb-5">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-ink-100">
                      <span className="text-xs text-ink-500 font-semibold">
                        By {featured.author} ·{" "}
                        {new Date(featured.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-sm font-bold text-brand-purple-dark group-hover:translate-x-1 transition-transform">
                        Read more →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <article className="card overflow-hidden h-full flex flex-col">
                    <div
                      className={`aspect-[16/9] bg-gradient-to-br ${accentForCategory(
                        post.category
                      )} flex items-center justify-center overflow-hidden`}
                    >
                      <span
                        className="text-5xl opacity-50 transition-transform group-hover:scale-110 duration-500"
                        aria-hidden="true"
                      >
                        {emojiForCategory(post.category)}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-brand-purple-dark px-2.5 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20">
                          {post.category}
                        </span>
                        <span className="text-[11px] text-ink-400 font-semibold">
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-extrabold text-ink-950 mb-2 group-hover:text-brand-purple-dark transition-colors font-display leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-sm text-ink-500 leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-ink-100">
                        <span className="text-xs text-ink-400 font-semibold">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="text-xs font-bold text-brand-purple-dark group-hover:translate-x-1 transition-transform">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <MiniCTA
        heading="Get the Same Quality Data Behind Every Post"
        sub="Try our signal-based prospect data risk-free. FREE Sample Leads delivered within 24 hours."
      />
    </>
  );
}
