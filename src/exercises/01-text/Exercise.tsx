// Exercise 01 — Text
// TODO:
// - Make the heading large
// - Make it bold
// - Center the text
// - Change the text color
// Bonus: make the paragraph smaller and a lighter gray, and give it more line height.

export default function TextExercise() {
  return (
    <div className="">
      <h1 className="">Hello Tailwind</h1>

      <p className="">
        Tailwind is a utility-first CSS framework. Instead of writing custom
        CSS, you combine small single-purpose classes directly in your markup.
      </p>

      <p className="">
        <ul role="list">
          this word should be
          <li className="italic">italic</li>
          this word should be
          <li className="underline">underlined</li>
          and this one should be
          <li className="uppercase">
            UPPERCASE using a class (not by typing capitals).
          </li>
        </ul>
      </p>
    </div>
  );
}
