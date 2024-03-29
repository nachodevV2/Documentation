/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  corePlugins: {
    preflight: false,
  },
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sftext: ["SF Pro Text", "Helvetica Neue", "Helvetica", ...defaultTheme.fontFamily.sans],
        sfdisplay: ["SF Pro Display", "Helvetica Neue", "Helvetica", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
