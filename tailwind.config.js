/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding:'20px 0px'
    },
    extend: {
      backgroundColor:{
        'biguni':'#FB2E86'
      },
      textColor:{
        'primary':'#FB2E86',
        'orgain': '#151875'
      },

      fontFamily:{
        'lato':["Lato", "serif"],
        'josefin':["Josefin Sans", "serif"]

      },
      boxShadow: {
        'shadow ': "10px 10px 10px #ddd"
      }
    },
  },
  plugins: [],
}
