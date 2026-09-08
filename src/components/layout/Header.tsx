'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Instagram, Mail } from 'lucide-react'

interface HeaderProps {
  onBookingClick?: () => void
}

export function Header({ onBookingClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Don't update active section during navigation
      if (isNavigating) return
      
      // Determine active section based on scroll position
      const sections = ['home', 'featured-gallery', 'about-section', 'contact-section']
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sectionId === 'featured-gallery' ? 'gallery' : sectionId === 'about-section' ? 'about' : sectionId === 'contact-section' ? 'contact' : 'home')
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isNavigating])

  const scrollToSection = (sectionId: string) => {
    const targetActiveSection = sectionId === 'featured-gallery' ? 'gallery' : sectionId === 'about-section' ? 'about' : sectionId === 'contact-section' ? 'contact' : 'home'
    
    // Immediately update active section for smooth UX
    setActiveSection(targetActiveSection)
    setIsNavigating(true)
    
    const element = document.getElementById(sectionId)
    if (element) {
      // Since all sections are full screen height, just scroll to the top of the section
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
    
    // Re-enable scroll detection after navigation
    setTimeout(() => {
      setIsNavigating(false)
    }, 1000)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div 
            className="brand-mark cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection('home')}
          >
            Growviaa<span className="ink-accent">Tattoo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5">
            <button 
              onClick={() => scrollToSection('home')}
              className={`cursor-pointer transition-colors ${activeSection === 'home' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('featured-gallery')}
              className={`cursor-pointer transition-colors ${activeSection === 'gallery' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className={`cursor-pointer transition-colors ${activeSection === 'about' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className={`cursor-pointer transition-colors ${activeSection === 'contact' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA & Social */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://instagram.com/growviaa.tattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="mailto:hello@growviaatattoo.com"
              className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
            >
              <Mail className="h-5 w-5" />
            </a>
            <Button 
              className="ink-button cursor-pointer"
              onClick={onBookingClick}
            >
              Book now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground cursor-pointer hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-left cursor-pointer transition-colors py-2 ${activeSection === 'home' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('featured-gallery')}
                className={`text-left cursor-pointer transition-colors py-2 ${activeSection === 'gallery' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('about-section')}
                className={`text-left cursor-pointer transition-colors py-2 ${activeSection === 'about' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact-section')}
                className={`text-left cursor-pointer transition-colors py-2 ${activeSection === 'contact' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                <a 
                  href="https://instagram.com/growviaa.tattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:hello@growviaatattoo.com"
                  className="text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <Button 
                className="ink-button w-full mt-4 cursor-pointer"
                onClick={() => {
                  onBookingClick?.()
                  setIsMobileMenuOpen(false)
                }}
              >
                Book a Session
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
