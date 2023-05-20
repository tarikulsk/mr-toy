/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7588ce",

          "secondary": "#f7a325",

          "accent": "#4b7708",

          "neutral": "#161627",

          "base-100": "#F5F5F5",

          "info": "#7D9DE8",

          "success": "#17B075",

          "warning": "#F4A657",

          "error": "#EA5779",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

