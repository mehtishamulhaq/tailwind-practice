// Project 04 — Testimonial Wall
// TODO: build the dark masonry "wall of love" shown in the "Target" view. See README.md.

import { Heart, Star } from '../icons'
import { testimonials } from './data'

export default function TestimonialsExercise() {
  return (
    <div className="">
      {/* Decorative blurred glow behind the heading */}
      <div className="" />

      <header className="">
        <span className="">
          <Heart filled className="" />
          Wall of love
        </span>
        <h1 className="">
          Loved by builders everywhere
        </h1>
        <p className="">Don't take our word for it — here's what our customers say.</p>

        <div className="">
          <div className="">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} filled className="" />
            ))}
          </div>
          <span>
            <strong className="">4.9/5</strong> from 2,400+ reviews
          </span>
        </div>
      </header>

      <div className="">
        {testimonials.map((t) => (
          /* t.featured testimonials get a gradient background and bigger text */
          <figure
            key={t.name}
            className=""
          >
            <div className="">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} filled className="" />
              ))}
            </div>
            <blockquote className="">
              “{t.quote}”
            </blockquote>
            <figcaption className="">
              <img src={t.avatar} alt="" className="" />
              <div>
                <p className="">{t.name}</p>
                <p className="">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
