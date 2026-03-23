<!-- GitHub Copilot / AI agent instructions — Feres Henteti Portfolio -->
# Quick orientation

This is **Feres Henteti's personal portfolio website** — a Next.js 15 (App Router) single-page site built with React 19, TypeScript, and a rich animation layer. It lives in `src/` and deploys to GitHub Pages at `https://fereshenteti.github.io`.

- **Root layout**: `src/app/layout.tsx` — imports `src/app/styles/app.scss` and Bootstrap, wraps children in MUI `AppRouterCacheProvider`, includes external scripts for Instagram/TikTok embeds.
- **Main page**: `src/app/page.tsx` — a `"use client"` component that composes the full page from section components.
- **Path alias**: `@/` maps to `./src/` (see `tsconfig.json`). Example: `import { cn } from '@/lib/utils'`.
- **Public assets**: `public/assets/` — referenced as `assets/...` (no leading slash) in components.

# Tech stack

| Layer | Technologies |
|-------|-------------|
| Framework | Next.js 15.5, React 19.2, TypeScript 5.9 |
| Styling | SCSS (primary) + Tailwind CSS v4 (utility) — both imported via `app.scss` |
| UI libraries | MUI v7, React Bootstrap, Radix UI, shadcn/ui (new-york style) |
| Animation | GSAP 3.14 + ScrollTrigger, Motion (Framer Motion) 12.x, Lottie |
| Icons | Lucide React, MUI Icons, custom SVGs via `@svgr/webpack` |
| Fonts | ClashDisplay, Satoshi, GeneralSans (local WOFF2, configured in `src/fonts/fonts.ts`) |
| Backend | Firebase 12 (Firestore + Storage), EmailJS |
| Carousel | Embla Carousel + autoplay plugin |
| Build tools | PostCSS, @svgr/webpack, ESLint, shadcn CLI |

# Page structure (section order)

The home page renders these sections top-to-bottom:

1. **Header_v1** (`components/header/header_v1.tsx`) — Dynamic-island-style nav with liquid glass effect, expandable contact form & social links.
2. **BentoBox** (`components/bento-box.tsx`) — Apple-inspired hero grid with SpotlightCard hover effects, CountUp stats, and Magnet CTA button.
3. **LogoShowcase** (`components/portfolio-sections/LogoShowcase.tsx`) — Logo/brand design grid with SVG stroke-draw animations.
4. **SelectedWork** (`components/portfolio-sections/SelectedWork.tsx`) — Case studies (eMBS, Solar Energy Dashboard, Finance/Fintech) with flexible layouts.
5. **FrontendProjects** (`components/portfolio-sections/FrontendProjects.tsx`) — Featured frontend projects (Admin Dashboard, Product Website, Web App) with tech stack tags.
6. **ToolsCloud** (`components/portfolio-sections/ToolsCloud.tsx`) — Interactive hexagonal tool grid (Apple Watch–inspired). Hover triggers category-organized layout with GSAP floating physics.
7. **ProcessSection** (`components/portfolio-sections/ProcessSection.tsx`) — 5-step design workflow timeline (Discovery → Prototype) with scroll-based active states and custom SVG illustrations.
8. **TestimonialsSection** (`components/portfolio-sections/Testimonials.tsx`) — Client testimonial cards with staggered scroll animations.
9. **FinalCTA** (`components/portfolio-sections/FinalCTA.tsx`) — Call-to-action ("Let's get in touch" + "View Resume").
10. **Footer** (`components/footer.tsx`) — Contact info and social links.

Legacy/commented-out sections in `page.tsx`: `HeroSection`, `DetailedCategories`, `StatsSection`, image sequence canvas.

# Architecture and data flows

