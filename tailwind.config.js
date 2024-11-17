/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1110px",
        "2xl": "1536px",
      },
    },
    colors: {
      "color-brown": "hsl(24, 56, 63)",
      "color-black": "hsl(0, 0, 8)",
      "color-grey": "hsl(0, 0, 27)",
      "color-white": "hsl(0, 0, 100)",
    },
    fontFamily: {
      display: ["Big Shoulders Display", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
