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
          DEFAULT: '#111827', // Um cinza quase preto (Rich Black)
          light: '#1F2937',   // Um cinza um pouco mais claro para cartões
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