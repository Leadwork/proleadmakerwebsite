"use client";

export default function BackgroundEffects() {
  return (
    <>
      {/* Animated soft gradient orbs */}
      <div className="bg-particles" aria-hidden="true" />
      {/* Soft grid pattern */}
      <div className="bg-grid" aria-hidden="true" />
      {/* Accent floating orbs */}
      <div
        className="fixed top-1/3 left-1/4 w-[320px] h-[320px] rounded-full pointer-events-none z-0"
        style={{
          background: "#7c3aed",
          opacity: 0.08,
          filter: "blur(100px)",
          animation: "bgFloat 28s ease-in-out infinite 6s",
        }}
        aria-hidden="true"
      />
      <div
        className="fixed bottom-1/4 right-1/3 w-[420px] h-[420px] rounded-full pointer-events-none z-0"
        style={{
          background: "#e91e8c",
          opacity: 0.07,
          filter: "blur(120px)",
          animation: "bgFloat 32s ease-in-out infinite 12s",
        }}
        aria-hidden="true"
      />
    </>
  );
}
