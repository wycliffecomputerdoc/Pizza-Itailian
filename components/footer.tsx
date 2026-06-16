import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-xl font-bold text-foreground">Pizza Presto</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Authentic Italian pizza crafted with passion and the finest ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#menu" className="text-muted-foreground hover:text-primary transition text-sm">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#hours" className="text-muted-foreground hover:text-primary transition text-sm">
                  Hours & Location
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-foreground font-bold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Hours
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Monday - Sunday</span>
                <br />
                Open 24 Hours
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <a
                  href="tel:+33783644700"
                  className="text-muted-foreground hover:text-primary transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +33 7 83 64 47 00
                </a>
              </p>
              <p className="text-muted-foreground">
                42 Rue de Rivoli<br />
                75004 Paris, France
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Pizza Presto. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="text-muted-foreground text-sm">
            Follow us on social media
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-xs">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
