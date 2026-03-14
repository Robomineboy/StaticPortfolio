'use client'

import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Grid Background */}
      <div className="grid-bg" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  )
}
