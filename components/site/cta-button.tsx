import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'

const VARIANTS = {
  /** Lime pill — main calls to action. */
  primary: 'bg-lime text-ink hover:bg-lime-light',
  /** Dark pill — secondary actions over light sections. */
  dark: 'bg-ink text-white hover:bg-ink-light',
  /** Ghost pill — secondary actions over dark sections. */
  outline: 'border border-white/25 bg-white/5 text-white/90 backdrop-blur-sm hover:border-lime/50 hover:text-lime',
} as const

const SHAPES = {
  pill: 'rounded-full',
  block: 'w-full rounded-lg',
} as const

type CtaButtonProps = {
  children: ReactNode
  href?: string
  type?: 'button' | 'submit'
  variant?: keyof typeof VARIANTS
  shape?: keyof typeof SHAPES
  external?: boolean
  className?: string
  withIcon?: boolean
}

export function CtaButton({
  children,
  href = '#',
  type,
  variant = 'primary',
  shape = 'pill',
  external = false,
  className = '',
  withIcon = true,
}: CtaButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2.5 px-5 py-3 text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-lime/60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
    SHAPES[shape],
    VARIANTS[variant],
    className,
  )

  if (type) {
    return (
      <button type={type} className={classes}>
        {children}
        {withIcon && <ArrowRight size={15} aria-hidden />}
      </button>
    )
  }

  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} className={classes}>
      {children}
      {withIcon && <ArrowRight size={15} aria-hidden />}
    </a>
  )
}
