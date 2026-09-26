// Project 02 — Pricing Table
// TODO: build the three-tier pricing section shown in the "Target" view.
// The middle plan is highlighted, so you'll need conditional classes. See README.md.

import { Check } from '../icons';
import { plans } from './data';
import clsx from 'clsx';

export default function PricingExercise() {
  return (
    <div className="py-22 px-6 min-h-screen bg-white">
      <header className="text-center space-y-3 my-10 max-w-2xl mx-auto">
        <p className="text-indigo-700 uppercase tex-xs ">Pricing</p>
        <h1 className="text-4xl font-bold">Plans that grow with your team</h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Simple, transparent pricing. Start free, upgrade when you need more —
          cancel any time.
        </p>

        <div className="bg-slate-100 p-1 my-6 gap-1 rounded-full flex items-center w-fit mx-auto text-sm">
          <button className="bg-white rounded-full py-1.5 px-5 font-medium shadow-sm">
            Monthly
          </button>
          <button className="flex items-center gap-2 rounded-full py-1.5 px-5 text-slate-600">
            Yearly
            <span className="bg-green-200 px-2 py-0.5 rounded-full text-xs">-20%</span>
          </button>
        </div>
      </header>

      <div className="space-y-8">
        {plans.map((plan) => (
          /* The featured plan gets a dark, raised style: use plan.featured to pick classes */
          <section
            key={plan.name}
            className={clsx(
              'relative rounded-2xl flex flex-col p-8 gap-2 ',
              plan.featured
                ? 'ring-2 ring-indigo-500 text-white bg-slate-900 shadow-xl shadow-indigo-200'
                : 'border border-slate-200 ',
            )}
          >
            {plan.featured && (
              <span className="text-white bg-linear-to-r from-indigo-500 to-fuchsia-500 absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold">
                Most popular
              </span>
            )}

            <h2 className="font-semibold text-lg">{plan.name}</h2>
            <p
              className={clsx(
                'text-sm ',
                plan.featured ? 'text-slate-300' : 'text-slate-600',
              )}
            >
              {plan.description}
            </p>

            <p className="">
              <span className="text-5xl font-bold">{plan.price}</span>
              <span
                className={clsx(
                  'text-sm ',
                  plan.featured ? 'text-slate-400' : 'text-slate-600',
                )}
              >
                /month
              </span>
            </p>

            <a
              href="#"
              className={clsx(
                'bg-indigo-50 py-3 text-center text-indigo-700 text-sm font-bold rounded-xl my-6',
                plan.featured && 'bg-indigo-500 text-white',
              )}
            >
              {plan.cta}
            </a>

            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 ">
                  <Check className="text-indigo-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="text-center text-sm text-slate-500 mt-16">
        All plans include a 14-day free trial. No credit card required.
      </p>
    </div>
  );
}
