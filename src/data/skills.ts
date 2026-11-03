export const skillCategories = [
  "AI",
  "Frontend",
  "UI",
  "Backend",
  "Infra",
  "CI/CD",
  "Test",
  "Others",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

type YearMonth = `${number}-${number}`;
/** [開始, 終了]。終了を省略すると現在も使用中 */
export type Period = [start: YearMonth, end?: YearMonth];

export type Skill = {
  skill: string;
  category: SkillCategory;
  /** 使用期間。経験年数はここから自動計算する */
  periods: Period[];
  /** 実務ではなく個人開発での経験 */
  personal?: true;
};

/*
 * 実務経験は職務経歴書と同じく「その技術を使った案件の期間」で数える
 * (contracting/resume/skillsheet.yaml)。月は開始月・終了月を含めて数える。
 * 更新が必要なのは、案件が始まった/終わったときと、技術を使い始めた/やめたときだけ。
 */
const P = {
  web: ["2020-04", "2023-11"], // Web サイト・メディアサイトの制作支援 (フリーランス)
  kiosk: ["2023-12", "2025-04"], // 金融系端末画面の Web リプレイス (正社員)
  school: ["2025-07", "2026-10"], // オンラインスクール向け Web サービス (業務委託)
  akiyaDev: ["2026-08"], // 空き家マッチングサービス 開発 (継続中)
  akiya: ["2025-07"], // 空き家マッチングサービス 関与 (継続中)
} satisfies Record<string, Period>;

export const allSkills: Skill[] = [
  // AI
  { skill: "Claude Code", category: "AI", periods: [P.akiya] },
  { skill: "Cursor", category: "AI", periods: [P.school] },
  { skill: "Claude / Gemini API", category: "AI", periods: [P.akiya] },
  { skill: "Codex", category: "AI", periods: [["2026-01"]], personal: true },

  // Frontend
  { skill: "HTML", category: "Frontend", periods: [["2020-04"]] },
  { skill: "CSS", category: "Frontend", periods: [["2020-04"]] },
  { skill: "JavaScript", category: "Frontend", periods: [["2020-04"]] },
  { skill: "TypeScript", category: "Frontend", periods: [P.kiosk, ["2025-07"]] },
  { skill: "React", category: "Frontend", periods: [P.kiosk, P.school] },
  { skill: "React Router", category: "Frontend", periods: [P.kiosk, P.school] },
  { skill: "Vue", category: "Frontend", periods: [P.school] },
  { skill: "Nuxt", category: "Frontend", periods: [P.school] },
  { skill: "Next.js", category: "Frontend", periods: [P.akiyaDev] },
  { skill: "TanStack Query", category: "Frontend", periods: [P.school] },
  { skill: "React Hook Form", category: "Frontend", periods: [P.school] },
  { skill: "Zod", category: "Frontend", periods: [P.school] },
  { skill: "Electron", category: "Frontend", periods: [P.kiosk] },
  { skill: "Astro", category: "Frontend", periods: [["2024-06"]], personal: true },
  { skill: "Three.js", category: "Frontend", periods: [["2024-06"]], personal: true },
  { skill: "GSAP", category: "Frontend", periods: [["2024-06"]], personal: true },
  { skill: "WebGL", category: "Frontend", periods: [["2025-04"]], personal: true },

  // UI
  { skill: "Tailwind CSS", category: "UI", periods: [P.school] },
  { skill: "shadcn/ui", category: "UI", periods: [P.school] },
  { skill: "Vuetify", category: "UI", periods: [P.school] },
  { skill: "Panda CSS", category: "UI", periods: [["2024-06"]], personal: true },

  // Backend
  { skill: "Node.js", category: "Backend", periods: [["2023-12"]] },
  { skill: "PHP / WordPress", category: "Backend", periods: [P.web] },
  { skill: "MySQL", category: "Backend", periods: [P.web] },
  { skill: "GraphQL", category: "Backend", periods: [P.web] },
  { skill: "OpenAPI (Orval)", category: "Backend", periods: [P.school] },
  { skill: "Stripe", category: "Backend", periods: [P.school] },
  { skill: "Payload CMS", category: "Backend", periods: [P.akiyaDev] },
  { skill: "PostgreSQL", category: "Backend", periods: [P.akiyaDev] },

  // Infra
  { skill: "AWS", category: "Infra", periods: [P.school] },
  { skill: "Cloudflare", category: "Infra", periods: [P.akiya] },
  { skill: "Vercel", category: "Infra", periods: [P.web] },
  { skill: "Sentry", category: "Infra", periods: [P.school] },

  // CI/CD
  { skill: "GitHub Actions", category: "CI/CD", periods: [P.school] },
  { skill: "CodeQL / gitleaks", category: "CI/CD", periods: [P.school] },

  // Test
  { skill: "Playwright", category: "Test", periods: [P.kiosk, P.school] },
  { skill: "Vitest", category: "Test", periods: [P.school] },
  { skill: "MSW", category: "Test", periods: [P.school] },
  { skill: "Jest", category: "Test", periods: [["2023-09"]], personal: true }, // TODO: 時期を確認

  // Others
  { skill: "Git/GitHub", category: "Others", periods: [["2021-06"]] },
  { skill: "Figma", category: "Others", periods: [["2022-06"]] },
  { skill: "Google Apps Script", category: "Others", periods: [P.akiya] },
  { skill: "Neovim", category: "Others", periods: [["2024-06"]], personal: true },
  { skill: "Arch Linux", category: "Others", periods: [["2025-03"]], personal: true },
];

const toIndex = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
};

/** 使用期間の合計月数 (開始月・終了月を含む。最低1) */
export function totalMonths(periods: Period[], now: Date = new Date()): number {
  const current = now.getFullYear() * 12 + now.getMonth();
  const months = periods.reduce((sum, [start, end]) => {
    const to = end ? toIndex(end) : current;
    return sum + Math.max(0, to - toIndex(start) + 1);
  }, 0);
  return Math.max(1, months);
}

/** いちばん古い開始月 (並び替え用) */
export function firstStart(periods: Period[]): string {
  return periods.map(([start]) => start).sort()[0];
}

/** 例: 5y 4m / 8m */
export function formatExperience(months: number): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y === 0) return `${m}m`;
  return m === 0 ? `${y}y` : `${y}y ${m}m`;
}

/** 経験の長さをバーで表す (6ヶ月で1ブロック、上限16) */
export function experienceBar(months: number): string {
  return "░".repeat(Math.min(16, Math.max(1, Math.ceil(months / 6))));
}
