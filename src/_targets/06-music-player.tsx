import { Heart, More, Pause, Repeat, Shuffle, SkipBack, SkipForward, Volume } from '../projects/icons'
import { nowPlaying, queue } from '../projects/06-music-player/data'

export default function MusicPlayerTarget() {
  return (
    <div className="relative isolate grid min-h-screen place-items-center overflow-hidden bg-zinc-950 p-6 text-white lg:p-12">
      <img src={nowPlaying.art} alt="" className="absolute inset-0 -z-10 size-full scale-125 object-cover opacity-40 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-zinc-950/30 to-zinc-950" />

      <div className="grid w-full max-w-5xl items-start gap-6 lg:grid-cols-2">
        <section className="rounded-4xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-2xl sm:p-8">
          <div className="flex items-center justify-between text-xs tracking-widest text-white/50 uppercase">
            <span>Now playing</span>
            <button className="hover:text-white">
              <More className="size-5" />
            </button>
          </div>

          <img
            src={nowPlaying.art}
            alt=""
            className="mt-6 aspect-square w-full rounded-3xl object-cover shadow-2xl shadow-fuchsia-500/30"
          />

          <div className="mt-8 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">{nowPlaying.title}</h1>
              <p className="mt-1 text-white/60">{nowPlaying.artist}</p>
            </div>
            <button className="text-fuchsia-400 transition hover:scale-110">
              <Heart filled className="size-6" />
            </button>
          </div>

          <div className="mt-6">
            <div className="relative h-1.5 rounded-full bg-white/10">
              <div className="absolute inset-y-0 left-0 w-2/5 rounded-full bg-linear-to-r from-fuchsia-500 to-violet-500" />
              <div className="absolute top-1/2 left-2/5 size-4 -translate-1/2 rounded-full bg-white shadow ring-4 ring-fuchsia-500/30" />
            </div>
            <div className="mt-2 flex justify-between text-xs text-white/50 tabular-nums">
              <span>{nowPlaying.elapsed}</span>
              <span>{nowPlaying.duration}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button className="text-white/50 transition hover:text-white">
              <Shuffle className="size-5" />
            </button>
            <button className="transition hover:text-fuchsia-300">
              <SkipBack filled className="size-7" />
            </button>
            <button className="grid size-16 place-items-center rounded-full bg-white text-zinc-950 shadow-lg shadow-white/20 transition hover:scale-105">
              <Pause filled className="size-7" />
            </button>
            <button className="transition hover:text-fuchsia-300">
              <SkipForward filled className="size-7" />
            </button>
            <button className="text-fuchsia-400">
              <Repeat className="size-5" />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3 text-white/50">
            <Volume className="size-4" />
            <div className="h-1 flex-1 rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-white/60" />
            </div>
          </div>
        </section>

        <section className="rounded-4xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-2xl sm:p-8">
          <div className="flex items-baseline justify-between">
            <h2 className="text-lg font-semibold">Up next</h2>
            <span className="text-sm text-white/50">12 tracks · 48 min</span>
          </div>

          <ol className="mt-6 space-y-1">
            {queue.map((track, i) => (
              <li
                key={track.title}
                className={`flex items-center gap-4 rounded-2xl p-2 pr-4 transition ${
                  track.active ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <span className="w-5 text-center text-sm text-white/40 tabular-nums">
                  {track.active ? (
                    <span className="flex h-4 items-end justify-center gap-0.5">
                      <span className="h-2 w-0.5 animate-pulse rounded-full bg-fuchsia-400" />
                      <span className="h-4 w-0.5 animate-pulse rounded-full bg-fuchsia-400 [animation-delay:150ms]" />
                      <span className="h-3 w-0.5 animate-pulse rounded-full bg-fuchsia-400 [animation-delay:300ms]" />
                    </span>
                  ) : (
                    i + 1
                  )}
                </span>
                <img src={track.art} alt="" className="size-12 rounded-xl object-cover" />
                <div className="min-w-0 flex-1">
                  <p className={`truncate font-medium ${track.active ? 'text-fuchsia-300' : ''}`}>{track.title}</p>
                  <p className="truncate text-sm text-white/50">{track.artist}</p>
                </div>
                <span className="text-sm text-white/40 tabular-nums">{track.duration}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}
