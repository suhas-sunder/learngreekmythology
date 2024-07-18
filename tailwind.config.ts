import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: [
    "./index.html",
    "./app/**/*.{js,jsx,ts,tsx}",
    "assets/fonts/.**.ttf",
  ],
  theme: {
    extend: {
      // prettier-ignore
      fontFamily: {
        'nunito': ['"Nunito"', 'sans-serif'],
        'lato': ['"Lato"', 'sans-serif'],
        'lora': ['"Lora"', 'serif']
      },
      colors: {
        defaultblue: "#09427d",
        defaultgreen: "#79fac5",
        "default-light-sky-blue": "rgb(73, 160, 214)",
        "default-sky-blue": "#2b6ab3",
        "start-btn-green": "#4db538",
      },
    },
  },
  plugins: [],
} satisfies Config;
