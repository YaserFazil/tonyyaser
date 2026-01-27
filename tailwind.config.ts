import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0A0E27",
          surface: "#0F1419",
          card: "#1A1F2E",
        },
        neon: {
          cyan: "#00F5FF",
          purple: "#B026FF",
          green: "#00FF88",
        },
        "neon-cyan": "#00F5FF",
        "neon-purple": "#B026FF",
        "neon-green": "#00FF88",
        accent: {
          cyan: "#00D9FF",
          purple: "#8B5CF6",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00F5FF, 0 0 10px #00F5FF" },
          "100%": { boxShadow: "0 0 10px #00F5FF, 0 0 20px #00F5FF, 0 0 30px #00F5FF" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
