import Image from 'next/image'
import { Heart, Award, Clock } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Authentic Italian',
    description: 'Traditional recipes with premium imported ingredients from Italy',
  },
  {
    icon: Award,
    title: 'Award Quality',
    description: '4.4 star rating from hundreds of satisfied customers',
  },
  {
    icon: Clock,
    title: 'Always Open',
    description: 'Open 24/7 for pizza lovers at any time of day',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/restaurant-interior.png"
              alt="Pizza Presto restaurant interior"
              fill
              className="object-cover object-center"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">ABOUT US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Welcome to Pizza Presto
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of Paris&apos;s historic Marais district, Pizza Presto is your destination for authentic Italian pizza. For years, we&apos;ve been serving the community with pizzas prepared using traditional techniques and the finest ingredients.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-12">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/30">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-secondary rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">4.4★</div>
                <p className="text-xs text-muted-foreground">Customer Rating</p>
              </div>
              <div className="p-4 bg-secondary rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <p className="text-xs text-muted-foreground">Always Open</p>
              </div>
              <div className="p-4 bg-secondary rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <p className="text-xs text-muted-foreground">Fresh Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
