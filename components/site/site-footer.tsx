import { Mail } from 'lucide-react'

import { BrandLogo, SocialLinks } from '@/components/site/brand'
import { NAV_LINKS, SITE } from '@/lib/content'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <BrandLogo className="h-9" />

        <nav aria-label="Navegación del pie" className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="text-xs text-white/60 transition-colors hover:text-lime">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SocialLinks />
          <a
            href="mailto:hola@peakfit.cl"
            aria-label="Escríbenos un correo"
            className="grid size-9 place-items-center rounded-full text-white/65 transition-colors hover:bg-white/10 hover:text-lime"
          >
            <Mail size={17} aria-hidden />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© {year} PeakFit. Todos los derechos reservados.</span>
          <span>{SITE.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
