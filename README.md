# Tailwind Playground

A personal practice playground for learning Tailwind CSS (v4) with React + TypeScript + Vite.

```bash
npm install
npm run dev
```

Each folder in `src/exercises/` has an `Exercise.tsx` (unstyled JSX with empty `className=""` attributes) and a `README.md` (goal, concepts, requirements, what to remember). Pick an exercise in the browser, read its README, and fill in the classes.

## Projects

The **Projects** tab has bigger, real-looking UIs to build: a profile card, pricing table, travel grid, testimonial wall, glass login, music player, landing page and dashboard.

- `src/projects/<name>/Exercise.tsx`: plain markup with the content already in place. This is the file you style.
- `src/projects/<name>/README.md`: the brief, the concepts involved and a checklist.
- `src/projects/<name>/data.ts`: text, images and numbers, shared with the finished version.
- `src/_targets/<name>.tsx`: the finished version. `.vscode/settings.json` hides this folder from the explorer and search, so you don't see the answer by accident.

In the app, switch between **Mine**, **Target**, **Side by side** and **Overlay** (the target on top of yours with an opacity slider). Use **Mobile / Tablet / Desktop** to check the responsive layout. Each preview runs in its own iframe (`frame.html`), so `sm:` / `md:` / `lg:` react to the preview's width, not the browser window's.

To peek at a target anyway, open `src/_targets/` directly or remove the exclude in `.vscode/settings.json`.
