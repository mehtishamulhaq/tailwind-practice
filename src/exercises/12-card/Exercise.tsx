// Exercise 12 — Card
// TODO: combine what you have learned to build a simple card.
// - Limit the card's width
// - Give it a background, border or shadow, and rounded corners
// - Add padding inside the card
// - Style the typography (title, meta text, body)
// - Space the elements
// - Put the tags in a row with gaps
// - Style the button

export default function CardExercise() {
  return (
    <div className="">
      <div className="">
        <div className="">Image placeholder</div>

        <div className="">
          <p className="">Tutorial · 5 min read</p>
          <h3 className="">Learning Tailwind CSS</h3>
          <p className="">
            A hands-on guide to building interfaces with utility classes. Practice
            spacing, colors, typography and layout one step at a time.
          </p>

          <div className="">
            <span className="">#css</span>
            <span className="">#tailwind</span>
            <span className="">#frontend</span>
          </div>

          <button className="">Read more</button>
        </div>
      </div>
    </div>
  )
}
