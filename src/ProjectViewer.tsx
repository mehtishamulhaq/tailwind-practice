import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { Level, Project } from './projects'

type View = 'mine' | 'target' | 'split' | 'overlay'
type Device = 'mobile' | 'tablet' | 'desktop'

const views: { value: View; label: string }[] = [
  { value: 'mine', label: 'Mine' },
  { value: 'target', label: 'Target' },
  { value: 'split', label: 'Side by side' },
  { value: 'overlay', label: 'Overlay' },
]

const devices: { value: Device; label: string; width: number }[] = [
  { value: 'mobile', label: 'Mobile', width: 390 },
  { value: 'tablet', label: 'Tablet', width: 768 },
  { value: 'desktop', label: 'Desktop', width: 1280 },
]

const levelStyles: Record<Level, string> = {
  Easy: 'bg-emerald-100 text-emerald-700',
  Medium: 'bg-amber-100 text-amber-700',
  Hard: 'bg-rose-100 text-rose-700',
}

const frameSrc = (slug: string, which: 'mine' | 'target') => `/frame.html?project=${slug}&view=${which}`

// Per-viewer conveniences only, so failures (private mode etc.) are ignored.
function useStored<T extends string>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      return (localStorage.getItem(key) as T | null) ?? initial
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

function Segmented<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[]
  value: T
  onChange: (value: T) => void
}) {
  return (
    <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-sm">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`rounded-md px-3 py-1 font-medium transition ${
            option.value === value ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

// An iframe rendered at the device width and scaled down to fit its panel, so a
// desktop layout still looks like desktop when it only has half the screen.
function Frame({
  src,
  width,
  label,
  frameRef,
  onLoad,
}: {
  src: string
  width: number
  label?: string
  frameRef?: (el: HTMLIFrameElement | null) => void
  onLoad?: () => void
}) {
  const boxRef = useRef<HTMLDivElement>(null)
  const [box, setBox] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) =>
      setBox({ width: entry.contentRect.width, height: entry.contentRect.height }),
    )
    observer.observe(boxRef.current!)
    return () => observer.disconnect()
  }, [])

  const scale = box.width && width > box.width ? box.width / width : 1
  const left = Math.max(0, (box.width - width * scale) / 2)

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-2">
      {label && (
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="font-semibold tracking-wide uppercase">{label}</span>
          <span className="tabular-nums">
            {width}px{scale < 1 && ` · ${Math.round(scale * 100)}%`}
          </span>
        </div>
      )}
      <div ref={boxRef} className="relative min-h-0 flex-1 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
        {box.width > 0 && (
          <iframe
            ref={frameRef}
            src={src}
            onLoad={onLoad}
            title={label ?? src}
            className="absolute top-0 origin-top-left border-0"
            style={{ left, width, height: box.height / scale, transform: `scale(${scale})` }}
          />
        )}
      </div>
    </div>
  )
}

export default function ProjectViewer({ project }: { project: Project }) {
  const [view, setView] = useStored<View>('tp:view', 'split')
  const [device, setDevice] = useStored<Device>('tp:device', 'desktop')
  const [sync, setSync] = useStored<'on' | 'off'>('tp:sync', 'on')
  const [opacity, setOpacity] = useState(50)
  const width = devices.find((d) => d.value === device)!.width

  // Scroll syncing between the two iframes (split and overlay views).
  const frames = useRef<(HTMLIFrameElement | null)[]>([])
  const syncRef = useRef(sync)
  useEffect(() => {
    syncRef.current = sync
  }, [sync])

  const attachScroll = (index: number) => () => {
    const win = frames.current[index]?.contentWindow
    if (!win) return
    win.addEventListener('scroll', () => {
      const other = frames.current[1 - index]?.contentWindow
      if (syncRef.current !== 'on' || !other) return
      const max = win.document.documentElement.scrollHeight - win.innerHeight
      const otherMax = other.document.documentElement.scrollHeight - other.innerHeight
      const top = max > 0 ? (win.scrollY / max) * otherMax : 0
      if (Math.abs(other.scrollY - top) > 2) other.scrollTo(0, top)
    })
  }

  const pair = (a: 'mine' | 'target', b: 'mine' | 'target', labels: [string?, string?]) => [
    <Frame key={a} src={frameSrc(project.slug, a)} width={width} label={labels[0]} frameRef={(el) => (frames.current[0] = el)} onLoad={attachScroll(0)} />,
    <Frame key={b} src={frameSrc(project.slug, b)} width={width} label={labels[1]} frameRef={(el) => (frames.current[1] = el)} onLoad={attachScroll(1)} />,
  ]

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold text-slate-900">
              {project.id} · {project.title}
            </h1>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${levelStyles[project.level]}`}>{project.level}</span>
          </div>
          <p className="text-sm text-slate-500">
            Edit <code className="rounded bg-slate-100 px-1 text-slate-700">src/projects/{project.slug}/Exercise.tsx</code> — brief in its README.md
          </p>
        </div>

        <Segmented options={views} value={view} onChange={setView} />
        <Segmented options={devices} value={device} onChange={setDevice} />

        {(view === 'split' || view === 'overlay') && (
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" checked={sync === 'on'} onChange={(e) => setSync(e.target.checked ? 'on' : 'off')} className="accent-indigo-600" />
            Sync scroll
          </label>
        )}
        {view === 'overlay' && (
          <label className="flex items-center gap-2 text-sm text-slate-600">
            Target opacity
            <input type="range" min={0} max={100} value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-28 accent-indigo-600" />
            <span className="w-9 tabular-nums">{opacity}%</span>
          </label>
        )}
        <a href={frameSrc(project.slug, 'mine')} target="_blank" rel="noreferrer" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Open mine in a tab ↗
        </a>
      </div>

      <div className="flex min-h-0 flex-1 gap-4">
        {view === 'mine' && <Frame key="mine" src={frameSrc(project.slug, 'mine')} width={width} />}
        {view === 'target' && <Frame key="target" src={frameSrc(project.slug, 'target')} width={width} />}
        {view === 'split' && pair('mine', 'target', ['Mine', 'Target'])}
        {view === 'overlay' && (
          // The target sits on top but ignores the mouse, so you scroll and hover your own version.
          <div className="relative flex min-h-0 flex-1">
            {pair('mine', 'target', []).map((frame, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex ${i === 1 ? 'pointer-events-none' : ''}`}
                style={i === 1 ? { opacity: opacity / 100 } : undefined}
              >
                {frame}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
