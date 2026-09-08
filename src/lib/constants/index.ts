import { ArtistInfo, TattooArtwork } from '../types'

export const ARTIST_INFO: ArtistInfo = {
  name: "Growviaa Tattoo",
  bio: "A private tattoo studio creating bold, considered work for people who want their story to stay with them. Every piece is designed with intention and tattooed with care.",
  experience: "10+ years",
  location: {
    studio: "Growviaa Tattoo Studio",
    address: "The Creative District",
    city: "Your City, India",
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    }
  },
  contact: {
    email: "hello@growviaatattoo.com",
    phone: "+91 98765 43210",
    instagram: "@growviaa.tattoo",
    website: "www.growviaatattoo.com"
  },
  specialties: [
    "Blackwork",
    "Traditional",
    "Geometric",
    "Script & Lettering",
    "Cover-ups"
  ]
}

export const SAMPLE_ARTWORK: TattooArtwork[] = [
  { id: "1", title: "Geometric Mandala", description: "Intricate mandala design with geometric patterns", imageUrl: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=1200&q=85", category: "geometric", bodyPart: "forearm", featured: true, createdAt: new Date("2024-01-15T00:00:00.000Z") },
  { id: "2", title: "Traditional Rose", description: "Classic traditional style rose with bold lines", imageUrl: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=1200&q=85", category: "traditional", bodyPart: "shoulder", featured: true, createdAt: new Date("2024-02-20T00:00:00.000Z") },
  { id: "3", title: "Blackwork Sleeve", description: "Full sleeve blackwork design", imageUrl: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1200&q=85", category: "blackwork", bodyPart: "full-arm", featured: true, createdAt: new Date("2024-03-10T00:00:00.000Z") },
  { id: "4", title: "Script Typography", description: "Custom lettering with flowing script", imageUrl: "https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=1200&q=85", category: "script", bodyPart: "ribs", featured: true, createdAt: new Date("2024-03-25T00:00:00.000Z") },
  { id: "5", title: "Realistic Portrait", description: "Detailed portrait work", imageUrl: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1200&q=85", category: "realism", bodyPart: "back", featured: true, createdAt: new Date("2024-04-05T00:00:00.000Z") },
  { id: "6", title: "Geometric Pattern", description: "Abstract geometric design", imageUrl: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1200&q=85", category: "geometric", bodyPart: "leg", featured: true, createdAt: new Date("2024-04-15T00:00:00.000Z") },
  { id: "7", title: "Traditional Eagle", description: "Bold traditional eagle with spread wings", imageUrl: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1200&q=85", category: "traditional", bodyPart: "chest", featured: true, createdAt: new Date("2024-05-01T00:00:00.000Z") },
  { id: "8", title: "Blackwork Tribal", description: "Modern tribal design with thick lines", imageUrl: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1200&q=85", category: "blackwork", bodyPart: "shoulder", featured: true, createdAt: new Date("2024-05-10T00:00:00.000Z") },
  { id: "9", title: "Script Quote", description: "Inspirational quote in elegant script", imageUrl: "https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=1200&q=85", category: "script", bodyPart: "forearm", featured: true, createdAt: new Date("2024-05-15T00:00:00.000Z") },
  { id: "10", title: "Realistic Lion", description: "Detailed lion portrait with mane", imageUrl: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=1200&q=85", category: "realism", bodyPart: "back", featured: true, createdAt: new Date("2024-05-20T00:00:00.000Z") }
]

export const CATEGORIES = [
  { value: 'blackwork', label: 'Blackwork' },
  { value: 'traditional', label: 'Traditional' },
  { value: 'realism', label: 'Realism' },
  { value: 'geometric', label: 'Geometric' },
  { value: 'script', label: 'Script & Lettering' }
] as const

export const BODY_PARTS = [
  'forearm',
  'shoulder', 
  'full-arm',
  'ribs',
  'back',
  'leg',
  'chest',
  'hand',
  'neck'
] as const
