/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'true', // or 'media' or false
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