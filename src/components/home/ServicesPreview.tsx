import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/lib/constants";

const niches = [
  "💻 SaaS", "🏢 B2B", "🚀 Startups", "📈 Marketing Agencies",
  "💰 Venture Capital", "👨‍💼 Angel Investors", "💼 Consultants",
  "🏥 Healthcare", "🦷 Dentists", "🏠 Real Estate",
  "⚡ Electricians", "🔧 Plumbers", "📊 Financial Services",
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative soft-bg" id="services">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="What We Offer"
            title="Signal-Based Lead Intelligence Services"
            subtitle="Every list is hand-built and triple-verified. Pre-qualified prospect data based on real buying signals — never scraped junk."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group card p-7 cursor-default relative overflow-hidden h-full">
                {/* Top-right gradient flourish */}
                <div
                  className="absolute -top-12 -right-12 w-28 h-28 rounded-full opacity-15 group-hover:opacity-30 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(135deg, #7c3aed, #c026d3, #e91e8c)",
                    filter: "blur(20px)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(233,30,140,0.12))",
                      border: "1px solid rgba(124,58,237,0.18)",
                    }}
                  >
                    <span aria-hidden="true">{service.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink-950 mb-2 font-display">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul className="mt-4 space-y-1.5">
                    {service.features.slice(0, 3).map((f) => (
                      <li
                        key={f}
                        className="text-[13px] text-ink-700 flex items-center gap-2"
                      >
                        <span className="text-brand-magenta font-bold" aria-hidden="true">
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated bottom border */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Niche tags */}
        <ScrollReveal delay={500}>
          <div className="mt-14 text-center">
            <div className="chip mb-5">
              <span>Specialty Niches</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {niches.map((niche) => (
                <span
                  key={niche}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-ink-200 text-ink-700 hover:border-brand-purple/40 hover:text-brand-purple-dark hover:-translate-y-0.5 transition-all cursor-default"
                >
                  {niche}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/services" className="btn-ghost text-sm">
                See All Services →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
