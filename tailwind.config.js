/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
      },
    },

    screens: {
      sm: "500px",
      md: "768px",
      lg: "1224px",
      xl: "1384px",
    },

    extend: {
      colors: {
        primary: "#101828",
        seconday: "#667085",
        gradient: "#E1EDFF",
        accent: {
          DEFAULT: "#217BFE",
          hover: "#428fff",
        },
        body: "#ffffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
