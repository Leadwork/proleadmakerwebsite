"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHero from "@/components/shared/PageHero";
import CalendlyBooking from "@/components/home/CalendlyBooking";
import { siteConfig } from "@/lib/constants";

const contactItems = [
  {
    icon: "✉️",
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+880 1315-739311",
    href: siteConfig.whatsapp,
  },
  {
    icon: "📞",
    label: "Schedule a Call",
    value: "Book on Calendly",
    href: siteConfig.calendly,
  },
];

export default function ContactPage() {
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
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Talk About Your Pipeline"
        subtitle="Have a project in mind? We usually respond within an hour. Pick the channel most convenient for you."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
            {/* Left – Contact Info */}
            <ScrollReveal direction="left">
              <div className="space-y-3">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-5 flex items-center gap-4 group"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-transform group-hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(233,30,140,0.1))",
                        border: "1px solid rgba(124,58,237,0.18)",
                      }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-wider text-ink-400 font-bold">
                        {item.label}
                      </div>
                      <div className="text-sm text-ink-900 font-bold truncate">
                        {item.value}
                      </div>
                    </div>
                    <span
                      className="text-brand-purple-dark group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                ))}

                <div className="card p-5">
                  <div className="text-[10px] uppercase tracking-wider text-ink-400 font-bold mb-2">
                    Freelance Profiles
                  </div>
                  <div className="space-y-1.5">
                    <a
                      href={siteConfig.social.upworkPersonal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-brand-purple-dark hover:text-brand-pink font-semibold"
                    >
                      Personal Upwork Profile →
                    </a>
                    <a
                      href={siteConfig.social.upworkAgency}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-brand-purple-dark hover:text-brand-pink font-semibold"
                    >
                      Agency Upwork Profile →
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {[
                    {
                      label: "🏢 LinkedIn Company",
                      href: siteConfig.social.linkedin,
                    },
                    {
                      label: "📘 Facebook",
                      href: siteConfig.social.facebook,
                    },
                    {
                      label: "💼 Founder LinkedIn",
                      href: siteConfig.social.founderLinkedin,
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-xs font-bold bg-white border border-ink-200 text-ink-700 hover:border-brand-purple/40 hover:text-brand-purple-dark hover:-translate-y-0.5 transition-all"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>

                <Link
                  href="/#free-sample"
                  className="mt-6 btn-primary w-full !text-sm"
                >
                  🎁 Get FREE Sample Leads
                </Link>
              </div>
            </ScrollReveal>

            {/* Right – Form */}
            <ScrollReveal direction="right">
              <div className="card p-7 md:p-8">
                <h3 className="text-2xl font-extrabold text-ink-950 font-display mb-2">
                  Send a Message
                </h3>
                <p className="text-sm text-ink-500 mb-6">
                  Tell us about your project. We&apos;ll reply within an hour
                  during business hours.
                </p>
                <form onSubmit={handleSubmit} id="contact-form" noValidate>
                  <input
                    type="hidden"
                    name="_subject"
                    value="New General Message - ProLeadMaker"
                  />
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-ink-700 mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="Full Name"
                          required
                          placeholder="John Smith"
                          autoComplete="name"
                          className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 focus:bg-white outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-ink-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="Email"
                          required
                          placeholder="john@company.com"
                          autoComplete="email"
                          className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 focus:bg-white outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ink-700 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="Subject"
                        placeholder="I need a lead list for…"
                        className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 text-sm focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ink-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="Message"
                        rows={6}
                        placeholder="Tell us about your project, target niche, and requirements…"
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
                        ? "✅ Message Sent!"
                        : "Send Message →"}
                    </button>
                    {status === "error" && (
                      <p className="text-red-600 text-xs text-center font-semibold">
                        Something went wrong. Try WhatsApp:{" "}
                        <a href={siteConfig.whatsapp} className="underline">
                          {siteConfig.phone}
                        </a>
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CalendlyBooking />
    </>
  );
}
