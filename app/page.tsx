import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { MenuPreview } from '@/components/menu-preview'
import { About } from '@/components/about'
import { Hours } from '@/components/hours'
import { CallToAction } from '@/components/call-to-action'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Pizza Presto | Authentic Italian Pizza in Paris',
  description:
    'Experience authentic Italian pizza at Pizza Presto in Paris. Open 24 hours, located in the heart of the Marais. Freshly made pizzas with premium ingredients.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#dc2626',
  },
}

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Navigation />
      <HeroSection />
      <MenuPreview />
      <About />
      <Hours />
      <CallToAction />
      <Footer />
    </main>
  )
}
