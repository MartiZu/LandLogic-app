/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        "off-white": "#fcfaf9",
        "purple-accent": "#8a84e2",
        "text-grey": "#5e5e5e",
      },
      boxShadow: {
        purple: "0px 4px 6px 2px #8a84e2",
        "small-purple": "0px 4px 4px 0px #8a84e2",
      },
    },
  },
  plugins: [],
};
