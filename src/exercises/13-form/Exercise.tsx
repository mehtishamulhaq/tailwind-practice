// Exercise 13 — Form
// TODO:
// - Style the labels
// - Style the inputs (border, padding, rounded, full width)
// - Add spacing between the fields
// - Style the submit button
// - Add focus styles to the inputs
// Bonus: style the checkbox row and the error message.

export default function FormExercise() {
  return (
    <form className="" onSubmit={(e) => e.preventDefault()}>
      <h2 className="">Create an account</h2>

      <div className="">
        <label htmlFor="name" className="">
          Name
        </label>
        <input id="name" type="text" placeholder="Jane Doe" className="" />
      </div>

      <div className="">
        <label htmlFor="email" className="">
          Email
        </label>
        <input id="email" type="email" placeholder="jane@example.com" className="" />
      </div>

      <div className="">
        <label htmlFor="password" className="">
          Password
        </label>
        <input id="password" type="password" placeholder="••••••••" className="" />
        <p className="">Password must be at least 8 characters.</p>
      </div>

      <div className="">
        <input id="terms" type="checkbox" className="" />
        <label htmlFor="terms" className="">
          I agree to the terms
        </label>
      </div>

      <button type="submit" className="">
        Sign up
      </button>
    </form>
  )
}