## Components
- **Portfolio sections**: `src/app/components/portfolio-sections/` — the main narrative blocks listed above.
- **Common UI**: `src/app/components/common-ui/` — `custom-button.tsx` (MUI-based), `custom-tag.tsx`.
- **Animation primitives**: `src/app/animations/` — reusable effects: `CountUp`, `GradientText`, `Magnet`, `SpotlightCard`, `StarBorder`, `TextPressure`.
- **GlassSurface**: `src/app/components/glass-bar/GlassSurface.tsx` — advanced glassmorphism using SVG displacement filters (chromatic aberration, blur, distortion).
- **Carousel**: `src/app/components/carousel/` — Embla-based carousel with autoplay.

## Styling
- **SCSS partials** are the primary styling method. All partials live in `src/app/styles/` (prefixed with `_`) and are imported centrally in `app.scss`.
- **Tailwind CSS v4** is integrated via `@tailwindcss/postcss` and imported at the top of `app.scss` (`@import "tailwindcss"`). Use it for utility classes alongside SCSS.
- **`cn()` helper** (`src/lib/utils.ts`): combines `clsx` + `tailwind-merge` for conditional class composition. Use this when mixing Tailwind classes dynamically.
- **shadcn/ui** is configured (`components.json`) with new-york style, Lucide icons, and a ReactBits registry. Component aliases: `@/components/ui`.
- **CSS variables** are used for theming. Fluid typography/spacing uses `clamp()`.

## Style files (24 partials in `src/app/styles/`)
`app.scss` imports: `tailwindcss`, `animations`, `globals`, `custom-tag`, `header`, `custom-button`, `carousel`, `main`, `categories`, `contact-me`, `made-by-me`, `social`, `bento-box`, `about-my-work`, `stats-section`, `detailed-categories`, `tools-cloud`, `process`, `selected-work`, `logo-showcase`, `frontend-projects`, `testimonials`, `final-cta`, `footer`.

## Animation patterns
- **GSAP + ScrollTrigger**: Most section animations. Components use `useGSAP` hook from `@gsap/react` and create scroll-triggered timelines. The plugin is registered once in `page.tsx`.
- **Motion (Framer Motion)**: Used in animation primitives like `CountUp` for spring physics.
- **SVG path animations**: Stroke-dasharray/dashoffset for draw-on effects (e.g., LogoShowcase).
- **Floating physics**: Sine-wave-based floating in ToolsCloud with hexagonal packing algorithm.
- **CSS animations**: Defined in `_animations.scss` for simpler transitions.
- **Lottie**: `@lottiefiles/react-lottie-player` for pre-built animations.

## Data
- **Firebase**: Firestore + Storage initialized in `src/lib/firebase.ts` using `NEXT_PUBLIC_FIREBASE_*` env vars from `.env`.
  - `src/services/slides.ts` reads the `logo_slides` collection, falling back to local `assets/logos_photos/` paths.
- **EmailJS**: Contact form in `src/app/components/contact-me.tsx` uses `@emailjs/browser` with hardcoded `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` constants.
- **Static data**: Most section content (projects, tools, process steps, testimonials) is defined as arrays/objects directly in component files.

## Client vs Server components
- `page.tsx` and all interactive components use `"use client"`.
- `layout.tsx` is a server component (handles metadata, global styles).
- Rule: any component using GSAP, Motion, EmailJS, DOM APIs, or React hooks must be a client component.

# Assets

- **SVG icons**: `src/app/assets/icons/` — social icons, UI icons, and `tools/` subfolder with 28 tech stack icons (Figma, React, TypeScript, Node.js, etc.).
- **SVG-as-components**: `@svgr/webpack` is configured in `next.config.js` — import any `.svg` directly as a React component.
- **Logo**: `src/app/assets/icons/logo-word.svg` — animated brand mark.
- **Images**: `public/assets/` — profile photos (`me.png`, `me-v2.png` `me-v3.png`, `my_avatar.png`), `frontend_projects/` (9 project screenshots), `my_illustrations/`, `my_image_sequence/`.

# Build / dev / deploy

