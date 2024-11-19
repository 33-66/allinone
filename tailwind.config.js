/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Use 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#4ade80",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Poppins", "serif"],
    },
  },
};
