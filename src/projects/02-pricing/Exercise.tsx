// Project 02 — Pricing Table
// TODO: build the three-tier pricing section shown in the "Target" view.
// The middle plan is highlighted, so you'll need conditional classes. See README.md.

import { Check } from '../icons'
import { plans } from './data'

export default function PricingExercise() {
  return (
    <div className="">
      <header className="">
        <p className="">Pricing</p>
        <h1 className="">
          Plans that grow with your team
        </h1>
        <p className="">
          Simple, transparent pricing. Start free, upgrade when you need more — cancel any time.
        </p>

        <div className="">
          <button className="">Monthly</button>
          <button className="">
            Yearly
            <span className="">-20%</span>
          </button>
        </div>
      </header>

      <div className="">
        {plans.map((plan) => (
          /* The featured plan gets a dark, raised style: use plan.featured to pick classes */
          <section
            key={plan.name}
            className=""
          >
            {plan.featured && (
              <span className="">
                Most popular
              </span>
            )}

            <h2 className="">{plan.name}</h2>
            <p className="">{plan.description}</p>

            <p className="">
              <span className="">{plan.price}</span>
              <span className="">/month</span>
            </p>

            <a
              href="#"
              className=""
            >
              {plan.cta}
            </a>

            <ul className="">
              {plan.features.map((feature) => (
                <li key={feature} className="">
                  <Check className="" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="">
        All plans include a 14-day free trial. No credit card required.
      </p>
    </div>
  )
}
