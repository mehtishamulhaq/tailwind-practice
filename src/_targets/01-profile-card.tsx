import { BadgeCheck, MapPin, Message } from '../projects/icons'
import { profile } from '../projects/01-profile-card/data'

export default function ProfileCardTarget() {
  return (
    <div className="grid min-h-screen place-items-center bg-linear-to-br from-slate-100 via-slate-50 to-sky-100 p-6">
      <article className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-300/60 ring-1 ring-slate-900/5">
        <img src={profile.cover} alt="" className="h-32 w-full object-cover" />

        <div className="px-6 pb-6">
          <div className="relative -mt-12 inline-block">
            <img src={profile.avatar} alt={profile.name} className="size-24 rounded-full object-cover ring-4 ring-white" />
            <span className="absolute right-1 bottom-1 size-4 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>

          <div className="mt-3 flex items-center gap-1.5">
            <h2 className="text-xl font-bold text-slate-900">{profile.name}</h2>
            <BadgeCheck className="size-5 text-sky-500" />
          </div>
          <p className="mt-0.5 flex items-center gap-1 text-sm text-slate-500">
            {profile.handle}
            <span className="text-slate-300">·</span>
            <MapPin className="size-3.5" />
            {profile.location}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">{profile.bio}</p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <li key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {tag}
              </li>
            ))}
          </ul>

          <dl className="mt-6 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl bg-slate-50 py-3 text-center">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-xs tracking-wide text-slate-500 uppercase">{stat.label}</dt>
                <dd className="text-lg font-semibold text-slate-900">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex gap-3">
            <button className="flex-1 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
              Follow
            </button>
            <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              <Message className="size-4" />
              Message
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {profile.shots.map((shot) => (
              <img key={shot.src} src={shot.src} alt={shot.alt} className="aspect-square w-full rounded-xl object-cover transition hover:opacity-80" />
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
