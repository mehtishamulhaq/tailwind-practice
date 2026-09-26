// Exercise 14 — Navbar
// TODO:
// - Lay out the logo and links horizontally
// - Push the logo and links apart, and space the links from each other
// - Give the navbar padding and a background
// - Make it responsive: stack (or hide) the links on mobile, show them in a row from md up
// Bonus: style the active link differently and add hover styles.

const links = ['Home', 'About', 'Blog', 'Contact']

export default function NavbarExercise() {
  return (
    <nav className="">
      <a href="#" className="">
        MySite
      </a>

      <ul className="">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button className="">Sign in</button>
    </nav>
  )
}
