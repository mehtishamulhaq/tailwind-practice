// Exercise 11 — Positioning
// TODO:
// - Make the box a relative container (and give it a size + background)
// - Position the "NEW" badge absolutely in the top-right corner
// - Position the other labels in the other corners using top/right/bottom/left
// - Put the "3" counter on the top-right corner of the bell
// Bonus: make the banner at the bottom stick to the bottom of the viewport (fixed or sticky).

export default function PositioningExercise() {
  return (
    <div className="">
      <div className="">
        <span className="">NEW</span>
        <span className="">top-left</span>
        <span className="">bottom-left</span>
        <span className="">bottom-right</span>

        <p className="">I am the content of a relative container.</p>
      </div>

      <div className="">
        <span className="">🔔</span>
        <span className="">3</span>
      </div>

      <div className="">Bonus: I stay at the bottom of the screen.</div>
    </div>
  )
}
