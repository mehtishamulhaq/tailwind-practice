import { photos } from '../images'

export const filters = ['All', 'Mountains', 'Lakes', 'Coast', 'Desert']

export const destinations = [
  { name: 'Lago di Braies', country: 'Italy', image: photos.braies, rating: 4.9, reviews: '1,284', nights: 5, price: '$1,240', badge: 'Trending' },
  { name: 'Moraine Lake', country: 'Canada', image: photos.moraine, rating: 4.8, reviews: '962', nights: 7, price: '$1,890', badge: null },
  { name: 'Isle of Skye', country: 'Scotland', image: photos.skye, rating: 4.7, reviews: '2,031', nights: 4, price: '$980', badge: 'Deal' },
  { name: 'Valley of Fire', country: 'Nevada, USA', image: photos.desertRoad, rating: 4.6, reviews: '541', nights: 3, price: '$720', badge: null },
  { name: 'Fjaðrárgljúfur', country: 'Iceland', image: photos.canyon, rating: 4.9, reviews: '713', nights: 6, price: '$2,150', badge: 'New' },
  { name: 'Exuma Cays', country: 'Bahamas', image: photos.beach, rating: 4.8, reviews: '1,507', nights: 7, price: '$2,480', badge: null },
]
