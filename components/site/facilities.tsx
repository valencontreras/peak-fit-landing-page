import { CtaButton } from '@/components/site/cta-button'
import { FACILITIES } from '@/lib/content'

export function Facilities() {
  const tail = FACILITIES.slice(2)
  const tailSpan = tail.length >= 3 ? 'sm:col-span-2' : 'sm:col-span-3'

  return (
    <section id="instalaciones" className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-20 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:py-24">
        <div>
          <p className="eyebrow text-ink/45">Instalaciones</p>
          <h2 className="section-title">Todo lo que necesitas en un solo lugar</h2>
          <p className="body-copy text-ink/60">
            Contamos con espacios diseñados para que entrenes cómodo, seguro y con todo lo que necesitas para alcanzar tus objetivos.
          </p>
          <CtaButton href="#contacto" variant="dark">
            Ver todas las instalaciones
          </CtaButton>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
          {FACILITIES.map((facility, index) => {
            const isLead = index < 2
            return (
              <figure
                key={facility.title}
                className={`group relative overflow-hidden rounded-lg ${isLead ? 'sm:col-span-3' : tailSpan} ${
                  isLead ? 'h-56 lg:h-64' : 'h-44 lg:h-48'
                }`}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[11px] font-semibold tracking-wide text-white">
                  {facility.title}
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
