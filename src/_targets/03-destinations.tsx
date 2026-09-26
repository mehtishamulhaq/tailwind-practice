import { Heart, MapPin, Star } from '../projects/icons'
import { destinations, filters } from '../projects/03-destinations/data'

export default function DestinationsTarget() {
  return (
    <div className="min-h-screen bg-stone-50 px-6 py-16">
      <header className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-widest text-orange-600 uppercase">Explore</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-stone-900">Where to next?</h1>
          <p className="mt-2 max-w-md text-stone-600">Hand-picked trips to the most breathtaking places on earth.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                i === 0 ? 'bg-stone-900 text-white' : 'bg-white text-stone-700 ring-1 ring-stone-200 hover:ring-stone-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      <div className="mx-auto mt-10 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((place) => (
          <article
            key={place.name}
            className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                src={place.image}
                alt={place.name}
                className="size-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0" />

              {place.badge && (
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-900 backdrop-blur">
                  {place.badge}
                </span>
              )}
              <button className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md transition hover:bg-white hover:text-rose-500">
                <Heart className="size-5" />
              </button>

              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-semibold">{place.name}</h2>
                <p className="flex items-center gap-1 text-sm text-white/80">
                  <MapPin className="size-4" />
                  {place.country}
                </p>
              </div>
            </div>

            <div className="flex items-end justify-between p-5">
              <div>
                <p className="flex items-center gap-1 text-sm">
                  <Star filled className="size-4 text-amber-400" />
                  <span className="font-semibold text-stone-900">{place.rating}</span>
                  <span className="text-stone-500">({place.reviews})</span>
                </p>
                <p className="mt-1 text-sm text-stone-500">{place.nights} nights · flights included</p>
              </div>
              <p className="text-2xl font-bold text-stone-900">
                {place.price}
                <span className="text-sm font-normal text-stone-500">/person</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
