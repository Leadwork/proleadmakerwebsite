import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { siteConfig } from "@/lib/constants";

type Variant = "default" | "compact" | "inline";

interface CTASectionProps {
  variant?: Variant;
  heading?: string;
  sub?: string;
}

export default function CTASection({
  variant = "default",
  heading,
  sub,
}: CTASectionProps) {
  const title =
    heading ?? "Ready to Grow Your Pipeline With Pre-Qualified Leads?";
  const subtitle =
    sub ??
    "Join 617+ businesses already using Pro Lead Maker's signal-based intelligence to fill their pipelines with leads that actually convert.";

  if (variant === "inline") {
    return (
      <ScrollReveal>
        <div className="my-12 rounded-2xl p-7 bg-gradient-to-br from-brand-purple/5 via-brand-magenta/5 to-brand-pink/5 border border-brand-purple/15 text-center">
          <h3 className="text-xl font-bold text-ink-950 mb-2 font-display">
            {title}
          </h3>
          <p className="text-sm text-ink-600 mb-5 max-w-md mx-auto">{subtitle}</p>
          <div className="flex flex-wrap gap-3 justify-center">
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
        </div>
      </ScrollReveal>
    );
  }

  return (
    <section className={variant === "compact" ? "py-16 relative" : "py-24 relative"}>
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <ScrollReveal direction="scale">
          <div className="relative rounded-[32px] overflow-hidden text-center shadow-2xl shadow-brand-magenta/25">
            {/* Vibrant gradient bg */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed 0%, #c026d3 50%, #e91e8c 100%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] rounded-full"
              style={{ background: "rgba(255,255,255,0.07)" }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-[-50%] left-[-10%] w-[360px] h-[360px] rounded-full"
              style={{ background: "rgba(255,255,255,0.05)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 py-16 px-8 md:px-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 mb-5">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white">
                  🚀 Start Growing Your Outreach
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-display leading-tight">
                {title}
              </h2>
              <p className="text-white/85 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/#free-sample"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-magenta font-bold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <span aria-hidden="true">🎁</span> Get FREE Sample Leads
                </Link>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/40 text-white font-bold text-sm hover:bg-white/15 hover:border-white/70 hover:-translate-y-1 transition-all duration-300"
                >
                  <span aria-hidden="true">📞</span> Book a Strategy Call
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
