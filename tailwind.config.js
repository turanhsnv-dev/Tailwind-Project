/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },

    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },

      colors: {
        "gega-red": "#3bc1a45",
        "gega-melon": "#ffd369",
        "gega-grey": "#dddddd",
        "gega-white": "#f7f7f7",
      },

      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
