import { useState, type ReactNode } from 'react'
import type { MediaAsset } from '../data/media'
import { faqItems, brandNames, runwayEvent } from '../data/site'
import { galleryMedia } from '../data/media'
import { ActionLink, Icon, SectionHeading, StatTile } from './ui'

export function RunwayTicket({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brutalborder hardshadow overflow-hidden bg-(--color-paper)">
      <div className={`grid grid-cols-1 ${compact ? 'lg:grid-cols-[minmax(0,1fr)_18rem]' : 'md:grid-cols-[minmax(0,1fr)_18rem]'}`}>
        <div className={`relative min-w-0 p-6 sm:p-10 ${compact ? 'border-b-[3px] border-dashed border-(--color-ink) lg:border-b-0 lg:border-r-[3px] lg:border-dashed lg:border-(--color-ink)' : 'md:border-r-[3px] md:border-dashed md:border-(--color-ink)'}`}>
          <div className="mb-8 flex items-start justify-between gap-5">
            <div className="min-w-0">
              <p className="mb-2 font-bold text-xs uppercase tracking-[0.22em]">Upcoming show</p>
              <h2 className="max-w-2xl font-display text-5xl uppercase leading-[0.9] sm:text-7xl">{runwayEvent.name}</h2>
            </div>
            <div className="barcode hidden h-20 w-16 shrink-0 brutalborder sm:block" aria-label="Decorative barcode" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-(--color-ink) text-(--color-paper) brutalborder"><Icon name="calendar-event" className="text-xl" /></span>
              <div>
                <p className="font-bold text-[0.65rem] uppercase text-(--color-muted)">Date</p>
                <p className="font-display text-2xl uppercase">{runwayEvent.dateLabel}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-(--color-ink) text-(--color-paper) brutalborder"><Icon name="map-pin" className="text-xl" /></span>
              <div>
                <p className="font-bold text-[0.65rem] uppercase text-(--color-muted)">Location</p>
                <p className="font-display text-2xl uppercase">{runwayEvent.city}</p>
                <p className="mt-1 max-w-xs text-xs font-bold uppercase leading-tight text-(--color-muted)">{runwayEvent.venue}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="bg-(--color-ink) px-3 py-2 font-bold text-[0.65rem] uppercase text-(--color-paper)">Age: {runwayEvent.ageRange}</span>
            {runwayEvent.features.slice(1).map((feature) => <span key={feature} className="bg-(--color-ink) px-3 py-2 font-bold text-[0.65rem] uppercase text-(--color-paper)">{feature}</span>)}
          </div>
        </div>
        <div className="flex min-w-0 flex-col items-center justify-center bg-(--color-gold) p-7 text-center sm:p-10">
          <p className="font-display text-3xl uppercase leading-none">Want to be a star?</p>
          <div className="barcode my-7 h-20 w-full opacity-40" aria-hidden="true" />
          <ActionLink to="/apply" variant="white" className="w-full">Apply to walk</ActionLink>
          <p className="mt-5 max-w-48 font-bold text-[0.65rem] uppercase leading-tight">Guardian consent required for registration.</p>
        </div>
      </div>
    </div>
  )
}

