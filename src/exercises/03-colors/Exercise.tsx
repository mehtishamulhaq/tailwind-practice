// Exercise 03 — Colors
// TODO:
// - Give the first box a background color
// - Change the text color inside it
// - Create a second box with a different background + text color
// Bonus: make the third box's background semi-transparent (opacity modifier).

export default function ColorsExercise() {
  return (
    <div className="">
      <div className="">
        <h3 className="">Box one</h3>
        <p className="">Give me a background color and a readable text color.</p>
      </div>

      <div className="">
        <h3 className="">Box two</h3>
        <p className="">I should look clearly different from box one.</p>
      </div>

      <div className="">
        <h3 className="">Box three (bonus)</h3>
        <p className="">Try a background color at 50% opacity.</p>
      </div>
    </div>
  )
}
