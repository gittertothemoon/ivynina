import { useCallback, useEffect, useState } from 'react'

// Components
import { AgeGate } from './components/AgeGate'
import { BackgroundCarousel, BackgroundOverlay } from './components/Layout'
import { MainNav } from './components/MainNav'
import { HeroSection } from './components/HeroSection'
import { UniversalFooter } from './components/UniversalFooter'
import { ScrollToTopButton } from './components/ScrollToTopButton'

// Pages
import { FAQPage } from './pages/FAQPage'
import { ConnectPage } from './pages/ConnectPage'
import { TestimonialsPage } from './pages/TestimonialsPage'
import { ScenesPage } from './pages/ScenesPage'
import { StoryPage } from './pages/StoryPage'

// Utils
import { AGE_GATE_KEY, homeBackgrounds } from './utils/constants'

function App() {
  const [ageChecked, setAgeChecked] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [heroIndex, setHeroIndex] = useState(0)

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

  useEffect(() => {
    if (!hasConsent || typeof document === 'undefined') {
      return undefined
    }

    if (currentPage !== 'home') {
      return undefined
    }

    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
    }
  }, [currentPage, hasConsent])

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
    setHeroIndex(0)
  }, [])

  if (!ageChecked) {
    return null
  }

  if (!hasConsent) {
    return <AgeGate onConfirm={handleConfirmAge} onExit={handleExitSite} />
  }

  // Show dedicated pages
  if (currentPage === 'story') {
    return (
      <>
        <StoryPage onNavigateHome={handleNavigateHome} onOpenSection={handleOpenSection} />
        <ScrollToTopButton />
      </>
    )
  }
  
  if (currentPage === 'scenes') {
    return (
      <>
        <ScenesPage onNavigateHome={handleNavigateHome} onOpenSection={handleOpenSection} />
        <ScrollToTopButton />
      </>
    )
  }
  
  if (currentPage === 'testimonials') {
    return (
      <>
        <TestimonialsPage onNavigateHome={handleNavigateHome} onOpenSection={handleOpenSection} />
        <ScrollToTopButton />
      </>
    )
  }
  
  if (currentPage === 'faq') {
    return (
      <>
        <FAQPage onNavigateHome={handleNavigateHome} onOpenSection={handleOpenSection} />
        <ScrollToTopButton />
      </>
    )
  }
  
  if (currentPage === 'connect') {
    return (
      <>
        <ConnectPage onNavigateHome={handleNavigateHome} onOpenSection={handleOpenSection} />
        <ScrollToTopButton />
      </>
    )
  }

  // Show main home page
  return (
    <div className="relative flex h-[100svh] flex-col overflow-hidden">
      <BackgroundCarousel images={homeBackgrounds} onIndexChange={setHeroIndex} filter="saturate(1.05)" />
      <div className="pointer-events-none fixed inset-0 -z-[9]" aria-hidden="true">
        <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent sm:h-36" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent sm:h-44" />
      </div>
      <MainNav onOpenSection={handleOpenSection} currentPage={currentPage} />
      <main className="relative flex-1 overflow-hidden">
        <HeroSection activeIndex={heroIndex} />
      </main>
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <UniversalFooter isHomePage={true} />
      </div>
    </div>
  )
}

export default App
