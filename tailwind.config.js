/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richBlack: "#111827",
        themeGreen: "#16a34a",
        honeyDew: "#e2fcef",
      },
    },
  },
  plugins: [],
}

