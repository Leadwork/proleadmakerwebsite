import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const videos = [
  {
    title: "What is Signal-Based Prospecting?",
    description: "How signal-based lists beat generic data — in 3 minutes.",
    placeholder: true,
  },
  {
    title: "How We Build Pre-Qualified Lead Lists",
    description: "A behind-the-scenes look at our research and verification process.",
    placeholder: true,
  },
  {
    title: "Client Success Stories",
    description: "Real client results — 40+ meetings booked in week one.",
    placeholder: true,
  },
];

export default function VideoSection() {
  return (
    <section className="py-24 relative bg-white">
      <div className="section-gradient-line absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <SectionHeader
            label="Watch & Learn"
            title="See How We Work"
            subtitle="Learn about our signal-based approach to B2B lead intelligence. Custom video walkthroughs coming soon."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {videos.map((video, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="card overflow-hidden cursor-pointer group">
                <div
                  className="relative aspect-video flex items-center justify-center overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(192,38,211,0.12), rgba(233,30,140,0.12))",
                  }}
                >
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg shadow-brand-magenta/20"
                      style={{
                        background:
                          "linear-gradient(135deg, #7c3aed, #c026d3, #e91e8c)",
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-xs text-brand-purple-dark font-bold uppercase tracking-wider">
                      Video coming soon
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-ink-950 font-display">
                    {video.title}
                  </h3>
                  <p className="text-xs text-ink-500 mt-1.5 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
