# NN Europe Consultant

A polished marketing site for **NN Europe Consultant** — a premium immigration and visa consultancy focused on European destinations. Built as a fast, responsive single-page experience with smooth motion and a cohesive brand palette.

**Live repository:** [github.com/ramdev26/NN-EUROPE](https://github.com/ramdev26/NN-EUROPE)

---

## Highlights

- **Hero & narrative** — Strong first impression with imagery, trust signals, and clear calls to action.
- **Services & destinations** — Structured sections for offerings and target countries.
- **Social proof** — Stats, testimonials, and a process timeline to guide visitors.
- **FAQ & footer** — Practical answers and persistent navigation/contact patterns.
- **Scroll polish** — Top-of-page progress indicator and section animations via Motion.

---

## Tech stack

| Layer        | Choice                          |
| ------------ | ------------------------------- |
| UI           | React 19                        |
| Build        | Vite 6                          |
| Styling      | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Motion       | Motion (Framer Motion API)      |
| Icons        | Lucide React                    |
| Language     | TypeScript                      |

---

## Prerequisites

- **Node.js** 20+ (LTS recommended)

---

## Getting started

```bash
npm install
npm run dev
```

The dev server listens on **port 3000** by default (`http://localhost:3000`). No API keys or `.env` files are required for the static marketing experience.

### Other scripts

| Command        | Description                |
| -------------- | -------------------------- |
| `npm run build`   | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint`    | Typecheck with `tsc --noEmit` |

---

## Deployment

Build static assets, then host `dist/` on any static host (e.g. GitHub Pages, Netlify, Vercel, Cloudflare Pages):

```bash
npm run build
```

Point the host’s “publish directory” to **`dist`**.

---

## Project layout

```
src/
  App.tsx           # Page shell, scroll progress, section order
  main.tsx          # React entry
  index.css         # Global styles & Tailwind
  components/       # Navbar, Hero, Services, FAQ, Footer, etc.
```

---

## License

Private project unless otherwise stated by the owner.
