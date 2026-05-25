function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Clash Display", "Geist", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          "button-accent": withOpacity("--color-button-accent"),
          "button-accent-hover": withOpacity("--color-button-accent-hover"),
          "button-muted": withOpacity("--color-button-muted"),
          surface: withOpacity("--color-surface"),
          elevated: withOpacity("--color-surface-elevated"),
        },
      },
      colors: {
        skin: {
          hue: withOpacity("--color"),
          muted: withOpacity("--muted"),
        },
      },
      ringColor: {
        skin: {
          fill: withOpacity("--color-fill"),
        },
      },
      borderColor: {
        skin: {
          border: withOpacity("--color-border"),
          muted: withOpacity("--muted"),
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        spring: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      animation: {
        "float-1": "float-1 20s ease-in-out infinite",
        "float-2": "float-2 25s ease-in-out infinite",
        "float-3": "float-3 18s ease-in-out infinite",
        "float-4": "float-4 22s ease-in-out infinite",
        "float-5": "float-5 28s ease-in-out infinite",
        "float-6": "float-6 24s ease-in-out infinite",
      },
      keyframes: {
        "float-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-40px, 20px) scale(1.05)" },
          "66%": { transform: "translate(30px, -20px) scale(0.9)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, 40px) scale(1.15)" },
          "66%": { transform: "translate(-30px, -20px) scale(0.85)" },
        },
        "float-4": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-25px, -35px) scale(1.1)" },
          "66%": { transform: "translate(35px, 15px) scale(0.95)" },
        },
        "float-5": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(15px, -25px) scale(0.9)" },
          "66%": { transform: "translate(-40px, 10px) scale(1.1)" },
        },
        "float-6": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-30px, 25px) scale(1.05)" },
          "66%": { transform: "translate(20px, -35px) scale(0.95)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
