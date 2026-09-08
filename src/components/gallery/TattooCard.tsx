'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { TattooArtwork } from '@/lib/types'

interface TattooCardProps {
  artwork: TattooArtwork
  onClick?: (artwork: TattooArtwork) => void
}

export function TattooCard({ artwork, onClick }: TattooCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleClick = () => {
    onClick?.(artwork)
  }

  return (
    <Card 
      className="tattoo-card group"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden">
        {!imageError ? (
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            width={720}
            height={900}
            className={`tattoo-card-image transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            priority={artwork.featured}
          />
        ) : (
          <div className="w-full h-64 md:h-80 bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="text-4xl mb-2">🎨</div>
              <p className="text-sm">Image Loading...</p>
            </div>
          </div>
        )}
        
        {artwork.featured && (
          <Badge 
            className="absolute top-3 right-3 bg-accent/90 text-accent-foreground"
          >
            Featured
          </Badge>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-semibold text-lg mb-1">{artwork.title}</h3>
          {artwork.description && (
            <p className="text-sm text-gray-200 mb-2">{artwork.description}</p>
          )}
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-xs">
              {artwork.category}
            </Badge>
            <Badge variant="outline" className="text-xs border-white/30 text-white">
              {artwork.bodyPart}
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  )
}
