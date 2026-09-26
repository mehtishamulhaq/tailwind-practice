// Exercise 06 — Flexbox
// TODO:
// - Place the three items horizontally (in a row)
// - Add space between them (try both a gap and pushing them apart)
// Bonus: make the middle item grow to fill the remaining space.

export default function FlexExercise() {
  return (
    <div className="">
      <h2 className="">Items in a row</h2>
      <div className="">
        <div className="">Item A</div>
        <div className="">Item B</div>
        <div className="">Item C</div>
      </div>

      <h2 className="">Pushed apart</h2>
      <div className="">
        <span className="">Logo</span>
        <span className="">Menu</span>
      </div>

      <h2 className="">Bonus: middle item grows</h2>
      <div className="">
        <div className="">Left</div>
        <div className="">I take up all remaining space</div>
        <div className="">Right</div>
      </div>
    </div>
  )
}
