import { useEffect } from 'react'
import { ActionLink, Icon, PageIntro } from '../components/ui'
import { PageSection } from '../components/MarketingSections'
import { applicationFormUrl, runwayEvent } from '../data/site'

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, baseUrl: string) => void
  }
}

const jotformIframeId = 'JotFormIFrame-261431042081847'
const jotformEmbedHandlerUrl = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'

function JotformEmbed() {
  useEffect(() => {
    const scriptId = 'jotform-embed-handler'
    const initialiseEmbed = () => {
      window.jotformEmbedHandler?.(`iframe[id='${jotformIframeId}']`, 'https://form.jotform.com/')
    }
    const existingScript = document.getElementById(scriptId)
    if (existingScript) {
      if (window.jotformEmbedHandler) initialiseEmbed()
      else existingScript.addEventListener('load', initialiseEmbed, { once: true })
      return () => existingScript.removeEventListener('load', initialiseEmbed)
    }
    const script = document.createElement('script')
    script.id = scriptId
    script.src = jotformEmbedHandlerUrl
    script.async = true
    script.addEventListener('load', initialiseEmbed, { once: true })
    document.body.appendChild(script)
    return () => script.removeEventListener('load', initialiseEmbed)
  }, [])

  return (
    <div className="overflow-hidden bg-(--color-jotform-surface)">
      <iframe id={jotformIframeId} title="NexGen Runway Australia application form" src={applicationFormUrl} className="block min-h-[70rem] w-full border-0 sm:min-h-[78rem]" allow="geolocation; microphone; camera; fullscreen" loading="eager" scrolling="no" />
    </div>
  )
}

export default function ApplyPage() {
  return (
    <>
      <PageIntro eyebrow="Application / 01" title="Ready to walk?" copy="Tell us a little about your young model. A parent or legal guardian must complete this application." tone="gold">
        <div className="mt-7 bg-(--color-ink) p-5 text-(--color-paper) brutalborder hardshadowsm">
          <p className="font-bold text-xs uppercase text-white/60">{runwayEvent.name}</p>
          <p className="mt-2 font-display text-3xl uppercase">{runwayEvent.dateLabel}</p>
          <p className="mt-1 font-bold text-xs uppercase text-(--color-gold)">{runwayEvent.city} · {runwayEvent.venue}</p>
        </div>
      </PageIntro>
      <PageSection>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.28fr] lg:items-start">
          <section className="brutalborder bg-(--color-paper) p-3 hardshadow sm:p-5" aria-labelledby="application-form-heading">
            <div className="border-b-[3px] border-(--color-ink) px-3 pb-7 sm:px-5">
              <p className="font-bold text-xs uppercase tracking-[0.22em] text-(--color-muted)">Guardian-led registration</p>
              <h2 id="application-form-heading" className="mt-2 font-display text-5xl uppercase">Application form</h2>
              <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-(--color-muted)">Complete the official registration below. Jotform securely handles the application details, consent and optional photo upload.</p>
            </div>
            <div className="mt-5 brutalborder border-(--color-ink)" role="region" aria-label="Jotform application"><JotformEmbed /></div>
            <p className="px-3 pt-5 text-xs font-medium leading-relaxed text-(--color-muted) sm:px-5">Having trouble loading the form?{' '}<a href={applicationFormUrl} target="_blank" rel="noreferrer" className="font-bold text-(--color-ink) underline decoration-(--color-gold) decoration-2 underline-offset-4 hover:text-(--color-muted)">Open the application in a new tab <Icon name="arrow-up-right" className="ml-1 align-[-0.1em] text-sm" /></a></p>
          </section>
          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="bg-(--color-gold) p-6 brutalborder hardshadowsm"><Icon name="shield-check" className="text-4xl" /><h2 className="mt-5 font-display text-3xl uppercase">Guardian note</h2><p className="mt-3 text-sm font-bold leading-relaxed">Guardian-led registration · supervised backstage · privacy-first.</p><div className="mt-5"><ActionLink to="/parents" variant="ink">Read safety guide</ActionLink></div></div>
            <div><p className="font-bold text-xs uppercase tracking-[0.22em] text-(--color-muted)">What happens after you apply?</p><ol className="mt-4 space-y-3">{['Review', 'Confirmation', 'Event pack'].map((step, index) => <li key={step} className="flex items-center gap-3 border-b-2 border-(--color-ink) pb-3 font-display text-2xl uppercase"><span className="text-(--color-gold)">0{index + 1}</span>{step}</li>)}</ol></div>
          </aside>
        </div>
      </PageSection>
      <section className="border-y-[3px] border-(--color-ink) bg-(--color-ink) text-(--color-paper)"><PageSection className="flex flex-wrap items-center justify-between gap-5"><div><p className="font-display text-3xl uppercase">Need details before applying?</p><p className="mt-2 font-medium text-white/70">Read the parent guide or contact the team.</p></div><div className="flex gap-3"><ActionLink to="/parents" variant="gold">Parent guide</ActionLink><ActionLink to="/contact" variant="white">Contact</ActionLink></div></PageSection></section>
    </>
  )
}
