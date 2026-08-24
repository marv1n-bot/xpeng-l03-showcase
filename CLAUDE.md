# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal single-page showcase site for a Niels's Xpeng L03 AWD Performance Ultra (Phantom Purple / Light Gray). Fan site, not affiliated with Xpeng. Built by an autonomous agent (`mr-vibecoder[bot]`), deployed on Vercel, meant to be continued by Claude Code and/or opencode.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (also the type-check gate — no separate `tsc`/test script exists)
npm run lint      # eslint . (next/core-web-vitals + next/typescript configs)
```

There is no test suite. Treat `npm run build` as the correctness check after content or component changes, and `npm run lint` before committing.

## Architecture

Next.js 15 App Router, single route (`/`), no server-side data fetching — everything renders from one static content module.

- **`src/content/car.ts`** is the single source of truth for all car facts (specs, colors, hero stats). It's a plain typed object (`Fact`, `Section`, `ColorOption`), not fetched from anywhere. To add content: push a `Fact` into an existing section's `facts` array, or add a new `Section` to `sections` — the page renders both automatically via `page.tsx`'s `.map()` over `car.sections`. No component changes needed for new facts/sections.
- **`src/app/page.tsx`** composes the whole page top-to-bottom: `Hero` → `ColorSwatches` → one `SpecSection` per entry in `car.sections` → `SiteFooter`. All four components are dumb renderers that take slices of `car` as props — they have no knowledge of specific facts, only of the `Fact`/`Section`/`ColorOption` shapes.
- **Styling**: Tailwind v4 via the CSS-first `@theme` block in `src/app/globals.css` (not a `tailwind.config.*` file — v4 has none here). Custom design tokens live there: `--color-phantom`, `--color-phantom-light`, `--color-phantom-dark`, `--color-cloud-gray`, `--color-ink`, plus `--font-display` (Space Grotesk) / `--font-body` (Inter), both loaded via `next/font/google` in `src/app/layout.tsx`.
- **Path alias**: `@/*` → `src/*` (see `tsconfig.json`).

## Known state / gotchas

- `src/app/layout.tsx` metadata (title/description) and the README both hardcode car specs that also live in `car.ts`; keep them in sync by hand if specs change (they aren't derived from `car.ts`).
- Product photography lives in `public/images/` (`xpeng-l03-exterior-phantom-purple.png`, `xpeng-l03-interior-light-gray.jpg`), rendered via `next/image` in `Hero` and `ColorSwatches`.
