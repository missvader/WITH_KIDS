/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'amarillo': '#eab308' ,
      'naranja' : '#F48A4C' ,
      'lila' : '#9B328B' ,
      'azul' : '#6986F6' ,
      'verde' : '#24CE81' ,
      'blanco' : '#fafafa',
    },
  },
  },
  plugins: [
    require("daisyui")
  ],
}
