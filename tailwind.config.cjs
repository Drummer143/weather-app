/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-3s': 'spin 3s linear infinite',
        'spin-5s': 'spin 5s linear infinite'
      }
    },
  },
  plugins: [],
}