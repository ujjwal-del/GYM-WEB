'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { X, Heart, MessageCircle } from 'lucide-react'
import { TattooArtwork } from '@/lib/types'

interface ImageLightboxProps {
  artwork: TattooArtwork | null
  isOpen: boolean
  onClose: () => void
  onLike?: (artwork: TattooArtwork) => void
  onRequestSimilar?: (artwork: TattooArtwork) => void
}

export function ImageLightbox({ 
  artwork, 
  isOpen, 
  onClose, 
  onLike, 
  onRequestSimilar 
}: ImageLightboxProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
      setImageLoaded(false)
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleLike = () => {
    if (artwork) {
      setIsLiked(!isLiked)
      onLike?.(artwork)
    }
  }

  const handleRequestSimilar = () => {
    if (artwork) {
      // Pre-fill form with reference to this artwork
      const referenceText = `I'm interested in getting a tattoo similar to "${artwork.title}" (${artwork.category} style, ${artwork.bodyPart} placement). `
      onRequestSimilar?.(artwork)
      
      // Close modal and scroll to contact
      onClose()
      setTimeout(() => {
        const contactElement = document.getElementById('contact-section')
        if (contactElement) {
          // Since all sections are full screen height, just scroll to the top of the section
          window.scrollTo({
            top: contactElement.offsetTop,
            behavior: 'smooth'
          })
        }
        
        // Focus on the description field after scroll
        setTimeout(() => {
          const descriptionField = document.getElementById('projectDescription') as HTMLTextAreaElement
          if (descriptionField) {
            descriptionField.value = referenceText + descriptionField.value
            descriptionField.focus()
          }
        }, 500)
      }, 300)
    }
  }

  if (!isOpen || !artwork) return null

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 lightbox-backdrop"
      onClick={handleBackdropClick}
    >
      {/* Content Container with small border */}
      <div className="absolute inset-4 flex flex-col lightbox-content">
        
        {/* Header with actions */}
        <div className="flex justify-between items-center mb-4 px-4 py-2 bg-background/10 backdrop-blur-md rounded-lg">
          
          {/* Artwork Info */}
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">{artwork.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {artwork.category}
                </Badge>
                <Badge variant="outline" className="text-xs border-white/30 text-white">
                  {artwork.bodyPart}
                </Badge>
                {artwork.featured && (
                  <Badge className="text-xs bg-accent/90 text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Like Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleLike}
              className={`cursor-pointer border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all ${
                isLiked ? 'bg-accent/20 border-accent text-accent hover:bg-accent/30' : ''
              }`}
            >
              <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
              {isLiked ? 'Liked!' : 'Like'}
            </Button>

            {/* Request Similar Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleRequestSimilar}
              className="cursor-pointer border-accent/50 text-accent hover:bg-accent/10 hover:border-accent/70 transition-all"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Request Similar
            </Button>

            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="cursor-pointer text-white hover:bg-white/10 hover:text-white/90 transition-colors"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center relative overflow-hidden">
          
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-white/60">
                <div className="text-4xl mb-2">🎨</div>
                <p>Loading image...</p>
              </div>
            </div>
          )}

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              fill
              className={`object-contain transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              priority
              sizes="100vw"
            />
          </div>
        </div>

        {/* Description Footer */}
        {artwork.description && (
          <div className="mt-4 px-4 py-3 bg-background/10 backdrop-blur-md rounded-lg">
            <p className="text-white/90 text-center">{artwork.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}
