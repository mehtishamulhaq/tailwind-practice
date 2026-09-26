import { avatar } from '../images'

export const navLinks = ['Product', 'Changelog', 'Pricing', 'Docs']

export const avatars = [avatar(11), avatar(20), avatar(26), avatar(36), avatar(41)]

export const sidebar = ['Inbox', 'Changelog', 'Roadmap', 'Feedback', 'Settings']

export type EntryKind = 'New' | 'Improved' | 'Fixed'

export const entries: { kind: EntryKind; date: string; title: string; body: string }[] = [
  { kind: 'New', date: 'Sep 24', title: 'AI summaries for every release', body: 'Lumen now writes a two-line summary of each update so readers get the gist instantly.' },
  { kind: 'Improved', date: 'Sep 18', title: 'Faster widget, 40% smaller', body: 'The embeddable widget now loads in under 50ms on a cold cache.' },
  { kind: 'Fixed', date: 'Sep 11', title: 'Emoji reactions on Safari', body: 'Reactions no longer double-count when tapped quickly on iOS.' },
]

export const logos = ['Acme', 'Northwind', 'Globex', 'Initech', 'Umbrella', 'Hooli']
