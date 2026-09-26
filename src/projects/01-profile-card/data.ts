import { avatar, photos } from '../images'

export const profile = {
  name: 'Amara Okafor',
  handle: '@amara.shoots',
  location: 'Lisbon, Portugal',
  avatar: avatar(47),
  cover: photos.braies,
  bio: 'Landscape photographer chasing quiet light in loud places. Shooting mostly on 35mm film and a camera older than me.',
  tags: ['Landscape', 'Film', 'Travel'],
  stats: [
    { label: 'Posts', value: '284' },
    { label: 'Followers', value: '48.2k' },
    { label: 'Following', value: '312' },
  ],
  shots: [
    { src: photos.moraine, alt: 'Moraine Lake at sunrise' },
    { src: photos.canyon, alt: 'Canyon in Iceland' },
    { src: photos.yosemite, alt: 'Yosemite valley' },
  ],
}
