import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/home/CTASection";
import MiniCTA from "@/components/home/MiniCTA";
import { services, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Signal-based lead generation services: prospect list building, B2B lead intelligence, data enrichment, email verification, infrastructure setup, and warmup.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Signal-Based B2B Lead Generation Services"
        subtitle="Hand-built prospect lists, verified intelligence, infrastructure setup — everything you need to put pre-qualified leads into your pipeline."
      >
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/#free-sample" className="btn-primary">
            🎁 Get FREE Sample Leads
          </Link>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            📞 Book a Strategy Call
          </a>
        </div>
      </PageHero>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <ScrollReveal
                key={i}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                    <div
                      className="card p-14 text-center relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(124,58,237,0.05), rgba(233,30,140,0.05))",
                      }}
                    >
                      <div className="text-8xl mb-2" aria-hidden="true">
                        {service.icon}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest gradient-text">
                        Service {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                  <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                    <div className="chip mb-4">
                      <span>{service.title.split(" ")[0]} Service</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-ink-950 mb-4 font-display leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-ink-600 leading-relaxed mb-6 text-base md:text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-7">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-ink-700 hover:translate-x-1 transition-transform"
                        >
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                            style={{
                              background:
                                "linear-gradient(135deg, #7c3aed, #e91e8c)",
                            }}
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/#free-sample" className="btn-primary !text-[13px]">
                        🎁 Get FREE Sample
                      </Link>
                      <a
                        href={siteConfig.calendly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost !text-[13px]"
                      >
                        Book a call to discuss →
                      </a>
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
