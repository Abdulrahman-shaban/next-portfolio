import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      txtPrimary: "#ffffff",
      txtSecondary: "#adadad",
      bgPrimary:"#100028",
      overlay:"black",
      bgSecondary:"#1a083d",
      border: "#00bfe7",
      bgThird:"#5f397e"
    },
  },
  plugins: [],
};
export default config;
