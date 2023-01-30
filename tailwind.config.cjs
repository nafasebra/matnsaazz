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
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        button: "var(--color-bg-button)",
        buttonSecondary: "var(--color-bg-button-secondary)"
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        accent: "var(--color-text-accent)"
      },
      borderColor: {
        accent: 'var(--color-border-accent)',
      }
    },
  },
  plugins: [],
}
