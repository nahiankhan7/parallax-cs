/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"], // Fixed closing quotation mark
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
