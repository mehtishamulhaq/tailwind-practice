# 14 — Navbar

## Goal
Build a simple responsive navigation bar.

## Concepts
- Flex layout for the bar and the link list
- Justify / align items
- Gap
- Responsive prefixes
- Hover styles

## Requirements
- [ ] Lay out logo, links and button horizontally, vertically centered
- [ ] Put space between the logo, links and button
- [ ] Space the links evenly from each other
- [ ] Give the navbar padding, a background and a border or shadow
- [ ] Responsive: on mobile, stack or hide the links; from `md` up, show them in a row
- [ ] Bonus: hover styles on links
- [ ] Bonus: make "Home" look like the active link

## What to remember
- A navbar is usually two levels of flex: the bar itself, and the list of links.
- `<ul>` loses its bullets and padding after Preflight, so it's ready for layout.
- Mobile-first: design the small-screen version, then add `md:` overrides.
- A display utility with a breakpoint (hidden → shown at `md`) is the simplest way to hide links on mobile.
