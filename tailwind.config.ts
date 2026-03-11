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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          navy: "#1A2B42",
        },
        accent: {
          goldBase: "#D4AF37",
          goldHighlight: "#E6C57A",
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #D4AF37, #E6C57A)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
