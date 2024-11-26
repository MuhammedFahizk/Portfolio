import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import plugin from "tailwindcss/plugin";
import svgToDataUri from "mini-svg-data-uri";

export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      
     
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
