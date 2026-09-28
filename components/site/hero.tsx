import { CtaButton } from '@/components/site/cta-button'

export function Hero() {
  return (
    <section id="inicio" className="hero-section relative flex min-h-[620px] items-center text-white lg:min-h-[700px]">
      <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-20 lg:px-8 lg:pt-32 lg:pb-24">
        <div className="max-w-xl">
          <p className="eyebrow text-white/70">Tu mejor versión empieza aquí</p>
          <h1 className="font-heading mt-5 text-[2.6rem] leading-[0.94] font-black tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.1rem]">
            Entrena. Supera.
            <br />
            <span className="text-lime">Repite.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
            En PeakFit te ayudamos a alcanzar tus objetivos con un ambiente motivador, instalaciones de primer nivel y un equipo de
            profesionales a tu lado.
          </p>
          <CtaButton href="#planes" className="mt-8">
            Conoce nuestros planes
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
