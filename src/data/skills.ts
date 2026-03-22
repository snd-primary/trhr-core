export const skillCategories = [
  "Frontend",
  "CSS",
  "Backend",
  "DB",
  "OS",
  "AI",
  "Others",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export type Skill = {
  skill: string;
  category: SkillCategory;
  experience: string;
  mastery: string;
};

export const allSkills: Skill[] = [
  {
    skill: "JavaScript",
    category: "Frontend",
    experience: "4.5year",
    mastery: "░░░░░░░░░░░░",
  },
  {
    skill: "TypeScript",
    category: "Frontend",
    experience: "2year",
    mastery: "░░░░░░░░░",
  },
  {
    skill: "Node.js",
    category: "Frontend",
    experience: "1.5year",
    mastery: "░░░░░░░░",
  },
  {
    skill: "PowerShell",
    category: "Others",
    experience: "2year",
    mastery: "░░░░░░",
  },
  {
    skill: "PHP",
    category: "Backend",
    experience: "2year",
    mastery: "░░░░░░",
  },
  {
    skill: "VBA",
    category: "Others",
    experience: "1year",
    mastery: "░░░░░░",
  },
  {
    skill: "C++",
    category: "Backend",
    experience: "6month",
    mastery: "░░░",
  },
  {
    skill: "HTML",
    category: "Frontend",
    experience: "5year",
    mastery: "░░░░░░░░░░░░░",
  },
  {
    skill: "css",
    category: "Frontend",
    experience: "5year",
    mastery: "░░░░░░░░░░░░░",
  },
  {
    skill: "Scss",
    category: "CSS",
    experience: "3year",
    mastery: "░░░░░░░░░░░░",
  },
  {
    skill: "React",
    category: "Frontend",
    experience: "2.5year",
    mastery: "░░░░░░░░░░░",
  },
  {
    skill: "Next.js",
    category: "Frontend",
    experience: "1year",
    mastery: "░░░░░░░░░░",
  },
  {
    skill: "Astro",
    category: "Frontend",
    experience: "1year",
    mastery: "░░░░░░░░░░",
  },
  {
    skill: "Nuxt.js",
    category: "Frontend",
    experience: "2month",
    mastery: "░░░░░░",
  },
  {
    skill: "Electron",
    category: "Frontend",
    experience: "1year",
    mastery: "░░░░░░",
  },
  {
    skill: "Gatsby.js",
    category: "Frontend",
    experience: "6month",
    mastery: "░░░░",
  },
  {
    skill: "GSAP",
    category: "Frontend",
    experience: "1year",
    mastery: "░░░░░░",
  },
  {
    skill: "Three.js",
    category: "Frontend",
    experience: "1year",
    mastery: "░░░░░░",
  },
  {
    skill: "WebGL",
    category: "Frontend",
    experience: "2month",
    mastery: "░░░░",
  },
  {
    skill: "ReactRouter",
    category: "Frontend",
    experience: "1month",
    mastery: "░░░░░░",
  },
  {
    skill: "Vite/Webpack",
    category: "Frontend",
    experience: "2.5year",
    mastery: "░░░░░░",
  },
  { skill: "GraphQL", category: "DB", experience: "6month", mastery: "░░░░░" },
  { skill: "Prisma", category: "DB", experience: "6month", mastery: "░░░░░" },
  { skill: "Firebase", category: "DB", experience: "1year", mastery: "░░░░░" },
  { skill: "Neondb", category: "DB", experience: "2month", mastery: "░░░░" },
  {
    skill: "Tailwindcss",
    category: "CSS",
    experience: "1year",
    mastery: "░░░░░░░░░░",
  },
  {
    skill: "vanilla-extract",
    category: "CSS",
    experience: "1year",
    mastery: "░░░░░░░░░░░",
  },
  {
    skill: "Pandacss",
    category: "CSS",
    experience: "1year",
    mastery: "░░░░░░░░░░░",
  },
  { skill: "MUI (v5)", category: "CSS", experience: "1year", mastery: "░░░░" },
  {
    skill: "RadixUI",
    category: "CSS",
    experience: "1year",
    mastery: "░░░░░░░░░░",
  },
  {
    skill: "shadcn/ui",
    category: "CSS",
    experience: "1year",
    mastery: "░░░░░░░░░░",
  },
  {
    skill: "Windows",
    category: "OS",
    experience: "5year",
    mastery: "░░░░░░░░",
  },
  {
    skill: "Arch Linux",
    category: "OS",
    experience: "3month",
    mastery: "░░",
  },
  {
    skill: "Playwright",
    category: "Others",
    experience: "3month",
    mastery: "░░░░░░░",
  },
  {
    skill: "VSCode",
    category: "Others",
    experience: "4year",
    mastery: "░░░░░░░░",
  },
  {
    skill: "Neovim",
    category: "Others",
    experience: "1year",
    mastery: "░░░░░░░░",
  },
  {
    skill: "Git/Github",
    category: "Others",
    experience: "4year",
    mastery: "░░░░░░░",
  },
  {
    skill: "MS 365",
    category: "Others",
    experience: "2year",
    mastery: "░░░░░░",
  },
  {
    skill: "Cursor",
    category: "Others",
    experience: "6month",
    mastery: "░░░░",
  },
  {
    skill: "Figma",
    category: "Others",
    experience: "3year",
    mastery: "░░░░░░░░",
  },
  {
    skill: "Illustrator",
    category: "Others",
    experience: "1year",
    mastery: "░░░░░░",
  },
  {
    skill: "Photoshop",
    category: "Others",
    experience: "1year",
    mastery: "░░░░░",
  },
  {
    skill: "ClaudeCode",
    category: "AI",
    experience: "1year",
    mastery: "░░░░░░░░",
  },
  {
    skill: "Codex",
    category: "AI",
    experience: "2Month",
    mastery: "░░░░░",
  },
];
