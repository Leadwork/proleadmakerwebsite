import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: "🎯",
    title: "Signal-Based, Not Scraped",
    description:
      "We layer real buying signals — hiring patterns, funding events, tech stack changes — onto every prospect. Lists that book meetings, not just sit in spreadsheets.",
  },
  {
    icon: "🔬",
    title: "Triple-Verified Data",
    description:
      "Every email runs through Reoon, Million Verifier, and NeverBounce. Anything that fails any of the three gets dropped — protecting your domain reputation.",
  },
  {
    icon: "👤",
    title: "Hand-Researched by Humans",
    description:
      "No bulk scraping, no AI hallucinations. A real researcher reviews every record before it ships — that's why our accuracy stays above 98%.",
  },
  {
    icon: "⚡",
    title: "24–48 Hour Delivery",
    description:
      "Most orders ship inside 48 hours. Rush available for projects under 500 contacts. We move at the speed your campaigns need.",
  },
  {
    icon: "🔄",
    title: "Free Replacement Guarantee",
    description:
      "If any contact bounces or is wrong, we replace it free. No quibbles, no service tickets. Just send the row, we'll send a fresh one.",
  },
  {
    icon: "💰",
    title: "Fair, Transparent Pricing",
    description:
      "Per-lead pricing with volume breaks. No setup fees, no monthly minimums. Pay only for what we deliver — and only after you've seen a free sample.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Why Pro Lead Maker"
            title="Why Choose Pro Lead Maker Over Competitors"
            subtitle="There are plenty of lead-list vendors. Here's what makes us the one B2B teams come back to — quarter after quarter."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {reasons.map((r, i) => (
            <ScrollReveal key={i} delay={i * 90}>
              <div className="card p-7 h-full group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(233,30,140,0.1))",
                    border: "1px solid rgba(124,58,237,0.18)",
                  }}
                  aria-hidden="true"
                >
                  {r.icon}
                </div>
                <h3 className="font-bold text-ink-950 text-lg mb-2 font-display">
                  {r.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {r.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
