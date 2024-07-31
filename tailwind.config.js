/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./*.{html,md}",
    "./_layouts/*.{html,md}",
    "./_includes/*.{html,md}"
          ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light","black"],
  },
}

