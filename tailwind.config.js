/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      colors:{
        custom:'#030618'
      }
    },
    screens: {
      'sm': '640px',
      'md': '857px', // Updated minimum screen width for "md"
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  darkMode:'media'
}