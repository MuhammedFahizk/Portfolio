import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import plugin from "tailwindcss/plugin";
import svgToDataUri from "mini-svg-data-uri";

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',  // Include all files in the components folder
    './app/**/*.{js,ts,jsx,tsx}',         // If you're using the app directory (e.g., Next.js 13+)
  ],
  
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",

        float: "float 3s ease-in-out infinite",
        "float-right": "float-right 3s ease-in-out infinite",
        "float-left": "float-left 3s ease-in-out infinite",
        "float-top": "float-top 3s ease-in-out infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
        "float-left": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" },
        },
        "float-top": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [
    daisyui,
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: theme("colors") }
      );
    }),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFF27A",
          info: "#1E1E21",
          secondary: "#2E3137",
          accent: "#FB5D5D",
          neutral: "#DCDCDD",
         
          "base-100": "#0F172A",
          success: "#22C55E", // Green for Success
          warning: "#F59E0B", // Yellow for Warnings
          error: "#EF4444", // Red for Errors
        },
      },
      "dark",
      "cupcake",
    ],
  },
} satisfies Config;
