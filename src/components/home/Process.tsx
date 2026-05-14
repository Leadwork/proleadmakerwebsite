import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    num: "01",
    icon: "📝",
    title: "Share Your Target Audience",
    description:
      "Tell us your niche, location, company size, and target job titles. We identify the buying signals that matter for your ICP.",
  },
  {
    num: "02",
    icon: "🔍",
    title: "We Research & Verify",
    description:
      "We manually research signal-based prospects and triple-verify every contact across Apollo, SalesQL, LinkedIn, and email validators.",
  },
  {
    num: "03",
    icon: "✅",
    title: "You Review FREE Sample",
    description:
      "Receive 20–50 sample leads first. Check quality before committing to a full order — no strings attached, no obligation.",
  },
  {
    num: "04",
    icon: "🚀",
    title: "We Deliver the Full List",
    description:
      "Get your complete, outreach-ready list in Excel / CSV / Google Sheets. Free replacement for any invalid contacts.",
  },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Soft brand-tinted background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #faf6ff 50%, #ffffff 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-30"
        style={{ background: "#c026d3", filter: "blur(140px)" }}
        aria-hidden="true"
      />
      <div className="section-gradient-line absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="How It Works"
            title="A Simple 4-Step Process"
            subtitle="From requirements to a verified, outreach-ready prospect list — fast, clean, accurate, every single time."
          />
        </ScrollReveal>

        <div className="relative mt-14">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-12 left-[8%] right-[8%] h-[2px] hidden lg:block opacity-50"
            style={{
              background:
                "linear-gradient(90deg, #7c3aed, #c026d3, #e91e8c)",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="card p-7 text-center cursor-default relative h-full group">
                  {/* Step number watermark */}
                  <div
                    className="text-6xl font-black gradient-text opacity-15 absolute top-3 right-4 leading-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {step.num}
                  </div>

                  <div
                    className="inline-flex w-14 h-14 rounded-2xl items-center justify-center text-2xl mb-4 mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.14), rgba(233,30,140,0.14))",
                      border: "1px solid rgba(124,58,237,0.22)",
                    }}
                  >
                    <span aria-hidden="true">{step.icon}</span>
                  </div>
                  <h3 className="font-bold text-ink-950 mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
