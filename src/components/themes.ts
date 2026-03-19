// Each theme defines CSS custom property values for dark and light modes.
// These get injected as inline styles and toggled via data-mode attribute.

export interface ThemeVars {
  // Background gradient stops
  bgFrom: string;
  bgVia: string;
  bgTo: string;
  // Card
  cardBg: string;
  cardBorder: string;
  cardHoverBg: string;
  cardHoverBorder: string;
  // Text
  text: string;
  textMuted: string;
  // Accent
  accent: string;
  // Avatar ring
  avatarRing: string;
  // Glow
  glow: string;
  // Footer
  footerText: string;
  // Orb colors
  orb1: string;
  orb2: string;
  orb3: string;
  // Toggle button
  toggleBg: string;
  toggleBorder: string;
  toggleText: string;
}

export interface Theme {
  dark: ThemeVars;
  light: ThemeVars;
}

export const themes: Record<string, Theme> = {
  midnight: {
    dark: {
      bgFrom: "#020420",
      bgVia: "#1e1b4b",
      bgTo: "#020420",
      cardBg: "rgba(255,255,255,0.05)",
      cardBorder: "rgba(255,255,255,0.1)",
      cardHoverBg: "rgba(255,255,255,0.1)",
      cardHoverBorder: "rgba(255,255,255,0.2)",
      text: "#ffffff",
      textMuted: "rgba(255,255,255,0.6)",
      accent: "#818cf8",
      avatarRing: "rgba(99,102,241,0.5)",
      glow: "rgba(99,102,241,0.2)",
      footerText: "rgba(255,255,255,0.3)",
      orb1: "#6366f1",
      orb2: "#8b5cf6",
      orb3: "#a78bfa",
      toggleBg: "rgba(255,255,255,0.1)",
      toggleBorder: "rgba(255,255,255,0.2)",
      toggleText: "#ffffff",
    },
    light: {
      bgFrom: "#f1f5f9",
      bgVia: "#eef2ff",
      bgTo: "#f1f5f9",
      cardBg: "#ffffff",
      cardBorder: "rgba(129,140,248,0.3)",
      cardHoverBg: "rgba(238,242,255,0.5)",
      cardHoverBorder: "rgba(129,140,248,0.5)",
      text: "#0f172a",
      textMuted: "rgba(71,85,105,0.8)",
      accent: "#4f46e5",
      avatarRing: "rgba(99,102,241,0.4)",
      glow: "rgba(129,140,248,0.25)",
      footerText: "rgba(100,116,139,0.6)",
      orb1: "#a5b4fc",
      orb2: "#c4b5fd",
      orb3: "#ddd6fe",
      toggleBg: "rgba(0,0,0,0.05)",
      toggleBorder: "rgba(0,0,0,0.1)",
      toggleText: "#0f172a",
    },
  },
  aurora: {
    dark: {
      bgFrom: "#022c22",
      bgVia: "#042f2e",
      bgTo: "#083344",
      cardBg: "rgba(255,255,255,0.05)",
      cardBorder: "rgba(255,255,255,0.1)",
      cardHoverBg: "rgba(255,255,255,0.1)",
      cardHoverBorder: "rgba(16,185,129,0.3)",
      text: "#ffffff",
      textMuted: "rgba(255,255,255,0.6)",
      accent: "#34d399",
      avatarRing: "rgba(16,185,129,0.5)",
      glow: "rgba(16,185,129,0.2)",
      footerText: "rgba(255,255,255,0.3)",
      orb1: "#10b981",
      orb2: "#14b8a6",
      orb3: "#06b6d4",
      toggleBg: "rgba(255,255,255,0.1)",
      toggleBorder: "rgba(255,255,255,0.2)",
      toggleText: "#ffffff",
    },
    light: {
      bgFrom: "#ecfdf5",
      bgVia: "#f0fdfa",
      bgTo: "#ecfeff",
      cardBg: "#ffffff",
      cardBorder: "rgba(52,211,153,0.3)",
      cardHoverBg: "rgba(236,253,245,0.5)",
      cardHoverBorder: "rgba(52,211,153,0.5)",
      text: "#0f172a",
      textMuted: "rgba(71,85,105,0.8)",
      accent: "#059669",
      avatarRing: "rgba(16,185,129,0.4)",
      glow: "rgba(110,231,183,0.25)",
      footerText: "rgba(100,116,139,0.6)",
      orb1: "#6ee7b7",
      orb2: "#5eead4",
      orb3: "#67e8f9",
      toggleBg: "rgba(0,0,0,0.05)",
      toggleBorder: "rgba(0,0,0,0.1)",
      toggleText: "#0f172a",
    },
  },
  sunset: {
    dark: {
      bgFrom: "#431407",
      bgVia: "#4c0519",
      bgTo: "#3b0764",
      cardBg: "rgba(255,255,255,0.05)",
      cardBorder: "rgba(255,255,255,0.1)",
      cardHoverBg: "rgba(255,255,255,0.1)",
      cardHoverBorder: "rgba(249,115,22,0.3)",
      text: "#ffffff",
      textMuted: "rgba(255,255,255,0.6)",
      accent: "#fb923c",
      avatarRing: "rgba(249,115,22,0.5)",
      glow: "rgba(249,115,22,0.2)",
      footerText: "rgba(255,255,255,0.3)",
      orb1: "#f97316",
      orb2: "#f43f5e",
      orb3: "#a855f7",
      toggleBg: "rgba(255,255,255,0.1)",
      toggleBorder: "rgba(255,255,255,0.2)",
      toggleText: "#ffffff",
    },
    light: {
      bgFrom: "#fff7ed",
      bgVia: "#fff1f2",
      bgTo: "#faf5ff",
      cardBg: "#ffffff",
      cardBorder: "rgba(251,146,60,0.3)",
      cardHoverBg: "rgba(255,247,237,0.5)",
      cardHoverBorder: "rgba(251,146,60,0.5)",
      text: "#0f172a",
      textMuted: "rgba(71,85,105,0.8)",
      accent: "#ea580c",
      avatarRing: "rgba(249,115,22,0.4)",
      glow: "rgba(253,186,116,0.25)",
      footerText: "rgba(100,116,139,0.6)",
      orb1: "#fdba74",
      orb2: "#fda4af",
      orb3: "#d8b4fe",
      toggleBg: "rgba(0,0,0,0.05)",
      toggleBorder: "rgba(0,0,0,0.1)",
      toggleText: "#0f172a",
    },
  },
  ocean: {
    dark: {
      bgFrom: "#172554",
      bgVia: "#082f49",
      bgTo: "#083344",
      cardBg: "rgba(255,255,255,0.05)",
      cardBorder: "rgba(255,255,255,0.1)",
      cardHoverBg: "rgba(255,255,255,0.1)",
      cardHoverBorder: "rgba(56,189,248,0.3)",
      text: "#ffffff",
      textMuted: "rgba(255,255,255,0.6)",
      accent: "#38bdf8",
      avatarRing: "rgba(14,165,233,0.5)",
      glow: "rgba(14,165,233,0.2)",
      footerText: "rgba(255,255,255,0.3)",
      orb1: "#3b82f6",
      orb2: "#0ea5e9",
      orb3: "#06b6d4",
      toggleBg: "rgba(255,255,255,0.1)",
      toggleBorder: "rgba(255,255,255,0.2)",
      toggleText: "#ffffff",
    },
    light: {
      bgFrom: "#eff6ff",
      bgVia: "#f0f9ff",
      bgTo: "#ecfeff",
      cardBg: "#ffffff",
      cardBorder: "rgba(56,189,248,0.3)",
      cardHoverBg: "rgba(240,249,255,0.5)",
      cardHoverBorder: "rgba(56,189,248,0.5)",
      text: "#0f172a",
      textMuted: "rgba(71,85,105,0.8)",
      accent: "#0284c7",
      avatarRing: "rgba(14,165,233,0.4)",
      glow: "rgba(125,211,252,0.25)",
      footerText: "rgba(100,116,139,0.6)",
      orb1: "#93c5fd",
      orb2: "#7dd3fc",
      orb3: "#67e8f9",
      toggleBg: "rgba(0,0,0,0.05)",
      toggleBorder: "rgba(0,0,0,0.1)",
      toggleText: "#0f172a",
    },
  },
  minimal: {
    dark: {
      bgFrom: "#0c0a09",
      bgVia: "#171717",
      bgTo: "#0c0a09",
      cardBg: "rgba(255,255,255,0.05)",
      cardBorder: "rgba(255,255,255,0.1)",
      cardHoverBg: "rgba(255,255,255,0.1)",
      cardHoverBorder: "rgba(255,255,255,0.2)",
      text: "#ffffff",
      textMuted: "rgba(255,255,255,0.6)",
      accent: "#d6d3d1",
      avatarRing: "rgba(120,113,108,0.5)",
      glow: "rgba(120,113,108,0.2)",
      footerText: "rgba(255,255,255,0.3)",
      orb1: "#78716c",
      orb2: "#a8a29e",
      orb3: "#d6d3d1",
      toggleBg: "rgba(255,255,255,0.1)",
      toggleBorder: "rgba(255,255,255,0.2)",
      toggleText: "#ffffff",
    },
    light: {
      bgFrom: "#f5f5f4",
      bgVia: "#fafaf9",
      bgTo: "#f5f5f4",
      cardBg: "#ffffff",
      cardBorder: "rgba(214,211,209,0.8)",
      cardHoverBg: "#fafaf9",
      cardHoverBorder: "rgba(168,162,158,0.6)",
      text: "#1c1917",
      textMuted: "rgba(120,113,108,0.8)",
      accent: "#44403c",
      avatarRing: "rgba(168,162,158,0.6)",
      glow: "rgba(214,211,209,0.4)",
      footerText: "rgba(168,162,158,0.6)",
      orb1: "#d6d3d1",
      orb2: "#e7e5e4",
      orb3: "#f5f5f4",
      toggleBg: "rgba(0,0,0,0.05)",
      toggleBorder: "rgba(0,0,0,0.1)",
      toggleText: "#1c1917",
    },
  },
};

export type ThemeName = keyof typeof themes;
