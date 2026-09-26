// Exercise 07 — Flex Alignment
// TODO:
// - Center the item vertically inside the tall box
// - Center the item horizontally inside the tall box
// - Make one group a row and another group a column
// Tip: give the tall box a height and background so you can see the centering.

export default function FlexAlignmentExercise() {
  return (
    <div className="">
      <h2 className="">Perfectly centered</h2>
      <div className="">
        <div className="">Center me</div>
      </div>

      <h2 className="">Row</h2>
      <div className="">
        <div className="">1</div>
        <div className="">2</div>
        <div className="">3</div>
      </div>

      <h2 className="">Column</h2>
      <div className="">
        <div className="">1</div>
        <div className="">2</div>
        <div className="">3</div>
      </div>

      <h2 className="">Row with items of different heights, aligned to the bottom</h2>
      <div className="">
        <div className="">Short</div>
        <div className="">
          Taller
          <br />
          item
        </div>
        <div className="">
          The
          <br />
          tallest
          <br />
          item
        </div>
      </div>
    </div>
  )
}
