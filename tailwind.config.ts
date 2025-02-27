import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#10405A",
        accent: {
          DEFAULT: "#00afac",
          hover: "#99e2dd",
        },
        tertiary: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
