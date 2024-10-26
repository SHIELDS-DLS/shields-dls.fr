/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "shields-primary": "#010409",
        "shields-content": "#0D1117",
        // "shields-secondary": "#1C2833",
        "shields-secondary": "#1E1F26",
        "shields-accent": "#FF8C00",
        "shields-accent-hover": "#FFA500",
        "shields-txt": "#E0E0E0",
        "shields-txt-secondary": "#B0B0B0",
        "shields-optional": "#bb3e03",
      },
      fontFamily: {
        space_mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
