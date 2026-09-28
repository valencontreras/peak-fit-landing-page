'use client'

import { useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'

import { CtaButton } from '@/components/site/cta-button'
import { CONTACT_TOPICS } from '@/lib/content'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div role="status" className="flex items-start gap-3 rounded-lg border border-lime/45 bg-lime/10 p-5 text-xs leading-relaxed text-lime">
        <Check size={16} strokeWidth={3} aria-hidden className="mt-px shrink-0" />
        <p>¡Gracias! Recibimos tu mensaje y te contactaremos muy pronto.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="sr-only" htmlFor="contact-name">
          Nombre
        </label>
        <input id="contact-name" name="name" required autoComplete="name" placeholder="Nombre" className="form-input" />

        <label className="sr-only" htmlFor="contact-email">
          Email
        </label>
        <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="Email" className="form-input" />
      </div>

      <label className="sr-only" htmlFor="contact-topic">
        Motivo de contacto
      </label>
      <select id="contact-topic" name="topic" defaultValue="" className="form-input">
        <option value="" disabled>
          Selecciona un motivo
        </option>
        {CONTACT_TOPICS.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>

      <label className="sr-only" htmlFor="contact-message">
        Mensaje
      </label>
      <textarea id="contact-message" name="message" required rows={4} placeholder="Mensaje" className="form-input resize-none" />

      <CtaButton type="submit" shape="block" className="py-3.5">
        Enviar mensaje
      </CtaButton>
    </form>
  )
}
