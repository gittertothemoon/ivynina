import { useEffect, useState } from 'react'
import { navLinks } from '../utils/constants'
import { ArrowIcon } from './Icons'
import logoMark from '../assets/ivy-nina-logo.svg'

export function MainNav({ onOpenSection, currentPage, showLogo = false, isFixed = true, onNavigateHome }) {
  const [isSolid, setIsSolid] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const positionClasses = isFixed ? 'fixed top-0 left-0 right-0 z-40' : 'relative z-40'
  const headerClasses = `${positionClasses} bg-transparent transition-colors duration-200 ${
    isSolid
      ? 'bg-espresso/55 backdrop-blur-md shadow-[0_24px_64px_-40px_rgba(5,2,0,0.85)]'
      : 'bg-espresso/20 backdrop-blur-sm'
  }`

  return (
    <header className={headerClasses}>
      <div
        className={`container-app flex flex-col gap-4 ${showLogo ? 'py-8' : 'py-4'} ${
          showLogo ? 'sm:flex-row sm:items-center sm:justify-between' : 'sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center'
        }`}
      >
        {/* Logo per le pagine */}
        {showLogo && (
          <button 
            onClick={onNavigateHome}
            className="flex items-center justify-center rounded-xl transition-transform duration-200 hover:scale-[1.02] sm:justify-start"
          >
            <img src={logoMark} alt="Ivy & Nina" className="h-32 w-auto sm:h-44" />
          </button>
        )}

        {!showLogo ? <div className="hidden sm:block" aria-hidden="true" /> : null}
        
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
                    ? 'border-caramel/80 bg-caramel/20 text-blush shadow-[0_10px_24px_-18px_rgba(197,140,97,0.8)]'
                    : 'border-white/10 bg-espresso/20 hover:border-caramel/50 hover:bg-white/5 hover:text-blush'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </button>
            )
          })}
        </div>
        <div className={`flex items-center justify-center ${showLogo ? '' : 'sm:col-start-3 sm:justify-end'}`}>
          <a
            href="https://onlyfans.com/ivyandnina"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark px-5 py-2.5 text-xs uppercase tracking-[0.35em]"
          >
            Join OnlyFans
            <ArrowIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  )
}
