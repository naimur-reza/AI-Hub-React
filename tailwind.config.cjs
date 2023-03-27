/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#049185",

          secondary: "#81f4d2",

          accent: "#f9c181",

          neutral: "#201320",

          "base-100": "#F5F2F7",

          info: "#90AFF9",

          success: "#1ADBA8",

          warning: "#95580F",

          error: "#FC4579",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