| Command | Action |
|---------|--------|
| `npm run dev` | `rm -rf .next && next dev` — clean dev server |
| `npm run build` | `next build` |
| `npm run start` | `next start` |
| `npm run lint` | `next lint` (ESLint) |
| `npm run deploy` | `predeploy` → `npm run build`, then `gh-pages -d build` |

**Note**: The deploy script expects a `build/` directory. If Next.js outputs to `out/` (static export) or `.next/`, the deploy script may need adjustment.

# Project conventions

- **Import alias**: Always use `@/` for paths under `src/`. Example: `@/lib/utils`, `@/app/components/...`.
- **New styles**: Add SCSS partials to `src/app/styles/` (prefixed with `_`), then add the `@import` to `app.scss`. Do not create component-scoped CSS files.
- **New components**: Place in `src/app/components/`. For major page sections, use `src/app/components/portfolio-sections/`.
- **New animation primitives**: Place in `src/app/animations/` following the existing pattern (folder with `index.tsx`).
- **SVG assets**: Tool/tech icons go in `src/app/assets/icons/tools/`. Other icons go in `src/app/assets/icons/`.
- **Public assets**: Place under `public/assets/` and reference as `assets/...` (no leading slash). Mirror existing subfolder structure (`backgrounds/`, `frontend_projects/`, etc.).
- **Direct DOM usage**: Some components use `document.getElementById()` and manual class toggling (e.g., dynamic-island in header). Match the existing approach unless refactoring broadly.
- **Component communication**: Custom DOM events (`dispatchEvent`) are used for cross-component triggers (e.g., opening the contact menu from the BentoBox CTA).

# Where to change integration keys

- **Firebase**: `src/lib/firebase.ts` reads `NEXT_PUBLIC_FIREBASE_*` from `.env`. Do NOT hardcode private keys.
- **EmailJS**: `src/app/components/contact-me.tsx` contains `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` constants.

# Key file pointers

| File | What it does |
|------|-------------|
| `src/app/layout.tsx` | Root layout — global styles, MUI cache provider, metadata, external scripts |
| `src/app/page.tsx` | Home page — composes all sections, registers GSAP plugins |
| `src/app/styles/app.scss` | Central stylesheet — imports Tailwind + all SCSS partials |
| `src/lib/utils.ts` | `cn()` helper (clsx + tailwind-merge) |
| `src/lib/firebase.ts` | Firebase initialization |
| `src/fonts/fonts.ts` | Local font definitions (ClashDisplay, Satoshi, GeneralSans) |
| `src/services/slides.ts` | Firestore query for logo slides |
| `src/app/components/contact-me.tsx` | EmailJS contact form |
| `src/app/components/glass-bar/GlassSurface.tsx` | SVG-based glassmorphism effect |
| `src/app/components/header/header_v1.tsx` | Dynamic island header with liquid glass |
| `components.json` | shadcn/ui configuration (new-york style, Lucide icons, ReactBits registry) |

# Editing guidance for AI agents

- **Minimize invasive changes**: The codebase mixes GSAP, Motion, direct DOM manipulation, and React state. Prefer localized patches.
- **Respect `"use client"` boundaries**: Client-only libraries must stay inside client components.
- **Follow the styling hierarchy**: SCSS partials for component styles, Tailwind utilities for quick layout/spacing, MUI/shadcn for pre-built UI elements.
- **When adding sections**: Follow the pattern in `portfolio-sections/` — create the component, add a SCSS partial, import it in `app.scss`, and add the component to `page.tsx`.
- **GSAP animations**: Use the `useGSAP` hook (not raw `useEffect`). ScrollTrigger is already registered globally. Clean up animations in the hook's cleanup function.
- **No test suite**: Verify changes manually with `npm run dev` and browser inspection.
- **Deployment**: If modifying the build pipeline, ensure the output directory matches what `gh-pages -d build` expects.
