# 04 — Testimonial Wall

## Goal
A dark "wall of love": testimonials in a masonry layout with a soft glow behind the heading.

## Concepts
- Masonry with CSS columns: `columns-1 sm:columns-2 lg:columns-3`
- `break-inside-avoid` so a card never splits across columns
- Glow blobs: a big rounded div + `blur-3xl` + low opacity
- `isolate` and `-z-10` to keep decoration behind the content
- Translucent surfaces on dark backgrounds: `bg-white/5`, `border-white/10`

## Requirements
- [ ] Very dark page, white text, generous vertical padding
- [ ] Blurred indigo glow near the top center, behind everything
- [ ] Small pill badge with a heart, then big title and muted subtitle
- [ ] Row of 5 amber stars with "4.9/5 from 2,400+ reviews"
- [ ] Masonry: 1/2/3 columns depending on width, cards of different heights packed tightly
- [ ] Cards: translucent, thin border, rounded; border brightens on hover
- [ ] Featured testimonial: subtle indigo-to-fuchsia gradient and larger text
- [ ] Author row: round avatar, name bold, role small and muted

## Hints
- With `columns-*`, space the cards vertically with `mb-6`, not `space-y` or `gap-y`.
