import { Check } from 'lucide-react'

import { CtaButton } from '@/components/site/cta-button'
import { PLANS, PLAN_PERKS } from '@/lib/content'

export function Plans() {
  return (
    <section id="planes" className="plans-section text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-20 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:py-24">
        <div>
          <p className="eyebrow text-white/55">Planes</p>
          <h2 className="section-title">El plan perfecto para ti</h2>
          <p className="body-copy text-white/60">
            Elige el plan que se adapte a tus necesidades y comienza hoy tu camino hacia una vida más saludable.
          </p>

          <ul className="mb-8 space-y-3">
            {PLAN_PERKS.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-xs text-white/80">
                <span aria-hidden className="grid size-4 shrink-0 place-items-center rounded-full bg-lime text-ink">
                  <Check size={10} strokeWidth={4} />
                </span>
                {perk}
              </li>
            ))}
          </ul>

          <CtaButton href="#contacto" variant="outline">
            Ver todos los planes
          </CtaButton>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-6 backdrop-blur-sm transition-colors ${
                plan.featured
                  ? 'border-lime/70 bg-[#131a1c]/95 shadow-[0_28px_70px_-45px_rgba(217,255,36,0.6)] md:-my-2 md:pt-8'
                  : 'border-white/10 bg-[#131a1c]/85 hover:border-white/25'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-3.5 py-1 text-[10px] font-bold whitespace-nowrap text-ink">
                  Más popular
                </span>
              )}

              <h3 className="text-sm font-bold tracking-tight text-white">{plan.name}</h3>
              <p className="mt-2 text-[11px] leading-relaxed text-white/50">{plan.description}</p>

              <p className="mt-5 flex items-baseline gap-1.5">
                <span className="font-heading text-4xl font-black tracking-tight text-white">{plan.price}</span>
                <span className="text-[11px] text-white/45">/mes</span>
              </p>

              <ul className="mt-5 flex-1 space-y-2.5 border-t border-white/10 pt-5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[11px] text-white/70">
                    <Check size={13} strokeWidth={3} aria-hidden className="mt-px shrink-0 text-lime" />
                    {feature}
                  </li>
                ))}
              </ul>

              <CtaButton
                href="#contacto"
                shape="block"
                variant={plan.featured ? 'primary' : 'outline'}
                withIcon={false}
                className="mt-6 py-3.5 text-[11px]"
              >
                Seleccionar plan
              </CtaButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
