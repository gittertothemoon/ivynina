import { useCallback, useEffect, useState } from 'react'

// Components
import { AgeGate } from './components/AgeGate'
import { BackgroundCarousel, BackgroundOverlay } from './components/Layout'
import { MainNav } from './components/MainNav'
import { HeroSection } from './components/HeroSection'
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
    return <ConnectPage onN