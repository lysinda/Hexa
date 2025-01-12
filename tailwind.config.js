const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "lavender-blush": "#fcefef",
      "night-blue": "#181423",
      "dark-night-blue": "#0b090f",
      "sand-light": "#eccfaa",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      green: colors.green,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        playwrite: ["Playwrite PT", "sans-serif"],
        handlee: ["Handlee", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "bg-image": "url('/images/background.png')",
        "raven-image": "url('/images/raven.png')",
        "clouds-image": "url('/images/clouds.png')",
      },
      gridTemplateColumns: {
        "55/fr": "55% 1fr",
      },
    },
  },
  plugins: [],
};
