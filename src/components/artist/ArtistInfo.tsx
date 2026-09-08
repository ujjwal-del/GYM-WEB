'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArtistInfo } from '@/lib/types'
import { MapPin, Clock, Award, Users } from 'lucide-react'

interface ArtistInfoProps {
  artist: ArtistInfo
  onBookingClick?: () => void
}

export function ArtistInfoSection({ artist, onBookingClick }: ArtistInfoProps) {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Artist Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  About <span className="ink-accent">{artist.name}</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {artist.bio}
                </p>
              </div>

              {/* Specialties */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 ink-accent" />
                  Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {artist.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Experience Highlight */}
              <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <Users className="h-8 w-8 ink-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">Experience</p>
                  <p className="text-muted-foreground">{artist.experience} of professional tattooing</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="ink-button text-lg px-8 py-6 w-full sm:w-auto"
                onClick={onBookingClick}
              >
                Book Your Session
              </Button>
            </div>

            {/* Right Column - Location & Contact */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-6 w-6 ink-accent" />
                    Studio Location
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-lg">{artist.location.studio}</p>
                      <p className="text-muted-foreground">{artist.location.address}</p>
                      <p className="text-muted-foreground">{artist.location.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-6 w-6 ink-accent" />
                    Studio Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
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
                  <div className="mt-4 p-3 bg-accent/10 rounded border border-accent/20">
                    <p className="text-sm">
                      <strong>Note:</strong> Consultations available by appointment only. 
                      Walk-ins welcome for small pieces subject to availability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
