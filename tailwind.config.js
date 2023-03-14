/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '30rem'
      }
    },
    screens: {
      'xs': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [
    require("daisyui")
  ],
}