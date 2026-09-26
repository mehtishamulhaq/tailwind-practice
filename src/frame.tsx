import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { projects } from './projects'

// Renders one project full-page, e.g. /frame.html?project=01-profile-card&view=target.
// The app shows these in iframes so each panel gets its own viewport and the
// responsive prefixes (sm:, md:, lg:) react to the panel's width, not the window's.
const params = new URLSearchParams(location.search)
const project = projects.find((p) => p.slug === params.get('project')) ?? projects[0]
const view = params.get('view') === 'target' ? 'target' : 'mine'
const Component = view === 'target' ? project.target : project.starter

document.title = `${project.id} ${project.title} — ${view === 'target' ? 'Target' : 'Mine'}`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Component />
  </StrictMode>,
)
