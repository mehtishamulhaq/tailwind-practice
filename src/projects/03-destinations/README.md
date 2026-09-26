# 03 — Travel Grid

## Goal
A grid of travel destination cards with photo overlays and polished hover effects.

## Concepts
- Responsive grid: 1 → 2 → 3 columns
- `aspect-4/3` for consistent image boxes
- Stacking layers with `relative` / `absolute inset-0`
- Gradient overlays (`bg-linear-to-t from-black/70`)
- `group` / `group-hover:` so hovering the card zooms the image
- `backdrop-blur` for frosted buttons over photos
- `transition`, `duration-*`, `hover:-translate-y-1`

## Requirements
- [ ] Header: title block on the left, filter pills on the right (stacked on mobile)
- [ ] First filter pill dark/active, others white with a ring
- [ ] Cards: rounded, white, subtle ring and shadow
- [ ] Image fills a 4:3 box; zooms slowly when you hover the **card**
- [ ] Dark gradient from the bottom so the name and country are readable over the photo
- [ ] Optional badge top-left, frosted heart button top-right (turns white/red on hover)
- [ ] Footer row: star rating and nights on the left, big price on the right
- [ ] Whole card lifts and its shadow grows on hover

## Hints
- The zoom only stays inside the rounded box if the image wrapper has `overflow-hidden`.
- Ternary for the active filter: `i === 0 ? 'bg-stone-900 text-white' : '…'`.
