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

The dev server listens on **port 3000** by default (`http://localhost:3000`).

For local testing of the visa form submission flow, use `npx vercel dev` with the required environment variables from `.env.example`.

### Other scripts

| Command        | Description                |
| -------------- | -------------------------- |
| `npm run build`   | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint`    | Typecheck with `tsc --noEmit` |

---

## Deployment

This project is deployed on Vercel as a static Vite site with serverless API routes for the visa form.

### Visa form email setup

The landing page visa form sends submissions to **navinnimesh25@gmail.com** through Vercel serverless functions. Configure these environment variables in the Vercel project:

| Variable | Required | Description |
| -------- | -------- | ----------- |
| `RESEND_API_KEY` | Yes | API key from [Resend](https://resend.com) for sending submission emails |
| `BLOB_READ_WRITE_TOKEN` | Yes | Token from [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) for uploaded documents |
| `VISA_FORM_TO_EMAIL` | No | Defaults to `navinnimesh25@gmail.com` |
| `VISA_FORM_FROM_EMAIL` | No | Defaults to `NN Europe Consultant <onboarding@resend.dev>` |

Steps:

1. Create a Resend account and generate an API key.
2. In Vercel, open **Storage** and add a **Blob** store for the project.
3. Add `RESEND_API_KEY` and `BLOB_READ_WRITE_TOKEN` to the Vercel project environment variables.
4. Redeploy the site.

After deployment, submit a test form from the live site and confirm the email arrives at `navinnimesh25@gmail.com`.

---

## Project layout

```
api/
  submit-visa-form.ts  # Sends form submissions by email
  upload.ts            # Handles document uploads to Vercel Blob
src/
  App.tsx              # Page shell, scroll progress, section order
  main.tsx             # React entry
  index.css            # Global styles & Tailwind
  components/          # Navbar, Hero, Services, FAQ, Footer, etc.
```

---

## License

Private project unless otherwise stated by the owner.
