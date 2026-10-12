import { ActionLink, Icon, PageIntro, SectionHeading } from '../components/ui'
import { PageSection, RunwayTicket, ScheduleStrip } from '../components/MarketingSections'
import { processSteps, runwayEvent } from '../data/site'

export default function NextRunwayPage() {
  return (
    <>
      <PageIntro eyebrow="Next runway / 01" title="The next walk starts here." copy="Australia-wide casting for the next generation of confident, creative models.">
        <div className="mt-7 flex items-center gap-3"><span className="barcode h-12 w-20 border-2 border-(--color-ink) bg-(--color-gold)" aria-hidden="true" /><span className="font-display text-2xl uppercase">Casting soon</span></div>
      </PageIntro>
      <PageSection>
        <RunwayTicket />
        <div className="mt-12"><ScheduleStrip /></div>
      </PageSection>
      <section className="border-y-[3px] border-(--color-ink) bg-(--color-gold)">
        <PageSection>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
            <SectionHeading eyebrow="Make the day easy" title="Come ready to feel brilliant." copy="A simple prep list keeps the day focused on the fun. The event pack will include call time, outfit notes and guardian consent details." />
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="bg-(--color-paper) p-6 brutalborder hardshadowsm"><h2 className="font-display text-3xl uppercase">What to bring</h2><ul className="mt-5 space-y-3 text-sm font-bold uppercase"><li>• Comfortable arrival clothes</li><li>• Water and required medication</li><li>• Guardian ID and consent details</li><li>• Big energy</li></ul></article>
              <article className="bg-(--color-ink) p-6 text-(--color-paper) brutalborder hardshadowsm"><h2 className="font-display text-3xl uppercase text-(--color-gold)">What happens next</h2><ol className="mt-5 space-y-4 text-sm font-bold uppercase">{processSteps.slice(0, 3).map((step) => <li key={step.number} className="flex gap-3"><span className="font-display text-2xl text-(--color-gold)">{step.number}</span><span>{step.title}</span></li>)}</ol></article>
            </div>
          </div>
        </PageSection>
      </section>
      <PageSection className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div><p className="font-bold text-xs uppercase tracking-[0.22em] text-(--color-muted)">For guardians</p><h2 className="mt-3 font-display text-5xl uppercase leading-none sm:text-7xl">Ready to walk?</h2><p className="mt-4 max-w-xl text-lg leading-relaxed text-(--color-muted)">Registration is completed by a parent or legal guardian. The next date is currently being confirmed.</p></div>
        <ActionLink to="/apply" className="text-2xl">Start application <Icon name="arrow-right" /></ActionLink>
      </PageSection>
      <p className="sr-only">Current event details: {runwayEvent.city}, {runwayEvent.venue}</p>
    </>
  )
}
