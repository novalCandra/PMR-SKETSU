/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // support for dark mode toggle
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E63946', // vibrant red cross inspired
          dark: '#1D3557', // dark blue for text/backgrounds
          light: '#F1FAEE', // off white
          blue: '#457B9D', // secondary color
          gray: '#f3f4f6', // soft gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
