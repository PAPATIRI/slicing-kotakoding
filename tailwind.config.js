/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        greenPrimary: "var(--color-green-primary)",
        greenSecondary: "var(--color-green-secondary)",
        orangePrimary: "var(--color-orange-primary)",
        orangeSecondary: "var(--color-orange-secondary)",
        orangeLight: "var(--color-orange-light)",
        blackPrimary: "#1E2228",
        white: "#fefefe",
        textBlack: "#191919",
        textBlack2: "#263238",
        textGray: "#C4C4C4",
      },
    },
    container: {
      padding: "4rem",
    },
    backgroundImage: {
      contact: "url('/public/images/bgcontact.svg')",
    },
  },
  plugins: [],
};
