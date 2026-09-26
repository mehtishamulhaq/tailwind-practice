# 09 — Responsive Design

## Goal
Change the layout depending on screen width.

## Concepts
- Mobile-first design
- Breakpoint prefixes (`sm`, `md`, `lg`, `xl`, `2xl`)
- Responsive grid columns
- Responsive visibility

## Requirements
- [ ] One column on mobile
- [ ] Three columns from the `md` breakpoint up
- [ ] Bigger heading on larger screens
- [ ] Bonus: hide the "Desktop only" note on mobile, show it from `md` up

## What to remember
- Tailwind is **mobile-first**: un-prefixed classes apply to all sizes.
- A breakpoint prefix means "from this width **and up**", not "only on this size".
- So: write the mobile style first, then override it at a larger breakpoint.
- `md` starts at 48rem (768px).