export function ScheduleStrip() {
  return (
    <div className="brutalborder bg-(--color-ink) text-(--color-paper)">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {runwayEvent.schedule.map((item, index) => (
          <div key={item.time} className={`p-5 ${index > 0 ? 'border-t border-white/20 sm:border-l sm:border-t-0' : ''}`}>
            <p className="font-display text-4xl text-(--color-gold)">{item.time}</p>
            <p className="mt-1 font-bold text-xs uppercase tracking-wide text-white/70">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function BrandsMarquee() {
  const row = [...brandNames, ...brandNames]
  return (
    <section className="overflow-hidden bg-(--color-ink) py-8" aria-label="Brand roster">
      <div className="marquee-track gap-12 border-y-[3px] border-(--color-ink) bg-(--color-gold) px-6 py-3">
        {row.map((name, index) => <span key={`${name}-${index}`} className="font-display text-4xl uppercase sm:text-5xl">{name}</span>)}
      </div>
      <div className="marquee-track marquee-track-reverse gap-12 border-b-[3px] border-(--color-ink) bg-(--color-ink) px-6 py-4 text-(--color-paper)">
        {row.map((name, index) => <span key={`${name}-reverse-${index}`} className={`font-display text-4xl uppercase sm:text-5xl ${index % 2 ? 'text-outline text-(--color-gold)' : 'text-(--color-gold)'}`}>{name}</span>)}
      </div>
    </section>
  )
}

const galleryPositions = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
  'md:col-span-1 md:row-span-2',
  'md:col-span-1 md:row-span-1',
]

const galleryCaptions = [
  'Gold runway',
  'Couture trio',
  'Blue edit',
  'Step & repeat',
  'Pastel lineup',
  'Backstage group',
  'Pink edit',
  'Formal walk',
  'White looks',
]

export function GalleryBento({ items = galleryMedia }: { items?: MediaAsset[] }) {
  return (
    <div className="grid auto-rows-[13rem] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
      {items.map((item, index) => (
        <figure key={item.id} className={`group relative overflow-hidden brutalborder hardshadowsm ${galleryPositions[index] ?? 'md:col-span-1'}`}>
          <img src={item.src} alt={item.alt} style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
          <figcaption className="absolute bottom-3 left-3 bg-(--color-ink) px-3 py-2 font-display text-lg uppercase text-(--color-paper)">
            {galleryCaptions[index] ?? 'Runway archive'}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function PreviousRunwayVideo({ src, poster }: { src: string; poster: MediaAsset }) {
  return (
    <article className="brutalborder hardshadow overflow-hidden bg-(--color-paper)">
      <div className="aspect-video bg-(--color-ink)">
        <video className="h-full w-full object-cover" controls preload="metadata" playsInline poster={poster.src} aria-label="Previous NexGen Runway Australia show clip">
          <source src={src} type="video/mp4" />
          Your browser does not support HTML video. Please download the MP4 to watch the previous runway clip.
        </video>
      </div>
      <div className="grid gap-3 border-t-[3px] border-(--color-ink) p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6">
        <div>
          <p className="font-bold text-[0.65rem] uppercase tracking-[0.2em] text-(--color-muted)">Archive clip</p>
          <h3 className="mt-1 font-display text-3xl uppercase leading-none">The first walk</h3>
        </div>
        <p className="max-w-xl text-sm font-medium leading-relaxed text-(--color-muted)">Press play to revisit the energy of the first NexGen Runway Australia show.</p>
      </div>
    </article>
  )
}

export function SafetyComparison() {
  const funItems = ['High-energy runway walk', 'Professional styling and photos', 'Creative posing workshop', 'Confidence on a real stage']
  const safetyItems = ['Dedicated chaperones for every group', 'Parents-only backstage access', 'Vetted brand partners and staff', 'Privacy-first media consent']
  return (
    <div className="grid brutalborder hardshadow md:grid-cols-2">
      <div className="bg-(--color-gold) p-7 sm:p-12 md:border-r-[3px] md:border-(--color-ink)">
        <div className="mb-8 flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center bg-(--color-paper) brutalborder"><Icon name="star-filled" className="text-2xl" /></span>
          <h2 className="font-display text-5xl uppercase">The fun</h2>
        </div>
        <ul className="space-y-5">
          {funItems.map((item) => <li key={item} className="flex items-start gap-3 font-bold text-sm uppercase leading-snug sm:text-base"><span className="mt-1 h-5 w-5 shrink-0 bg-(--color-ink)" />{item}</li>)}
        </ul>
      </div>
      <div className="bg-(--color-paper) p-7 sm:p-12">
        <div className="mb-8 flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center bg-(--color-gold) brutalborder"><Icon name="shield-check" className="text-2xl" /></span>
          <h2 className="font-display text-5xl uppercase">The safety</h2>
        </div>
        <ul className="space-y-5">
          {safetyItems.map((item) => <li key={item} className="flex items-start gap-3 font-bold text-sm uppercase leading-snug sm:text-base"><span className="mt-1 h-5 w-5 shrink-0 brutalborder bg-(--color-gold)" />{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null)
  return (
    <div className="space-y-3">
      {faqItems.map((item) => {
        const isOpen = openId === item.id
        const panelId = `faq-panel-${item.id}`
        return (
          <div key={item.id} className="brutalborder bg-(--color-paper)">
            <button type="button" className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-xl uppercase sm:text-2xl" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenId(isOpen ? null : item.id)}>
              <span>{item.question}</span>
              <Icon name={isOpen ? 'minus' : 'plus'} className="shrink-0 text-2xl" />
            </button>
            <div id={panelId} className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="border-t-[3px] border-(--color-ink) px-5 py-5 text-sm font-medium leading-relaxed text-(--color-muted) sm:text-base">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function PromisePanel() {
  const promises = [
    ['01', 'Clear event packs', 'Guardians know the schedule, outfit expectations and consent details before arrival.'],
    ['02', 'Supervised spaces', 'Our backstage process is built around chaperones, check-in and controlled access.'],
    ['03', 'Respectful imagery', 'Media sharing starts with guardian consent and a conversation about privacy preferences.'],
  ]
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {promises.map(([number, title, copy]) => (
        <article key={number} className="brutalborder bg-(--color-paper) p-6 hardshadowsm">
          <p className="font-display text-5xl text-(--color-gold)">{number}</p>
          <h3 className="mt-5 font-display text-2xl uppercase">{title}</h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-(--color-muted)">{copy}</p>
        </article>
      ))}
    </div>
  )
}

export function ResultStrip() {
  return (
    <div className="grid brutalborder bg-(--color-ink) text-(--color-paper) sm:grid-cols-3">
      <StatTile value="65+" label="models" tone="ink" />
      <StatTile value="6" label="brands" tone="ink" />
      <StatTile value="1" label="big first show" tone="ink" />
    </div>
  )
}

export function PageSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24 ${className}`}>{children}</section>
}

export function MiniSectionHeading({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
}
