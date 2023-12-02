/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    fontFamily: {
      "work-sans": ["Work Sans", "sans-serif"],
      "space-mono": ["Space Mono", "sans-serif"],
    },
    extend: {
      colors: {
        "background-black": "#2B2B2B",
        "background-secondary": "#3B3B3B",
        "caption-label-text": "#858584",
        "call-to-action": "#A259FF",
        "gradient-purple": "#A259FF",
        "gradient-pink": "#FF6250",
        "gradient-blue": "#377DF7",
      },
    },
  },
  plugins: [],
};
