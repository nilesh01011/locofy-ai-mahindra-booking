/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "colors-primary-red": "#ff3e5b",
        gainsboro: "#d9d9d9",
        "colors-dark-background": "#0b0b0c",
        "colors-dark-container-dark": "#242424",
        "colors-primary-white": "#fff",
        "colors-secondary-grey-3": "#8e8585",
        "colors-secondary-grey-4": "#dedede",
        limegreen: "#44dd30",
        red: "#dc1212",
        "colors-light-background": "#f4f4f4",
      },
      fontFamily: {
        "source-sans-pro": "'Source Sans Pro'",
        "p1-web-regular": "Lato",
        inherit: "inherit",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      base: "16px",
      "7xl": "26px",
      xs: "12px",
      xl: "20px",
      "3xs": "10px",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
