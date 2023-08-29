/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primary:"#51E9EF",
        secondary:"#39B0A8",
        lightGray:"#fafafa",
        darkGray:"#737373",
        darkblue:"#252B42",
        },


        fontFamily:{

          montserrat:['Montserrat','san-serif']
        },
       

        fontSize:{

          huge:'clamp(2rem,6vw,3rem)',
        },







    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
       
      },
    }





  },
  plugins: [],
}

