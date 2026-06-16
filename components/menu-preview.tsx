import Image from 'next/image'
import { Flame } from 'lucide-react'

const menuItems = [
  {
    name: 'Margherita',
    description: 'Fresh mozzarella, basil, tomato sauce, olive oil',
    price: '€12',
    image: '/images/hero-pizza.png',
  },
  {
    name: 'Prosciutto & Arugula',
    description: 'Prosciutto, fresh arugula, parmesan, mozzarella',
    price: '€16',
    image: '/images/specialty-pizza.png',
  },
  {
    name: 'Quattro Formaggi',
    description: 'Four cheese blend, creamy and rich',
    price: '€14',
    image: '/images/hero-pizza.png',
  },
  {
    name: 'Burrata & Truffle',
    description: 'Creamy burrata, truffle oil, fresh basil',
    price: '€18',
    image: '/images/specialty-pizza.png',
  },
  {
    name: 'Spicy Calabrese',
    description: 'Spicy calabrese sausage, roasted peppers, garlic',
    price: '€15',
    image: '/images/hero-pizza.png',
  },
  {
    name: 'Vegetarian Delight',
    description: 'Roasted vegetables, fresh herbs, mozzarella',
    price: '€13',
    image: '/images/specialty-pizza.png',
  },
]

export function MenuPreview() {
  return (
    <section id="menu" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Flame className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">MENU HIGHLIGHTS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Handcrafted Pizzas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Each pizza is prepared with premium Italian ingredients and wood-fired to perfection
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-xl bg-secondary hover:shadow-2xl transition duration-300 border border-border"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                  <span className="text-accent font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu CTA */}
        <div className="mt-16 text-center">
          <a
            href="tel:+33783644700"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition"
          >
            View Full Menu & Order
          </a>
        </div>
      </div>
    </section>
  )
}
