import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-pizza.png"
          alt="Fresh pizza background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[600px] text-center">
          {/* Badge */}
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold">
              ⭐ 4.4 Stars • 24/7 Open
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance max-w-4xl">
            Authentic Italian Pizza
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl text-balance">
            Crafted with premium ingredients, wood-fired to perfection. Available 24 hours in the heart of Paris.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33783644700"
              className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 transition transform hover:scale-105"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-bold text-lg hover:bg-white/20 transition border border-white/20"
            >
              View Menu
            </a>
          </div>

          {/* Location Info */}
          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-gray-300 text-sm">📍 42 Rue de Rivoli, 75004 Paris</p>
            <p className="text-gray-400 text-xs mt-2">In the heart of the Marais District</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </div>
    </section>
  )
}
