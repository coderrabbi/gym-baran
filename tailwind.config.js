/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SportingGrotesque: "SportingGrotesque",
      },
      colors: {
        primary: "#264373",
        secondary: "#6765f0",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      boxShadow: {
        custom: "0px 20px 80px rgba(51, 78, 123, 0.3)",
        btnShadow: "0px 20px 80px rgba(51, 78, 123, 0.3);",
        test: "0px 20px 80px rgba(51, 78, 123, 0.1)",
      },
    },
  },
  plugins: [],
};
