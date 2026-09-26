import { useEffect, useState } from 'react'
import ProjectViewer from './ProjectViewer'
import { exercises } from './exercises'
import { projects } from './projects'

type Track = 'basics' | 'projects'

function useStored(key: string, initial: string) {
  const [value, setValue] = useState(() => {
    try {
      return localStorage.getItem(key) ?? initial
    } catch {
      return initial
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(key, value)
    } catch {
      /* ignore */
    }
  }, [key, value])
  return [value, setValue] as const
}

const pill = (active: boolean) =>
  `rounded-md px-2.5 py-1 text-sm whitespace-nowrap transition ${
    active ? 'bg-slate-900 font-medium text-white' : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
  }`

// The shell stays simple — the exercises and projects are where the styling practice happens.
export default function App() {
  const [track, setTrack] = useStored('tp:track', 'projects') as [Track, (t: Track) => void]
  const [basicId, setBasicId] = useStored('tp:basic', exercises[0].id)
  const [projectId, setProjectId] = useStored('tp:project', projects[0].id)

  const basic = exercises.find((e) => e.id === basicId) ?? exercises[0]
  const project = projects.find((p) => p.id === projectId) ?? projects[0]
  const Basic = basic.component

  return (
    <div className="flex h-screen flex-col bg-slate-50">
      <header className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-slate-200 bg-white px-4 py-3">
        <span className="font-semibold text-slate-900">Tailwind Playground</span>

        <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-sm">
          {(['basics', 'projects'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTrack(t)}
              className={`rounded-md px-3 py-1 font-medium capitalize transition ${
                track === t ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <nav className="flex flex-wrap gap-1">
          {track === 'basics'
            ? exercises.map((e) => (
                <button key={e.id} onClick={() => setBasicId(e.id)} className={pill(e.id === basic.id)}>
                  {e.id} {e.title}
                </button>
              ))
            : projects.map((p) => (
                <button key={p.id} onClick={() => setProjectId(p.id)} className={pill(p.id === project.id)}>
                  {p.id} {p.title}
                </button>
              ))}
        </nav>
      </header>

      {track === 'basics' ? (
        <div className="flex-1 overflow-auto p-4">
          <p className="pb-4 text-sm text-slate-500">
            Exercise {basic.id} — {basic.title}. Instructions: the README.md and the TODO comment in{' '}
            <code>src/exercises/{basic.id}-…/Exercise.tsx</code>.
          </p>
          <main className="bg-white">
            <Basic />
          </main>
        </div>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col p-4">
          <ProjectViewer key={project.slug} project={project} />
        </div>
      )}
    </div>
  )
}
