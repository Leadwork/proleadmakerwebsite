import { trustBadges } from "@/lib/constants";

const featuredOn = [
  "Fiverr · Level 2 Seller",
  "Upwork · Top Rated",
  "LinkedIn",
  "Apollo Partner",
  "Clay Power-User",
  "Smartlead",
  "Instantly",
];

export default function TrustBar() {
  return (
    <section
      aria-label="Trust signals"
      className="relative border-y border-ink-100 bg-white/70 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-6">
        <div className="flex items-center justify-center gap-x-8 gap-y-3 flex-wrap">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-ink-700 font-semibold"
            >
              <span
                className="text-brand-magenta text-base"
                aria-hidden="true"
              >
                {badge.icon}
              </span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Featured-on ticker */}
        <div className="mt-4 pt-4 border-t border-ink-100 overflow-hidden">
          <div className="marquee-track text-xs text-ink-400 font-semibold uppercase tracking-wider">
            {[...featuredOn, ...featuredOn].map((name, i) => (
              <span key={i} className="flex items-center gap-3 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple/40" aria-hidden="true" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
