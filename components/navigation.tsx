'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">
              Pizza Presto
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#menu"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition"
            >
              About
            </a>
            <a
              href="#hours"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition"
            >
              Hours
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition"
            >
              Contact
            </a>
            <a
              href="tel:+33783644700"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a
              href="#menu"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </a>
            <a
              href="#about"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#hours"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Hours
            </a>
            <a
              href="#contact"
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="tel:+33783644700"
              className="block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
