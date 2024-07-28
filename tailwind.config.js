/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    extend:{
      
  
    colors:{
      'custom-green':'#37c898',
      'custom-orange':'#fe9958',
      'custom-teal':'#5ec0cf'
    },
    fontFamily: {
      'cormorant': ['Cormorant Garamond', 'serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
    },
  },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  
  },
  plugins: [require("tailwindcss-animate")],
}