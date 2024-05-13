/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: 'rgb(23, 37, 84)', 
          light: 'rgb(23, 37, 84)',  
          dark: 'rgb(23, 37, 84)',   
        }      
      }
    },
  },
  plugins: [],
}