const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: "#d4af37",
          "gold-light": "#f0d68a",
          "gold-dark": "#b8860b",
          blue: "#003366",
          "blue-dark": "#002244",
          "blue-light": "#1e5f74",
        },
        secondary: {
          green: "#2e8b57",
          sand: "#f5f5dc",
        },
        accent: {
          orange: "#ff6b35",
        },
        neutral: {
          charcoal: "#36454f",
          white: "#ffffff",
          light: "#f8f7f4",
          gray: "#e0e0e0",
          dark: "#1a1a2e",
        },
      },
      fontFamily: {
        arabic: ["Amiri", "Scheherazade New", "serif"],
        "arabic-heading": ["Scheherazade New", "Amiri", "serif"],
        english: ["Montserrat", "Lora", "sans-serif"],
        "english-heading": ["Montserrat", "sans-serif"],
        "english-body": ["Lora", "serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "slide-left": "slide-in-left 0.6s ease-out",
        "slide-right": "slide-in-right 0.6s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "slide-in-left": {
          from: { transform: "translateX(-100px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #003366 0%, #1e5f74 50%, #003366 100%)",
        "gradient-gold": "linear-gradient(135deg, #d4af37 0%, #f0d68a 50%, #d4af37 100%)",
        "gradient-dark": "linear-gradient(135deg, #1a1a2e 0%, #003366 100%)",
      },
    },
  },
  plugins: [],
};
