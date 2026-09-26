// Project 05 — Glass Login
// TODO: build the frosted-glass sign-in card shown in the "Target" view.
// Click into the inputs in the target to see the focus styles. See README.md.

import { Key, Lock, Mail, Sparkles } from '../icons'
import { background } from './data'

export default function GlassLoginExercise() {
  return (
    <div className="">
      {/* Full-screen background image + dark tint on top of it */}
      <img src={background} alt="" className="" />
      <div className="" />

      <main className="">
        <div className="">
          <Sparkles className="" />
        </div>
        <h1 className="">Welcome back</h1>
        <p className="">Sign in to continue to Aurora</p>

        <div className="">
          <button className="">
            <Key className="" />
            Passkey
          </button>
          <button className="">
            <Mail className="" />
            Magic link
          </button>
        </div>

        <div className="">
          {/* The spans are the divider lines */}
          <span className="" />
          or
          <span className="" />
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="">
          <div>
            <label htmlFor="email" className="">Email</label>
            <div className="">
              <Mail className="" />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className=""
              />
            </div>
          </div>

          <div>
            <div className="">
              <label htmlFor="password" className="">Password</label>
              <a href="#" className="">Forgot?</a>
            </div>
            <div className="">
              <Lock className="" />
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className=""
              />
            </div>
          </div>

          <label className="">
            <input type="checkbox" className="" />
            Remember me for 30 days
          </label>

          <button className="">
            Sign in
          </button>
        </form>

        <p className="">
          New here?{' '}
          <a href="#" className="">Create an account</a>
        </p>
      </main>
    </div>
  )
}
