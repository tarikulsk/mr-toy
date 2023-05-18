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

          "primary": "#1f1f96",

          "secondary": "#a718f9",

          "accent": "#add61b",

          "neutral": "#2F1E2F",

          "base-100": "#FAF9FA",

          "info": "#4796DC",

          "success": "#32C869",

          "warning": "#FCB35A",

          "error": "#F8240D",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

