import { SiOnlyfans } from 'react-icons/si'
import { ArrowIcon } from './Icons'
import logoMark from '../assets/ivy-nina-logo.svg'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-28 pb-44 sm:px-10 sm:pt-32 sm:pb-32"
    >
      <img
        src={logoMark}
        alt="Ivy and Nina logotype"
        className="absolute left-20 top-[45%] hidden w-80 -translate-y-1/2 drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)] sm:block md:left-36 md:w-[24rem]"
      />
      <img
        src={logoMark}
        alt="Ivy and Nina logotype"
        className="absolute left-1/2 top-8 w-60 -translate-x-1/2 drop-shadow-[0_20px_44px_rgba(0,0,0,0.5)] sm:hidden"
      />
      {/* Contenuto centrale spostato ancora più in alto */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-blush sm:text-5xl md:text-6xl">
            Real lovers. Real chemistry.
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://onlyfans.com/ivyandnina"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Unlock All Access
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/ivyandnina/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline px-5 font-medium"
            >
              Preview on Instagram
            </a>
          </div>
        </div>
        <p className="text-[11px] uppercase tracking-[0.32em] text-blush/50 sm:text-xs">
          Consensual adult creators · Keep private if under 18
        </p>
      </div>
    </section>
  )
}

export function FloatingCTA() {
  return (
    <a
      href="https://onlyfans.com/ivyandnina"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+6.5rem)] right-6 z-40 inline-flex items-center gap-3 rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-blush shadow-embrace transition-colors duration-200 hover:bg-espresso/90 sm:hidden"
    >
      <SiOnlyfans className="h-5 w-5" />
      Join Ivy &amp; Nina
      <ArrowIcon className="h-4 w-4" />
    </a>
  )
}
