/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#2c3e50',
        'custom-green': '#2ecc71',
      },
      boxShadow: {
        'box': "0 3px 10px #2c3e5030"
      }
    },
  },
  plugins: [],
}
