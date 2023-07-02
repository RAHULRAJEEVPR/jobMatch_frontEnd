/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      colors:{
        "main_bg":"#F2EFEF"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],

}

