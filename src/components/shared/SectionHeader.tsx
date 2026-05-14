interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  /** When true, render on dark gradient backgrounds (white text). */
  invert?: boolean;
  /** Optional accent emoji or icon shown before the title (decorative only). */
  icon?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  center = true,
  invert = false,
  icon,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${
          invert
            ? "bg-white/10 border border-white/15"
            : "bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 border border-brand-purple/20"
        } mb-4`}
      >
        <span
          className={`w-2 h-2 rounded-full animate-pulse ${
            invert ? "bg-white" : "bg-gradient-to-r from-brand-purple to-brand-pink"
          }`}
        />
        <span
          className={`text-[11px] font-bold tracking-widest uppercase ${
            invert ? "text-white" : "text-brand-purple-dark"
          }`}
        >
          {label}
        </span>
      </div>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mb-4 ${
          invert ? "text-white" : "text-ink-950"
        }`}
      >
        {icon && <span className="mr-2" aria-hidden="true">{icon}</span>}
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-lg leading-relaxed ${
            center ? "mx-auto" : ""
          } ${invert ? "text-white/75" : "text-ink-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
