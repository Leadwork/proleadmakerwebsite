import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/home/CTASection";
import MiniCTA from "@/components/home/MiniCTA";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Pro Lead Maker — a signal-based B2B lead intelligence agency founded by MD. Al Amin. 617+ clients, 100K+ leads, Fiverr Level 2 & Upwork Top Rated.",
};

const whyCards = [
  { icon: "✅", title: "Accurate & Verified Data", desc: "Every contact is manually researched and triple-verified with 98%+ accuracy." },
  { icon: "⚡", title: "Fast Delivery", desc: "Most projects delivered within 24–48 hours. Rush delivery available on request." },
  { icon: "🤝", title: "Client-Focused", desc: "We understand your exact targeting needs for conversion-ready leads." },
  { icon: "🔄", title: "Free Replacement", desc: "Invalid or incorrect data is replaced at no cost. Complete peace of mind." },
  { icon: "🎯", title: "Signal-Based Research", desc: "We use real buying signals — not demographics — for pre-qualified prospects." },
  { icon: "🌍", title: "Global Coverage", desc: "We target prospects across US, UK, Europe, Australia, and beyond." },
  { icon: "📬", title: "Outreach-Ready Data", desc: "Leads optimized for cold email and LinkedIn with verified contact details." },
  { icon: "💼", title: "Highly Targeted", desc: "Advanced filters: location, role, company size, tech stack, intent signals." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Pro Lead Maker"
        title="The Signal-Based B2B Lead Intelligence Agency"
        subtitle="A results-driven lead intelligence agency helping 617+ businesses scale with verified, signal-based prospect data."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div
                  className="absolute -inset-5 rounded-3xl opacity-40"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(192,38,211,0.2), rgba(233,30,140,0.2))",
                    filter: "blur(28px)",
                  }}
                  aria-hidden="true"
                />
                <Image
                  src="/images/Team-Founder.jpg"
                  alt="MD. Al Amin – Founder of Pro Lead Maker"
                  width={520}
                  height={620}
                  className="relative rounded-3xl shadow-2xl shadow-brand-purple/15 border-4 border-white w-full h-auto hover:scale-[1.01] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="chip mb-4">
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink-950 mb-5 font-display leading-tight">
                Pre-Qualified Data Built the Way It Should Be
              </h2>
              <p className="text-ink-600 leading-relaxed mb-4">
                Pro Lead Maker is a results-driven B2B lead intelligence agency
                helping businesses scale with pre-qualified, signal-based
                prospect data. Founded by MD. Al Amin, we&apos;ve grown from a
                solo operation into a trusted data partner for 617+ clients
                worldwide.
              </p>
              <p className="text-ink-600 leading-relaxed mb-6">
                Unlike generic list providers, we take a signal-based approach —
                personally researching and verifying every contact based on real
                buying intent. This is why our data consistently achieves 98%+
                accuracy and why clients keep coming back.
              </p>
              <div className="card p-5 border-l-4 border-brand-magenta">
                <p className="text-ink-800 font-semibold text-sm">
                  🎯 Our Mission: Pre-qualified, signal-based lead intelligence
                  that helps businesses grow faster — with accuracy you can
                  trust and speed you can count on.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/#free-sample" className="btn-primary !text-[13px]">
                  🎁 Get FREE Sample Leads
                </Link>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !text-[13px]"
                >
                  📞 Book a Strategy Call
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 relative soft-bg">
        <div className="section-gradient-line absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Meet the Founder"
              title="The Person Behind the Data"
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="card p-8 mt-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
              <Image
                src="/images/Team-Founder.jpg"
                alt="MD. Al Amin"
                width={160}
                height={160}
                className="w-[150px] h-[150px] rounded-full object-cover border-4 border-white shadow-xl shadow-brand-purple/20 mx-auto md:mx-0"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-extrabold text-ink-950 font-display">
                  MD. Al Amin
                </h3>
                <div className="text-sm text-brand-purple-dark font-bold mb-3">
                  Founder & Lead Intelligence Specialist
                </div>
                <p className="text-sm text-ink-600 leading-relaxed mb-4">
                  With 7+ years of B2B data experience, Al Amin has delivered
                  over 100,000+ verified leads across 150+ industries. As a
                  Fiverr Level 2 Seller and Upwork Top Rated freelancer, he
                  brings a signal-based, quality-obsessed approach to every
                  project.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {[
                    "🏆 Upwork Top Rated",
                    "⭐ Fiverr Level 2",
                    "🎯 Signal-Based Leads",
                    "🔗 LinkedIn Prospecting",
                    "📊 Data Enrichment",
                    "✉️ Email Verification",
                    "🚀 100K+ Leads",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1.5 rounded-full text-xs font-bold bg-white border border-brand-purple/20 text-brand-purple-dark hover:bg-brand-purple/5 transition-all"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Why Choose Us"
              title="What Makes Pro Lead Maker Different"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {whyCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card p-6 h-full group">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-3 transition-transform group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(233,30,140,0.1))",
                      border: "1px solid rgba(124,58,237,0.18)",
                    }}
                    aria-hidden="true"
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-ink-950 text-sm mb-1.5 font-display">
                    {card.title}
                  </h3>
                  <p className="text-xs text-ink-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <MiniCTA />
      <CTASection />
    </>
  );
}
