# 06 — Music Player

## Goal
A moody now-playing screen: blurred album-art background, glass panels, progress bar and a track queue.

## Concepts
- Blurred image as ambient background (`blur-3xl`, `scale-125`, `opacity-*`)
- Two-column layout on `lg` (`lg:grid-cols-2`)
- Custom progress bar built from divs (track, fill, knob)
- Coloured shadows: `shadow-fuchsia-500/30`
- `truncate` + `min-w-0` for long titles in flex rows
- `tabular-nums` so times don't jiggle
- `animate-pulse` and arbitrary properties (`[animation-delay:150ms]`)

## Requirements
- [ ] Dark page with the album art blurred behind everything, fading to black at the bottom
- [ ] Two glass panels side by side on large screens, stacked on small
- [ ] Square album art with rounded corners and a fuchsia glow
- [ ] Title and artist on the left, pink heart on the right
- [ ] Progress bar: thin track, gradient fill at 40%, white knob with a soft ring
- [ ] Times under the bar at both ends
- [ ] Controls spread evenly; big white round play/pause button in the middle
- [ ] Volume row with a thin bar
- [ ] Queue rows: number, cover, title/artist (truncated), duration on the right
- [ ] Active track highlighted, pink title, animated equalizer bars instead of its number

## Hints
- The knob is `absolute` at `left-2/5` and shifted back by half its size with `-translate-1/2`.
