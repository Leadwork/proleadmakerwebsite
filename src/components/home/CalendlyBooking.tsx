"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/lib/constants";

const benefits = [
  {
    icon: "🔍",
    title: "Free ICP Review",
    text: "We'll review your current ICP and tell you which signals you're missing.",
  },
  {
    icon: "📋",
    title: "Sample List Walkthrough",
    text: "See real signal-based prospect lists we've built for similar businesses.",
  },
  {
    icon: "💰",
    title: "Custom Quote",
    text: "Get a tailored plan and quote for your specific niche and volume needs.",
  },
  {
    icon: "⚡",
    title: "Quick & No-Pressure",
    text: "Just 30 minutes. No pushy sales pitch — we just want to see if we're a fit.",
  },
];

export default function CalendlyBooking() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Only load the heavy iframe when the section scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const calendlyUrl = `${siteConfig.calendlyEmbed}?hide_event_type_details=0&hide_gdpr_banner=1&primary_color=7c3aed`;

  return (
    <section
      id="book-a-call"
      ref={ref}
      className="py-24 relative soft-bg overflow-hidden"
      aria-label="Book a strategy call"
    >
      {/* Soft brand blobs */}
      <div
        className="absolute top-12 left-12 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={{ background: "#7c3aed", filter: "blur(110px)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-12 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{ background: "#e91e8c", filter: "blur(110px)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Book a Strategy Call"
            title="Talk to MD. Al Amin — Free 30 Min"
            subtitle="Have a specific question or want a custom plan? Pick a time that works for you. We'll walk through your ICP, show you sample data, and tell you exactly what we'd recommend."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 mt-12 items-start">
          {/* Benefits column */}
          <ScrollReveal direction="left">
            <div className="card p-7">
              <h3 className="text-xl font-bold text-ink-950 font-display mb-1">
                What you&apos;ll get on the call
              </h3>
              <p className="text-sm text-ink-500 mb-6">
                Skip the back-and-forth. One 30-min call covers everything.
              </p>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b.title} className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(233,30,140,0.1))",
                        border: "1px solid rgba(124,58,237,0.18)",
                      }}
                      aria-hidden="true"
                    >
                      {b.icon}
                    </div>
                    <div>
                      <div className="font-bold text-ink-950 text-sm">
                        {b.title}
                      </div>
                      <p className="text-xs text-ink-500 leading-relaxed mt-0.5">
                        {b.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div
                className="mt-6 p-4 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.06), rgba(233,30,140,0.06))",
                  border: "1px solid rgba(124,58,237,0.18)",
                }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-base" aria-hidden="true">🟢</span>
                  <span className="text-xs font-bold text-brand-purple-dark uppercase tracking-wider">
                    Available This Week
                  </span>
                </div>
                <p className="text-[13px] text-ink-700">
                  Calls available in your timezone — Mon–Fri, 9am–6pm.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !text-xs !py-2.5"
                >
                  💬 WhatsApp
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="btn-secondary !text-xs !py-2.5"
                >
                  ✉️ Email
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Calendly embed */}
          <ScrollReveal direction="right">
            <div className="card p-2 sm:p-3 overflow-hidden">
              <div
                className="rounded-2xl overflow-hidden bg-ink-50 relative"
                style={{ minHeight: 700 }}
              >
                {visible ? (
                  <iframe
                    src={calendlyUrl}
                    title="Schedule a strategy call with Pro Lead Maker"
                    className="w-full"
                    style={{ height: 720, border: 0 }}
                    loading="lazy"
                  />
                ) : (
                  <div className="flex items-center justify-center h-[700px] flex-col text-ink-500">
                    <div
                      className="w-14 h-14 rounded-full border-4 border-brand-purple/20 border-t-brand-purple animate-spin mb-4"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold">Loading calendar…</p>
                    <a
                      href={siteConfig.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 btn-primary !text-[13px] !py-2.5 !px-5"
                    >
                      Open in new tab →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
