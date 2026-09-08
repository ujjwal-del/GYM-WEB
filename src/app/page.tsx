'use client'

import { useEffect, useState } from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { ImageLightbox } from '@/components/gallery/ImageLightbox'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ARTIST_INFO, SAMPLE_ARTWORK } from '@/lib/constants'
import { TattooArtwork } from '@/lib/types'
import { MessageCircle, X, ArrowUpRight } from 'lucide-react'

export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState<TattooArtwork | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isOfferOpen, setIsOfferOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.sessionStorage.getItem('growviaa-offer-seen')) {
      const timer = window.setTimeout(() => setIsOfferOpen(true), 1800)
      return () => window.clearTimeout(timer)
    }
  }, [])

  const handleArtworkClick = (artwork: TattooArtwork) => {
    setSelectedArtwork(artwork)
    setIsLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false)
    setTimeout(() => setSelectedArtwork(null), 300) // Delay to allow close animation
  }

  const handleLikeArtwork = (artwork: TattooArtwork) => {
    // TODO: Implement like functionality (save to favorites, analytics, etc.)
    console.log('Liked artwork:', artwork.title)
  }

  const handleRequestSimilar = (artwork: TattooArtwork) => {
    // TODO: Pre-fill contact form with artwork reference
    console.log('Requesting similar to:', artwork.title)
    // Could pre-populate the form with reference to this artwork
  }

  const handleBookingClick = () => {
    // Scroll to contact section for booking
    const contactElement = document.getElementById('contact-section')
    if (contactElement) {
      // Since all sections are full screen height, just scroll to the top of the section
      window.scrollTo({
        top: contactElement.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const closeOffer = () => {
    setIsOfferOpen(false)
    window.sessionStorage.setItem('growviaa-offer-seen', 'true')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onBookingClick={handleBookingClick} />
      
      <main>
        <div id="home">
          <HeroSection
            featuredArtworks={SAMPLE_ARTWORK}
            artistName={ARTIST_INFO.name}
            artistBio={ARTIST_INFO.bio}
            onArtworkClick={handleArtworkClick}
            onBookingClick={handleBookingClick}
          />
        </div>
        
        <GallerySection
          artworks={SAMPLE_ARTWORK}
          onArtworkClick={handleArtworkClick}
          pauseCarousel={isLightboxOpen}
        />
        
        <AboutSection />
        
        <ContactSection />
      </main>
      
      <Footer />

      {isOfferOpen && (
        <div className="offer-backdrop" role="dialog" aria-modal="true" aria-labelledby="offer-title">
          <div className="offer-modal">
            <button className="offer-close" onClick={closeOffer} aria-label="Close offer">
              <X className="h-5 w-5" />
            </button>
            <p className="eyebrow">A little something for first-timers</p>
            <p className="offer-number">-15%</p>
            <h2 id="offer-title">Your first piece,<br /><em>made personal.</em></h2>
            <p>Book a consultation this month and receive 15% off your first Growviaa Tattoo session.</p>
            <button className="offer-cta" onClick={() => { closeOffer(); handleBookingClick() }}>
              Claim the studio offer <ArrowUpRight className="h-4 w-4" />
            </button>
            <button className="offer-dismiss" onClick={closeOffer}>Maybe later</button>
          </div>
        </div>
      )}

      <a
        href="https://wa.me/919876543210?text=Hi%20Growviaa%20Tattoo%2C%20I%27d%20like%20to%20discuss%20a%20tattoo%20idea."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Growviaa Tattoo on WhatsApp"
        className="whatsapp-float"
      >
        <MessageCircle className="h-6 w-6" />
        <span>Chat on WhatsApp</span>
      </a>

      {/* Image Lightbox */}
      <ImageLightbox
        artwork={selectedArtwork}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onLike={handleLikeArtwork}
        onRequestSimilar={handleRequestSimilar}
      />
    </div>
  )
}
