import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const audiences = [
  {
    icon: "📣",
    title: "Marketing Agencies",
    description:
      "Scale client campaigns with signal-based, triple-verified prospect lists delivered on a 24–48h SLA.",
  },
  {
    icon: "👔",
    title: "Founders & CEOs",
    description:
      "Find decision-makers showing real buying intent — perfect for early-stage outbound and pipeline building.",
  },
  {
    icon: "🏠",
    title: "Local Service Businesses",
    description:
      "Reach homeowners and businesses in your service area with location-targeted, verified contact data.",
  },
  {
    icon: "💻",
    title: "B2B & SaaS Companies",
    description:
      "Get tightly-targeted lists of SMBs and enterprises that fit your product's ICP, with buying-signal layers.",
  },
  {
    icon: "🚀",
    title: "Outreach Teams",
    description:
      "Feed your SDRs and AEs with clean, hook-ready lists so they spend time replying — not researching.",
  },
  {
    icon: "💼",
    title: "Consultants & Coaches",
    description:
      "Build a steady book of warm, qualified prospects so every outreach hour produces a real conversation.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-24 relative bg-white">
      <div className="section-gradient-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Who We Help"
            title="Built for Growth-Focused Teams"
            subtitle="Whether you're scaling an agency, running outbound solo, or feeding a full SDR team — we deliver the signal-based data you need to fill the pipeline."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {audiences.map((item, i) => (
            <ScrollReveal key={i} delay={i * 90}>
              <div className="card p-7 text-center cursor-default h-full group">
                <div
                  className="inline-flex w-14 h-14 rounded-2xl items-center justify-center text-2xl mb-4 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(233,30,140,0.1))",
                    border: "1px solid rgba(124,58,237,0.18)",
                  }}
                >
                  <span aria-hidden="true">{item.icon}</span>
                </div>
                <h3 className="font-bold text-ink-950 text-lg mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
