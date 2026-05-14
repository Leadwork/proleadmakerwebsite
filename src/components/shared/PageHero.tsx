import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  align = "center",
}: PageHeroProps) {
  return (
    <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden hero-bg">
      <div
        className="orb w-[400px] h-[400px] top-[-120px] right-[8%]"
        style={{ background: "#7c3aed", opacity: 0.15 }}
        aria-hidden="true"
      />
      <div
        className="orb w-[340px] h-[340px] bottom-[-100px] left-[6%]"
        style={{ background: "#e91e8c", opacity: 0.15, animationDelay: "-5s" }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8">
        <div className={align === "center" ? "text-center" : "text-left"}>
          {eyebrow && (
            <div
              className={`chip mb-5 animate-fade-up ${align === "center" ? "" : ""}`}
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink animate-blink" />
              <span>{eyebrow}</span>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold font-display text-ink-950 mb-4 animate-fade-up leading-[1.08] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p
              className={`text-ink-500 text-lg md:text-xl leading-relaxed animate-fade-up-delayed ${
                align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
              }`}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-7 animate-fade-up-delayed">{children}</div>}
        </div>
      </div>
    </section>
  );
}
