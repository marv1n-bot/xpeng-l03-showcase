# Xpeng L03 Showcase

Personal showcase site for an Xpeng L03 AWD Performance Ultra (Phantom Purple / Light Gray).

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Adding facts

All car content lives in `src/content/car.ts` — a single typed object. To add
new specs:

- Add a `Fact` to an existing section's `facts` array, or
- Add a new `Section` to the `sections` array

The page re-renders automatically; no other files need to change.

## Adding real photography

The hero currently uses a gradient placeholder (`src/components/Hero.tsx`) since
no product photography is wired in yet. Drop images into `public/images/` and
swap the gradient div for a `next/image` render once available.

## Local development

```bash
npm install
npm run dev
```
