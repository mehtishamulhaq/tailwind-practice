import { Heart, Star } from '../projects/icons'
import { testimonials } from '../projects/04-testimonials/data'

export default function TestimonialsTarget() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-6 py-24 text-white">
      <div className="absolute top-0 left-1/2 -z-10 h-96 w-3xl -translate-x-1/2 rounded-full bg-indigo-600/25 blur-3xl" />

      <header className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-indigo-300">
          <Heart filled className="size-3.5 text-rose-400" />
          Wall of love
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Loved by builders everywhere
        </h1>
        <p className="mt-4 text-lg text-slate-400">Don't take our word for it — here's what our customers say.</p>

        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-400">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} filled className="size-5" />
            ))}
          </div>
          <span>
            <strong className="font-semibold text-white">4.9/5</strong> from 2,400+ reviews
          </span>
        </div>
      </header>

      <div className="mx-auto mt-16 max-w-6xl columns-1 gap-6 sm:columns-2 lg:columns-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className={`mb-6 break-inside-avoid rounded-2xl border p-6 transition ${
              t.featured
                ? 'border-indigo-400/30 bg-linear-to-br from-indigo-500/20 to-fuchsia-500/10'
                : 'border-white/10 bg-white/5 hover:border-indigo-400/40 hover:bg-white/10'
            }`}
          >
            <div className="flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} filled className="size-4" />
              ))}
            </div>
            <blockquote className={`mt-4 leading-relaxed ${t.featured ? 'text-lg text-white' : 'text-slate-300'}`}>
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img src={t.avatar} alt="" className="size-10 rounded-full object-cover ring-2 ring-white/10" />
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
