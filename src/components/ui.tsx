import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { RoutePath } from '../data/site'

interface ActionLinkProps {
  to: RoutePath
  children: ReactNode
  variant?: 'gold' | 'ink' | 'outline' | 'white'
  className?: string
}

const actionVariants = {
  gold: 'bg-(--color-gold) text-(--color-ink)',
  ink: 'bg-(--color-ink) text-(--color-paper)',
  outline: 'bg-transparent text-(--color-ink)',
  white: 'bg-(--color-paper) text-(--color-ink)',
}

export function ActionLink({ to, children, variant = 'gold', className = '' }: ActionLinkProps) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-12 items-center justify-center gap-3 brutalborder px-5 py-3 font-display text-lg uppercase tracking-wide hardshadowsm transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${actionVariants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}

export function Icon({ name, className = '' }: { name: string; className?: string }) {
  const iconClass = name === 'star-filled' ? 'ti ti-star icon-filled' : `ti ti-${name}`
  return <i className={`${iconClass} ${className}`} aria-hidden="true" />
}

interface PageIntroProps {
  eyebrow: string
  title: string
  copy: string
  tone?: 'gold' | 'ink' | 'paper'
  children?: ReactNode
}

export function PageIntro({ eyebrow, title, copy, tone = 'gold', children }: PageIntroProps) {
  const toneClasses = {
    gold: 'bg-(--color-gold) text-(--color-ink)',
    ink: 'bg-(--color-ink) text-(--color-paper)',
    paper: 'bg-(--color-paper) text-(--color-ink)',
  }
  return (
    <section className={`border-b-[3px] border-(--color-ink) ${toneClasses[tone]}`}>
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:px-12 lg:py-24">
        <div>
          <p className="mb-5 font-bold text-xs uppercase tracking-[0.22em]">{eyebrow}</p>
          <h1 className="max-w-5xl font-display text-6xl uppercase leading-[0.88] tracking-tight sm:text-8xl lg:text-[8.5rem]">{title}</h1>
        </div>
        <div className="max-w-xl lg:justify-self-end">
          <p className="text-lg font-medium leading-relaxed sm:text-xl">{copy}</p>
          {children}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 font-bold text-xs uppercase tracking-[0.22em] text-(--color-muted)">{eyebrow}</p> : null}
      <h2 className="font-display text-5xl uppercase leading-[0.92] tracking-tight sm:text-7xl">{title}</h2>
      {copy ? <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-(--color-muted) sm:text-lg">{copy}</p> : null}
    </div>
  )
}

export function StatTile({ value, label, tone = 'gold' }: { value: string; label: string; tone?: 'gold' | 'ink' | 'paper' }) {
  const toneClasses = {
    gold: 'bg-(--color-gold) text-(--color-ink)',
    ink: 'bg-(--color-ink) text-(--color-paper)',
    paper: 'bg-(--color-paper) text-(--color-ink)',
  }
  return (
    <div className={`brutalborder hardshadowsm p-4 ${toneClasses[tone]}`}>
      <p className="font-display text-4xl leading-none sm:text-5xl">{value}</p>
      <p className="mt-2 font-bold text-[0.65rem] uppercase leading-tight tracking-wide">{label}</p>
    </div>
  )
}

export const fieldClass =
  'mt-2 min-h-12 w-full brutalborder rounded-none bg-(--color-paper) px-4 py-3 text-base text-(--color-ink) placeholder:text-(--color-muted) focus:bg-(--color-gold)/10'
