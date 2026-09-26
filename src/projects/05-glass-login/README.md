# 05 — Glass Login

## Goal
A glassmorphism sign-in card floating over a full-screen photo.

## Concepts
- Full-bleed background image: `absolute inset-0 size-full object-cover`
- Tint overlay: `bg-slate-950/40`
- Frosted glass: `bg-white/10` + `backdrop-blur-xl` + `border-white/20`
- Inputs with a leading icon (absolute icon, left padding on the input)
- `focus:` states: `focus:ring-4`, `focus:border-*`, `outline-none`
- `placeholder:` modifier
- Divider with "or" (flex + two `h-px flex-1` lines)
- `active:scale-*` for press feedback

## Requirements
- [ ] Photo covers the whole screen, darkened slightly; card centered
- [ ] Card: frosted, translucent, rounded, big shadow, white text
- [ ] Logo tile, "Welcome back" title, muted subtitle, all centered
- [ ] Two side-by-side secondary buttons (Passkey, Magic link)
- [ ] "OR" divider with lines on both sides
- [ ] Inputs: translucent, icon inside on the left, clear focus ring
- [ ] "Forgot?" link aligned right on the password label row
- [ ] Solid white "Sign in" button that shrinks slightly when pressed
- [ ] Footer link underlines on hover

## Hints
- Add `pointer-events-none` to the input icons so clicks go through to the input.
- Vertically center an absolute icon with `top-1/2 -translate-y-1/2`.
