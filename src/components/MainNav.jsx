import { useEffect, useId, useState } from 'react'
import { navLinks } from '../utils/constants'
import { ArrowIcon } from './Icons'
import logoMark from '../assets/ivy-nina-logo.svg'
import { useI18n } from '../i18n/useI18n'

export function MainNav({ onOpenSection, currentPage, showLogo = false, isFixed = true, onNavigateHome }) {
  const [isSolid, setIsSolid] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const mobileMenuId = useId()
  const { t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen || typeof document === 'undefined') {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [currentPage])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const positionClasses = isFixed ? 'fixed top-0 left-0 right-0 z-40' : 'relative z-40'
  const headerClasses = `${positionClasses} bg-transparent transition-colors duration-200 ${
    isSolid
      ? 'bg-espresso/55 backdrop-blur-md shadow-[0_24px_64px_-40px_rgba(161,129,103,0.65)]'
      : currentPage === 'home'
        ? 'bg-transparent sm:bg-espresso/20 sm:backdrop-blur-sm'
        : 'bg-espresso/20 backdrop-blur-sm'
  }`

  const handleNavigateMobile = (section) => {
    setIsMenuOpen(false)
    onOpenSection(section)
  }

  const handleNavigateHomeSafe = () => {
    setIsMenuOpen(false)
    onNavigateHome?.()
  }

  return (
    <header className={headerClasses}>
      {isMenuOpen ? (
        <div
          className="fixed inset-0 z-30 bg-espresso/80 sm:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      ) : null}

      <div className={`container-app relative z-40 ${showLogo ? 'py-4 sm:py-5' : 'py-3 sm:py-4'}`}>
        <div className={`flex items-center ${showLogo ? 'justify-between' : 'justify-end'} sm:hidden`}>
          {showLogo ? (
            <button
              type="button"
              onClick={handleNavigateHomeSafe}
              className="flex items-center justify-center rounded-xl transition-transform duration-200 hover:scale-[1.02]"
            >
              <img src={logoMark} alt="Ivy & Nina" className="h-20 w-auto origin-left scale-125" />
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-blush/15 bg-espresso/25 text-blush/85 backdrop-blur-sm transition-all duration-200 hover:border-caramel/50 hover:bg-blush/5 hover:text-blush"
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
            aria-label={isMenuOpen ? t('nav.aria.closeMenu') : t('nav.aria.openMenu')}
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`hidden gap-4 ${
            showLogo
              ? 'sm:flex sm:items-center sm:justify-between'
              : 'sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center'
          }`}
        >
          {showLogo ? (
            <button
              type="button"
              onClick={handleNavigateHomeSafe}
              className="flex items-center justify-center rounded-xl transition-transform duration-200 hover:scale-[1.02] sm:justify-start"
            >
              <img src={logoMark} alt="Ivy & Nina" className="h-24 w-auto origin-left scale-125 sm:h-32 sm:scale-110" />
            </button>
          ) : (
            <div className="hidden sm:block" aria-hidden="true" />
          )}

          <div
            className={`flex flex-1 flex-wrap items-center justify-center gap-2 text-[11px] uppercase tracking-[0.26em] text-blush/80 sm:text-xs ${
              showLogo ? '' : 'sm:col-start-2'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.section
              return (
                <button
                  key={link.section}
                  type="button"
                  onClick={() => onOpenSection(link.section)}
                  className={`min-h-11 rounded-full border px-4 py-2.5 text-blush/85 backdrop-blur-sm transition-all duration-200 ${
                    isActive
                      ? 'border-caramel/80 bg-caramel/20 text-blush shadow-[0_10px_24px_-18px_rgba(219,194,173,0.75)]'
                      : 'border-blush/15 bg-espresso/20 hover:border-caramel/50 hover:bg-blush/5 hover:text-blush'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {t(link.labelKey)}
                </button>
              )
            })}
          </div>

          <div className={`flex items-center justify-center ${showLogo ? '' : 'sm:col-start-3 sm:justify-end'}`}>
            <a
              href="https://onlyfans.com/ivyandnina"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark px-5 py-2.5 text-xs uppercase tracking-[0.35em] sm:whitespace-nowrap"
            >
              {t('nav.joinOnlyFans')}
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="relative sm:hidden">
            <nav
              id={mobileMenuId}
              aria-label={t('nav.aria.menu')}
              className="absolute left-0 right-0 top-4 z-40 rounded-2xl border border-blush/15 bg-espresso/90 p-4 shadow-[0_24px_64px_-40px_rgba(161,129,103,0.65)] backdrop-blur-md"
            >
              <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.26em] text-blush/80">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.section
                  return (
                    <button
                      key={link.section}
                      type="button"
                      onClick={() => handleNavigateMobile(link.section)}
                      className={`min-h-11 w-full rounded-2xl border px-5 py-3 text-left text-blush/85 transition-all duration-200 ${
                        isActive
                          ? 'border-caramel/80 bg-caramel/20 text-blush shadow-[0_10px_24px_-18px_rgba(219,194,173,0.75)]'
                          : 'border-blush/15 bg-espresso/20 hover:border-caramel/50 hover:bg-blush/5 hover:text-blush'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {t(link.labelKey)}
                    </button>
                  )
                })}
              </div>

              <div className="mt-4 border-t border-blush/15 pt-4">
                <a
                  href="https://onlyfans.com/ivyandnina"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary w-full justify-center px-6 py-3 text-xs uppercase tracking-[0.35em]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.joinOnlyFans')}
                  <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}
