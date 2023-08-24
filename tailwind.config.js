/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
    // container:{
    //   center:true
    // }
    screens: {
      'xs': '240px', // Add your custom breakpoint
    },
  },
  plugins: [],
}
