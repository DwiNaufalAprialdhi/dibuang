/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./**/*.{html,js}"],
  theme: {
    fontFamily:{
      "poppins": ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        "primary": '#00964A',
        "secondary": '#F7E800',
        "black-1": '#312B2A',
      }
    },
  },  
  plugins: [],
}