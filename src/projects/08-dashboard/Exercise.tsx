// Project 08 — Dashboard
// TODO: build the admin dashboard shown in the "Target" view.
// The sidebar only appears at desktop width. See README.md.

import { Bell, Calendar, Plus, Search, Sparkles, TrendingDown, TrendingUp } from '../icons'
import { nav, orders, revenue, stats, traffic, user } from './data'

export default function DashboardExercise() {
  return (
    <div className="">
      <aside className="">
        <a href="#" className="">
          <span className="">
            <Sparkles className="" />
          </span>
          Northwind
        </a>

        <nav className="">
          {nav.map(({ label, icon: Icon, count }) => (
            /* Destructure `active` from the nav item as well: it marks the current page */
            <a
              key={label}
              href="#"
              className=""
            >
              <Icon className="" />
              {label}
              {count && <span className="">{count}</span>}
            </a>
          ))}
        </nav>

        <div className="">
          <p className="">Go Pro</p>
          <p className="">Unlock forecasting and unlimited reports.</p>
          <button className="">
            Upgrade
          </button>
        </div>

        <div className="">
          <img src={user.avatar} alt="" className="" />
          <div className="">
            <p className="">{user.name}</p>
            <p className="">{user.email}</p>
          </div>
        </div>
      </aside>

      <div className="">
        <header className="">
          <div className="">
            <Search className="" />
            <input
              placeholder="Search orders, customers…"
              className=""
            />
          </div>
          <div className="">
            <button className="">
              <Bell className="" />
              <span className="" />
            </button>
            <img src={user.avatar} alt="" className="" />
          </div>
        </header>

        <main className="">
          <div className="">
            <div>
              <h1 className="">Good morning, Sam</h1>
              <p className="">Here's what's happening with your store today.</p>
            </div>
            <div className="">
              <button className="">
                <Calendar className="" />
                Last 30 days
              </button>
              <button className="">
                <Plus className="" />
                New report
              </button>
            </div>
          </div>

          <div className="">
            {stats.map(({ label, value, change, up, icon: Icon }) => (
              <div key={label} className="">
                <div className="">
                  <p className="">{label}</p>
                  {/* Tint the icon by the stat's `tone` (indigo, emerald, amber or rose) — destructure it above */}
                  <span className="">
                    <Icon className="" />
                  </span>
                </div>
                <p className="">{value}</p>
                <div className="">
                  {/* Green when up, red when down */}
                  <span
                    className=""
                  >
                    {up ? <TrendingUp className="" /> : <TrendingDown className="" />}
                    {change}
                  </span>
                  <span className="">vs last month</span>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <section className="">
              <div className="">
                <div>
                  <h2 className="">Revenue</h2>
                  <p className="">Monthly revenue compared to last year</p>
                </div>
                <div className="">
                  <span className="">
                    <span className="" />
                    This year
                  </span>
                  <span className="">
                    <span className="" />
                    Last year
                  </span>
                </div>
              </div>

              <div className="">
                {revenue.map((m) => (
                  <div key={m.month} className="">
                    <div className="">
                      {/* Heights come from data, so they stay as inline styles. Style the bars, the hover tooltip and the labels */}
                      <div className="" style={{ height: `${m.lastYear}%` }} />
                      <div
                        className=""
                        style={{ height: `${m.thisYear}%` }}
                      >
                        <span className="">
                          ${m.thisYear}k
                        </span>
                      </div>
                    </div>
                    <span className="">{m.month}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="">
              <h2 className="">Traffic sources</h2>
              <p className="">Visits in the last 30 days</p>
              <ul className="">
                {traffic.map((t) => (
                  <li key={t.source}>
                    <div className="">
                      <span className="">{t.source}</span>
                      <span className="">{t.visits}</span>
                    </div>
                    <div className="">
                      <div className="" style={{ width: `${t.share}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="">
            <div className="">
              <h2 className="">Recent orders</h2>
              <a href="#" className="">View all</a>
            </div>
            <div className="">
              <table className="">
                <thead className="">
                  <tr>
                    <th className="">Customer</th>
                    <th className="">Order</th>
                    <th className="">Date</th>
                    <th className="">Status</th>
                    <th className="">Amount</th>
                  </tr>
                </thead>
                <tbody className="">
                  {orders.map((o) => (
                    <tr key={o.id} className="">
                      <td className="">
                        <div className="">
                          <img src={o.avatar} alt="" className="" />
                          <div>
                            <p className="">{o.name}</p>
                            <p className="">{o.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="">{o.id}</td>
                      <td className="">{o.date}</td>
                      <td className="">
                        {/* Color by o.status: Paid, Pending or Refunded */}
                        <span className="">
                          <span className="" />
                          {o.status}
                        </span>
                      </td>
                      <td className="">{o.amount}</td>
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
