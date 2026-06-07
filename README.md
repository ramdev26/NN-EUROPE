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

The landing page visa form sends submissions to **navinnimesh25@gmail.com** using your existing Gmail account and Vercel Blob for uploaded documents.

| Variable | Required | Description |
| -------- | -------- | ----------- |
| `GMAIL_USER` | Yes | Your Gmail address, e.g. `navinnimesh25@gmail.com` |
| `GMAIL_APP_PASSWORD` | Yes | A Google App Password for sending email |
| `BLOB_READ_WRITE_TOKEN` | Yes | Token from Vercel **Storage → Blob** for uploaded documents |
| `VISA_FORM_TO_EMAIL` | No | Defaults to `navinnimesh25@gmail.com` |

#### Step 1: Create a Gmail App Password

1. Sign in to [Google Account Security](https://myaccount.google.com/security)
2. Turn on **2-Step Verification** if it is not already enabled
3. Open **App passwords**
4. Create a new app password for **Mail**
5. Copy the 16-character password

#### Step 2: Add Vercel environment variables

1. In Vercel, open **Storage** and add a **Blob** store for the project
2. Go to **Settings → Environment Variables** and add:
   - `GMAIL_USER` = `navinnimesh25@gmail.com`
   - `GMAIL_APP_PASSWORD` = your 16-character app password
   - `BLOB_READ_WRITE_TOKEN` = created automatically when Blob storage is added
3. Redeploy the site

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
