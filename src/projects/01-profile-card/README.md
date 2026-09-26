# 01 — Profile Card

## Goal
A creator profile card: cover photo, avatar overlapping the cover, stats row and action buttons.

## Concepts
- Centering a card on the page (`grid` + `place-items-center`)
- `overflow-hidden` so rounded corners clip the cover image
- Negative margin to pull the avatar up over the cover
- `ring-*` for the white border around the avatar
- `relative` / `absolute` for the online dot
- `divide-x` for the stats separators
- `aspect-square` + `object-cover` for thumbnails

## Requirements
- [ ] Soft gradient page background, card centered, max width about `sm`
- [ ] Card: white, large rounded corners, soft shadow
- [ ] Cover image with a fixed height, cropped (not stretched)
- [ ] Avatar is a circle with a white ring, pulled up so it overlaps the cover
- [ ] Green online dot pinned to the avatar's bottom-right
- [ ] Name bold with a blue verified badge beside it; handle and location small and muted
- [ ] Tags as small grey pills
- [ ] Stats in 3 equal columns with dividers between them, number above label
- [ ] Two equal-width buttons: dark "Follow" and outlined "Message", both with hover states
- [ ] Three square photo thumbnails in a row

## Hints
- The `<dl>` puts `dt` (label) first in the markup, but the number shows first. Look up `flex-col-reverse`.
- Icons are SVGs that use `currentColor`, so `text-sky-500` colors them and `size-5` sizes them.
