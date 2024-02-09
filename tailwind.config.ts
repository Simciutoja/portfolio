import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: {
          "text": "#000000",
          "background": "#F3F5F7",
          "primary": "#607CB0",
          "secondary": "#9ab0d9",
          "accent": "#7094d9",
        },
        dark: {
          "text": "#FFFFFF",
          "background": "#080A0C",
          "primary": "#4F6CA1",
          "secondary": "#263C64",
          "accent": "#254A8D",
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
