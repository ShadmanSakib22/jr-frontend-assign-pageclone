/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    sreens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      montserrat: ["var(--font-montserrat)"],
    },
    container: {
      center: true,
      padding: "1.983rem",
      screens: {
        lg: "1200px",
      },
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#fe8b53",
      },
    },
  },
  plugins: [],
};
