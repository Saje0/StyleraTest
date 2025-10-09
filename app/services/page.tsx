'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ShaderBackground from '@/components/shader-background'
import ServicesHeroSection from '@/components/services/services-hero-section'
import DetailedServices from '@/components/services/services-details'
import HowWeWork from '@/components/services/how-we-work'
import CTASection from '@/components/services/services-cta-section'
export default function ServicesPage() {
  return (
    <div className='relative'>
      <ShaderBackground>
        <div className='relative z-10'>
          <Navigation />
          <ServicesHeroSection />
        </div>
      </ShaderBackground>

      <div className='bg-background'>
        <DetailedServices />
        <HowWeWork />
        <CTASection />
      </div>

      <Footer />
    </div>
  )
}
