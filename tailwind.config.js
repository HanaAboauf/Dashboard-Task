const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        myGray:"#f5f6faff",
        myGrayTwo:"#fafbfcff",
        myGrayThree:"#7a7b7dff"
      },
      width: {
        '16%':'16%',
        '75%': '75%',
        '92%': '92%',
      },
    },
  },
  plugins: [flowbite.plugin(),],
}

