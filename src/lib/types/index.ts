export interface TattooArtwork {
  id: string
  title: string
  description?: string
  imageUrl: string
  category: 'blackwork' | 'traditional' | 'realism' | 'geometric' | 'script'
  bodyPart: string
  featured: boolean
  createdAt: Date
}

export interface ArtistInfo {
  name: string
  bio: string
  experience: string
  location: {
    studio: string
    address: string
    city: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
  contact: {
    email: string
    phone: string
    instagram?: string
    website?: string
  }
  specialties: string[]
}

export interface BookingSession {
  id: string
  date: Date
  duration: number
  type: 'consultation' | 'session' | 'touch-up'
  bodyPart: string
  estimatedPrice?: number
  notes?: string
}

export interface GalleryFilterOptions {
  category?: TattooArtwork['category']
  bodyPart?: string
  featured?: boolean
}
