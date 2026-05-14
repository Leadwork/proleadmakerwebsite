"use client";

import { useEffect, useRef } from "react";

/**
 * Soft brand-tinted cursor. Disabled on touch devices and at narrow viewports
 * (handled via CSS in globals.css).
 */
export default function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch / reduced motion
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX - 4}px`;
      dot.style.top = `${mouseY - 4}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX - 20}px`;
      ring.style.top = `${ringY - 20}px`;
      raf = requestAnimationFrame(animate);
    };

    const handleHoverIn = () => {
      dot.classList.add("hover");
      ring.classList.add("hover");
    };
    const handleHoverOut = () => {
      dot.classList.remove("hover");
      ring.classList.remove("hover");
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    raf = requestAnimationFrame(animate);

    const interactiveSelectors = 'a, button, [role="button"], input, textarea, select';
    const elements = document.querySelectorAll(interactiveSelectors);
    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block"
        aria-hidden="true"
      />
    </>
  );
}
