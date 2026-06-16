import { Clock, MapPin, Phone } from 'lucide-react'

export function Hours() {
  return (
    <section id="hours" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">VISIT US</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Open 24/7
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re always ready to serve you fresh, delicious pizza
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Hours */}
          <div className="p-8 bg-secondary rounded-xl border border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Hours</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Monday - Sunday</span>
                <span className="font-semibold text-foreground">24 Hours</span>
              </div>
              <div className="pt-4 border-t border-border mt-4">
                <p className="text-sm text-muted-foreground">
                  ✓ Open every day without exception
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="p-8 bg-secondary rounded-xl border border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Location</h3>
            </div>
            <div>
              <p className="text-foreground font-semibold mb-2">
                42 Rue de Rivoli
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                75004 Paris, France<br />
                Marais District
              </p>
              <a
                href="https://maps.google.com/?q=42+Rue+de+Rivoli+Paris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold text-sm transition"
              >
                View on Map →
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="p-8 bg-secondary rounded-xl border border-border">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Contact</h3>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-4">Call to order or inquire</p>
              <a
                href="tel:+33783644700"
                className="text-primary hover:text-primary/80 font-bold text-lg transition block mb-2"
              >
                +33 7 83 64 47 00
              </a>
              <p className="text-muted-foreground text-xs">
                Available 24/7 for orders
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden border border-border h-96 bg-secondary">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7532286355255!2d2.3533601!3d48.8566089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e02ad7d7705%3A0xcf2e5cdc0902b04e!2sPizza%20Presto!5e0!3m2!1sen!2sfr!4v1623456789"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
