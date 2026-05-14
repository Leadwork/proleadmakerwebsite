"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("revealed");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const baseStyles: Record<string, string> = {
    up: "opacity-0 translate-y-[24px]",
    left: "opacity-0 -translate-x-[32px]",
    right: "opacity-0 translate-x-[32px]",
    scale: "opacity-0 scale-[0.94]",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${baseStyles[direction]} [&.revealed]:opacity-100 [&.revealed]:translate-x-0 [&.revealed]:translate-y-0 [&.revealed]:scale-100 ${className}`}
    >
      {children}
    </div>
  );
}
