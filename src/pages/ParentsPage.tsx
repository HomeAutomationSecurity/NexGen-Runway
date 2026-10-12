import { ActionLink, Icon, PageIntro, SectionHeading } from '../components/ui'
import { FaqAccordion, PageSection, PromisePanel, SafetyComparison } from '../components/MarketingSections'
import { processSteps } from '../data/site'

export default function ParentsPage() {
  return (
    <>
      <PageIntro eyebrow="For every guardian" title="The fun is bigger when the trust is too." copy="A creative runway moment should feel exciting for children and clear for the adults supporting them." tone="paper">
        <div className="mt-7 flex items-center gap-3 bg-(--color-gold) p-3 brutalborder hardshadowsm"><Icon name="shield-check" className="text-2xl" /><span className="font-bold text-xs uppercase">Guardian-led · supervised · privacy-first</span></div>
      </PageIntro>
      <PageSection><SafetyComparison /></PageSection>
      <section className="border-y-[3px] border-(--color-ink) bg-(--color-gold)"><PageSection><SectionHeading eyebrow="Our parent promise" title="Clear expectations. Kind people. Safe spaces." copy="Every show is built around communication, supervision and respect for the child behind the look." /><div className="mt-10"><PromisePanel /></div></PageSection></section>
      <PageSection>
        <SectionHeading eyebrow="The process" title="Four steps to the big moment." />
        <ol className="mt-10 grid gap-5 md:grid-cols-4">
          {processSteps.map((step) => <li key={step.number} className="brutalborder bg-(--color-paper) p-6 hardshadowsm"><span className="font-display text-5xl text-(--color-gold)">{step.number}</span><h2 className="mt-5 font-display text-2xl uppercase leading-none">{step.title}</h2><p className="mt-3 text-sm font-medium leading-relaxed text-(--color-muted)">{step.copy}</p></li>)}
        </ol>
      </PageSection>
      <section className="border-y-[3px] border-(--color-ink) bg-zinc-100"><PageSection className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start"><SectionHeading eyebrow="Parent FAQ" title="Questions, answered." copy="Start here for the details guardians ask most often. The event pack will include show-specific information." /><FaqAccordion /></PageSection></section>
      <PageSection className="grid gap-6 bg-(--color-gold) lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="font-bold text-xs uppercase tracking-[0.22em]">Still have a question?</p><h2 className="mt-3 font-display text-5xl uppercase">Talk to the team.</h2></div><ActionLink to="/contact" variant="ink">Contact support <Icon name="arrow-right" /></ActionLink></PageSection>
    </>
  )
}
