export const site = {
  url: "https://herbertjacby.com",
  name: "Herbert Jacby",
  fullName: "Herbert Cabus Jacby",
  role: "Senior Front-End Developer",
  title: "Herbert Jacby | Senior Front-End Developer (React, Next.js, Angular)",
  description:
    "Herbert Jacby is a Senior Front-End Developer with 6+ years building high-performance React, Next.js, Angular and TypeScript apps for the financial sector. Remote, available for US time zones.",
  location: "Recife, PE, Brazil",
  email: "herbertjacby@gmail.com",
  github: "https://github.com/HerbertCJ",
  linkedin: "https://www.linkedin.com/in/herbertcj",
  formspreeId: "xnqydrvy",
  keywords: [
    "Herbert Jacby",
    "Senior Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "TypeScript",
    "Micro-frontends",
    "Module Federation",
    "Remote Front-End Developer",
    "Front-End Developer Brazil",
    "Fintech Front-End",
    "Web Performance",
  ],
};

export const summary =
  "Senior Front-End Developer with 6+ years of experience building high-performance web applications with React, Angular, Next.js and TypeScript, mostly for the financial sector. Currently working remotely for a US-based investment firm, where I led an AngularJS to React 19 migration that cut bundle size by 63%, tripled the Lighthouse performance score and raised test coverage from 0% to 90%+.";

export const metrics = [
  { value: "6+", label: "years shipping production front-ends" },
  { value: "−63%", label: "bundle size after leading an AngularJS → React 19 migration" },
  { value: "3×", label: "Lighthouse performance score (19 → 61)" },
  { value: "90%+", label: "unit test coverage, up from 0%" },
];

export type Job = {
  role: string;
  company: string;
  via?: string;
  location: string;
  period: string;
  start: string;
  end?: string;
  highlights: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    role: "Senior Front-End Developer",
    company: "Cambridge Associates",
    via: "GFT Technologies",
    location: "Remote · US-based client",
    period: "May 2025 – Present",
    start: "2025-05",
    highlights: [
      "Led the migration of an internal investment portfolio platform from AngularJS to React 19 + Vite, uncovering undocumented business rules and defining the new architecture from scratch.",
      "Cut bundle size by 63% (6.4 MB → 2.4 MB) and raised Lighthouse scores from 19 to 61 in performance, 74 to 81 in accessibility and 80 to 91 in SEO.",
      "Introduced Vitest and Playwright, taking the new codebase from no tests to 90–95% unit coverage.",
      "Develop a client-facing micro-frontend used by 3,100+ unique users to explore funds, strategies and firms, raising its coverage from 50% to 90% and decoupling it from the host app.",
      "Built data-heavy AG Grid views with up to 40,000 server-side rows and no UI freezing.",
      "Integrated Datadog RUM and session replay; diagnosed and fixed a Safari-only production crash caused by a temporal dead zone issue.",
      "Mentor 5 front-end developers and run technical interviews for front-end hiring.",
    ],
    stack: ["React 19", "Vite", "TypeScript", "Zustand", "AG Grid", "Vitest", "Playwright", "Datadog"],
  },
  {
    role: "Senior Front-End Developer",
    company: "Itaú Unibanco",
    via: "Zup Innovation",
    location: "São Paulo, Brazil",
    period: "Apr 2024 – May 2025",
    start: "2024-04",
    end: "2025-05",
    highlights: [
      "Built features for 3 micro-frontends (Module Federation) of an internal platform that lets 60 Itaú teams deploy to AWS and Azure, with ~500 daily active users.",
      "Refactored the routing architecture shared across the micro-frontends.",
      "Raised unit test coverage from ~55% to 90% with Jest and maintained E2E regression suites with Robot Framework and Selenium.",
    ],
    stack: ["React", "Module Federation", "TypeScript", "Jest", "Robot Framework"],
  },
  {
    role: "Front-End Developer",
    company: "Justa Soluções Financeiras",
    location: "Recife, Brazil",
    period: "Sep 2023 – Mar 2024",
    start: "2023-09",
    end: "2024-03",
    highlights: [
      "Maintained the internal Angular dashboard used by 100+ employees across finance, marketing and operations.",
      "Built a new React + Vite dashboard and its component library from a Figma design system, documented in Storybook (~85% coverage).",
      "Designed a NestJS BFF that consolidated 5–6 backend calls per screen into a single endpoint.",
    ],
    stack: ["Angular", "React", "React Query", "Storybook", "NestJS", "Cypress"],
  },
  {
    role: "Front-End Developer",
    company: "Dex Works",
    location: "Maceió, Brazil",
    period: "Mar 2021 – Aug 2023",
    start: "2021-03",
    end: "2023-08",
    highlights: [
      "Delivered 4 projects end-to-end as the sole developer, including e-commerce and institutional websites with Next.js, TypeScript and Redux.",
      "Migrated a legacy ASP.NET admin dashboard to Angular 16, used by 15 merchants to manage products and store settings.",
      "Wrote unit and integration tests with Jest (~80% coverage) and E2E tests with Cypress.",
    ],
    stack: ["Next.js", "TypeScript", "Redux", "Angular 16", "Jest", "Cypress"],
  },
  {
    role: "Freelance Front-End Developer",
    company: "Self-employed",
    location: "Remote",
    period: "Sep 2020 – Feb 2021",
    start: "2020-09",
    end: "2021-02",
    highlights: [
      "Rebuilt a legacy ASP e-commerce website as a React/Next.js SPA, improving load speed and navigation.",
      "Built a website for a New York-based video production company.",
    ],
    stack: ["React", "Next.js"],
  },
];

