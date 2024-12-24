/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: ["1100px", "768px", "1024px"]
        
      },
      boxShadow:{
        '4xl':'-10px -10px 10px rgba(255,255,255,0.05), 15px 15px 25px rgba(0,0,0,0.5)'
      },
      fontFamily:{
        'open': ['Open Sans','serif']
      }
    },
  },
  plugins: [],
  darkMode: "class",
}