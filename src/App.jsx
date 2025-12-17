import { useCallback, useEffect, useState } from 'react'

// Components
import { AgeGate } from './components/AgeGate'
import { BackgroundCarousel, BackgroundOverlay } from './components/Layout'
import { MainNav } from './components/MainNav'
import { HeroSection, FloatingCTA } from './components/HeroSection'
import { UniversalFooter } from './components/UniversalFooter'

// Pages
import { FAQPage } from './pages/FAQPage'
import { ConnectPage } from './pages/ConnectPage'
import { TestimonialsPage } from './pages/TestimonialsPage'
import { ScenesPage } from './pages/ScenesPage'
import { StoryPage } from './pages/StoryPage'

// Utils
import { AGE_GATE_KEY, heroBackgrounds } from './utils/constants'

function App() {
  const [ageChecked, setAgeChecked] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(AGE_GATE_KEY)
      if (stored === 'true') {
        setHasConsent(true)
      }
    } catch (error) {
      console.warn('Unable to read age confirmation state.', error)
    } finally {
      setAgeChecked(true)
    }
  }, [])

  useEffect(() => {
    if (!ageChecked || typeof document === 'undefined') {
      return
    }

    if (!hasConsent) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.overflow = previousOverflow
      }
    }

    return undefined
  }, [ageChecked, hasConsent])

  const handleConfirmAge = useCallback(() => {
    setHasConsent(true)
    try {
      window.localStorage.setItem(AGE_GATE_KEY, 'true')
    } catch (error) {
      console.warn('Unable to persist age confirmation.', error)
    }
  }, [])

  const handleExitSite = useCallback(() => {
    window.location.href = 'https://www.google.com'
  }, [])

  const handleOpenSection = useCallback((section) => {
    if (section === 'story') {
      setCurrentPage('story')
    } else if (section === 'scenes') {
      setCurrentPage('scenes')
    } else if (section === 'testimonials') {
      setCurrentPage('testimonials')
    } else if (section === 'faq') {
      setCurrentPage('faq')
    } else if (section === 'connect') {
      setCurrentPage('connect')
    }
  }, [])

  const handleNavigateHome = useCallback(() => {
    setCurrentPage('home')
  }, [])

  if (!ageChecked) {
    return null
  }

  if (!hasConsent) {
    return <AgeGate onConfirm={handleConfirmAge} onExit={handleExitSite} />
  }

  // Show dedicated pages
  if (currentPage === 'story') {
    return <StoryPage onNavigateHome={handleNavigateHome} onOpenSection={handleOpenSection} />
  }
  
  if (currentPage === 'scenes') {
    return <ScenesPage onNavigateHome={handleNavigateHome} onOpenSection={handleOpenSection} />
  }
  
  if (currentPage === 'testimonials') {
    return <TestimonialsPage onNavigateHome={handleNavigateHome} onOpenSection={handleOpenSection} />
  }
  
  if (currentPage === 'faq') {
    return <FAQPage onNavigateHome={handleNavigateHome} onOpenSection={handleOpenSection} />
  }
  
  if (currentPage === 'connect') {
    return <ConnectPage onNavigateHome={handleNavigateHome} onOpenSection={handleOpenSection} />
  }

  // Show main home page
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <BackgroundCarousel images={heroBackgrounds} />
      <BackgroundOverlay />
      <MainNav onOpenSection={handleOpenSection} currentPage={currentPage} />
      <main className="relative flex-1">
        <HeroSection />
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <UniversalFooter isHomePage={true} />
      </div>
      <FloatingCTA />
    </div>
  )
}

export default App
