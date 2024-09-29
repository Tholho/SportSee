/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",],
  theme: {
    extend: {
      colors: {
        'sportsee-red': '#E60000',
        'sportsee-brightred': '#FF0000'
      }
    },
  },
  plugins: [
  ],
}

