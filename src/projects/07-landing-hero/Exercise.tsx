// Project 07 — Landing Page
// TODO: build the SaaS landing page shown in the "Target" view.
// Check it at Mobile, Tablet and Desktop widths. See README.md.

import { ArrowRight, Play, Sparkles } from '../icons'
import { avatars, entries, logos, navLinks, sidebar } from './data'

export default function LandingHeroExercise() {
  return (
    <div className="">
      {/* Background decoration: two blurred color blobs and a faint grid */}
      <div className="" />
      <div className="" />
      <div className="" />

      <nav className="">
        <a href="#" className="">
          <span className="">
            <Sparkles className="" />
          </span>
          Lumen
        </a>
        <ul className="">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="">{link}</a>
            </li>
          ))}
        </ul>
        <div className="">
          <a href="#" className="">Sign in</a>
          <a href="#" className="">
            Get started
          </a>
        </div>
      </nav>

      <header className="">
        <a
          href="#"
          className=""
        >
          <span className="">New</span>
          Lumen 2.0 is here — AI summaries
          <ArrowRight className="" />
        </a>

        <h1 className="">
          Ship product updates your users{' '}
          <span className="">
            actually read
          </span>
        </h1>
        <p className="">
          Lumen turns your changelog into a beautiful, in-app feed. Announce features, collect reactions and
          close the loop with customers — without writing a line of CSS.
        </p>

        <div className="">
          <a
            href="#"
            className=""
          >
            Start for free
          </a>
          <a
            href="#"
            className=""
          >
            <Play filled className="" />
            Watch demo
          </a>
        </div>

        <div className="">
          <div className="">
            {avatars.map((src) => (
              <img key={src} src={src} alt="" className="" />
            ))}
          </div>
          Loved by 12,000+ product teams
        </div>
      </header>

      <section className="">
        <div className="">
          {/* Blurred glow behind the app window */}
          <div className="" />
          <div className="">
            <div className="">
              <span className="" />
              <span className="" />
              <span className="" />
              <span className="">app.lumen.so/changelog</span>
            </div>

            <div className="">
              <ul className="">
                {sidebar.map((item) => (
                  <li
                    key={item}
                    className=""
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="">
                {entries.map((entry) => (
                  <article key={entry.title} className="">
                    <div className="">
                      {/* Color the badge by entry.kind: New, Improved or Fixed */}
                      <span className="">{entry.kind}</span>
                      <span className="">{entry.date}</span>
                    </div>
                    <h3 className="">{entry.title}</h3>
                    <p className="">{entry.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <p className="">Trusted by fast-moving teams at</p>
        <ul className="">
          {logos.map((logo) => (
            <li key={logo} className="">{logo}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
