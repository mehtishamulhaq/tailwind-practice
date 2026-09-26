// Exercise 08 — Grid
// TODO:
// - Turn the container into a 3-column grid
// - Add gaps between the items
// Bonus: make the "Wide" item span 2 columns.

const items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

export default function GridExercise() {
  return (
    <div className="">
      <h2 className="">3-column grid</h2>
      <div className="">
        {items.map((item) => (
          <div key={item} className="">
            {item}
          </div>
        ))}
      </div>

      <h2 className="">Bonus: spanning columns</h2>
      <div className="">
        <div className="">Wide</div>
        <div className="">Normal</div>
        <div className="">Normal</div>
        <div className="">Normal</div>
        <div className="">Normal</div>
      </div>
    </div>
  )
}
