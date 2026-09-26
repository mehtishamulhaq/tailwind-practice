// Exercise 15 — Dark Mode
// TODO:
// - Add a light background and a dark: background to the wrapper
// - Add light text and dark: text
// - Make the inner card, the muted text and the button look good in both modes
// The toggle button already adds/removes the `dark` class on the wrapper.
// (See src/index.css: `dark:` classes are tied to that `.dark` class.)

import { useState } from 'react'

export default function DarkModeExercise() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="">
        <button className="" onClick={() => setDark(!dark)}>
          Switch to {dark ? 'light' : 'dark'} mode
        </button>

        <h2 className="">Dark mode practice</h2>
        <p className="">This text should be readable in both light and dark mode.</p>

        <div className="">
          <h3 className="">Inner card</h3>
          <p className="">Muted text: use a softer color in each mode.</p>
          <button className="">Action</button>
        </div>
      </div>
    </div>
  )
}
