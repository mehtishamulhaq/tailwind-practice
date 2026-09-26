# 02 — Pricing Table

## Goal
A classic three-tier pricing section where the middle "Pro" plan stands out.

## Concepts
- Centered section header with `text-balance`
- Segmented toggle (pill container with an "active" pill inside)
- Responsive grid: stacked on mobile, 3 columns on `lg`
- Conditional classes in React: `className={plan.featured ? '…' : '…'}`
- `scale-*` to lift the featured card, `ring-*` for its outline
- Absolute badge centered on the top edge (`left-1/2 -translate-x-1/2`)
- Gradients: `bg-linear-to-r from-… to-…`
- `items-baseline` to line up "$29" and "/month"

## Requirements
- [ ] Header centered: small indigo eyebrow, large bold title, muted subtitle
- [ ] Monthly/Yearly toggle with a "-20%" green pill
- [ ] Cards stack on mobile, sit in 3 columns on large screens
- [ ] Normal cards: white with a thin ring
- [ ] Featured card: dark background, indigo ring, coloured shadow, slightly larger on `lg`
- [ ] "Most popular" gradient badge sitting across the featured card's top edge
- [ ] Big price with a small "/month" next to it
- [ ] Full-width CTA buttons, a different style on the featured card
- [ ] Feature list with indigo check icons that don't shrink (`flex-none`)

## Hints
- Put `relative` on each card so the badge positions against it.
- Muted text colors differ on the dark card (`text-slate-300`) and the light cards (`text-slate-600`).
