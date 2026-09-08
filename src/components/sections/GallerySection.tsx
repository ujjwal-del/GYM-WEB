'use client'

import { TattooGallery } from '@/components/gallery/TattooGallery'
import { TattooArtwork } from '@/lib/types'

interface GallerySectionProps {
  artworks: TattooArtwork[]
  onArtworkClick?: (artwork: TattooArtwork) => void
  pauseCarousel?: boolean
}

export function GallerySection({ artworks, onArtworkClick, pauseCarousel }: GallerySectionProps) {
  return (
    <section id="featured-gallery" className="gallery-section section-full-height">
      <div className="container mx-auto">
        <div className="gallery-heading text-center mb-6 md:mb-8">
          <p className="eyebrow justify-center">Selected work / 2024—2025</p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4">
            The <span className="ink-accent">Work</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A growing archive of custom pieces, from quiet fine-line studies to unapologetic blackwork.
          </p>
        </div>
        
        <div className="flex-1 flex items-center">
          <TattooGallery 
            artworks={artworks}
            onArtworkClick={onArtworkClick}
            showFeaturedOnly={true}
            pauseCarousel={pauseCarousel}
          />
        </div>
        <div className="gallery-signature">
          <span>More than ink.</span>
          <span>A mark with a point of view.</span>
        </div>
      </div>
    </section>
  )
}
