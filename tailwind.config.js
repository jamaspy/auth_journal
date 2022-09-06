/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#264653",
        "theme-teal": "#2a9d8f",
        "theme-yellow": "#e9c46a",
        "theme-red": "#e76f51",
        "theme-orange": "#f4a261",
      },
    },
  },
  plugins: [],
};
