// Exercise 05 — Width & Height
// TODO:
// - Give the first box a fixed width
// - Make the second box full width
// - Give the third box a fixed height
// - Make the fourth box half the width of its parent
// Tip: add a background color to each box so you can see its size.

export default function WidthHeightExercise() {
  return (
    <div className="">
      <div className="">Fixed width</div>

      <div className="">Full width</div>

      <div className="">Fixed height</div>

      <div className="">Half width</div>

      <div className="">
        Bonus: set a max width on this paragraph so long lines do not stretch
        across the whole screen. Long lines of text are hard to read, so limiting
        the width of a text block is one of the most common layout tricks you will use.
      </div>
    </div>
  )
}
