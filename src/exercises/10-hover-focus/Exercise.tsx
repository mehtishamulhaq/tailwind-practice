// Exercise 10 — Hover & Focus
// TODO:
// - Change the button color on hover
// - Add a visible focus state (Tab to the button with your keyboard to test)
// - Make the third button look disabled (and not react to hover)
// Bonus: style the link on hover, and add a transition to the first button.

export default function HoverFocusExercise() {
  return (
    <div className="">
      <button className="">Hover me</button>

      <button className="">Tab to me (focus)</button>

      <button className="" disabled>
        I am disabled
      </button>

      <p className="">
        Bonus: this is a <a href="#" className="">link that changes on hover</a>.
      </p>
    </div>
  )
}
