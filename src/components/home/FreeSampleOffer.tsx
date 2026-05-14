"use client";

import { useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { siteConfig } from "@/lib/constants";

export default function FreeSampleOffer() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(siteConfig.formspree, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="free-sample" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal direction="scale">
          <div className="relative rounded-[36px] overflow-hidden shadow-2xl shadow-brand-magenta/20">
            {/* Vibrant gradient backdrop */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed 0%, #c026d3 50%, #e91e8c 100%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
              aria-hidden="true"
            />

            {/* Soft white halo top-right */}
            <div
              className="absolute -top-[200px] -right-[100px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
              style={{ background: "white", filter: "blur(80px)" }}
              aria-hidden="true"
            />

            {/* Watermark word */}
            <div
              className="absolute right-6 top-4 text-[10rem] md:text-[16rem] font-black text-white/8 leading-none pointer-events-none select-none"
              aria-hidden="true"
            >
              FREE
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 p-8 md:p-12">
              {/* Left: offer copy */}
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/25 mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    🎁 Try Before You Buy
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-display leading-[1.05]">
                  Get <span className="bg-white/90 text-brand-magenta px-3 rounded-lg">FREE</span> Sample
                  Leads Before You Order
                </h2>
                <p className="text-white/85 leading-relaxed mb-6 text-base md:text-lg">
                  Test our signal-based data quality before you commit a single
                  dollar. Share your target niche and we&apos;ll deliver
                  hand-researched, verified, outreach-ready leads — completely
                  free, within 24 hours.
                </p>
                <ul className="space-y-3">
                  {[
                    "Hand-picked sample leads matched to your ICP",
                    "Verified emails + LinkedIn + signals",
                    "Delivered within 24 hours",
                    "Try data quality first — no risk, no obligation",
                    "Zero credit card, zero gotchas",
                  ].map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-3 text-white/95 text-sm font-medium"
                    >
                      <span className="w-6 h-6 rounded-full bg-white text-brand-magenta flex items-center justify-center text-[12px] font-black flex-shrink-0 shadow">
                        ✓
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>

                {/* Secondary nudge */}
                <div className="mt-7 inline-flex items-center gap-2 text-white/85 text-xs font-semibold">
                  <span aria-hidden="true">⚡</span> Reviewed and delivered by{" "}
                  <span className="underline underline-offset-2 font-bold">
                    MD. Al Amin
                  </span>
                </div>
              </div>

              {/* Right: form */}
              <div className="bg-white rounded-3xl p-7 md:p-8 shadow-2xl shadow-brand-purple/30">
                <h3 className="font-bold text-ink-950 text-lg mb-1 font-display">
                  Request Your Free Sample
                </h3>
                <p className="text-xs text-ink-500 mb-5">
                  Average response: under 1 hour. Sample delivered within 24h.
                </p>
                <form onSubmit={handleSubmit} id="sample-form" noValidate>
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Free Sample Request - ProLeadMaker"
                  />
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="fs-name"
                        className="block text-xs font-bold text-ink-700 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="fs-name"
                        type="text"
                        name="Full Name"
                        required
                        placeholder="John Smith"
                        autoComplete="name"
                        className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="fs-email"
                        className="block text-xs font-bold text-ink-700 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="fs-email"
                        type="email"
                        name="Email"
                        required
                        placeholder="john@company.com"
                        autoComplete="email"
                        className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="fs-niche"
                        className="block text-xs font-bold text-ink-700 mb-1.5"
                      >
                        Target Niche
                      </label>
                      <select
                        id="fs-niche"
                        name="Niche"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 focus:bg-white outline-none transition-all"
                      >
                        <option value="">Select your target niche…</option>
                        <option>SaaS Companies</option>
                        <option>Software & IT Services</option>
                        <option>Marketing Agencies</option>
                        <option>E-commerce Businesses</option>
                        <option>Business Consulting</option>
                        <option>Financial Services</option>
                        <option>Healthcare Professionals</option>
                        <option>Real Estate Agencies</option>
                        <option>Startups</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="fs-req"
                        className="block text-xs font-bold text-ink-700 mb-1.5"
                      >
                        Your Requirements
                      </label>
                      <textarea
                        id="fs-req"
                        name="Requirements"
                        rows={3}
                        placeholder="e.g. CEOs of SaaS companies in the US, 10–50 employees, just raised funding…"
                        className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 focus:bg-white outline-none transition-all resize-y"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending"
                        ? "Sending…"
                        : status === "sent"
                        ? "✅ Sent! Delivery within 24h"
                        : "🎁 Get My FREE Sample Leads"}
                    </button>
                    {status === "error" && (
                      <p className="text-red-600 text-xs text-center font-semibold">
                        Something went wrong. Try WhatsApp:{" "}
                        <a
                          href={siteConfig.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                        >
                          {siteConfig.phone}
                        </a>
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
