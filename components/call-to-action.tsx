import { ArrowRight } from 'lucide-react'

export function CallToAction() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 md:p-16 text-center">
          {/* Emoji */}
          <div className="text-6xl mb-6">🍕</div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready for Amazing Pizza?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the authentic taste of Italian pizza at Pizza Presto. Whether you&apos;re craving a classic Margherita or one of our specialty creations, we&apos;re ready to satisfy your pizza cravings 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+33783644700"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition group"
            >
              Order Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="https://maps.google.com/?q=42+Rue+de+Rivoli+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold text-lg hover:bg-accent/90 transition"
            >
              Get Directions
            </a>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-muted-foreground">
            📍 42 Rue de Rivoli, Paris • 🕐 Open 24/7 • ⭐ 4.4 Stars
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">Fresh Ingredients</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Always Available</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.4★</div>
            <p className="text-muted-foreground">Highly Rated</p>
          </div>
        </div>
      </div>
    </section>
  )
}
