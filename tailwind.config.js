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
            red: "#ff0000",
            blue: "#2563eb",
            orange: "#ff8800",
            dark: "#111827",
            light: '#F3F4F6',
            shade: "#F2F2F2",
            // bg_grey: "#F2F2F2",
        },
        screens:{
          '2xl': '1320px'
        },
     },
   },
   plugins: [],
 }