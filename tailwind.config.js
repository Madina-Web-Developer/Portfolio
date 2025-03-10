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
        DEFAULT: '18px',
        sm: '30px',
        lg: '40px',
        xl: '50px',
        '2xl': '50px',
      },
    },

    extend: {
      animation: {
        'spin-slow': 'spin 40s linear infinite', // Adjust speed as needed
      },
    },
  },
  plugins: [

    require('tailwindcss-animated')
  ],
}