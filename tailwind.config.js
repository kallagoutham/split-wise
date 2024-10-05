/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8a12fc",
        primaryBlue: "#033e80",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        compliment: "#04d1ad",
        darkGray: "#071437",
        gray: "#252f4a",
        lightGray: "#eee",
        green: "#00b649",
        red: "#e80000",
        orange: "#ff9407",
        lavendar: "#ec01d3",
        bgBlack:"#2b3035",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
    },
  },
  plugins: [],
};
