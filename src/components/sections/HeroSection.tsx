'use client'

import { Button } from '@/components/ui/button'
import { TattooArtwork } from '@/lib/types'
import { ArrowDown, Instagram, Mail, Phone, Sparkles } from 'lucide-react'

interface HeroSectionProps {
  featuredArtworks: TattooArtwork[]
  artistName: string
  artistBio: string
  onArtworkClick?: (artwork: TattooArtwork) => void
  onBookingClick?: () => void
}

export function HeroSection({ 
  artistName, 
  artistBio,
  onBookingClick 
}: HeroSectionProps) {
  const scrollToGallery = () => {
    const galleryElement = document.getElementById('featured-gallery')
    if (galleryElement) {
      // Since all sections are full screen height, just scroll to the top of the section
      window.scrollTo({
        top: galleryElement.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="hero-section">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="container mx-auto px-4 hero-content">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles className="h-4 w-4" /> Independent tattoo studio / Est. 2016</p>
          <h1>{artistName}</h1>
          <p className="hero-subtitle">Distinctive ink.<br /><em>Made personal.</em></p>
          <p className="hero-bio">{artistBio}</p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12">
            <Button 
              size="lg" 
              className="ink-button text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto"
              onClick={onBookingClick}
            >
              Start your design
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToGallery}
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 group w-full sm:w-auto"
            >
              Explore the work
              <ArrowDown className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          <div className="hero-contact flex justify-center gap-4 md:gap-6 text-muted-foreground flex-wrap">
            <a 
              href="https://instagram.com/growviaa.tattoo" 
              className="flex items-center gap-1 md:gap-2 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 md:h-5 w-4 md:w-5" />
              <span className="hidden sm:inline text-sm md:text-base">@growviaa.tattoo</span>
            </a>
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-1 md:gap-2 hover:text-accent transition-colors"
            >
              <Phone className="h-4 md:h-5 w-4 md:w-5" />
              <span className="hidden sm:inline text-sm md:text-base">Call</span>
            </a>
            <a 
              href="mailto:hello@growviaatattoo.com"
              className="flex items-center gap-1 md:gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-4 md:h-5 w-4 md:w-5" />
              <span className="hidden sm:inline text-sm md:text-base">Email</span>
            </a>
          </div>
        </div>
        <div className="hero-stamp" aria-hidden="true"><span>Growviaa</span><span>Tattoo Studio</span></div>
      </div>
    </section>
  )
}
