import { PILLARS } from '@/lib/content'

export function Benefits() {
  return (
    <section aria-label="Beneficios de PeakFit" className="benefit-strip">
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-7 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {PILLARS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4">
            <Icon size={22} strokeWidth={1.8} aria-hidden className="mt-0.5 shrink-0 text-lime" />
            <div>
              <p className="text-[13px] font-bold text-white">{title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/55">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
