import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep, warm-neutral near-black base — richer than a flat #000.
        ink: {
          950: "#050609",
          900: "#080a11",
          800: "#0d1019",
          700: "#141926",
          600: "#1c2233",
        },
        navy: {
          900: "#050810",
          800: "#0a1024",
        },
        // Primary accent — refined iris/electric blue (less "stock blue").
        electric: {
          400: "#6b95ff",
          500: "#3b6fff",
          600: "#2a54e6",
        },
        // Secondary spark — a refined teal-cyan, not the default #22d3ee.
        cyan: {
          300: "#8af0e4",
          400: "#37e5d4",
          500: "#12c4b5",
        },
        // Tertiary — violet, used sparingly for depth.
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        // Warm counter-accent — sparing "expensive" gold pop.
        gold: {
          400: "#ffd27a",
          500: "#f5b73d",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(59,111,255,0.20), transparent 55%)",
        "grid-faint":
          "linear-gradient(rgba(139,152,180,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,152,180,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59,111,255,0.16), 0 24px 70px -24px rgba(59,111,255,0.45)",
        "glow-cyan":
          "0 0 0 1px rgba(55,229,212,0.18), 0 28px 80px -28px rgba(18,196,181,0.42)",
        card: "0 18px 50px -24px rgba(2,4,10,0.95)",
        "card-lift": "0 30px 80px -30px rgba(2,4,10,0.9), 0 0 0 1px rgba(139,152,180,0.08)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "border-flow": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { opacity: "0" },
        },
        shine: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "aurora-a": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(6%,-4%) scale(1.15)" },
        },
        "aurora-b": {
          "0%,100%": { transform: "translate(0,0) scale(1.1)" },
          "50%": { transform: "translate(-5%,4%) scale(1)" },
        },
        "aurora-c": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-4%,-5%) scale(1.2)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "border-flow": "border-flow 6s ease infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        shine: "shine 7s ease infinite",
        "aurora-a": "aurora-a 20s ease-in-out infinite",
        "aurora-b": "aurora-b 26s ease-in-out infinite",
        "aurora-c": "aurora-c 32s ease-in-out infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
