/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(720deg)" },
        },
      },
      animation: {
        rotate360: "rotate360 2s linear", // 2s duration for 360 rotation
      },
      colors: {
        primary: {
          lightCyan: "hsl(193, 38%, 86%)",
          neonGreen: "hsl(150, 100%, 66%)",
        },
        neutral: {
          grayishBlue: "hsl(217, 19%, 38%)",
          darkGrayishBlue: "hsl(217, 19%, 24%)",
          darkBlue: "hsl(218, 23%, 16%)",
        },
      },
      fontSize: {
        quote: "28px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontWeight: {
        "extra-bold": 800,
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
