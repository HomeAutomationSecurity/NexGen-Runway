import { ActionLink, Icon, PageIntro, SectionHeading } from '../components/ui'
import { BrandsMarquee, PageSection } from '../components/MarketingSections'
import { brandCards } from '../data/site'

export default function BrandsPage() {
  return (
    <>
      <PageIntro eyebrow="Brand roster / 01" title="The brands behind the walk." copy="We bring fresh labels, bold ideas and a shared belief in young creative talent." tone="ink">
        <div className="mt-7 inline-flex bg-(--color-gold) px-3 py-2 font-bold text-xs uppercase text-(--color-ink)">Featured roster · 2026</div>
      </PageIntro>
      <BrandsMarquee />
      <PageSection>
        <div className="flex flex-col justify-between gap-6 border-b-[3px] border-(--color-ink) pb-8 md:flex-row md:items-end"><SectionHeading eyebrow="Featured roster" title="Style with a point of view." copy="Explore the labels and collections represented in the NexGen Runway Australia event archive." /><p className="max-w-xs font-bold text-xs uppercase leading-relaxed text-(--color-muted)">Featured event roster · 2026</p></div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brandCards.map((brand) => <article key={brand.id} className="group brutalborder bg-(--color-paper) p-4 hardshadowsm transition-transform hover:-translate-y-1"><div className="aspect-[4/3] overflow-hidden brutalborder bg-(--color-gold)">{brand.image ? <img src={brand.image.src} alt={brand.image.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" decoding="async" /> : <div className="flex h-full items-center justify-center font-display text-4xl uppercase">{brand.name}</div>}</div><div className="flex items-end justify-between gap-4 pt-5"><div><h2 className="font-display text-3xl uppercase leading-none">{brand.name}</h2><p className="mt-2 font-bold text-xs uppercase text-(--color-muted)">{brand.category}</p></div><span className="bg-(--color-gold) px-2 py-1 font-bold text-[0.6rem] uppercase">Featured</span></div><LinkText /></article>)}
        </div>
      </PageSection>
      <section className="border-y-[3px] border-(--color-ink) bg-(--color-gold)"><PageSection className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center"><div><p className="font-bold text-xs uppercase tracking-[0.22em]">For fashion brands</p><h2 className="mt-4 font-display text-6xl uppercase leading-[0.88] sm:text-8xl">Put your label on the runway.</h2></div><div><p className="text-lg font-medium leading-relaxed">Showcase a collection, create content with purpose and help young talent experience a professional stage.</p><ul className="mt-6 space-y-3 font-bold text-sm uppercase"><li>• Curated styling and brand presentation</li><li>• Runway and backstage content opportunities</li><li>• A guardian-first event environment</li></ul><div className="mt-8"><ActionLink to="/contact" variant="ink">Partner with us <Icon name="arrow-right" /></ActionLink></div></div></PageSection></section>
    </>
  )
}

function LinkText() {
  return <span className="mt-5 inline-flex items-center gap-2 font-bold text-xs uppercase underline decoration-2 underline-offset-4">View brand story <Icon name="arrow-up-right" className="text-base" /></span>
}
