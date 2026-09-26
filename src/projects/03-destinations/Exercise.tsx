// Project 03 — Travel Grid
// TODO: build the responsive destination grid shown in the "Target" view.
// Hover a card in the target to see the effects you need to recreate. See README.md.

import { Heart, MapPin, Star } from '../icons'
import { destinations, filters } from './data'

export default function DestinationsExercise() {
  return (
    <div className="">
      <header className="">
        <div>
          <p className="">Explore</p>
          <h1 className="">Where to next?</h1>
          <p className="">Hand-picked trips to the most breathtaking places on earth.</p>
        </div>

        <div className="">
          {filters.map((filter) => (
            /* The first filter is the active one — add the index to .map((filter, i) => …) to detect it */
            <button
              key={filter}
              className=""
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      <div className="">
        {destinations.map((place) => (
          <article
            key={place.name}
            className=""
          >
            <div className="">
              <img
                src={place.image}
                alt={place.name}
                className=""
              />
              {/* Dark gradient overlay so the white text stays readable */}
              <div className="" />

              {place.badge && (
                <span className="">
                  {place.badge}
                </span>
              )}
              <button className="">
                <Heart className="" />
              </button>

              <div className="">
                <h2 className="">{place.name}</h2>
                <p className="">
                  <MapPin className="" />
                  {place.country}
                </p>
              </div>
            </div>

            <div className="">
              <div>
                <p className="">
                  <Star filled className="" />
                  <span className="">{place.rating}</span>
                  <span className="">({place.reviews})</span>
                </p>
                <p className="">{place.nights} nights · flights included</p>
              </div>
              <p className="">
                {place.price}
                <span className="">/person</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
