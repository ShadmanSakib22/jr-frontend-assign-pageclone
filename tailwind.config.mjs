/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    sreens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      montserrat: ["var(--font-montserrat)"],
    },
    container: {
      center: true,
      padding: "1.983rem",
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
      },
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#fe8b53",
        blueMain: "#1f80f0",
        blueText: "#0b305b",
        blueHighlight: "#b9d9ff",
      },
    },
  },
  plugins: [],
};
