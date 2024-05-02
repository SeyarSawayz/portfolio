/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Amiri: ["Amiri", "serif"],
        Vazirmatn: ["Vazirmatn", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
