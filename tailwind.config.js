/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom:'#030618'
      }
    },

  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  darkMode:'media'
}