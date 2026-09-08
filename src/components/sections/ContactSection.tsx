'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Instagram, Phone, Mail, Upload } from 'lucide-react'
import { ARTIST_INFO } from '@/lib/constants'

interface ContactFormData {
  name: string
  email: string
  phone: string
  projectDescription: string
  images: File[]
}

interface ContactSectionProps {
  initialDescription?: string
}

export function ContactSection({ initialDescription }: ContactSectionProps = {}) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectDescription: '',
    images: []
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  // Handle initial description after mount to avoid hydration issues
  useEffect(() => {
    if (initialDescription) {
      setFormData(prev => ({
        ...prev,
        projectDescription: initialDescription
      }))
    }
  }, [initialDescription])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        images: Array.from(e.target.files || [])
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData)
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you! I\'ll get back to you soon to discuss your project.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectDescription: '',
        images: []
      })
    }, 1000)
  }

  return (
    <section id="contact-section" className="contact-section section-full-height">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
          
          {/* Section Header */}
          <div className="section-intro contact-intro mb-8">
            <p className="eyebrow">Now booking / Growviaa Tattoo</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Your next piece <span className="ink-accent">starts here.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? Tell me about your project.
            </p>
          </div>

          <div className="flex-1 flex items-center">
            <div className="w-full grid lg:grid-cols-5 gap-8 lg:gap-16">
            
            {/* Contact Methods - Compact */}
            <div className="contact-aside lg:col-span-2 space-y-4 order-2 lg:order-1">
              <p className="micro-label">A considered process</p>
              <h3 className="text-3xl font-semibold mb-4">Tell us what you want to carry.</h3>
              <p className="text-muted-foreground leading-relaxed">Share the idea, the feeling, or just the rough direction. We will shape the rest together before anything touches skin.</p>
              
              {/* Compact Contact Methods */}
              <div className="flex flex-col gap-3 contact-links">
                {/* Instagram - Primary */}
                <a 
                  href={`https://instagram.com/${ARTIST_INFO.contact.instagram?.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-accent/10 border border-accent/20 rounded-lg hover:border-accent/50 transition-colors group"
                >
                  <Instagram className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium text-sm">{ARTIST_INFO.contact.instagram}</p>
                    <p className="text-xs text-accent">Preferred method</p>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href={`tel:${ARTIST_INFO.contact.phone}`}
                  className="flex items-center gap-3 p-3 bg-muted border border-border rounded-lg hover:border-accent/50 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <p className="font-medium text-sm">{ARTIST_INFO.contact.phone}</p>
                </a>

                {/* Email */}
                <a 
                  href={`mailto:${ARTIST_INFO.contact.email}`}
                  className="flex items-center gap-3 p-3 bg-muted border border-border rounded-lg hover:border-accent/50 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <p className="font-medium text-sm">{ARTIST_INFO.contact.email}</p>
                </a>
              </div>
            </div>

            {/* Contact Form - Compact */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <Card className="contact-card p-6 md:p-8">
                <div className="flex items-end justify-between gap-4 mb-6">
                  <div>
                    <p className="micro-label">Start a conversation</p>
                    <h3 className="text-2xl font-semibold">Project inquiry</h3>
                  </div>
                  <span className="contact-step">01 / 01</span>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="projectDescription" className="block text-xs font-medium mb-1">
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      placeholder="Tell me about your tattoo idea, style, placement, and any reference images..."
                      required
                      rows={3}
                      className="w-full px-3 py-2 text-sm bg-muted border border-border rounded focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Image Upload - Compact */}
                  <div>
                    <label htmlFor="images" className="block text-xs font-medium mb-1">
                      Reference Images
                    </label>
                    <div className="border border-dashed border-border rounded p-3 text-center hover:border-accent/50 transition-colors">
                      <input
                        type="file"
                        id="images"
                        name="images"
                        onChange={handleImageUpload}
                        multiple
                        accept="image/*"
                        className="hidden"
                      />
                      <label htmlFor="images" className="cursor-pointer">
                        <Upload className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">
                          Upload reference images
                        </p>
                      </label>
                    </div>
                    {formData.images.length > 0 && (
                      <p className="text-xs text-accent mt-1">
                        {formData.images.length} file(s) selected
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full ink-button py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    I&apos;ll get back to you within 24-48 hours.
                  </p>
                </form>
              </Card>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
