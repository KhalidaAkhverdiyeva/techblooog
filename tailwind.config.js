/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 2px 15px -1px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(170deg, #191A3E 0%, #020203 100%)',
      },
    },
  },
  plugins: [],
}