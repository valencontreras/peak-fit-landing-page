'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { BrandLogo } from '@/components/site/brand'
import { CtaButton } from '@/components/site/cta-button'
import { NAV_LINKS } from '@/lib/content'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>(NAV_LINKS[0].id)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (section): section is HTMLElement => section !== null,
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (mostVisible) setActive(mostVisible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen ? 'border-white/10 bg-ink/90 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
        <BrandLogo priority className="h-8" />

        <nav aria-label="Navegación principal" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={`nav-link ${active === link.id ? 'active' : ''}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CtaButton href="#planes" className="hidden px-5 py-2.5 md:inline-flex">
            Únete ahora
          </CtaButton>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-lime/60 hover:text-lime md:hidden"
          >
            {menuOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="menu-movil" aria-label="Navegación móvil" className="border-t border-white/10 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-lime"
              >
                {link.label}
              </a>
            ))}
            <CtaButton href="#planes" shape="block" className="mt-3">
              Únete ahora
            </CtaButton>
          </div>
        </nav>
      )}
    </header>
  )
}
