import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ef4050",
          dark: "#d63544",
        },
        secondary: {
          DEFAULT: "#414042",
          light: "#5a595b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
