import { Check } from '../projects/icons'
import { plans } from '../projects/02-pricing/data'

export default function PricingTarget() {
  return (
    <div className="min-h-screen bg-white px-6 py-24">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">Pricing</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-balance text-slate-900 sm:text-5xl">
          Plans that grow with your team
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Simple, transparent pricing. Start free, upgrade when you need more — cancel any time.
        </p>

        <div className="mt-8 inline-flex rounded-full bg-slate-100 p-1 text-sm font-medium">
          <button className="rounded-full bg-white px-4 py-1.5 text-slate-900 shadow-sm">Monthly</button>
          <button className="px-4 py-1.5 text-slate-500 hover:text-slate-900">
            Yearly
            <span className="ml-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">-20%</span>
          </button>
        </div>
      </header>

      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <section
            key={plan.name}
            className={`relative rounded-3xl p-8 ${
              plan.featured
                ? 'bg-slate-900 text-white shadow-2xl shadow-indigo-500/30 ring-2 ring-indigo-500 lg:scale-105 lg:py-12'
                : 'bg-white ring-1 ring-slate-200'
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-indigo-500 to-fuchsia-500 px-4 py-1 text-xs font-semibold text-white">
                Most popular
              </span>
            )}

            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className={`mt-2 text-sm ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>{plan.description}</p>

            <p className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
              <span className={`text-sm ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>/month</span>
            </p>

            <a
              href="#"
              className={`mt-8 block rounded-xl py-3 text-center text-sm font-semibold transition ${
                plan.featured
                  ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
              }`}
            >
              {plan.cta}
            </a>

            <ul className="mt-8 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <Check className={`size-5 flex-none ${plan.featured ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-16 text-center text-sm text-slate-500">
        All plans include a 14-day free trial. No credit card required.
      </p>
    </div>
  )
}
