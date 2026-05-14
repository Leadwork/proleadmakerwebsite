import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/home/CTASection";
import MiniCTA from "@/components/home/MiniCTA";
import { testimonials, caseStudies, reviewScreenshots } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Results & Case Studies",
  description:
    "See real results from 617+ clients. 430+ verified reviews, detailed case studies, and proof of our signal-based lead intelligence quality.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Real Results · Real Clients"
        title="Pipeline Outcomes From 617+ Clients"
        subtitle="430+ verified 5-star reviews and detailed case studies. Real businesses, real outcomes, real revenue."
      />

      {/* Metrics Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "617+", label: "Clients Served" },
              { value: "430+", label: "Verified Reviews" },
              { value: "98%+", label: "Data Accuracy" },
              { value: "100K+", label: "Leads Delivered" },
            ].map((metric, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card p-6 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold gradient-text">
                    {metric.value}
                  </div>
                  <div className="text-xs text-ink-500 mt-2 font-bold uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 relative soft-bg">
        <div className="section-gradient-line absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Case Studies"
              title="Real Projects, Real Results"
              subtitle="Detailed breakdowns of how our signal-based approach delivered measurable business outcomes."
            />
          </ScrollReveal>

          <div className="space-y-7 mt-14">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="card p-7 md:p-9">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/20 text-brand-purple-dark">
                          {cs.industry}
                        </span>
                        <span className="text-xs text-ink-400 font-semibold">
                          {cs.client}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-ink-950 mb-5 font-display">
                        {cs.title}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-ink-400 font-bold mb-2">
                            Challenge
                          </div>
                          <p className="text-sm text-ink-600 leading-relaxed">
                            {cs.challenge}
                          </p>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-ink-400 font-bold mb-2">
                            Solution
                          </div>
                          <p className="text-sm text-ink-600 leading-relaxed">
                            {cs.solution}
                          </p>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-ink-400 font-bold mb-2">
                            Results
                          </div>
                          <ul className="space-y-1.5">
                            {cs.results.map((r) => (
                              <li
                                key={r}
                                className="text-sm text-ink-700 flex items-center gap-2"
                              >
                                <span
                                  className="text-brand-magenta text-xs font-bold"
                                  aria-hidden="true"
                                >
                                  ✓
                                </span>{" "}
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Big metric */}
                    <div
                      className="text-center rounded-3xl p-6"
                      style={{
                        background:
                          "linear-gradient(135deg, #7c3aed, #c026d3, #e91e8c)",
                      }}
                    >
                      <div className="text-4xl md:text-5xl font-extrabold text-white">
                        {cs.metric}
                      </div>
                      <div className="text-xs text-white/80 mt-2 font-bold uppercase tracking-wider">
                        {cs.metricLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Review Screenshots */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Verified Reviews"
              title="Real Screenshots From Real Clients"
              subtitle="400+ Fiverr reviews and 30+ Upwork reviews — verified, 5-star, and proudly shared."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {reviewScreenshots.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 100}>
                <div className="card p-3 overflow-hidden">
                  <div className="rounded-2xl overflow-hidden bg-ink-50 relative">
                    <Image
                      src={r.src}
                      alt={r.alt}
                      width={800}
                      height={300}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 text-[11px] font-black uppercase tracking-wider text-brand-magenta">
                      {r.platform} · 5★
                    </div>
                  </div>
                  <div className="px-3 pt-3 pb-1 flex items-center justify-between">
                    <span className="text-sm font-bold text-ink-800">
                      @{r.name}
                    </span>
                    <span
                      className="text-yellow-500 text-sm"
                      aria-hidden="true"
                    >
                      ★★★★★
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Text Testimonials */}
      <section className="py-20 relative soft-bg">
        <div className="section-gradient-line absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Client Testimonials"
              title="Trusted Worldwide"
              subtitle="What long-term clients say about our signal-based lead intelligence."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card p-6 h-full flex flex-col">
                  <div
                    className="text-4xl gradient-text font-serif leading-none mb-2"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>
                  <p className="text-sm text-ink-700 leading-relaxed flex-1 mb-4 italic">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-ink-100">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #7c3aed, #c026d3, #e91e8c)",
                      }}
                    >
                      {t.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-ink-950 text-sm">
                        {t.author}
                      </div>
                      <div className="text-[11px] text-ink-500">{t.role}</div>
                    </div>
                    <div
                      className="ml-auto text-yellow-500 text-xs"
                      aria-label={`${t.rating} stars`}
                    >
                      {"★".repeat(t.rating)}
                    </div>
                  </div>
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
