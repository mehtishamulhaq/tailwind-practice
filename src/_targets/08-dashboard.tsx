import { Bell, Calendar, Plus, Search, Sparkles, TrendingDown, TrendingUp } from '../projects/icons'
import { nav, orders, revenue, stats, traffic, user, type Status, type Tone } from '../projects/08-dashboard/data'

const toneIcon: Record<Tone, string> = {
  indigo: 'bg-indigo-50 text-indigo-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600',
  rose: 'bg-rose-50 text-rose-600',
}

const toneBar: Record<Tone, string> = {
  indigo: 'bg-indigo-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500',
  rose: 'bg-rose-500',
}

const statusStyles: Record<Status, string> = {
  Paid: 'bg-emerald-50 text-emerald-700',
  Pending: 'bg-amber-50 text-amber-700',
  Refunded: 'bg-slate-100 text-slate-600',
}

export default function DashboardTarget() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <aside className="sticky top-0 hidden h-screen w-64 flex-none flex-col border-r border-slate-200 bg-white px-4 py-6 lg:flex">
        <a href="#" className="flex items-center gap-2 px-2 font-bold">
          <span className="grid size-8 place-items-center rounded-lg bg-indigo-600 text-white">
            <Sparkles className="size-4" />
          </span>
          Northwind
        </a>

        <nav className="mt-8 space-y-1">
          {nav.map(({ label, icon: Icon, active, count }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                active ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon className="size-5" />
              {label}
              {count && <span className="ml-auto rounded-full bg-indigo-600 px-2 text-xs text-white">{count}</span>}
            </a>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl bg-linear-to-br from-indigo-600 to-violet-600 p-4 text-white">
          <p className="font-semibold">Go Pro</p>
          <p className="mt-1 text-sm text-indigo-100">Unlock forecasting and unlimited reports.</p>
          <button className="mt-3 w-full rounded-lg bg-white/15 py-1.5 text-sm font-semibold transition hover:bg-white/25">
            Upgrade
          </button>
        </div>

        <div className="mt-4 flex items-center gap-3 px-2">
          <img src={user.avatar} alt="" className="size-9 rounded-full" />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{user.name}</p>
            <p className="truncate text-xs text-slate-500">{user.email}</p>
          </div>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-10 flex items-center gap-4 border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur">
          <div className="relative max-w-md flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Search orders, customers…"
              className="w-full rounded-lg bg-slate-100 py-2 pr-3 pl-9 text-sm outline-none placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="relative grid size-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100">
              <Bell className="size-5" />
              <span className="absolute top-2 right-2 size-2 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>
            <img src={user.avatar} alt="" className="size-9 rounded-full" />
          </div>
        </header>

        <main className="space-y-6 p-6 lg:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Good morning, Sam</h1>
              <p className="mt-1 text-sm text-slate-500">Here's what's happening with your store today.</p>
            </div>
            <div className="flex gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-xs hover:bg-slate-50">
                <Calendar className="size-4" />
                Last 30 days
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                <Plus className="size-4" />
                New report
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ label, value, change, up, icon: Icon, tone }) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">{label}</p>
                  <span className={`grid size-9 place-items-center rounded-lg ${toneIcon[tone]}`}>
                    <Icon className="size-5" />
                  </span>
                </div>
                <p className="mt-3 text-3xl font-bold tracking-tight">{value}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                      up ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                    }`}
                  >
                    {up ? <TrendingUp className="size-3.5" /> : <TrendingDown className="size-3.5" />}
                    {change}
                  </span>
                  <span className="text-xs text-slate-500">vs last month</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs xl:col-span-2">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold">Revenue</h2>
                  <p className="text-sm text-slate-500">Monthly revenue compared to last year</p>
                </div>
                <div className="flex gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-indigo-600" />
                    This year
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-slate-200" />
                    Last year
                  </span>
                </div>
              </div>

              <div className="mt-8 flex h-64 items-end gap-2 sm:gap-4">
                {revenue.map((m) => (
                  <div key={m.month} className="flex h-full flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-1 items-end justify-center gap-1">
                      <div className="w-full max-w-3 rounded-t-md bg-slate-200" style={{ height: `${m.lastYear}%` }} />
                      <div
                        className="group relative w-full max-w-3 rounded-t-md bg-indigo-600 transition hover:bg-indigo-500"
                        style={{ height: `${m.thisYear}%` }}
                      >
                        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition group-hover:opacity-100">
                          ${m.thisYear}k
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400">{m.month}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <h2 className="font-semibold">Traffic sources</h2>
              <p className="text-sm text-slate-500">Visits in the last 30 days</p>
              <ul className="mt-6 space-y-5">
                {traffic.map((t) => (
                  <li key={t.source}>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-slate-700">{t.source}</span>
                      <span className="text-slate-500 tabular-nums">{t.visits}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className={`h-full rounded-full ${toneBar[t.tone]}`} style={{ width: `${t.share}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <h2 className="font-semibold">Recent orders</h2>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">View all</a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs font-medium tracking-wide text-slate-500 uppercase">
                  <tr>
                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3">Order</th>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.map((o) => (
                    <tr key={o.id} className="transition hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={o.avatar} alt="" className="size-8 rounded-full" />
                          <div>
                            <p className="font-medium text-slate-900">{o.name}</p>
                            <p className="text-xs text-slate-500">{o.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-mono text-slate-500">{o.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-500">{o.date}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[o.status]}`}>
                          <span className="size-1.5 rounded-full bg-current" />
                          {o.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-slate-900 tabular-nums">{o.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
