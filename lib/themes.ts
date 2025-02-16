export const themes = {
    light: {
      name: "Light",
      colors: {
        primary: "#ff6b6b",
        secondary: "#ff8787",
        background: "#ffffff",
        card: "#f8f9fa",
        text: "#2d3436",
        textMuted: "#636e72",
        accent: "#ffa502",
        border: "#e9ecef",
      },
    },
    dark: {
      name: "Dark",
      colors: {
        primary: "#ff6b6b",
        secondary: "#ff8787",
        background: "#1a1a1a",
        card: "#2d2d2d",
        text: "#ffffff",
        textMuted: "#a0a0a0",
        accent: "#ffa502",
        border: "#3f3f3f",
      },
    },
  }
  
  export type ThemeName = keyof typeof themes
  
  