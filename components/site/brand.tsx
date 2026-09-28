import type { SVGProps } from 'react'

import { SITE } from '@/lib/content'

/**
 * Logo lockup. The asset ships with a near-black plate, so it is blended with
 * `mix-blend-lighten` to disappear over the dark header / footer backgrounds.
 */
export function BrandLogo({ className = 'h-8', priority = false }: { className?: string; priority?: boolean }) {
  return (
    <a href="#inicio" aria-label="PeakFit — ir al inicio" className="inline-flex shrink-0 items-center">
      <img
        src="/brand/peakfit-logo.png"
        alt="PeakFit Fitness Club"
        width={760}
        height={128}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        className={`${className} w-auto mix-blend-lighten`}
      />
    </a>
  )
}

type IconProps = SVGProps<SVGSVGElement>

const strokeProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg {...strokeProps} className={className}>
      <path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

export const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  YouTube: YoutubeIcon,
} as const

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {SITE.social.map((item) => {
        const Icon = SOCIAL_ICONS[item.label as keyof typeof SOCIAL_ICONS]
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`PeakFit en ${item.label}`}
            className="grid size-9 place-items-center rounded-full text-white/65 transition-colors hover:bg-white/10 hover:text-lime"
          >
            <Icon className="size-[18px]" />
          </a>
        )
      })}
    </div>
  )
}
