# Next.js GitHub Actions Workflow

A starter Next.js app used to practice a **GitHub Actions build workflow with npm caching and build artifacts**.

## Tech Stack

Next.js (with the React Compiler enabled) · React · Tailwind CSS · GitHub Actions

## Workflow (`.github/workflows/main.yml`)

"Next JS Built with Caching and Artifacts" runs on every push to `main`:

1. Check out the repository
2. Set up Node.js 22.x with npm caching (`actions/setup-node`)
3. `npm install`
4. `npm run build`
5. Upload `out/` as the `nextJS-build` artifact

> **Note:** `next.config.mjs` doesn't set `output: "export"`, so `next build` doesn't create an `out/` folder and the uploaded artifact will be empty. Either add `output: "export"` or upload `.next/` instead.

## Run locally

```bash
git clone https://github.com/KahafSameer/Next-JS-Workflow.git
cd Next-JS-Workflow
npm install
npm run dev     # http://localhost:3000
```

| Command | Description |
|---|---|
| `npm run dev` | Development server (`next dev --webpack`) |
| `npm run build` | Production build (`next build --webpack`) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
