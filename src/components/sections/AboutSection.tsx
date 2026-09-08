'use client'

import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { ARTIST_INFO } from '@/lib/constants'

export function AboutSection() {
  return (
    <section id="about-section" className="about-section section-full-height">
      <div className="container mx-auto">
        <div className="about-layout max-w-6xl mx-auto h-full flex flex-col justify-center">
          
          {/* Section Header */}
          <div className="section-intro mb-12">
            <p className="eyebrow">Artist / Founder / Growviaa Tattoo</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              The artist behind<br /><span className="ink-accent">the mark.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {ARTIST_INFO.bio}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center flex-1">
            
            <div className="about-visual flex justify-center order-2 md:order-1">
              <div className="about-portrait">
                <Image src="/growviaa-artist.svg" alt="Milo Ink, the illustrated artist and founder of Growviaa Tattoo" fill sizes="(max-width: 768px) 100vw, 340px" />
                <span>01 / Milo Ink / The studio</span>
              </div>
            </div>

            {/* Artist Info */}
            <div className="about-copy space-y-4 md:space-y-6 order-1 md:order-2">
              <div className="artist-intro">
                <p className="micro-label">Meet the artist & founder</p>
                <h3 className="text-3xl font-semibold mb-3">A steady hand.<br /><span className="ink-accent">A restless eye.</span></h3>
                <p className="text-muted-foreground leading-relaxed">Growviaa is the artist and founder behind the studio: an independent visual storyteller building a quieter, more intentional way to get tattooed.</p>
                <div className="founder-signature">
                  <span>Growviaa</span>
                  <small>Founder / Resident artist</small>
                </div>
              </div>
              
              {/* Experience & Specialties */}
              <div>
                <p className="micro-label">01 / The craft</p>
                <h3 className="text-2xl font-semibold mb-3">Experience & Specialties</h3>
                <p className="text-muted-foreground mb-3">
                  {ARTIST_INFO.experience} of dedicated tattooing
                </p>
                <div className="flex flex-wrap gap-2">
                  {ARTIST_INFO.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Studio Info */}
              <div>
                <p className="micro-label">02 / The room</p>
                <h3 className="text-2xl font-semibold mb-3">Studio</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-medium">{ARTIST_INFO.location.studio}</p>
                  <p className="text-sm">{ARTIST_INFO.location.address}</p>
                  <p className="text-sm">{ARTIST_INFO.location.city}</p>
                </div>
              </div>

              {/* Philosophy */}
              <div>
                <p className="micro-label">03 / The ritual</p>
                <h3 className="text-2xl font-semibold mb-3">Philosophy</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every tattoo is a collaboration between artist and client. I believe in creating 
                  meaningful artwork that tells your personal story and provides an exceptional experience 
                  you&apos;ll be proud to wear for life.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
