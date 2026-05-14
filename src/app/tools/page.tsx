import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHero from "@/components/shared/PageHero";
import MiniCTA from "@/components/home/MiniCTA";
import { tools, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Tools & Resources",
  description:
    "Free B2B tools: ICP Generator, Cold Email Template Generator, Subject Line Generator, Outreach Calculator, and more.",
};

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Tools & Resources"
        title="Free B2B Tools to Supercharge Your Outreach"
        subtitle="Powerful, no-signup tools to help you build ICPs, write better cold emails, and calculate outreach ROI."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool, i) => (
              <ScrollReveal key={i} delay={i * 90}>
                <div className="card p-7 cursor-default h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 border border-brand-purple/25 text-brand-purple-dark">
                      Coming Soon
                    </span>
                  </div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 transition-transform group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(233,30,140,0.1))",
                      border: "1px solid rgba(124,58,237,0.18)",
                    }}
                    aria-hidden="true"
                  >
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-ink-950 mb-2 font-display">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed flex-1">
                    {tool.description}
                  </p>
                  <button
                    disabled
                    className="mt-6 w-full py-3 rounded-xl bg-ink-100 text-ink-400 font-semibold text-sm cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div
              className="mt-14 rounded-3xl p-10 text-center shadow-xl shadow-brand-magenta/15 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed 0%, #c026d3 50%, #e91e8c 100%)",
              }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 font-display">
                Want Early Access?
              </h2>
              <p className="text-white/85 mb-7 max-w-lg mx-auto">
                Be the first to know when these tools launch. In the meantime,
                get 100% FREE Sample Leads delivered in 24 hours.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/#free-sample"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-magenta font-bold text-sm shadow-xl hover:-translate-y-1 transition-all"
                >
                  🎁 Get FREE Sample Leads
                </Link>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/40 text-white font-bold text-sm hover:bg-white/15 hover:-translate-y-1 transition-all"
                >
                  📞 Book a Strategy Call
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <MiniCTA />
    </>
  );
}
