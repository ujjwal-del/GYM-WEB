'use client'

import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Bio */}
          <div className="space-y-4">
            <div className="brand-mark text-2xl font-bold">
              Growviaa<span className="ink-accent">Tattoo</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Custom work for people who want something personal, precise, and impossible to mistake for anyone else&apos;s.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/growviaa.tattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:hello@growviaatattoo.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+15551234567"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="micro-label">Visit / contact</p>
            <h3 className="text-lg font-semibold">The studio</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p>Growviaa Tattoo Studio</p>
                  <p>The Creative District, Your City</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <p>hello@growviaatattoo.com</p>
              </div>
            </div>
          </div>

          {/* Studio Hours */}
          <div className="space-y-4">
            <p className="micro-label">Availability</p>
            <h3 className="text-lg font-semibold">Studio hours</h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              <div className="flex justify-between">
                <span>Mon - Fri</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Growviaa Tattoo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
