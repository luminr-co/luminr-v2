/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          "2xl": "2000px"
        }
      },
      fontFamily: {
        primary: ["var(--font-monoserrat)"],
        secondary: ["var( --font-kanit)"],
      },
      colors: {
        black: "#1E1E1E",
        beige: "#F2F3D9",
        orange: "#DB6332",
        gray: "#919191",
      },
    },
  },
  plugins: [],
};
