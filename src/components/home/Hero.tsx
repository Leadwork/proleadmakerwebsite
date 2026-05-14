import Link from "next/link";
import Image from "next/image";
import { stats, siteConfig } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden hero-bg">
      {/* Animated brand orbs */}
      <div
        className="orb w-[520px] h-[520px] -top-[200px] right-[5%]"
        style={{ background: "#7c3aed", opacity: 0.18, animationDelay: "0s" }}
        aria-hidden="true"
      />
      <div
        className="orb w-[420px] h-[420px] bottom-[-120px] left-[5%]"
        style={{ background: "#e91e8c", opacity: 0.16, animationDelay: "-4s" }}
        aria-hidden="true"
      />
      <div
        className="orb w-[320px] h-[320px] top-[28%] right-[28%]"
        style={{ background: "#c026d3", opacity: 0.12, animationDelay: "-8s" }}
        aria-hidden="true"
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%237c3aed' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Left: Copy */}
        <div>
          {/* Eyebrow */}
          <div className="chip mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink animate-blink" />
            <span>Pre-Qualified · Signal-Based · 98%+ Verified</span>
          </div>

          {/* Headline */}
          <h1
            className="text-[2.4rem] sm:text-5xl lg:text-[3.6rem] font-extrabold font-display leading-[1.05] tracking-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.08s" }}
          >
            Get Pre-Qualified{" "}
            <span className="gradient-text">B2B Leads</span> That{" "}
            <span className="relative inline-block">
              <span className="gradient-text-alt">Actually Convert</span>
              <span
                className="absolute -bottom-2 left-0 right-0 h-[6px] rounded-full opacity-80"
                style={{
                  background:
                    "linear-gradient(90deg, #7c3aed, #c026d3, #e91e8c)",
                }}
                aria-hidden="true"
              />
            </span>{" "}
            Into Clients
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-ink-500 leading-relaxed mb-8 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.18s" }}
          >
            We deliver hand-researched, signal-based prospect data — not scraped
            lists. <span className="text-ink-900 font-semibold">Verified contact intelligence</span>{" "}
            matched to your exact ICP, so your outbound team books more meetings
            with less effort.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 mb-10 animate-fade-up"
            style={{ animationDelay: "0.26s" }}
          >
            <Link href="/#free-sample" className="btn-primary">
              <span aria-hidden="true">🎁</span> Get FREE Sample Leads Before You Order
            </Link>
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span aria-hidden="true">📞</span> Book a Strategy Call
            </a>
          </div>

          {/* Trust line */}
          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500 mb-10 animate-fade-up"
            style={{ animationDelay: "0.34s" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-base" aria-hidden="true">★★★★★</span>
              <span><span className="font-bold text-ink-900">5.0</span> · 430+ reviews</span>
            </div>
            <span className="hidden sm:inline text-ink-200" aria-hidden="true">|</span>
            <div className="flex items-center gap-2">
              <span aria-hidden="true">🏆</span>
              <span className="font-medium">Upwork Top Rated</span>
            </div>
            <span className="hidden sm:inline text-ink-200" aria-hidden="true">|</span>
            <div className="flex items-center gap-2">
              <span aria-hidden="true">⭐</span>
              <span className="font-medium">Fiverr Level 2 Seller</span>
            </div>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 animate-fade-up"
            style={{ animationDelay: "0.42s" }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className={
                  i < stats.length - 1
                    ? "pr-8 border-r border-ink-200"
                    : ""
                }
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-ink-500 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Founder image with floating cards */}
        <div
          className="hidden lg:flex justify-center relative animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            {/* Soft halo */}
            <div
              className="absolute -inset-6 rounded-3xl opacity-60"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(192,38,211,0.18), rgba(233,30,140,0.18))",
                filter: "blur(28px)",
              }}
              aria-hidden="true"
            />

            <Image
              src="/images/Team-Founder.jpg"
              alt="MD. Al Amin — Founder, Pro Lead Maker"
              width={400}
              height={500}
              className="relative rounded-3xl shadow-2xl shadow-brand-purple/20 border-4 border-white hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-500"
              priority
              sizes="(max-width: 1024px) 0px, 400px"
            />

            {/* Floating card – Leads Delivered */}
            <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-xl shadow-brand-purple/15 border border-ink-100 p-4 min-w-[200px] animate-float">
              <div className="text-[10px] uppercase tracking-widest text-ink-400 font-bold">
                Leads Delivered
              </div>
              <div className="text-2xl font-bold gradient-text mt-0.5">
                100K+
              </div>
              <div className="text-xs text-ink-500 font-medium">
                Across 150+ industries
              </div>
            </div>

            {/* Floating card – Rating */}
            <div className="absolute -top-3 -right-4 bg-white rounded-2xl shadow-xl shadow-brand-pink/15 border border-ink-100 p-3 text-center animate-float-delayed">
              <div className="text-lg font-bold text-ink-900">
                <span className="text-yellow-500" aria-hidden="true">⭐</span>{" "}
                5.0
              </div>
              <div className="text-[9px] uppercase tracking-wider text-ink-500 font-bold">
                Top Rated
              </div>
            </div>

            {/* Floating card – Accuracy */}
            <div
              className="absolute top-1/2 -right-12 bg-white rounded-2xl shadow-xl shadow-brand-magenta/15 border border-ink-100 p-3 animate-float"
              style={{ animationDelay: "-2s" }}
            >
              <div className="text-[10px] uppercase tracking-widest text-ink-400 font-bold">
                Accuracy
              </div>
              <div className="text-xl font-bold gradient-text-alt">98%+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom soft fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
