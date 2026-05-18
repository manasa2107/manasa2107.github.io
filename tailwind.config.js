/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        void: "#100f14",
        surface: "#18151f",
        elevated: "#fff7ed",
        border: "rgba(255, 255, 255, 0.14)",
        accent: {
          cyan: "#2dd4bf",
          violet: "#a78bfa",
          emerald: "#34d399",
          amber: "#f59e0b",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse 75% 55% at 50% -18%, rgba(167, 139, 250, 0.32), transparent 70%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.06)",
        soft: "0 18px 45px rgba(0, 0, 0, 0.22)",
        strong: "0 28px 75px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
