# 11 — Positioning

## Goal
Place elements precisely using relative and absolute positioning.

## Concepts
- `relative` / `absolute` / `fixed` / `sticky`
- `top`, `right`, `bottom`, `left` (and `inset`)
- Z-index

## Requirements
- [ ] Make the box a relative container with a visible size and background
- [ ] Put the "NEW" badge in the top-right corner
- [ ] Put the other three labels in their matching corners
- [ ] Put the "3" counter on the top-right of the bell (a notification badge)
- [ ] Bonus: keep the last banner fixed to the bottom of the screen

## What to remember
- An absolute element is positioned relative to its nearest **positioned** ancestor.
- Forgetting `relative` on the parent sends absolute children to the page corner.
- Offsets can be negative (prefix with `-`) to hang a badge outside the box.
- Fixed = relative to the viewport; sticky = normal until you scroll past it.
