import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        asphalt: "#111111",
        graphite: "#1b1b1f",
        steel: "#2a2b31",
        brake: "#d71920",
      },
      boxShadow: {
        glow: "0 18px 60px rgba(215, 25, 32, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
