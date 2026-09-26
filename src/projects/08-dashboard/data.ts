import { Box, Chart, Home, Settings, Users, Wallet } from '../icons'
import { avatar } from '../images'

export const nav = [
  { label: 'Overview', icon: Home, active: true, count: null },
  { label: 'Analytics', icon: Chart, active: false, count: null },
  { label: 'Orders', icon: Box, active: false, count: 12 },
  { label: 'Customers', icon: Users, active: false, count: null },
  { label: 'Settings', icon: Settings, active: false, count: null },
]

export const user = { name: 'Sam Rivera', email: 'sam@northwind.io', avatar: avatar(59) }

export type Tone = 'indigo' | 'emerald' | 'amber' | 'rose'

export const stats: { label: string; value: string; change: string; up: boolean; icon: typeof Wallet; tone: Tone }[] = [
  { label: 'Revenue', value: '$84,230', change: '12.5%', up: true, icon: Wallet, tone: 'indigo' },
  { label: 'Orders', value: '1,429', change: '8.2%', up: true, icon: Box, tone: 'emerald' },
  { label: 'New customers', value: '312', change: '3.1%', up: false, icon: Users, tone: 'amber' },
  { label: 'Conversion', value: '3.8%', change: '0.6%', up: true, icon: Chart, tone: 'rose' },
]

// Bar heights as a percentage of the chart height.
export const revenue = [
  { month: 'Jan', thisYear: 45, lastYear: 38 },
  { month: 'Feb', thisYear: 52, lastYear: 41 },
  { month: 'Mar', thisYear: 48, lastYear: 50 },
  { month: 'Apr', thisYear: 70, lastYear: 55 },
  { month: 'May', thisYear: 64, lastYear: 52 },
  { month: 'Jun', thisYear: 82, lastYear: 60 },
  { month: 'Jul', thisYear: 76, lastYear: 66 },
  { month: 'Aug', thisYear: 94, lastYear: 71 },
  { month: 'Sep', thisYear: 88, lastYear: 69 },
]

export const traffic: { source: string; visits: string; share: number; tone: Tone }[] = [
  { source: 'Organic search', visits: '12,480', share: 72, tone: 'indigo' },
  { source: 'Direct', visits: '8,120', share: 48, tone: 'emerald' },
  { source: 'Social', visits: '5,302', share: 31, tone: 'amber' },
  { source: 'Referral', visits: '2,014', share: 14, tone: 'rose' },
]

export type Status = 'Paid' | 'Pending' | 'Refunded'

export const orders: { id: string; name: string; email: string; avatar: string; date: string; amount: string; status: Status }[] = [
  { id: '#3021', name: 'Olivia Park', email: 'olivia@park.dev', avatar: avatar(1), date: 'Sep 24, 2026', amount: '$1,249.00', status: 'Paid' },
  { id: '#3020', name: 'Ethan Brooks', email: 'ethan@brooks.co', avatar: avatar(13), date: 'Sep 24, 2026', amount: '$89.00', status: 'Pending' },
  { id: '#3019', name: 'Maya Singh', email: 'maya@singh.io', avatar: avatar(16), date: 'Sep 23, 2026', amount: '$432.50', status: 'Paid' },
  { id: '#3018', name: 'Noah Fischer', email: 'noah@fischer.de', avatar: avatar(52), date: 'Sep 22, 2026', amount: '$64.00', status: 'Refunded' },
  { id: '#3017', name: 'Zara Ahmed', email: 'zara@ahmed.me', avatar: avatar(24), date: 'Sep 22, 2026', amount: '$2,780.00', status: 'Paid' },
]
