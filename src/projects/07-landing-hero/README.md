# 07 — Landing Page

## Goal
A dark SaaS landing page: nav, gradient headline, CTAs, a fake app screenshot and a logo cloud.

## Concepts
- Layered background decoration (blobs + grid pattern), all behind content with `isolate` / `-z-10`
- Arbitrary values: `bg-[linear-gradient(...)]`, `bg-size-[4rem_4rem]`, `[mask-image:...]`
- Gradient text: `bg-linear-to-r … bg-clip-text text-transparent`
- Responsive nav (links hidden below `md`)
- Stacked avatars with `-space-x-2` + `ring-*`
- Building a "browser window" mockup out of divs
- Lookup objects for variant styles (`New` / `Improved` / `Fixed`)

## Requirements
- [ ] Dark page with two big blurred colour blobs and a faint grid that fades out
- [ ] Nav: logo left, links center (hidden on mobile), sign-in + white pill button right
- [ ] Announcement pill with a "New" chip and an arrow
- [ ] Huge headline (smaller on mobile) where "actually read" is gradient text
- [ ] Two CTAs: gradient pill with a glow, outlined pill with a play icon; stacked on mobile
- [ ] Overlapping avatar stack + "Loved by 12,000+ product teams"
- [ ] App window: traffic-light dots, URL pill, sidebar (hidden on mobile) and changelog cards
- [ ] Changelog badges coloured by kind
- [ ] Soft gradient glow around the app window
- [ ] Logo cloud row with a top border; logos brighten on hover

## Hints
- Make a `Record<EntryKind, string>` that maps each kind to its badge classes and use `kindStyles[entry.kind]`.
- Tailwind can't see class names built from strings at runtime (`bg-${color}-500`). Write every class out in full.
