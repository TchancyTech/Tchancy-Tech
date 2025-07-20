/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palèt koulè san espas nan non yo
        tchancy: {
          black:  "#000000",
          silver: "#C0C0C0",
          orange: "#ED820E",
          green:  "#0F1B1B",
        },
      },
    },
  },
  plugins: [],
};
