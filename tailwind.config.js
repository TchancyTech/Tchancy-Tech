/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackhorse: {
          black: "#000000",
          silver: "#C0C0C0",
          orange: "#FF6B00",
          green: "#00101a" 
        }
      }
    }
  },
  plugins: []
};
