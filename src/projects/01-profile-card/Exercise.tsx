// Project 01 — Profile Card
// TODO: turn this plain markup into the finished card shown in the "Target" view.
// Open "Side by side" in the app to compare as you go. The brief is in README.md.

import { BadgeCheck, MapPin, Message } from '../icons';
import { profile } from './data';

export default function ProfileCardExercise() {
  return (
    <div className="p-7 bg-slate-100 bg-linear-to-br from-slate-100 via-slate-50 to-sky-100 md:min-h-screen md:flex md:flex-col">
      <article className="bg-white rounded-4xl max-w-sm mx-auto md:my-auto shadow-xl shadow-slate-300 ring-1 ring-slate-200">
        <img
          src={profile.cover}
          alt=""
          className="rounded-t-xl max-h-32 w-full object-cover"
        />

        <div className="px-6 pb-6">
          <div className="relative w-fit -mt-12 mb-8">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="rounded-full size-26 ring-4 ring-white"
            />
            {/* online status dot */}
            <span className="absolute bottom-1 right-1 size-4 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>

          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <BadgeCheck className="size-5 text-sky-500" />
          </div>
          <p className="flex gap-1 text-gray-500 text-sm items-center">
            {profile.handle}
            <span className="">·</span>
            <MapPin className="size-4" />
            {profile.location}
          </p>

          <p className="mt-3 text-slate-600  text-sm leading-relaxed">
            {profile.bio}
          </p>

          <ul className="flex gap-2 mt-4">
            {profile.tags.map((tag) => (
              <li
                key={tag}
                className="px-4 py-1 bg-slate-100 rounded-full text-gray-800 text-xs"
              >
                {tag}
              </li>
            ))}
          </ul>

          <dl className="my-6 flex bg-slate-50 px-2 py-2 rounded-xl">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex-1 border-r border-gray-300 last:border-none flex flex-col-reverse text-center justify-center"
              >
                <dt className="text-gray-600 font-light text-sm">
                  {stat.label}
                </dt>
                <dd className="font-semibold text-lg">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex gap-3">
            <button className=" px-4 py-2 rounded-xl flex-1 bg-gray-900 text-white">
              Follow
            </button>
            <button className=" px-4 py-2 rounded-xl flex-1 flex gap-1 justify-center items-center text-gray-700 border border-gray-400">
              <Message className="size-4" />
              Message
            </button>
          </div>

          <div className=" mt-6 flex gap-2">
            {profile.shots.map((shot) => (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                className="size-22 rounded-xl flex-1 object-cover"
              />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
