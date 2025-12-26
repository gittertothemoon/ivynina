import { useEffect, useMemo, useState } from 'react'
import { useI18n } from '../i18n/useI18n'

function ArrowUpIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <path d="M10 16V5" strokeLinecap="round" />
      <path d="M5.5 9.5 10 5l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ScrollToTopButton({ showAfter = 520 }) {
  const { t } = useI18n()
  const [isVisible, setIsVisible] = useState(false)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const onScroll = () => {
      setIsVisible(window.scrollY > showAfter)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [showAfter])

  const handleClick = () => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t('ui.scrollToTop')}
      className={`fixed right-5 z-50 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-blush/20 bg-espresso/55 text-blush/85 shadow-lift backdrop-blur-sm transition-all duration-200 hover:border-caramel/40 hover:bg-espresso/70 hover:text-blush focus-visible:ring-2 focus-visible:ring-caramel/30 focus-visible:ring-offset-2 focus-visible:ring-offset-espresso ${
        isVisible ? 'bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] translate-y-0 opacity-100' : 'bottom-3 translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <ArrowUpIcon className="h-4 w-4" />
    </button>
  )
}

