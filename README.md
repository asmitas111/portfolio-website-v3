# Asmita Srivastava | Portfolio (Next.js)

Next.js 15 (App Router) + TypeScript. No UI libraries; styling lives in `app/globals.css`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```
Requires Node.js 18.18 or newer.

## Where to edit
- `data/portfolio.ts`: all content (profile, stats, experience, projects, skills)
- `app/globals.css`: colors (`:root` block), layout and animations
- `components/`: Navbar (theme toggle, scroll progress), Hero (typewriter, count-up), Reveal (scroll animations), Experience, Projects

## Deploy
Push to GitHub and import the repo in Vercel (zero config), or run `npm run build` and host anywhere that runs Node.
