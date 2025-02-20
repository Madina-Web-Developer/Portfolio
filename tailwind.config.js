/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'Volvohk': ['Volkhov', 'serif'],
      'Poppins': ["Poppins", 'serif'],
      'vidaloka':["Vidaloka", "serif"]

    },
    container: {
       center: true,
    },

    extend: {},
  },
  plugins: [

    require('tailwindcss-animated')
  ],
}