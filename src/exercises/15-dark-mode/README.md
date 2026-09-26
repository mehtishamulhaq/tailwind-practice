# 15 — Dark Mode

## Goal
Make a section look good in both light and dark mode.

## Concepts
- The `dark:` variant
- Pairing light and dark colors
- Class-based dark mode (`@custom-variant` in `src/index.css`)

## Requirements
- [ ] Give the wrapper a light background and a dark-mode background
- [ ] Give the text a light-mode color and a dark-mode color
- [ ] Style the inner card for both modes
- [ ] Make the muted text softer than the normal text in both modes
- [ ] Style both buttons for both modes
- [ ] Use the toggle button to check your work

## What to remember
- `dark:` is just another variant, like `hover:` — write the light style, then the dark override.
- By default, Tailwind v4 follows the OS setting. This project switches it to a `.dark` class (see `src/index.css`) so the toggle works.
- Every element with a light-mode color usually needs a matching dark-mode color.
- Variants stack: you can combine `dark:` with `hover:` on the same utility.
