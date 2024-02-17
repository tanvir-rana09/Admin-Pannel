/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      extendfont1:['"Bebas Neue"',  ...defaultTheme.fontFamily.sans],
      extendfont2:['"Cinzel"',  ...defaultTheme.fontFamily.sans],
      extendfont3:['"Cormorant Garamond"',  ...defaultTheme.fontFamily.sans],
      extendfont4:['"Oswald"',  ...defaultTheme.fontFamily.sans],
      extendfont5:['"Rethink Sans"',  ...defaultTheme.fontFamily.sans],
      extendfont6:['"Righteous"',  ...defaultTheme.fontFamily.sans],
      extendfont7:['"Sen"',  ...defaultTheme.fontFamily.sans],
      extendfont8:['"Sevillana"',  ...defaultTheme.fontFamily.sans],
      extendfont9:['"Whisper"',  ...defaultTheme.fontFamily.sans],
      extendfont10:['"forum"',  ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: '#9E58FF',
        second: '#FE9496',
        third: '#4BCBEB',
        forth: '#1BCFB4',
        dark:'#0F172A',
        lightBlack1:'#1E293B',
        lightBlack: '#191C24'
      },
      
    },
  },
  plugins: [],
}

