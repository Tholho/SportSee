/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",],
  theme: {
    extend: {
      colors: {
        'sportsee-red': '#E60000',
        'sportsee-brightred': '#FF0000',
        'sportsee-lightblue': '#4AB8FF',
        'sportsee-lightyellow': '#FDCC0C',
        'sportsee-lightred': '#FD5181',
        'sportsee-midgrey': '#74798C'

      }
    },
  },
  plugins: [
  ],
}

