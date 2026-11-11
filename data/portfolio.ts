export const profile = {
  name: "Asmita Srivastava",
  role: "Full-Stack Engineer · Generative AI & Agentic Workflows",
  email: "connectwithme.asmita@gmail.com",
  linkedin: "https://www.linkedin.com/in/asmitasrivastav/",
  lead: "Senior Software Engineer with 4+ years building high-traffic products in TypeScript, React, Next JS, Solid JS and Node JS, now applying LLMs, MCP and agentic automation to the software delivery lifecycle.",
  typed: ["MCP-powered AI workflows", "agents that fix performance regressions", "scalable loan and payment journeys", "Next JS experiences with SSR"],
};

export const stats = [
  { pre: "~", to: 6, suf: "M", label: "Monthly visits on a product I own" },
  { pre: "₹", to: 5, suf: " Cr+", label: "Incremental revenue delivered" },
  { pre: "", to: 35, suf: "%", label: "Faster deployments via an AI workflow" },
  { text: "14% → <5%", label: "Customer drop-off" },
];

export const about = {
  title: "Product engineer, now building with agents",
  paragraphs: [
    "I’m a full-stack engineer from Lucknow who enjoys the whole path from a loan-journey UI to the payment API behind it and the pipeline that deploys it.",
    "Lately I’ve been exploring Generative AI and agentic automation: an MCP server-based AI workflow in CI/CD, an LLM-powered repository cleanup agent across 1,000+ pages, and a performance-regression agent of my own.",
    "Beyond code, I’ve served as Software Delivery Manager for a cross-functional loans pod and mentored 50+ junior engineers.",
  ],
  highlights: [
    "AWS Certified Cloud Practitioner (valid to July 2027)",
    "Winner, Cognizant D&I Hackathon 2023",
    "Cheers Award for innovative contribution, Cognizant",
    "Recognized for delivery excellence at Bajaj Finserv",
    "B.Tech, Computer Science (AKTU), 2018–2022",
  ],
};

export type Job = { title: string; meta: string; points: { label?: string; text: string }[] };
export const jobs: Job[] = [
  {
    title: "Senior Software Engineer, Bajaj Finserv", meta: "Jan 2025 – Present",
    points: [
      { label: "Generative AI in the SDLC", text: "built an MCP server-based AI workflow with CI/CD automation for context-aware code generation, cutting deployment time by 35%." },
      { label: "LLM repo-cleanup agent", text: "used prompt engineering to shrink bundle size by 5% across 1,000+ active pages." },
      { label: "Credit Pulse (Experian-integrated)", text: "built and own a product serving ~6M monthly visits; cut transaction failures by 30% and grew the transaction run rate 2.5x (~240 to ~600)." },
      { label: "Loan offer pipeline", text: "re-architected and stabilized it, generating ₹5 Cr+ in incremental revenue." },
      { label: "Payments reliability", text: "integrated documented and undocumented banking/payment APIs and built an automated New Relic reporting pipeline on GitHub Actions, reducing drop-off from 14% to under 5% (tracked in CleverTap)." },
      { label: "Professional loan module", text: "delivered a high-uptime module handling 50,000+ monthly transactions with TypeScript, Solid JS, AEM, GraphQL and REST." },
      { label: "Next JS migration", text: "moved a hybrid rendering architecture to Next JS with SSR over a headless GraphQL API, improving Core Web Vitals and SEO; refactored React to TypeScript/Solid JS with 30+ reusable components." },
      { label: "Leadership", text: "Software Delivery Manager for a cross-functional loans pod, running agile ceremonies and mentoring juniors through structured code reviews." },
    ],
  },
  {
    title: "Junior Software Engineer, Cognizant Technologies", meta: "Jul 2023 – Dec 2024",
    points: [
      { text: "Owned the main website (45,000+ monthly visitors) of an overseas energy-sector client on AEM." },
      { text: "Automated AEM UI code generation for design-system components, cutting manual effort by 40%." },
      { text: "Reduced page load time and error rates by 30% using Datadog, Google Analytics and Chrome DevTools." },
      { text: "Fixed soft-404s, redirect chains and indexing issues across 800+ pages, improving crawlability and organic SEO." },
      { text: "Implemented Firebase authentication and reusable blog components; code reviews improved delivery time by 20%." },
    ],
  },
  {
    title: "Programmer Analyst Trainee, Cognizant Technologies", meta: "Feb 2022 – Jul 2023",
    points: [
      { text: "Built a React SPA with Redux, GSAP and REST integration, lifting engagement by 15%; improved SEO with SSR and static generation." },
      { text: "Deployed a cloud call-centre solution on AWS (S3, EC2, Lambda, DynamoDB) with dynamic queue management for agent overflow." },
      { text: "Contributed to a loan-lending platform in Java, Python and JavaScript, improving user engagement by 15%." },
    ],
  },
];

export type Project = { title: string; desc: string; tags: string[]; featured?: boolean; bullets?: string[] };
export const projects: Project[] = [
  {
    title: "Performance Regression Agent", featured: true,
    desc: "An AI agent with tool calling that diagnoses Core Web Vitals regressions by reading Lighthouse reports, commit diffs and bundle analysis, then opens a fix pull request for human approval.",
    bullets: [
      "Custom MCP server exposing get_lighthouse_report, get_commit_diff, analyze_bundle and open_pull_request to the agent’s multi-step reasoning loop, triggered via GitHub Actions.",
      "Guardrails: branch-only write access, step and token budgets per run, a Next JS human-in-the-loop approval dashboard, and full tool-call tracing.",
    ],
    tags: ["TypeScript", "Node", "Next JS", "MCP", "Claude API", "GitHub Actions", "AWS"],
  },
  { title: "Wander-Star Travel Camp", desc: "Full-stack travel web app with server-side rendering for SEO and reusable UI components.", tags: ["Next JS", "TypeScript", "React", "Tailwind CSS"] },
  { title: "YouTube Plus", desc: "Video and image-feed platform; custom hooks cut data submission steps by 50%, with full unit test coverage.", tags: ["React", "Node JS"] },
  { title: "Spark Clothing", desc: "E-commerce app with Firebase authentication and 85% component test coverage.", tags: ["React", "Redux", "Firebase", "ThreeJS"] },
];

export const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript (ES6+)", "Python", "Java", "SQL", "Bash", "HTML5", "CSS3/SASS", "GraphQL"],
  Frontend: ["React", "Next JS", "Solid JS", "Redux", "Tailwind CSS", "ThreeJS", "Vite", "Webpack"],
  "Backend & APIs": ["Node JS", "Express JS", "REST APIs", "GraphQL", "API Integration", "Firebase Auth"],
  "AI & Agentic": ["Generative AI", "LLM Integration", "MCP", "Agentic Workflows", "Prompt Engineering", "Tool/Function Calling", "Vertex AI"],
  "Cloud & DevOps": ["AWS (S3, EC2, Lambda, DynamoDB)", "CI/CD", "GitHub Actions", "AEM"],
  "Monitoring & Quality": ["New Relic", "Datadog", "Jest", "RTL", "CleverTap", "Google Analytics", "SonarQube", "Chrome DevTools", "Postman"],
  Practices: ["System Design", "Performance Optimization", "Agile/Scrum", "Code Reviews", "DSA", "OOP"],
};
