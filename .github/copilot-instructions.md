<!-- GitHub Copilot / AI agent instructions tailored to this repo -->
# Quick orientation

This is a Next.js (app router) portfolio site in `src/` (TypeScript + React). Key runtime pieces:

- App root and global styles: `src/app/layout.tsx` imports `src/styles/app.scss` and Bootstrap.
- Main page: `src/app/page.tsx` (client component: uses `"use client"`).
- Alias: `@/` maps to `./src/` (see `tsconfig.json`). Example: `import { db } from '@/lib/firebase'`.
- Public assets live under `public/assets/`. Code often references them as `assets/...` (relative paths).

# Architecture / data flows (what to know)

- UI: plain React components in `src/app/components/` with global SCSS. Many components accept a `boxRef` string used by GSAP-based entrance animations.
- Styling: global SCSS imported in `layout.tsx`. Look for partials in `src/styles/` (files start with `_` for partials).
- Client vs Server: components that need browser APIs use `"use client"` (e.g., `page.tsx`). Files without that are server components.
- Data: Firestore + Storage are initialized in `src/lib/firebase.ts` using `NEXT_PUBLIC_FIREBASE_*` env vars. Example consumer: `src/services/slides.ts` reads `logo_slides` collection and falls back to local `assets/logos_photos/` when a Firestore field contains a filename.
- Third-party integrations you will encounter:
  - Firebase (Firestore, Storage) — env vars in `.env` (repo contains a `.env` with public keys). Keys are `NEXT_PUBLIC_...` and intended for client usage.
  - Email sending via `@emailjs/browser` (constants embedded in `src/app/components/contact-me.tsx`: `SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`).
  - Animations: `gsap` + `ScrollTrigger`, `@gsap/react` and Lottie players.
  - Carousel: `embla-carousel-react` and related helper components in `src/app/components/carousel/`.

# Build / dev / deploy (commands)

- Local dev server:
  - `npm run dev` (alias for `next dev`).
- Build and start:
  - `npm run build` -> `next build`
  - `npm run start` -> `next start`
- Lint: `npm run lint` uses `next lint`.
- Deploy script present: `npm run deploy` runs `gh-pages -d build` (with `predeploy` that runs `npm run build`). Note: the script expects a `build/` folder — verify your deployment step (Next.js static export traditionally uses `next export` / `out/`; this repo currently uses `gh-pages` and a `build` dir).

# Project-specific conventions and patterns

- Import alias: use `@/` for any path under `src/` (e.g., `@/lib/firebase`).
- Assets: many components refer to assets like `assets/me.png` (no leading slash). When adding assets, place them under `public/assets/` and mirror existing naming conventions (`public/assets/backgrounds`, `logos_photos`, etc.).
- Animation helper pattern: components receive a `boxRef` prop (string) and the consuming page uses GSAP `gsap.utils.toArray` to animate `.${boxRef}` elements. Follow that pattern when adding animated components.
- Direct DOM usage: some UI toggles use `document.getElementById(...)` and manual class toggling (example: `dynamic-island` in `page.tsx`). Prefer matching the existing approach unless refactoring across multiple components.
- Styles: global SCSS partials are used and imported centrally. Avoid adding many component-level CSS files — prefer adding to `src/styles/` and importing in `layout.tsx` if you need global rules.

# Where to change integration keys

- Firebase config: `src/lib/firebase.ts` reads `NEXT_PUBLIC_FIREBASE_*` from environment. Local `.env` exists in the repo — treat it as the canonical local dev values. Do NOT hardcode private keys.
- EmailJS ids: `src/app/components/contact-me.tsx` contains the `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` constants — update those values here if you change EmailJS configuration.

# Helpful file pointers (examples to inspect)

- `src/app/layout.tsx` — global styles, MUI `AppRouterCacheProvider`, external scripts.
- `src/app/page.tsx` — top-level client page showing animation + dynamic-island behavior.
- `src/lib/firebase.ts` — Firebase initialization and usage of `NEXT_PUBLIC_...` env vars.
- `src/services/slides.ts` — Firestore query + fallback to local `assets/` paths.
- `src/app/components/contact-me.tsx` — EmailJS usage and front-end form handling.

# Pull-request / editing guidance for AI agents

- Minimize invasive changes: this repo mixes direct DOM manipulations and React state — prefer localized patches unless you confirm cross-component behavior.
- When adding new pages/components, follow the `src/app/` app-router layout and add styles to `src/styles/` rather than scattering new global imports.
- Respect `"use client"` boundaries: client-only libraries (GSAP, EmailJS, DOM APIs) must be used inside client components.

# Final notes

- No test suite detected — focus manual verification with `npm run dev` and browser checks.
- If updating deployment flow, verify the `deploy` script and adjust to produce the expected static output for `gh-pages`.

If any section is unclear or you want me to include small examples (e.g., how to add a new animated component or how to fetch and mock Firestore data locally), tell me what to expand and I will iterate.