export const earlierCareer = [
  {
    role: "Independent Trader",
    place: "B3 Stock Market",
    period: "2020 – 2021",
    text: "Traded stocks, US dollar and index futures, building a practical understanding of financial markets.",
  },
  {
    role: "Financial Manager",
    place: "Brubert LTDA",
    period: "2017 – 2020",
    text: "Managed financial and inventory accounting, sales and stock reporting, and purchase orders.",
  },
  {
    role: "IT Intern",
    place: "Reciprev Saúde Recife",
    period: "2017",
    text: "Provided IT support to the legal, administrative and financial departments.",
  },
];

export type Project = {
  name: string;
  kind: string;
  year?: string;
  description: string;
  highlight?: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "Kapital Contábil",
    kind: "Client website",
    year: "2023",
    description:
      "Institutional website for an accounting firm, built end-to-end as the sole developer at Dex Works with a focus on search visibility and fast page loads.",
    highlight: "Lighthouse SEO 100",
    stack: ["Next.js", "TypeScript", "Redux"],
    links: [{ label: "kapitalcontabil.com.br", href: "https://kapitalcontabil.com.br" }],
  },
  {
    name: "React Custom UI",
    kind: "Open-source library",
    year: "2024",
    description:
      "A fully customizable React Datepicker published on npm, written in TypeScript, tested with Vitest and documented in Storybook.",
    highlight: "Published on npm",
    stack: ["React", "TypeScript", "Vitest", "Storybook"],
    links: [
      { label: "react-custom-ui.com", href: "https://react-custom-ui.com" },
      { label: "GitHub", href: "https://github.com/HerbertCJ/react-custom-ui-datepicker" },
      { label: "npm", href: "https://www.npmjs.com/package/react-custom-ui-datepicker" },
    ],
  },
  {
    name: "TechStore",
    kind: "E-commerce",
    description:
      "An e-commerce storefront with product catalog, shopping cart and credit card checkout flow.",
    stack: ["React", "JavaScript", "CSS"],
    links: [{ label: "Live demo", href: "https://techstore1.netlify.app" }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Go", "Java", "C"] },
  { group: "Front-End", items: ["React", "Next.js", "Angular", "AngularJS", "React Native", "Vite"] },
  { group: "State & Data", items: ["Zustand", "Redux", "NgRx", "React Query", "Context API", "AG Grid"] },
  { group: "Styling & UI", items: ["Tailwind CSS", "Styled Components", "Material UI", "SASS", "Storybook", "Figma"] },
  { group: "Architecture", items: ["Micro-frontends", "Module Federation", "Design Systems", "BFF"] },
  { group: "Testing", items: ["Vitest", "Jest", "Playwright", "Cypress", "Testing Library", "Selenium", "Robot Framework"] },
  { group: "Back-End", items: ["Node.js", "NestJS", "Go", "MySQL", "MongoDB"] },
  { group: "Cloud & Observability", items: ["AWS", "Azure", "Datadog RUM", "Grafana", "Git"] },
];

export const certifications: { name: string; issuer: string; date: string; url?: string }[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Aug 2026",
    url: "https://www.credly.com/badges/1795f246-21fd-412e-9d5e-4429194fd5a3/",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "May 2026",
    url: "https://www.credly.com/badges/5308c8dc-3bc5-4e96-b4ba-97fed7299662/",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Aug 2024",
    url: "https://www.credly.com/badges/fdb6bc6c-afee-4e3a-9a14-72e0281e58c8/",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Oct 2026",
    url: "https://verify.skilljar.com/c/tscpf7qf9uzr",
  },
  {
    name: "Claude Code 101",
    issuer: "Anthropic",
    date: "Oct 2026",
    url: "https://verify.skilljar.com/c/wk3wbbcutv6q",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    date: "Oct 2026",
    url: "https://verify.skilljar.com/c/98uo8zsujf6r",
  },
  { name: "Scrum Foundation Professional Certificate (SFPC)", issuer: "CertiProf", date: "Jan 2023" },
];

export const courses = [
  { name: "React Native Full Course", issuer: "Alura", date: "Jan 2024" },
  { name: "Advanced English", issuer: "Senac Pernambuco", date: "Dec 2023" },
  { name: "ORM with Node.js: API with Sequelize and MySQL", issuer: "Alura", date: "Nov 2023" },
  { name: "Angular (v2+) from Basics to Advanced", issuer: "Loiane Groner", date: "Jun 2023" },
  { name: "English Conversation (27 hours)", issuer: "Cambly", date: "Jun 2023" },
  { name: "Front End Development Libraries", issuer: "freeCodeCamp", date: "Jan 2023" },
  { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: "Dec 2022" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", date: "Nov 2022" },
  { name: "Databases and SQL", issuer: "Udemy", date: "Oct 2022" },
  { name: "Java: Object-Oriented Programming + Projects", issuer: "Udemy", date: "Sep 2022" },
];

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  school: "Universidade Católica de Pernambuco",
  period: "2013 – 2018",
};

export const languages = [
  { name: "English", level: "Fluent (C1)" },
  { name: "Portuguese", level: "Native" },
];
