import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import './globals.css'

const inter = localFont({
  src: './fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
  fallback: ['system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
})

const title = 'PeakFit | Fitness Club en Santiago'
const description =
  'Entrena. Supera. Repite. En PeakFit encontrarás instalaciones de primer nivel, entrenadores certificados y planes que se adaptan a tus objetivos.'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title,
  description,
  applicationName: 'PeakFit',
  keywords: ['gimnasio', 'fitness club', 'Santiago', 'musculación', 'clases grupales', 'planes de entrenamiento'],
  openGraph: {
    title,
    description,
    siteName: 'PeakFit',
    locale: 'es_CL',
    type: 'website',
    images: [{ url: '/peakfit-logo.png', width: 1996, height: 788, alt: 'PeakFit Fitness Club' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/peakfit-logo.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#101417',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
