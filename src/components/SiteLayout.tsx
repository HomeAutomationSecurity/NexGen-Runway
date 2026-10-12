import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { enquiryEmail, navItems } from '../data/site'
import { ActionLink, Icon } from './ui'

function SiteHeader() {
  const location = useLocation()
  const [menuOpenAtPath, setMenuOpenAtPath] = useState<string | null>(null)
  const menuOpen = menuOpenAtPath === location.pathname

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpenAtPath(null)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-2 py-2 font-bold text-xs uppercase tracking-wide underline-offset-4 transition-colors hover:underline ${isActive ? 'bg-(--color-gold) text-(--color-ink)' : 'text-(--color-ink)'}`

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-(--color-ink) bg-(--color-paper)">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-8 lg:px-12">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="NexGen Runway Australia home">
          <span className="inline-flex shrink-0 bg-(--color-ink) p-1.5 brutalborder hardshadowsm">
            <img src="/nexgen-runway-australia-logo.png" alt="NexGen Runway Australia logo" className="h-11 w-24 object-contain" decoding="async" loading="lazy" />
          </span>
          <span className="max-w-36 font-display text-xl uppercase leading-none tracking-tight sm:max-w-none">NexGen Runway Australia</span>
        </Link>
        <nav className="hidden items-center gap-4 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>{item.label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block"><ActionLink to="/apply">Apply Now</ActionLink></div>
          <button type="button" className="inline-flex h-12 w-12 items-center justify-center brutalborder bg-(--color-gold) text-2xl lg:hidden" aria-controls="mobile-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpenAtPath(menuOpen ? null : location.pathname)}><Icon name={menuOpen ? 'x' : 'menu-2'} /></button>
        </div>
      </div>
      <div className={`${menuOpen ? 'block' : 'hidden'} border-t-[3px] border-(--color-ink) bg-(--color-gold) lg:hidden`} id="mobile-navigation">
        <nav className="mx-auto grid w-full max-w-7xl gap-1 px-4 py-4 sm:px-8" aria-label="Mobile navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass} onClick={() => setMenuOpenAtPath(null)}>{item.label}</NavLink>)}
          <NavLink to="/apply" className={linkClass} onClick={() => setMenuOpenAtPath(null)}>Apply Now</NavLink>
        </nav>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-(--color-ink) bg-(--color-ink) text-(--color-paper)">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:px-12">
        <Link to="/" className="font-display text-3xl uppercase leading-none">NexGen Runway Australia</Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-bold text-xs uppercase" aria-label="Footer navigation">
          {navItems.slice(1).map((item) => <Link key={item.to} to={item.to} className="hover:text-(--color-gold)">{item.label}</Link>)}
        </nav>
        <div className="lg:justify-self-end lg:text-right">
          <p className="font-bold text-xs uppercase tracking-wide text-white/60">Get notified about the next casting call.</p>
          <Link to="/contact" className="mt-2 inline-flex items-center gap-2 font-display text-xl uppercase text-(--color-gold)">{enquiryEmail} <Icon name="arrow-up-right" className="text-base" /></Link>
        </div>
      </div>
      <div className="border-t border-white/20 px-5 py-4 text-center font-bold text-[0.65rem] uppercase tracking-[0.16em] text-white/50">© 2026 NexGen Runway Australia · Guardian-led events · Privacy-first</div>
    </footer>
  )
}

function RouteScrollReset() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [location.pathname])
  return null
}

export default function SiteLayout() {
  return <div className="min-h-screen bg-(--color-paper) text-(--color-ink)"><RouteScrollReset /><SiteHeader /><main><Outlet /></main><SiteFooter /></div>
}
