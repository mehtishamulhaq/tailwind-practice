// Exercise 09 — Responsive Design
// TODO:
// - One column on mobile
// - Three columns from the medium (md) breakpoint up
// - Change the heading size between mobile and larger screens
// Bonus: hide the "Desktop only" note on mobile, show it from md up.
// Resize your browser window (or use dev tools device mode) to test.

const features = [
  { title: 'Fast', text: 'Utility classes keep your CSS small.' },
  { title: 'Flexible', text: 'Build any design without leaving your markup.' },
  { title: 'Responsive', text: 'Prefix any class with a breakpoint.' },
]

export default function ResponsiveExercise() {
  return (
    <div className="">
      <h2 className="">Responsive features</h2>

      <p className="">Desktop only: you are on a medium or larger screen.</p>

      <div className="">
        {features.map((feature) => (
          <div key={feature.title} className="">
            <h3 className="">{feature.title}</h3>
            <p className="">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
