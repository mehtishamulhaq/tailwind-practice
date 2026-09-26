import type { ComponentType } from 'react'

type Module = { default: ComponentType }

const starters = import.meta.glob<Module>('./*/Exercise.tsx', { eager: true })
// The finished versions live in src/_targets, which .vscode/settings.json hides from the editor.
const targets = import.meta.glob<Module>('../_targets/*.tsx', { eager: true })

export type Level = 'Easy' | 'Medium' | 'Hard'

export type Project = {
  id: string
  slug: string
  title: string
  level: Level
  starter: ComponentType
  target: ComponentType
}

const list: { slug: string; title: string; level: Level }[] = [
  { slug: '01-profile-card', title: 'Profile Card', level: 'Easy' },
  { slug: '02-pricing', title: 'Pricing Table', level: 'Easy' },
  { slug: '03-destinations', title: 'Travel Grid', level: 'Medium' },
  { slug: '04-testimonials', title: 'Testimonial Wall', level: 'Medium' },
  { slug: '05-glass-login', title: 'Glass Login', level: 'Medium' },
  { slug: '06-music-player', title: 'Music Player', level: 'Medium' },
  { slug: '07-landing-hero', title: 'Landing Page', level: 'Hard' },
  { slug: '08-dashboard', title: 'Dashboard', level: 'Hard' },
]

export const projects: Project[] = list.map(({ slug, title, level }) => {
  const starter = starters[`./${slug}/Exercise.tsx`]
  const target = targets[`../_targets/${slug}.tsx`]
  if (!starter || !target) throw new Error(`Project ${slug} needs Exercise.tsx and _targets/${slug}.tsx`)
  return { id: slug.slice(0, 2), slug, title, level, starter: starter.default, target: target.default }
})
