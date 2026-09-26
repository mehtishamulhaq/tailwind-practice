# 10 — Hover & Focus

## Goal
Style interactive states of buttons and links.

## Concepts
- `hover:` variant
- `focus:` / `focus-visible:` variants
- Focus rings / outlines
- `disabled:` variant and cursor
- Transitions

## Requirements
- [ ] Give the first button a base color and change it on hover
- [ ] Add a clearly visible focus state (test with the Tab key)
- [ ] Make the disabled button look disabled and not react on hover
- [ ] Bonus: style the link on hover
- [ ] Bonus: smooth the hover color change with a transition

## What to remember
- State variants are prefixes: `state:utility`. Any utility can be prefixed.
- Buttons have no default style after Preflight — give them padding and a background first.
- `focus-visible` shows focus for keyboard users without showing it on every mouse click.
- Never remove focus styles without replacing them — keyboard users rely on them.
- The `disabled:` variant only applies when the element has the `disabled` attribute.
