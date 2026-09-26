import { ArrowRight, Play, Sparkles } from '../projects/icons'
import { avatars, entries, logos, navLinks, sidebar, type EntryKind } from '../projects/07-landing-hero/data'

const kindStyles: Record<EntryKind, string> = {
  New: 'bg-emerald-500/15 text-emerald-300',
  Improved: 'bg-sky-500/15 text-sky-300',
  Fixed: 'bg-amber-500/15 text-amber-300',
}

export default function LandingHeroTarget() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background decoration */}
      <div className="absolute -top-40 left-1/2 -z-10 size-160 -translate-x-1/2 rounded-full bg-linear-to-tr from-indigo-600 to-fuchsia-500 opacity-30 blur-3xl" />
      <div className="absolute top-1/2 -right-40 -z-10 size-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-indigo-500 to-fuchsia-500">
            <Sparkles className="size-4" />
          </span>
          Lumen
        </a>
        <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="transition hover:text-white">{link}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <a href="#" className="hidden text-sm text-slate-300 hover:text-white sm:block">Sign in</a>
          <a href="#" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
            Get started
          </a>
        </div>
      </nav>

      <header className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pr-3 pl-1 text-sm text-slate-300 backdrop-blur transition hover:border-white/20"
        >
          <span className="rounded-full bg-indigo-500 px-2 py-0.5 text-xs font-semibold text-white">New</span>
          Lumen 2.0 is here — AI summaries
          <ArrowRight className="size-4" />
        </a>

        <h1 className="mt-8 text-5xl font-bold tracking-tight text-balance sm:text-7xl">
          Ship product updates your users{' '}
          <span className="bg-linear-to-r from-indigo-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
            actually read
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Lumen turns your changelog into a beautiful, in-app feed. Announce features, collect reactions and
          close the loop with customers — without writing a line of CSS.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-linear-to-r from-indigo-500 to-fuchsia-500 px-7 py-3.5 font-semibold shadow-lg shadow-fuchsia-500/25 transition hover:-translate-y-0.5 hover:shadow-fuchsia-500/40"
          >
            Start for free
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold text-slate-200 transition hover:bg-white/5"
          >
            <Play filled className="size-4" />
            Watch demo
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-slate-400">
          <div className="flex -space-x-2">
            {avatars.map((src) => (
              <img key={src} src={src} alt="" className="size-8 rounded-full ring-2 ring-slate-950" />
            ))}
          </div>
          Loved by 12,000+ product teams
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-r from-indigo-500/30 to-fuchsia-500/30 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="size-3 rounded-full bg-red-400/80" />
              <span className="size-3 rounded-full bg-amber-400/80" />
              <span className="size-3 rounded-full bg-emerald-400/80" />
              <span className="mx-auto rounded-md bg-white/5 px-4 py-1 text-xs text-slate-400">app.lumen.so/changelog</span>
            </div>

            <div className="grid sm:grid-cols-[200px_1fr]">
              <ul className="hidden space-y-1 border-r border-white/10 p-4 text-sm sm:block">
                {sidebar.map((item) => (
                  <li
                    key={item}
                    className={`rounded-lg px-3 py-2 ${item === 'Changelog' ? 'bg-white/10 text-white' : 'text-slate-400'}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="space-y-4 p-6 text-left">
                {entries.map((entry) => (
                  <article key={entry.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2">
                      <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${kindStyles[entry.kind]}`}>{entry.kind}</span>
                      <span className="ml-auto text-xs text-slate-500">{entry.date}</span>
                    </div>
                    <h3 className="mt-2 font-medium text-white">{entry.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{entry.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <p className="text-center text-sm text-slate-500">Trusted by fast-moving teams at</p>
        <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-x-12 gap-y-6 px-6 text-xl font-semibold tracking-tight text-slate-500">
          {logos.map((logo) => (
            <li key={logo} className="transition hover:text-slate-300">{logo}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
