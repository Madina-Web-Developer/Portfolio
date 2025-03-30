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
      'vidaloka':["Vidaloka", "serif"],
      'Jenna':["Space Grotesk", "serif"],
      'Train':["Train One", "serif"],

    },
    container: {
       center: true,
       padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '30px',
        xl: '40px',
        '2xl': '40px',
      },
    },

    extend: {
      animation: {
        'spin-slow': 'spin 50s linear infinite', // Adjust speed as needed
      },
    },
  },
  plugins: [

    require('tailwindcss-animated')
  ],
}