 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}", "./index.html"],
   theme: {
    container: {
      center: true,
      padding: "16px"
    },
    extend: {
      colors: {
            primary: "#0369A1",
            secondary: {
                100: "#10b981",
            
            },
            shade: "#F5FCFF"
        },
        screens:{
          '2xl': '1320px'
        },
     },
   },
   plugins: [],
 }