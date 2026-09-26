import { avatar } from '../images'

export const testimonials = [
  {
    name: 'Priya Raman',
    role: 'Head of Product, Loop',
    avatar: avatar(5),
    featured: true,
    quote:
      'We replaced three tools with this in a single afternoon. Our release notes went from something nobody read to the most-clicked thing in our app. Honestly the best purchase we made this year.',
  },
  { name: 'Daniel Kim', role: 'Indie developer', avatar: avatar(12), featured: false, quote: 'Setup took five minutes. I keep waiting for the catch.' },
  {
    name: 'Sofia Martins',
    role: 'Designer, Studio North',
    avatar: avatar(9),
    featured: false,
    quote: 'The attention to detail is unreal. Every default feels like someone actually thought about it — spacing, type, even the empty states.',
  },
  { name: 'Marcus Chen', role: 'CTO, Brightpath', avatar: avatar(14), featured: false, quote: 'Our support tickets about "what changed?" dropped by 70% in the first month.' },
  {
    name: 'Leah Goldberg',
    role: 'Founder, Tiny Seed',
    avatar: avatar(25),
    featured: false,
    quote:
      'I was skeptical about paying for yet another SaaS, but the team shipped two features I asked for within a week. That kind of responsiveness is rare. We have been customers for two years now.',
  },
  { name: 'Tom Okoye', role: 'Engineering Manager', avatar: avatar(33), featured: false, quote: 'Clean API, great docs, zero drama.' },
  {
    name: 'Hana Sato',
    role: 'Growth Lead, Parcel',
    avatar: avatar(44),
    featured: false,
    quote: 'We A/B tested our onboarding with it and saw activation go up 18%. The analytics alone pay for the subscription.',
  },
  { name: 'Lucas Moreau', role: 'Product Designer', avatar: avatar(53), featured: false, quote: 'Finally, a tool my whole team actually enjoys opening in the morning.' },
  {
    name: 'Grace Adeyemi',
    role: 'VP Engineering, Kite',
    avatar: avatar(32),
    featured: false,
    quote: 'Migrating 40,000 users over a weekend was stress-free. Their support team stayed online with us the whole time.',
  },
]
