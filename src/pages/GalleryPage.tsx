import { useMemo, useState } from 'react'
import { galleryMedia, type GalleryFilter } from '../data/media'
import { galleryFilters } from '../data/site'
import { ActionLink, PageIntro, SectionHeading, Icon } from '../components/ui'
import { GalleryBento, PageSection, ResultStrip } from '../components/MarketingSections'

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryFilter>('all')
  const filteredMedia = useMemo(() => filter === 'all' ? galleryMedia : galleryMedia.filter((item) => item.category === filter), [filter])
  return (
    <>
      <PageIntro eyebrow="The archive / 01" title="First show. Big energy." copy="A look back at the first NexGen Runway Australia show — every walk, look and loud cheer.">
        <div className="mt-7 flex flex-wrap gap-2"><span className="bg-(--color-ink) px-3 py-2 font-bold text-xs uppercase text-(--color-paper)">50+ models</span><span className="bg-(--color-ink) px-3 py-2 font-bold text-xs uppercase text-(--color-paper)">12 brands</span></div>
      </PageIntro>
      <PageSection>
        <div className="flex flex-col justify-between gap-6 border-b-[3px] border-(--color-ink) pb-7 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Lookbook filters" title="Pick a moment." />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Gallery filters">
            {galleryFilters.map((item) => <button key={item.value} type="button" aria-pressed={filter === item.value} onClick={() => setFilter(item.value)} className={`min-h-11 brutalborder px-4 py-2 font-bold text-xs uppercase transition-colors ${filter === item.value ? 'bg-(--color-gold)' : 'bg-(--color-paper) hover:bg-(--color-gold)/40'}`}>{item.label}</button>)}
          </div>
        </div>
        <div className="mt-10"><GalleryBento items={filteredMedia} /></div>
        <div className="mt-10"><ResultStrip /></div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t-[3px] border-(--color-ink) pt-7"><p className="max-w-xl text-base font-medium leading-relaxed text-(--color-muted)">The first show was only the beginning. More runway stories, brand looks and guardian-approved moments are on the way.</p><ActionLink to="/contact">Request the lookbook <Icon name="arrow-right" /></ActionLink></div>
      </PageSection>
    </>
  )
}
