import { homeArchiveMedia, media } from '../data/media'
import { ActionLink, SectionHeading, StatTile, Icon } from '../components/ui'
import { BrandsMarquee, GalleryBento, PageSection, PreviousRunwayVideo, RunwayTicket, SafetyComparison } from '../components/MarketingSections'

function Polaroid({ src, alt, label, className = '' }: { src: string; alt: string; label: string; className?: string }) {
  return (
    <figure className={`group bg-(--color-paper) p-3 brutalborder hardshadow transition-transform hover:-translate-y-2 ${className}`}>
      <div className="aspect-[4/5] overflow-hidden brutalborder bg-zinc-100">
        <img src={src} alt={alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
      </div>
      <figcaption className="pt-3 text-center font-display text-xl uppercase">{label}</figcaption>
    </figure>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="site-stripes overflow-hidden border-b-[3px] border-(--color-ink)">
        <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
          <p className="mb-6 text-center font-bold text-xs uppercase tracking-[0.24em]">Australia’s youth fashion stage · guardian-led events</p>
          <h1 className="text-center font-display text-[clamp(4rem,11vw,10rem)] uppercase leading-[0.82] tracking-tight">NexGen Runway Australia</h1>
          <p className="mx-auto mt-7 max-w-2xl text-center text-lg font-medium leading-relaxed text-(--color-muted) sm:text-xl">A bold runway experience for kids who love fashion, creativity and the confidence to own the room.</p>
          <div className="mx-auto mt-14 grid max-w-6xl items-end gap-7 md:grid-cols-4">
            <Polaroid src={media.homeRunwayHost.src} alt={media.homeRunwayHost.alt} label="On stage" className="md:-rotate-3" />
            <figure className="group bg-(--color-paper) p-3 brutalborder hardshadow md:col-span-2 md:-translate-y-5">
              <div className="aspect-[16/10] overflow-hidden brutalborder bg-zinc-100">
                <img src={media.homeRunwayFormal.src} alt={media.homeRunwayFormal.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
              </div>
              <figcaption className="flex items-center justify-between gap-4 px-1 pt-3 font-display text-xl uppercase sm:text-2xl"><span>Runway spotlight</span><span className="bg-(--color-gold) px-2 text-base">Featured</span></figcaption>
            </figure>
            <Polaroid src={media.homeRunwayLineup.src} alt={media.homeRunwayLineup.alt} label="Lineup look" className="md:rotate-3" />
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <ActionLink to="/apply" className="px-8 py-5 text-2xl">Register to walk <Icon name="arrow-right" /></ActionLink>
            <ActionLink to="/gallery" variant="outline" className="px-8 py-5 text-2xl">See the first show</ActionLink>
          </div>
        </div>
      </section>
      <PageSection className="pb-12 lg:pb-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <SectionHeading eyebrow="Next runway" title="Your next big walk starts here." copy="NexGen Runway 2.0 is coming to Melbourne at Bells Hotel, South Melbourne. The event date is TBC, so register your interest for the official event pack." />
          <div className="lg:justify-self-end"><ActionLink to="/next-runway">View runway details <Icon name="arrow-right" /></ActionLink></div>
        </div>
      </PageSection>
      <PageSection className="pt-0"><RunwayTicket compact /></PageSection>
      <section className="border-y-[3px] border-(--color-ink) bg-(--color-gold)">
        <PageSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="The archive" title="First show. Big energy." copy="A look back at the first NexGen Runway Australia show — every walk, look and loud cheer." />
            <div className="flex gap-3"><StatTile value="65+" label="models" tone="ink" /><StatTile value="6" label="brands" tone="paper" /><StatTile value="1" label="first show" tone="paper" /></div>
          </div>
          <div className="mt-12"><PreviousRunwayVideo src="/previous-runway.mp4" poster={media.homeRunwayFormal} /></div>
          <div className="mt-8"><GalleryBento items={homeArchiveMedia} /></div>
          <div className="mt-8 flex justify-end"><ActionLink to="/gallery" variant="ink">View full gallery <Icon name="arrow-right" /></ActionLink></div>
        </PageSection>
      </section>
      <BrandsMarquee />
      <PageSection>
        <SectionHeading eyebrow="For every guardian" title="The fun is bigger when the trust is too." copy="A creative runway moment should feel exciting for children and clear for the adults supporting them." />
        <div className="mt-12"><SafetyComparison /></div>
        <div className="mt-8 flex justify-end"><ActionLink to="/parents" variant="outline">Read the parent guide <Icon name="arrow-right" /></ActionLink></div>
      </PageSection>
      <section className="border-y-[3px] border-(--color-ink) bg-(--color-ink) text-(--color-paper)">
        <PageSection className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div><p className="mb-4 font-bold text-xs uppercase tracking-[0.22em] text-(--color-gold)">Need details?</p><h2 className="font-display text-6xl uppercase leading-[0.88] sm:text-8xl">Let’s make the next walk happen.</h2></div>
          <div className="lg:justify-self-end"><p className="max-w-md text-lg font-medium leading-relaxed text-white/70">For registration questions, brand partnerships or guardian support, send the team a note.</p><div className="mt-7 flex flex-wrap gap-4"><ActionLink to="/contact" variant="gold">Contact us <Icon name="arrow-right" /></ActionLink><ActionLink to="/apply" variant="white">Apply now</ActionLink></div></div>
        </PageSection>
      </section>
    </>
  )
}
