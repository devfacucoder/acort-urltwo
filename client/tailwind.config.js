/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signika: ['"Signika Negative"', "sans-serif"],
        Itim: ['"Itim"', "sans-serif"], // Añade la fuente aquí
      },
    },
  },
  plugins: [],
};
