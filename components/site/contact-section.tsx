import { Clock3, MapPin } from 'lucide-react'

import { ContactForm } from '@/components/site/contact-form'
import { CtaButton } from '@/components/site/cta-button'
import { SITE } from '@/lib/content'

function MapCard() {
  return (
    <div
      role="img"
      aria-label={`Mapa con la ubicación de PeakFit en ${SITE.address.join(', ')}`}
      className="map-card"
    >
      <div aria-hidden className="map-grid" />
      <div aria-hidden className="map-streets" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/40" />

      <span aria-hidden className="map-label top-[22%] left-[7%] -rotate-12">
        Av. Los Alerces
      </span>
      <span aria-hidden className="map-label right-[8%] bottom-[24%] rotate-6">
        Av. Providencia
      </span>
      <span aria-hidden className="map-label bottom-[45%] left-[44%] -rotate-3">
        Los Nogales
      </span>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative grid place-items-center">
          <span aria-hidden className="absolute size-9 animate-ping rounded-full bg-lime/30" />
          <MapPin size={38} fill="currentColor" aria-hidden className="relative text-lime drop-shadow-[0_6px_14px_rgba(0,0,0,0.65)]" />
        </div>
        <span className="mt-2 rounded-full bg-lime px-3 py-1 text-[10px] font-bold text-ink">PeakFit</span>
      </div>
    </div>
  )
}

export function ContactSection() {
  return (
    <section id="ubicacion" className="contact-section text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[minmax(0,15rem)_minmax(0,1.15fr)_minmax(0,1.05fr)] lg:gap-10 lg:px-8 lg:py-24">
        <div>
          <p className="eyebrow text-white/55">Ubicación</p>
          <h2 className="section-title">Visítanos</h2>

          <div className="mt-6 space-y-4 text-xs leading-relaxed text-white/65">
            <p className="flex gap-3">
              <MapPin size={17} aria-hidden className="mt-0.5 shrink-0 text-lime" />
              <span>
                {SITE.address[0]}
                <br />
                {SITE.address[1]}
              </span>
            </p>
            <p className="flex gap-3">
              <Clock3 size={17} aria-hidden className="mt-0.5 shrink-0 text-lime" />
              <span>
                {SITE.hours.map((slot) => (
                  <span key={slot.days} className="block">
                    {slot.days}: {slot.time}
                  </span>
                ))}
              </span>
            </p>
          </div>

          <CtaButton href={SITE.mapsUrl} external variant="outline" className="mt-7">
            Cómo llegar
          </CtaButton>
        </div>

        <MapCard />

        <div id="contacto">
          <p className="eyebrow text-white/55">Contacto</p>
          <h2 className="section-title section-title-sm">Escríbenos</h2>
          <p className="mt-4 mb-5 text-xs leading-relaxed text-white/60">
            ¿Tienes dudas? Completa el formulario y nos pondremos en contacto contigo.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
