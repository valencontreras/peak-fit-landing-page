import type { ComponentType, SVGProps } from 'react'
import { Clock3, Heart, Star, UserCheck } from 'lucide-react'

export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number }>

export const SITE = {
  name: 'PeakFit',
  tagline: 'Tu mejor versión, todos los días.',
  address: ['Av. Los Alerces 1234', 'Santiago, Chile'],
  hours: [
    { days: 'Lunes a Viernes', time: '6:00 AM – 11:00 PM' },
    { days: 'Sábados y Domingos', time: '8:00 AM – 8:00 PM' },
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Los+Alerces+1234,+Santiago,+Chile',
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ],
}

export const NAV_LINKS = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Instalaciones', id: 'instalaciones' },
  { label: 'Planes', id: 'planes' },
  { label: 'Ubicación', id: 'ubicacion' },
  { label: 'Contacto', id: 'contacto' },
] as const

export const PILLARS: { icon: IconComponent; title: string; text: string }[] = [
  { icon: UserCheck, title: 'Entrenadores certificados', text: 'Te guían en cada paso de tu progreso.' },
  { icon: Heart, title: 'Ambiente motivador', text: 'Una comunidad que te impulsa.' },
  { icon: Clock3, title: 'Horario extendido', text: 'Entrena cuando mejor te quede.' },
  { icon: Star, title: 'Equipamiento de calidad', text: 'Máquinas y áreas de entrenamiento de última generación.' },
]

export const FACILITIES = [
  { title: 'Área de musculación', image: '/areas/area-musculacion.png' },
  { title: 'Área cardiovascular', image: '/areas/area-cardiovascular.png' },
  { title: 'Clases grupales', image: '/areas/area-clases-grupales.png' },
  { title: 'Vestidores y duchas', image: '/areas/area-vestuario.png' },
  // Agrega `public/areas/area-zona-funcional.png` y descomenta esta línea para completar la grilla del diseño (2 + 3).
  // { title: 'Zona funcional', image: '/areas/area-zona-funcional.png' },
]

export const PLAN_PERKS = [
  'Acceso a todas las áreas del gimnasio',
  'Clases grupales incluidas',
  'Seguimiento personalizado (según plan)',
  'Sin costos de inscripción',
]

export const PLANS = [
  {
    name: 'Básico',
    price: '$29',
    description: 'Ideal para quienes comienzan o entrenan de forma ocasional.',
    features: ['Acceso al área de musculación', 'Área cardiovascular', 'Vestidores y duchas'],
    featured: false,
  },
  {
    name: 'Estándar',
    price: '$49',
    description: 'El equilibrio perfecto entre precio y beneficios.',
    features: ['Acceso a todas las áreas', 'Clases grupales', 'Seguimiento básico'],
    featured: true,
  },
  {
    name: 'Premium',
    price: '$69',
    description: 'La mejor experiencia, con beneficios exclusivos.',
    features: ['Acceso a todas las áreas', 'Clases grupales ilimitadas', 'Seguimiento personalizado', 'Invitaciones a eventos especiales'],
    featured: false,
  },
]

export const TESTIMONIALS = [
  {
    name: 'Laura Gómez',
    since: 'Miembro desde 2023',
    quote: 'El mejor lugar para entrenar. El ambiente es increíble y los entrenadores siempre están pendientes de ti.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
  },
  {
    name: 'Andrés Silva',
    since: 'Miembro desde 2024',
    quote: 'Las instalaciones son de primera y los planes se ajustan a lo que necesitas. He notado un gran cambio en mi rendimiento.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
  },
  {
    name: 'Valentina Rojas',
    since: 'Miembro desde 2022',
    quote: 'Me encanta la variedad de clases y la motivación que se respira. Sin duda, la mejor decisión que he tomado.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
  },
  {
    name: 'Matías Fuentes',
    since: 'Miembro desde 2021',
    quote: 'Empecé sin saber nada de fuerza y hoy entreno seis días a la semana. El acompañamiento del equipo es lo que más valoro.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
  },
  {
    name: 'Camila Torres',
    since: 'Miembro desde 2023',
    quote: 'Los horarios me acomodan para entrenar antes del trabajo y el lugar siempre está impecable. Vale cada peso.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=160&q=80',
  },
  {
    name: 'Javier Herrera',
    since: 'Miembro desde 2020',
    quote: 'Llevo años entrenando aquí y el equipamiento se mantiene como nuevo. El ambiente del club marca la diferencia.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80',
  },
]

export const CONTACT_TOPICS = ['Planes y membresías', 'Visita guiada', 'Clases grupales', 'Otro motivo']
