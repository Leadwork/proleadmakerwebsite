import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#7c3aed",
          "purple-light": "#a78bfa",
          "purple-dark": "#5b21b6",
          magenta: "#c026d3",
          "magenta-light": "#e879f9",
          "magenta-dark": "#a21caf",
          pink: "#e91e8c",
          "pink-light": "#f472b6",
          "pink-dark": "#be185d",
        },
        dark: {
          950: "#030014",
          900: "#0a0520",
          800: "#120a2e",
          700: "#1a103d",
          600: "#251654",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f8f7ff",
          subtle: "#f0eeff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #7c3aed 0%, #c026d3 50%, #e91e8c 100%)",
        "gradient-brand-reverse":
          "linear-gradient(135deg, #e91e8c 0%, #c026d3 50%, #7c3aed 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #030014 0%, #120a2e 50%, #1a103d 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #0a0520 0%, #1a103d 40%, #7c3aed 100%)",
        "gradient-subtle":
          "linear-gradient(135deg, #f8f7ff 0%, #f0eeff 50%, #fdf2f8 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.3)",
        "glow-lg": "0 0 80px rgba(124, 58, 237, 0.4)",
        "glow-pink": "0 0 40px rgba(233, 30, 140, 0.3)",
        card: "0 4px 24px rgba(124, 58, 237, 0.08)",
        "card-hover": "0 16px 56px rgba(124, 58, 237, 0.14)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-up-delayed": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards",
        "slide-in-left": "slideInLeft 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-in-right": "slideInRight 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "scale-in": "scaleIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "spin-slow": "spin 20s linear infinite",
        "orbit": "orbit 25s linear infinite",
        "blink": "blink 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.92)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(150px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(150px) rotate(-360deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
