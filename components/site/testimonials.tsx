'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

import { CtaButton } from '@/components/site/cta-button'
import { TESTIMONIALS } from '@/lib/content'

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const syncArrows = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const maxScroll = track.scrollWidth - track.clientWidth
    setAtStart(track.scrollLeft <= 4)
    setAtEnd(track.scrollLeft >= maxScroll - 4)
  }, [])

  useEffect(() => {
    syncArrows()
    const track = trackRef.current
    if (!track || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(syncArrows)
    observer.observe(track)
    return () => observer.disconnect()
  }, [syncArrows])

  function scrollCards(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.8
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  const arrowClass =
    'grid size-9 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-ink/15 disabled:hover:bg-transparent disabled:hover:text-ink'

  return (
    <section id="testimonios" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:py-24">
        <div>
          <p className="eyebrow text-ink/45">Testimonios</p>
          <h2 className="section-title">Personas reales, resultados reales</h2>
          <p className="body-copy text-ink/60">Conoce lo que dicen nuestros miembros sobre su experiencia en PeakFit.</p>
          <CtaButton href="#contacto" variant="dark">
            Ver más testimonios
          </CtaButton>
        </div>

        <div className="flex items-center gap-3">
          <div
            ref={trackRef}
            onScroll={syncArrows}
            className="no-scrollbar flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1"
          >
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.name}
                className="w-[85%] flex-none snap-start rounded-lg border border-black/5 bg-white p-5 shadow-[0_2px_10px_-4px_rgba(16,20,23,0.18)] sm:w-[47%] lg:w-[calc((100%-2rem)/3)]"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xs font-bold text-ink">{testimonial.name}</h3>
                    <p className="text-[10px] text-ink/50">{testimonial.since}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-ink/65">“{testimonial.quote}”</p>
                <p className="mt-4 flex gap-0.5 text-amber-400">
                  <span className="sr-only">5 de 5 estrellas</span>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={13} fill="currentColor" strokeWidth={0} aria-hidden />
                  ))}
                </p>
              </article>
            ))}
          </div>

          <div className="hidden shrink-0 flex-col gap-2 sm:flex">
            <button type="button" onClick={() => scrollCards(-1)} disabled={atStart} aria-label="Testimonios anteriores" className={arrowClass}>
              <ChevronLeft size={16} aria-hidden />
            </button>
            <button type="button" onClick={() => scrollCards(1)} disabled={atEnd} aria-label="Testimonios siguientes" className={arrowClass}>
              <ChevronRight size={16} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
