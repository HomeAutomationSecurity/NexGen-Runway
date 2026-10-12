import { useState, type FormEvent } from 'react'
import { ActionLink, fieldClass, Icon, PageIntro, SectionHeading } from '../components/ui'
import { PageSection } from '../components/MarketingSections'
import { contactDetails, enquiryEmail } from '../data/site'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '')
    const role = String(formData.get('role') ?? '')
    const email = String(formData.get('email') ?? '')
    const message = String(formData.get('message') ?? '')
    const subject = `NexGen Runway enquiry — ${role}`
    const body = [`Name: ${name}`, `Role: ${role}`, `Email: ${email}`, '', 'Message:', message].join('\n')
    setSubmitted(true)
    form.reset()
    window.location.assign(`mailto:${enquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
  }

  return (
    <>
      <PageIntro eyebrow="Get in touch / 01" title="Need details?" copy="Whether you are a guardian, young model or fashion brand, we are here to help you take the next step." />
      <PageSection>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <div>
            <SectionHeading title="Start the conversation." copy="Use the form for general questions, event updates or brand partnership enquiries. We will reply with the latest confirmed information." />
            <div className="mt-10 space-y-5">
              {contactDetails.map((detail) => <a key={detail.label} href={detail.href} className="block border-b-[3px] border-(--color-ink) pb-5 transition-colors hover:border-(--color-gold)"><p className="font-bold text-xs uppercase tracking-wide text-(--color-muted)">{detail.label}</p><p className="mt-2 font-display text-2xl uppercase sm:text-3xl">{detail.value}</p></a>)}
            </div>
            <div className="mt-10 bg-(--color-gold) p-6 brutalborder hardshadowsm"><p className="font-display text-3xl uppercase">Want to partner?</p><p className="mt-3 text-sm font-medium leading-relaxed">Join the featured roster and explore how a collection can show up on the next stage.</p><div className="mt-5"><ActionLink to="/brands" variant="ink">See brand options <Icon name="arrow-right" /></ActionLink></div></div>
          </div>
          <form onSubmit={handleSubmit} className="brutalborder bg-(--color-paper) p-6 hardshadow sm:p-10" noValidate={false}>
            <div className="flex items-start justify-between gap-4 border-b-[3px] border-(--color-ink) pb-6"><div><p className="font-bold text-xs uppercase tracking-[0.22em] text-(--color-muted)">Enquiry form</p><h2 className="mt-2 font-display text-4xl uppercase">Send an enquiry.</h2></div><Icon name="mail" className="text-4xl text-(--color-gold)" /></div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <label className="font-bold text-xs uppercase">Your name<input className={fieldClass} name="name" type="text" autoComplete="name" required /></label>
              <label className="font-bold text-xs uppercase">I am a<select className={fieldClass} name="role" defaultValue="guardian" required><option value="guardian">Guardian</option><option value="model">Young model</option><option value="brand">Fashion brand</option></select></label>
              <label className="font-bold text-xs uppercase sm:col-span-2">Email<input className={fieldClass} name="email" type="email" autoComplete="email" required /></label>
              <label className="font-bold text-xs uppercase sm:col-span-2">Message<textarea className={`${fieldClass} min-h-36`} name="message" required /></label>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5"><button type="submit" className="inline-flex min-h-12 items-center gap-3 brutalborder bg-(--color-ink) px-6 py-3 font-display text-xl uppercase text-(--color-paper) hardshadowsm transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none">Send enquiry <Icon name="arrow-right" /></button>{submitted ? <p className="font-bold text-sm uppercase text-green-700" role="status">Your email draft is ready to send.</p> : <p className="max-w-xs text-xs font-medium leading-relaxed text-(--color-muted)">Submitting opens your email app with the enquiry addressed to {enquiryEmail}.</p>}</div>
          </form>
        </div>
      </PageSection>
      <section className="border-y-[3px] border-(--color-ink) bg-(--color-ink) text-(--color-paper)"><PageSection className="flex flex-wrap items-center justify-between gap-6"><div><p className="font-bold text-xs uppercase tracking-[0.22em] text-(--color-gold)">Social / support</p><h2 className="mt-3 font-display text-4xl uppercase">@nexgenrunwayaustralia</h2></div><div className="flex gap-3"><ActionLink to="/apply" variant="gold">Apply now</ActionLink><ActionLink to="/parents" variant="white">Parent guide</ActionLink></div></PageSection></section>
    </>
  )
}
