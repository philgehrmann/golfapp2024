import { m } from "framer-motion";
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      tuerkis: '#B1F8F2',
      green: "#BCD39C",
      gray: "",
      yellow: "#FFFC99",
      lightgreen: "#EAFDCF",
      brown: "#8E8358",
      white: "#ffffff"

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
