import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-text": "linear-gradient(90deg, #f9572a, #ffc905)",
        "gradient-text-hover": "linear-gradient(90deg, #fd4715, #f9b241)",
      },
      textColor: {
        "gradient-text": "transparent",
      },
      gridTemplateColumns: {
        "auto-fill-minmax": "repeat(auto-fill, minmax(20rem, 1fr))",
      },
      animation: {
        loading: "loading 1.2s ease-in-out infinite",
      },
      keyframes: {
        loading: {
          "0%": { color: "#e9e9e9" },
          "50%": { color: "#b89b84" },
          "100%": { color: "#e9e9e9" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".text-gradient": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "text-fill-color": "transparent",
          "-webkit-text-fill-color": "transparent",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

export default config;
