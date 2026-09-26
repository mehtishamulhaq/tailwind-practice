import { photos } from '../images'

export const nowPlaying = {
  title: 'Midnight Frequencies',
  artist: 'Nova Circuit',
  art: photos.dj,
  elapsed: '1:42',
  duration: '4:18',
}

export const queue = [
  { title: 'Midnight Frequencies', artist: 'Nova Circuit', art: photos.dj, duration: '4:18', active: true },
  { title: 'Crowd Surf', artist: 'The Neon Tides', art: photos.crowd, duration: '3:05', active: false },
  { title: 'Hands Up High', artist: 'Kaia Rivers', art: photos.singer, duration: '3:41', active: false },
  { title: 'Sunday Strings', artist: 'Oak & Ember', art: photos.guitars, duration: '5:12', active: false },
  { title: 'Violet Hour', artist: 'Glasshouse', art: photos.gradientViolet, duration: '2:58', active: false },
  { title: 'Prism', artist: 'Lumen Kid', art: photos.gradientRainbow, duration: '3:33', active: false },
]
