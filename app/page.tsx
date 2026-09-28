import { Benefits } from '@/components/site/benefits'
import { ContactSection } from '@/components/site/contact-section'
import { Facilities } from '@/components/site/facilities'
import { Hero } from '@/components/site/hero'
import { Plans } from '@/components/site/plans'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { Testimonials } from '@/components/site/testimonials'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden bg-paper text-ink">
        <Hero />
        <Benefits />
        <Facilities />
        <Plans />
        <Testimonials />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
