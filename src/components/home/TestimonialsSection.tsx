import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials, reviewScreenshots } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Client Reviews"
            title="What Real Clients Say"
            subtitle="430+ verified 5-star reviews across Fiverr and Upwork. Here's what clients are saying about our signal-based lead intelligence."
          />
        </ScrollReveal>

        {/* Verified Fiverr review screenshots */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {reviewScreenshots.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 90}>
                <div className="card p-2 overflow-hidden group cursor-zoom-in">
                  <div className="rounded-xl overflow-hidden bg-ink-50 relative">
                    <Image
                      src={r.src}
                      alt={r.alt}
                      width={600}
                      height={220}
                      className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 768px) 45vw, 22vw"
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-white/95 text-[10px] font-black uppercase tracking-wider text-brand-magenta">
                      {r.platform}
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-1 flex items-center justify-between">
                    <span className="text-xs font-bold text-ink-700">
                      @{r.name}
                    </span>
                    <span className="text-yellow-500 text-xs" aria-hidden="true">
                      ★★★★★
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Text testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="card p-6 cursor-default h-full flex flex-col">
                {/* Quote */}
                <div
                  className="text-5xl gradient-text font-serif leading-none mb-2 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p className="text-sm text-ink-700 leading-relaxed flex-1 mb-5 italic">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-ink-100">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={`${t.author} profile`}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border-2 border-ink-100"
                    />
                  ) : (
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-md"
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
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-ink-950 text-sm truncate">
                      {t.author}
                    </div>
                    <div className="text-xs text-ink-500">
                      {t.role} · {t.location}
                    </div>
                    <div
                      className="text-yellow-500 text-xs mt-0.5"
                      aria-label={`${t.rating} out of 5 stars`}
                    >
                      {"★".repeat(t.rating)}
                    </div>
                  </div>
                  {t.platform !== "Direct" && (
                    <span className="text-[10px] uppercase tracking-wider text-brand-purple-dark font-bold px-2 py-0.5 rounded-full bg-brand-purple/8 border border-brand-purple/15">
                      {t.platform}
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
