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

## Photography

Hero and interior imagery in `public/images/` are official Xpeng product
renders (sourced from xpeng.com), used here for a personal, non-commercial fan
site with credit given in the footer and hero caption. Xpeng's site carries a
blanket "COPYRIGHT@XPENG INC." notice — no explicit third-party reuse license
was found — so this follows common fan-site norms (attribution + non-commercial
+ "not affiliated" disclaimer) rather than a granted license. Swap or remove
images in `src/content/car.ts` (`car.images`) if that risk tolerance changes.

## Local development

```bash
npm install
npm run dev
```
