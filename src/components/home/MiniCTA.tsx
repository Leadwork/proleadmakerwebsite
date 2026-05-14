import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { siteConfig } from "@/lib/constants";

interface MiniCTAProps {
  heading?: string;
  sub?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function MiniCTA({
  heading = "Start Growing Your Outreach Today",
  sub = "Get free sample leads or book a strategy call. No commitment, no pressure.",
  primaryLabel = "🎁 Get FREE Sample Leads",
  primaryHref = "/#free-sample",
  secondaryLabel = "📞 Book a Strategy Call",
  secondaryHref,
}: MiniCTAProps) {
  const sHref = secondaryHref ?? siteConfig.calendly;
  const isExternal = sHref.startsWith("http");

  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden border border-brand-purple/15 bg-white shadow-lg shadow-brand-purple/10">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(192,38,211,0.05) 50%, rgba(233,30,140,0.06) 100%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-30"
              style={{ background: "#c026d3", filter: "blur(80px)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 items-center p-8 md:p-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-ink-950 font-display leading-tight mb-2">
                  {heading}
                </h3>
                <p className="text-sm md:text-base text-ink-600 leading-relaxed max-w-xl">
                  {sub}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                <Link href={primaryHref} className="btn-primary !text-[13px]">
                  {primaryLabel}
                </Link>
                {isExternal ? (
                  <a
                    href={sHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !text-[13px]"
                  >
                    {secondaryLabel}
                  </a>
                ) : (
                  <Link href={sHref} className="btn-secondary !text-[13px]">
                    {secondaryLabel}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
