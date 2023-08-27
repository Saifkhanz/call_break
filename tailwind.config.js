/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
],
  theme: {
    screens: {
      'xs': '240px',
      'sm': '640px', // Add your custom breakpoints here
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },  
    extend: {},
    // container:{
    //   center:true
    // }
    // screens: {
    //   'xs': '240px', // Add your custom breakpoint
    // },
  },
  plugins: [],
}
