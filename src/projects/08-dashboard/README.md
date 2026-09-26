# 08 — Dashboard

## Goal
An admin dashboard: sidebar, sticky top bar, stat tiles, a bar chart, progress bars and a data table.

## Concepts
- App shell: `flex min-h-screen` with a fixed-width sidebar and a `flex-1 min-w-0` main area
- `sticky top-0` sidebar (`h-screen`) and top bar (`backdrop-blur`)
- Responsive grids (`sm:grid-cols-2 xl:grid-cols-4`, `xl:col-span-2`)
- Bar chart from divs: `flex items-end` + heights from data (inline `style`)
- Hover tooltips with `group` + `opacity-0 group-hover:opacity-100`
- Table styling: `divide-y`, header background, row hover, `overflow-x-auto`
- Status badges using `bg-current` for the dot

## Requirements
- [ ] Sidebar (desktop only): logo, nav with active item and count badge, "Go Pro" gradient card, user row at the bottom
- [ ] Top bar: search with icon, notification bell with a red dot, avatar
- [ ] Page heading with two buttons on the right (they wrap below on small screens)
- [ ] 4 stat tiles: label, tinted icon, big value, green/red trend chip
- [ ] Revenue chart: grey (last year) and indigo (this year) bars per month, tooltip on hover, legend
- [ ] Traffic sources: label + value, coloured progress bar underneath
- [ ] Recent orders table: avatar + name/email, mono order id, status badge, right-aligned amount
- [ ] Table scrolls horizontally on small screens instead of squashing

## Hints
- `min-w-0` on the main column stops wide content (the table) from pushing the layout wider than the screen.
- Map `tone` and `status` to classes with lookup objects, as in project 07.
