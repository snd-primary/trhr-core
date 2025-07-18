import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ],
  // Files to exclude
  exclude: [],

  conditions: {
    extend: {
      groupHover: "[role=group]:where(:hover, [data-hover]) &",
    },
  },

  globalVars: {
    "--gradient-angle": {
      syntax: "<angle>",
      initialValue: "225deg",
      inherits: false,
    },
    "--gradient-start": {
      syntax: "<color>",
      initialValue: "#ff6b6b",
      inherits: false,
    },
    "--gradient-end": {
      syntax: "<color>",
      initialValue: "j#4ecdc4",
      inherits: false,
    },
    "--gradient-position": {
      syntax: "<percentage>",
      initialValue: "0%",
      inherits: false,
    },
    "--gradient-color-first": "oklch(0.79 0.15 97.66 / 0.1)",
    "--gradient-color-second": "oklch(0.67 0.22 38.09 / 0.1)",
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          customGradient: { value: "var(--hdr-gradient)" },
          background: { value: "oklch(0.141 0.005 285.823)" },
          foreground: { value: "oklch(0.885 0 0)" },
          card: { value: "oklch(0.21 0.006 285.885)" },
          cardForeground: { value: "oklch(0.985 0 0)" },
          popover: { value: "oklch(0.21 0.006 285.885)" },
          popoverForeground: { value: "oklch(0.985 0 0)" },
          // primary: { value: "oklch(0.795 0.184 86.017)" },
          primary: { value: "oklch(0.64 0.17 39.33)" },
          primaryForeground: { value: "oklch(0.421 0.095 57.708)" },
          secondary: { value: "oklch(0.274 0.006 286.033)" },
          secondaryForeground: { value: "oklch(0.985 0 0)" },
          muted: { value: "oklch(0.274 0.006 286.033)" },
          mutedForeground: { value: "oklch(0.705 0.015 286.067)" },
          accent: { value: "oklch(0.274 0.006 286.033)" },
          accentForeground: { value: "oklch(0.985 0 0)" },
          destructive: { value: "oklch(0.704 0.191 22.216)" },
          border: { value: "oklch(1 0 0 / 20%)" },
          // border: { value: "oklch(0.445 0.184 98.047)" },
          input: { value: "oklch(1 0 0 / 15%)" },
          ring: { value: "oklch(0.554 0.135 66.442)" },
          chart1: { value: "oklch(0.488 0.243 264.376)" },
          chart2: { value: "oklch(0.696 0.17 162.48)" },
          chart3: { value: "oklch(0.769 0.188 70.08)" },
          chart4: { value: "oklch(0.627 0.265 303.9)" },
          chart5: { value: "oklch(0.645 0.246 16.439)" },
          sidebar: { value: "oklch(0.21 0.006 285.885)" },
          sidebarForeground: { value: "oklch(0.985 0 0)" },
          sidebarPrimary: { value: "oklch(0.795 0.184 86.047)" },
          sidebarPrimaryForeground: { value: "oklch(0.421 0.095 57.708)" },
          sidebarAccent: { value: "oklch(0.274 0.006 286.033)" },
          sidebarAccentForeground: { value: "oklch(0.985 0 0)" },
          sidebarBorder: { value: "oklch(1 0 0 / 10%)" },
          sidebarRing: { value: "lch(0.554 0.135 66.442)" },
        },
        zIndex: {
          initial: { value: 0 },
          z10: { value: 10 },
          z20: { value: 20 },
          z30: { value: 30 },
          z40: { value: 40 },
          z50: { value: 50 },
        },
        gradients: {
          cardGradient: {
            value:
              "linear-gradient(to right, var(--gradient-color-first), var(--gradient-color-second))",
          },
        },
        fonts: {
          depa: { value: '"DepartureMono", monospace' },
          yuji: { value: '"YujiSyuku", "Hiragino Kaku Gothic ProN"' },
          global: {
            value:
              '"DepartureMono", "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
          },
        },
      },
      keyframes: {
        itemFocusEnter: {
          "0%": {
            transform: "scale(0.85) translateZ(0px)", // 少し小さく、奥まった状態から開始
            opacity: "0.7",
          },
          "60%": {
            transform: "scale(1.05) translateZ(30px)", // 少し拡大し、手前に浮き出る
            opacity: "0.9",
          },
          "100%": {
            transform: "scale(1) translateZ(0px)", // 最終的なサイズと位置に収まる
            opacity: "1",
          },
        },
        // 他のアイテムが縮小・退場するアニメーション
        otherItemShrinkExit: {
          "0%": {
            transform: "scale(1) translateZ(0px)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(0.1) translateZ(-50px)", // 小さくなり、少し奥へ
            opacity: "0",
          },
        },
        fadeInOut: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        textFlicker: {
          "0%": {
            textShadow: "1px 0 0 #ea36af, -2px 0 0 #75fa69",
          },
          "100%": {
            textShadow: "4px 0.5px 4px #ea36af, -3px -0.5px 2px #75fa69",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
