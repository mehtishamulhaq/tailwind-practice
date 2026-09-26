// Project 06 — Music Player
// TODO: build the now-playing screen and queue shown in the "Target" view. See README.md.

import { Heart, More, Pause, Repeat, Shuffle, SkipBack, SkipForward, Volume } from '../icons'
import { nowPlaying, queue } from './data'

export default function MusicPlayerExercise() {
  return (
    <div className="">
      {/* Blurred copy of the album art as the page background, then a fade */}
      <img src={nowPlaying.art} alt="" className="" />
      <div className="" />

      <div className="">
        <section className="">
          <div className="">
            <span>Now playing</span>
            <button className="">
              <More className="" />
            </button>
          </div>

          <img
            src={nowPlaying.art}
            alt=""
            className=""
          />

          <div className="">
            <div>
              <h1 className="">{nowPlaying.title}</h1>
              <p className="">{nowPlaying.artist}</p>
            </div>
            <button className="">
              <Heart filled className="" />
            </button>
          </div>

          <div className="">
            <div className="">
              <div className="" />
              <div className="" />
            </div>
            <div className="">
              <span>{nowPlaying.elapsed}</span>
              <span>{nowPlaying.duration}</span>
            </div>
          </div>

          <div className="">
            <button className="">
              <Shuffle className="" />
            </button>
            <button className="">
              <SkipBack filled className="" />
            </button>
            <button className="">
              <Pause filled className="" />
            </button>
            <button className="">
              <SkipForward filled className="" />
            </button>
            <button className="">
              <Repeat className="" />
            </button>
          </div>

          <div className="">
            <Volume className="" />
            <div className="">
              <div className="" />
            </div>
          </div>
        </section>

        <section className="">
          <div className="">
            <h2 className="">Up next</h2>
            <span className="">12 tracks · 48 min</span>
          </div>

          <ol className="">
            {queue.map((track, i) => (
              /* track.active marks the song that is playing */
              <li
                key={track.title}
                className=""
              >
                <span className="">
                  {track.active ? (
                    <span className="">
                      <span className="" />
                      <span className="" />
                      <span className="" />
                    </span>
                  ) : (
                    i + 1
                  )}
                </span>
                <img src={track.art} alt="" className="" />
                <div className="">
                  <p className="">{track.title}</p>
                  <p className="">{track.artist}</p>
                </div>
                <span className="">{track.duration}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}
