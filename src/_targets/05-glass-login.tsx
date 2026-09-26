import { Key, Lock, Mail, Sparkles } from '../projects/icons'
import { background } from '../projects/05-glass-login/data'

export default function GlassLoginTarget() {
  return (
    <div className="relative isolate grid min-h-screen place-items-center overflow-hidden p-6">
      <img src={background} alt="" className="absolute inset-0 -z-10 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-slate-950/40" />

      <main className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-xl sm:p-10">
        <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25">
          <Sparkles className="size-6" />
        </div>
        <h1 className="mt-6 text-center text-2xl font-semibold">Welcome back</h1>
        <p className="mt-1 text-center text-sm text-white/70">Sign in to continue to Aurora</p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-2.5 text-sm font-medium transition hover:bg-white/15">
            <Key className="size-4" />
            Passkey
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-2.5 text-sm font-medium transition hover:bg-white/15">
            <Mail className="size-4" />
            Magic link
          </button>
        </div>

        <div className="mt-6 flex items-center gap-4 text-xs tracking-wider text-white/50 uppercase">
          <span className="h-px flex-1 bg-white/20" />
          or
          <span className="h-px flex-1 bg-white/20" />
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
            <div className="relative mt-1.5">
              <Mail className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-white/50" />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pr-4 pl-11 text-sm text-white outline-none placeholder:text-white/40 transition focus:border-white/50 focus:bg-white/15 focus:ring-4 focus:ring-white/10"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-white/80">Password</label>
              <a href="#" className="text-sm text-white/70 hover:text-white">Forgot?</a>
            </div>
            <div className="relative mt-1.5">
              <Lock className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-white/50" />
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pr-4 pl-11 text-sm text-white outline-none placeholder:text-white/40 transition focus:border-white/50 focus:bg-white/15 focus:ring-4 focus:ring-white/10"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm text-white/80">
            <input type="checkbox" className="size-4 rounded accent-sky-400" />
            Remember me for 30 days
          </label>

          <button className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white/90 active:scale-[0.98]">
            Sign in
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-white/70">
          New here?{' '}
          <a href="#" className="font-semibold text-white underline-offset-4 hover:underline">Create an account</a>
        </p>
      </main>
    </div>
  )
}
