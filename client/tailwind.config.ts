/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: "#fec802",
          blue: "#0049be",
        },
      },

    },
  },
  plugins: [],
};
