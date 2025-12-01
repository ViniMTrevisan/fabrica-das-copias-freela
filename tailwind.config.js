/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C1917', // Warm Gray / Stone 900
          light: '#292524',   // Warm Gray / Stone 800
        },
        accent: {
          DEFAULT: '#FACC15', // Amarelo Ouro
          hover: '#EAB308',   // Amarelo mais escuro para hover
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}