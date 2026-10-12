import type { GalleryFilter, MediaAsset } from './media'
import { media } from './media'

export type RoutePath =
  | '/'
  | '/next-runway'
  | '/gallery'
  | '/brands'
  | '/parents'
  | '/contact'
  | '/apply'

export interface NavItem {
  label: string
  to: RoutePath
}

export interface RunwayEvent {
  name: string
  dateLabel: string
  city: string
  venue: string
  ageRange: string
  features: string[]
  schedule: { time: string; label: string }[]
}

export interface BrandCard {
  id: string
  name: string
  category: string
  image?: MediaAsset
  confirmed: boolean
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Next Runway', to: '/next-runway' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Brands', to: '/brands' },
  { label: 'Parents', to: '/parents' },
  { label: 'Contact', to: '/contact' },
]

export const runwayEvent: RunwayEvent = {
  name: 'NexGen Runway 2.0',
  dateLabel: '1st Nov, 2026',
  city: 'Melbourne',
  venue: 'Bells Hotel, South Melbourne',
  ageRange: 'Open to all',
  features: ['Guardian-led registration', 'Professional photos', 'Designer outfits'],
  schedule: [
    { time: '09:00', label: 'Arrival & check-in' },
    { time: '10:30', label: 'Rehearsal call' },
    { time: '13:00', label: 'Runway walk' },
    { time: '15:00', label: 'Celebration & photos' },
  ],
}

export const enquiryEmail = 'info@nexgenrunway.com.au'
export const applicationFormUrl = 'https://form.jotform.com/261431042081847'

export const brandNames = [
  'Big Bay Little Bay',
  'NVKids',
  'Fierce and Flawless Couture',
  'Little Baddies',
  'Precious Threads',
  'Affrilux',
]

export const brandCards: BrandCard[] = [
  { id: 'big-bay-little-bay', name: 'Big Bay Little Bay', category: 'Kids fashion collective', image: media.brandBigBayLittleBayEvent, confirmed: true },
  { id: 'nv-kids', name: 'NVKids', category: 'Kids occasionwear', image: media.brandNVKidsEvent, confirmed: true },
  { id: 'fierce-and-flawless-couture', name: 'Fierce and Flawless Couture', category: 'Couture occasionwear', image: media.brandFierceAndFlawlessCoutureEvent, confirmed: true },
  { id: 'little-baddies', name: 'Little Baddies', category: 'Bold kidswear', image: media.brandLittleBaddiesEvent, confirmed: true },
  { id: 'precious-threads', name: 'Precious Threads', category: 'Performance fashion', image: media.brandPreciousThreadsEvent, confirmed: true },
  { id: 'affrilux', name: 'Affrilux', category: 'Colourful occasionwear', image: media.brandAffriluxEvent, confirmed: true },
]

export const faqItems: FaqItem[] = [
  {
    id: 'supervision',
    question: 'Who supervises the children?',
    answer:
      'Every group has dedicated event staff and chaperones. Guardians receive the event pack before arrival, and children are never expected to move through the event alone.',
  },
  {
    id: 'backstage',
    question: 'Can I stay backstage?',
    answer:
      'Backstage access is controlled for safety and space. The event pack explains the guardian viewing areas and the moments when supervised access is available.',
  },
  {
    id: 'photos',
    question: 'How are photos handled?',
    answer:
      'We request guardian consent before using event imagery. You can ask the team about privacy preferences and how a child’s images may be shared.',
  },
  {
    id: 'bring',
    question: 'What should my child bring?',
    answer:
      'Bring comfortable arrival clothes, water, any required medication, and the event confirmation. Outfit details are shared with guardians before the runway.',
  },
]

export const processSteps = [
  { number: '01', title: 'Register with a guardian', copy: 'Share the basics so our team can plan a safe, welcoming experience.' },
  { number: '02', title: 'Receive the event pack', copy: 'We send arrival, outfit, schedule and consent details by email.' },
  { number: '03', title: 'Arrive with your child', copy: 'Check in together and meet the team before the rehearsal begins.' },
  { number: '04', title: 'Watch them own the runway', copy: 'Celebrate the walk, the photographs and the confidence that follows.' },
]

export const contactDetails = [
  { label: 'Email', value: enquiryEmail, href: `mailto:${enquiryEmail}` },
  { label: 'Phone', value: '+61 433 715 955', href: 'tel:+61433715955' },
  { label: 'Instagram', value: '@nexgenrunwayaustralia', href: 'https://www.instagram.com/nexgenrunwayaustralia?igsh=MTRhMW8zcWw0YjYyNg==' },
  { label: 'Website', value: 'nexgenrunwayaustralia.com.au', href: 'https://nexgenrunwayaustralia.com.au' },
  { label: 'Next event', value: 'NexGen Runway 2.0 · Melbourne', href: '/next-runway' },
]

export const galleryFilters: { label: string; value: GalleryFilter }[] = [
  { label: 'All moments', value: 'all' },
  { label: 'Runway', value: 'runway' },
  { label: 'Backstage', value: 'backstage' },
  { label: 'Looks', value: 'looks' },
]
