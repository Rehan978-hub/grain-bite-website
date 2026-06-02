'use client'

import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProductsSection from './components/ProductsSection'
import QualitySection from './components/QualitySection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'
import FAQSection from './components/FAQSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <QualitySection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
    </main>
  )
}
