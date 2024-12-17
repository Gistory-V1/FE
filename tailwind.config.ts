// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        gray1: "a6a6a6",
        gray2: "d8d8d8",
        gray3: "757575",
        gray4: "eeeeee",
        black: "111111",
      },
    },
  },
  plugins: [],
};
