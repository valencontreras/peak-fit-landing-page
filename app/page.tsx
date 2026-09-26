'use client'

import { FormEvent, useState } from 'react'
import {
  ArrowRight,
  Clock3,
  Dumbbell,
  Heart,
  Mail,
  MapPin,
  Menu,
  Play,
  Star,
  Trophy,
  Users,
  X,
} from 'lucide-react'

const facilities = [
  { title: 'Área de musculación', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85', wide: true },
  { title: 'Área cardiovascular', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=85', wide: true },
  { title: 'Clases grupales', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=85' },
  { title: 'Vestidores y duchas', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=85' },
  { title: 'Zona funcional', image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=85' },
]

const plans = [
  { name: 'Básico', price: '$29', description: 'Ideal para quienes comienzan o entrenan de forma ocasional.', features: ['Acceso al área de musculación', 'Área cardiovascular', 'Vestidores y duchas'] },
  { name: 'Estándar', price: '$49', description: 'El equilibrio perfecto entre precio y beneficios.', features: ['Acceso a todas las áreas', 'Clases grupales', 'Seguimiento básico'], popular: true },
  { name: 'Premium', price: '$69', description: 'La mejor experiencia, con beneficios exclusivos.', features: ['Acceso a todas las áreas', 'Clases grupales ilimitadas', 'Seguimiento personalizado', 'Invitaciones a eventos especiales'] },
]

const testimonials = [
  { name: 'Laura Gómez', since: 'Miembro desde 2023', quote: 'El mejor lugar para entrenar. El ambiente es increíble y los entrenadores siempre están pendientes de ti.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80' },
  { name: 'Andrés Silva', since: 'Miembro desde 2024', quote: 'Las instalaciones son de primera y los planes se ajustan a lo que necesitas. He notado un gran cambio en mi rendimiento.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
  { name: 'Valentina Rojas', since: 'Miembro desde 2022', quote: 'Me encanta la variedad de clases y la motivación que se respira. Sin duda, la mejor decisión que he tomado.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80' },
]

function Logo() {
  return <a href="#inicio" className="flex items-center gap-2 font-heading text-lg font-extrabold tracking-tight"><span className="logo-mark">▲</span> Peak<span className="text-lime">Fit</span></a>
}

function Button({ children, dark = false, href = '#' }: { children: React.ReactNode; dark?: boolean; href?: string }) {
  return <a href={href} className={`inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-xs font-bold transition-transform hover:-translate-y-0.5 ${dark ? 'bg-ink text-white hover:bg-ink/90' : 'bg-lime text-ink hover:bg-lime-light'}`}>{children}<ArrowRight size={15} /></a>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="overflow-hidden bg-paper text-ink">
      <section id="inicio" className="hero-section min-h-[680px] text-white">
        <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
          <Logo />
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-16 flex-col gap-5 rounded-2xl border border-white/10 bg-ink/95 p-5 text-sm md:static md:flex md:flex-row md:items-center md:gap-9 md:border-0 md:bg-transparent md:p-0`}>
            {['Inicio', 'Instalaciones', 'Planes', 'Ubicación', 'Contacto'].map((item, i) => <a key={item} href={`#${['inicio', 'instalaciones', 'planes', 'ubicacion', 'contacto'][i]}`} onClick={() => setMenuOpen(false)} className={`nav-link ${i === 0 ? 'active' : ''}`}>{item}</a>)}
          </nav>
          <div className="flex items-center gap-3"><a href="#contacto" className="hidden rounded-full bg-lime px-5 py-3 text-xs font-bold text-ink transition hover:bg-lime-light sm:inline-flex">Únete ahora</a><button aria-label="Abrir menú" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
        </header>
        <div className="relative z-10 mx-auto flex max-w-6xl items-center px-5 pb-24 pt-20 lg:px-8 lg:pt-24">
          <div className="max-w-xl"><p className="eyebrow text-lime">Tu mejor versión empieza aquí</p><h1 className="mt-4 font-heading text-5xl font-black leading-[.95] tracking-tight sm:text-7xl">Entrena. Supera.<br /><span className="text-lime">Repite.</span></h1><p className="mt-6 max-w-md text-sm leading-6 text-white/75 sm:text-base">En PeakFit te ayudamos a alcanzar tus objetivos con un ambiente motivador, instalaciones de primer nivel y un equipo de profesionales a tu lado.</p><Button href="#planes">Conoce nuestros planes</Button></div>
        </div>
      </section>

      <section className="benefit-strip"><div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-7 md:grid-cols-4 lg:px-8">{[[Dumbbell, 'Entrenadores certificados', 'Te guían en cada paso de tu progreso.'], [Heart, 'Ambiente motivador', 'Una comunidad que te impulsa.'], [Clock3, 'Horario extendido', 'Entrena cuando mejor te quede.'], [Trophy, 'Equipamiento de calidad', 'Máquinas y áreas de última generación.']].map(([Icon, title, copy]) => <div key={title as string} className="flex gap-3"><Icon className="shrink-0 text-lime" size={26} strokeWidth={1.7} /><div><h3 className="text-sm font-bold text-white">{title as string}</h3><p className="mt-1 text-xs leading-5 text-white/55">{copy as string}</p></div></div>)}</div></section>

      <section id="instalaciones" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[.8fr_1.5fr] lg:items-center lg:px-8"><div><p className="eyebrow">Instalaciones</p><h2 className="section-title">Todo lo que necesitas<br />en un solo lugar</h2><p className="body-copy">Contamos con espacios diseñados para que entrenes cómodo, seguro y con todo lo que necesitas para alcanzar tus objetivos.</p><Button dark href="#contacto">Ver todas las instalaciones</Button></div><div className="grid grid-cols-6 gap-2.5">{facilities.map((facility) => <figure key={facility.title} className={`${facility.wide ? 'col-span-3' : 'col-span-2'} group relative h-36 overflow-hidden rounded-md sm:h-44`}><img src={facility.image} alt={facility.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8 text-[11px] font-semibold text-white">{facility.title}</figcaption></figure>)}</div></section>

      <section id="planes" className="plans-section"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[.8fr_1.8fr] lg:px-8"><div className="text-white"><p className="eyebrow text-lime">Planes</p><h2 className="section-title">El plan perfecto<br />para ti</h2><p className="body-copy text-white/70">Elige el plan que se adapte a tus necesidades y comienza hoy tu camino hacia una vida más saludable.</p><ul className="mb-8 space-y-3 text-xs text-white/80">{['Acceso a todas las áreas del gimnasio', 'Clases grupales incluidas', 'Seguimiento personalizado (según plan)', 'Sin costos de inscripción'].map((item) => <li key={item} className="flex items-center gap-2"><span className="grid h-4 w-4 place-items-center rounded-full bg-lime text-[10px] font-bold text-ink">✓</span>{item}</li>)}</ul><Button href="#contacto">Ver todos los planes</Button></div><div className="grid gap-3 md:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`relative rounded-lg border p-5 ${plan.popular ? 'border-lime bg-ink-light' : 'border-white/15 bg-white/[.04]'}`}>{plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-4 py-1 text-[10px] font-bold text-ink">Más popular</span>}<h3 className="text-lg font-bold text-white">{plan.name}</h3><p className="mt-3 min-h-12 text-xs leading-5 text-white/60">{plan.description}</p><p className="mt-3 font-heading text-3xl font-black text-white">{plan.price}<span className="ml-1 text-xs font-normal text-white/60">/mes</span></p><ul className="my-6 space-y-3 text-xs text-white/75">{plan.features.map((feature) => <li key={feature} className="flex gap-2"><span className="text-lime">✓</span>{feature}</li>)}</ul><a href="#contacto" className={`flex w-full justify-center rounded-full border px-3 py-3 text-xs font-bold ${plan.popular ? 'border-lime bg-lime text-ink' : 'border-white/60 text-white'}`}>Seleccionar plan</a></article>)}</div></div></section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[.8fr_2fr] lg:px-8"><div><p className="eyebrow">Testimonios</p><h2 className="section-title">Personas reales,<br />resultados reales</h2><p className="body-copy">Conoce lo que dicen nuestros miembros sobre su experiencia en PeakFit.</p><Button dark href="#contacto">Ver más testimonios</Button></div><div className="grid gap-4 md:grid-cols-3">{testimonials.map((item) => <article key={item.name} className="rounded-lg border border-black/5 bg-white p-5 shadow-sm"><div className="flex items-center gap-3"><img src={item.image} alt={item.name} className="h-10 w-10 rounded-full object-cover" /><div><h3 className="text-xs font-bold">{item.name}</h3><p className="text-[10px] text-black/50">{item.since}</p></div></div><p className="mt-5 text-xs leading-5 text-black/65">\'{item.quote}\'</p><div className="mt-4 flex gap-0.5 text-amber-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}</div></article>)}</div></section>

      <section id="ubicacion" className="contact-section"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[.75fr_1.1fr_1.1fr] lg:px-8"><div className="text-white"><p className="eyebrow text-lime">Ubicación</p><h2 className="section-title">Visítanos</h2><div className="mt-6 space-y-4 text-xs text-white/70"><p className="flex gap-3"><MapPin className="text-lime" size={17} />Av. Los Alerces 1234<br />Santiago, Chile</p><p className="flex gap-3"><Clock3 className="text-lime" size={17} />Lunes a Viernes: 6:00 AM – 11:00 PM<br />Sábados y Domingos: 8:00 AM – 8:00 PM</p></div><Button href="#contacto">Cómo llegar</Button></div><div className="map-card"><div className="map-grid" /><MapPin className="relative z-10 text-lime" size={42} fill="currentColor" /><span className="relative z-10 mt-2 rounded-full bg-ink px-3 py-1 text-[10px] text-white">PeakFit</span></div><div id="contacto" className="text-white"><p className="eyebrow text-lime">Contacto</p><h2 className="section-title text-3xl">Escríbenos</h2><p className="mb-5 text-xs text-white/65">¿Tienes dudas? Completa el formulario y nos pondremos en contacto contigo.</p>{submitted ? <div className="rounded-lg border border-lime/50 bg-lime/10 p-5 text-sm text-lime">¡Gracias! Recibimos tu mensaje. Te contactaremos pronto.</div> : <form onSubmit={handleSubmit} className="space-y-3"><div className="grid gap-3 sm:grid-cols-2"><label className="sr-only" htmlFor="name">Nombre</label><input id="name" required placeholder="Nombre" className="form-input" /><label className="sr-only" htmlFor="email">Email</label><input id="email" required type="email" placeholder="Email" className="form-input" /></div><label className="sr-only" htmlFor="topic">Motivo</label><select id="topic" className="form-input"><option>Selecciona un motivo</option><option>Planes y membresías</option><option>Visita guiada</option><option>Clases</option></select><label className="sr-only" htmlFor="message">Mensaje</label><textarea id="message" required placeholder="Mensaje" rows={3} className="form-input resize-none" /><button className="inline-flex items-center gap-3 rounded-full bg-lime px-5 py-3 text-xs font-bold text-ink">Enviar mensaje <ArrowRight size={15} /></button></form>}</div></div></section>

      <footer className="bg-ink text-white"><div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8"><Logo /><div className="flex gap-6 text-xs text-white/60">{['Inicio', 'Instalaciones', 'Planes', 'Ubicación', 'Contacto'].map((item, i) => <a key={item} href={`#${['inicio', 'instalaciones', 'planes', 'ubicacion', 'contacto'][i]}`} className="hover:text-lime">{item}</a>)}</div><div className="flex gap-3 text-[11px] font-bold"><a href="#contacto" aria-label="Instagram" className="hover:text-lime">IG</a><a href="#contacto" aria-label="Facebook" className="hover:text-lime">FB</a><a href="#contacto" aria-label="YouTube" className="hover:text-lime">YT</a><Mail size={16} aria-label="Email" /></div></div><div className="border-t border-white/10"><div className="mx-auto flex max-w-6xl justify-between px-5 py-4 text-[10px] text-white/45 lg:px-8"><span>© 2025 PeakFit. Todos los derechos reservados.</span><span>Tu mejor versión, todos los días.</span></div></div></footer>
    </main>
  )
}

void Users
void Play
void MapPin
void Mail
void Heart
void Dumbbell
void Clock3
void Trophy
