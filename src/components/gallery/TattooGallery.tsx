'use client'

import { useState, useMemo, useEffect } from 'react'
import { TattooCard } from './TattooCard'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TattooArtwork } from '@/lib/types'
import { CATEGORIES } from '@/lib/constants'

interface TattooGalleryProps {
  artworks: TattooArtwork[]
  onArtworkClick?: (artwork: TattooArtwork) => void
  showFeaturedOnly?: boolean
  pauseCarousel?: boolean
}

export function TattooGallery({ 
  artworks, 
  onArtworkClick,
  showFeaturedOnly = false,
  pauseCarousel = false
}: TattooGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const filteredArtworks = useMemo(() => {
    let filtered = artworks

    // Filter by featured if specified
    if (showFeaturedOnly) {
      filtered = filtered.filter(artwork => artwork.featured)
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(artwork => artwork.category === selectedCategory)
    }

    // Sort by creation date (newest first)
    return filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }, [artworks, selectedCategory, showFeaturedOnly])

  // Auto-carousel effect
  useEffect(() => {
    if (!isAutoPlaying || filteredArtworks.length <= 3 || pauseCarousel) return

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % Math.max(1, filteredArtworks.length - 2))
    }, 5000) // 5 seconds auto-scroll (slower as requested)

    return () => clearInterval(interval)
  }, [filteredArtworks.length, isAutoPlaying, pauseCarousel])

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    setCurrentSlide(0) // Reset carousel position
  }

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide(prev => (prev + 1) % Math.max(1, filteredArtworks.length - 2))
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide(prev => prev === 0 ? Math.max(0, filteredArtworks.length - 3) : prev - 1)
  }


  const allCategories = [
    { value: 'all', label: 'All' },
    ...CATEGORIES
  ]

  return (
    <div className="w-full">
      {/* Filter Controls - Clean Category Bar */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {allCategories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryFilter(category.value)}
              className={`cursor-pointer transition-all ${
                selectedCategory === category.value ? "ink-button" : ""
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Carousel Gallery - Fixed Height Container */}
      <div className="relative min-h-[400px] flex items-center">
        {filteredArtworks.length > 0 ? (
          <>
            {/* Carousel Container */}
            <div className="w-full overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / 3)}%)`
                }}
              >
                {filteredArtworks.map((artwork, index) => (
                  <div 
                    key={artwork.id} 
                    className="gallery-slide w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <TattooCard
                      artwork={artwork}
                      onClick={onArtworkClick}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Always present but only functional when needed */}
            <Button
              variant="ghost"
              size="sm"
              onClick={filteredArtworks.length > 3 ? prevSlide : undefined}
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 z-10 transition-opacity ${
                filteredArtworks.length > 3 
                  ? 'hover:bg-background/90 cursor-pointer opacity-100' 
                  : 'cursor-default opacity-0 pointer-events-none'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={filteredArtworks.length > 3 ? nextSlide : undefined}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 z-10 transition-opacity ${
                filteredArtworks.length > 3 
                  ? 'hover:bg-background/90 cursor-pointer opacity-100' 
                  : 'cursor-default opacity-0 pointer-events-none'
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        ) : (
          <div className="w-full text-center">
            <p className="text-muted-foreground text-lg">
              No artwork found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Dots Indicator - Fixed Position, Always Reserve Space */}
      <div className="flex justify-center mt-6 gap-2 h-4">
        {filteredArtworks.length > 3 && (
          Array.from({ length: Math.max(1, filteredArtworks.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setIsAutoPlaying(false)
              }}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                currentSlide === index ? 'bg-accent' : 'bg-muted-foreground/30'
              }`}
            />
          ))
        )}
      </div>

      {/* Results Count - Fixed Position */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Showing {Math.min(3, filteredArtworks.length)} of {filteredArtworks.length} pieces
          {selectedCategory !== 'all' && ` in ${allCategories.find(c => c.value === selectedCategory)?.label}`}
        </p>
      </div>
    </div>
  )
}
