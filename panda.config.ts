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

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          orange: {
            1: { value: "var(--orange-1, #0d0907)" },
            2: { value: "var(--orange-2, #1c1611)" },
            3: { value: "var(--orange-3, #2e1f13)" },
            4: { value: "var(--orange-4, #3e240d)" },
            5: { value: "var(--orange-5, #4c2d12)" },
            6: { value: "var(--orange-6, #5b391c)" },
            7: { value: "var(--orange-7, #714928)" },
            8: { value: "var(--orange-8, #915e33)" },
            9: { value: "var(--orange-9, #dd822c)" },
            10: { value: "var(--orange-10, #d0761b)" },
            11: { value: "var(--orange-11, #f7aa6b)" },
            12: { value: "var(--orange-12, #fcdfc9)" },
            a1: { value: "var(--orange-a1, #ca000004)" },
            a2: { value: "var(--orange-a2, #fcac6813)" },
            a3: { value: "var(--orange-a3, #fb964626)" },
            a4: { value: "var(--orange-a4, #fc831837)" },
            a5: { value: "var(--orange-a5, #fe8c2845)" },
            a6: { value: "var(--orange-a6, #fd974055)" },
            a7: { value: "var(--orange-a7, #fd9f516c)" },
            a8: { value: "var(--orange-a8, #ffa2558d)" },
            a9: { value: "var(--orange-a9, #ff9632dc)" },
            a10: { value: "var(--orange-a10, #fe8f1fcf)" },
            a11: { value: "var(--orange-a11, #ffb06ef7)" },
            a12: { value: "var(--orange-a12, #ffe2cbfc)" },
            contrast: { value: "var(--orange-contrast, #fff)" },
            surface: { value: "var(--orange-surface, #2e221880)" },
            indicator: { value: "var(--orange-indicator, #dd822c)" },
            track: { value: "var(--orange-track, #dd822c)" },
          },
          gray: {
            1: { value: "var(--gray-1, #0a0a0c)" },
            2: { value: "var(--gray-2, #18181a)" },
            3: { value: "var(--gray-3, #212225)" },
            4: { value: "var(--gray-4, #29292d)" },
            5: { value: "var(--gray-5, #303136)" },
            6: { value: "var(--gray-6, #393a40)" },
            7: { value: "var(--gray-7, #46484f)" },
            8: { value: "var(--gray-8, #5e606a)" },
            9: { value: "var(--gray-9, #6c6e79)" },
            10: { value: "var(--gray-10, #797b86)" },
            11: { value: "var(--gray-11, #b2b3bd)" },
            12: { value: "var(--gray-12, #eeeef0)" },
            a1: { value: "var(--gray-a1, #0a0ab403)" },
            a2: { value: "var(--gray-a2, #dcdcfa11)" },
            a3: { value: "var(--gray-a3, #d5def81d)" },
            a4: { value: "var(--gray-a4, #dfdffb25)" },
            a5: { value: "var(--gray-a5, #dde3fe2e)" },
            a6: { value: "var(--gray-a6, #dde1fc39)" },
            a7: { value: "var(--gray-a7, #dfe6ff48)" },
            a8: { value: "var(--gray-a8, #e1e6ff64)" },
            a9: { value: "var(--gray-a9, #e2e6ff74)" },
            a10: { value: "var(--gray-a10, #e4e8fe82)" },
            a11: { value: "var(--gray-a11, #eff0febb)" },
            a12: { value: "var(--gray-a12, #fcfcfef0)" },
            contrast: { value: "var(--gray-contrast, #ffffff)" },
            surface: { value: "var(--gray-surface, rgba(0, 0, 0, 0.05))" },
            indicator: { value: "var(--gray-indicator, #6c6e79)" },
            track: { value: "var(--gray-track, #6c6e79)" },
          },
        },
        fonts: {
          depa: { value: "var(--font-depa)" },
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
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
