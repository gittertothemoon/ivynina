import { ArrowIcon } from './Icons'
import logoMark from '../assets/ivy-nina-logo.svg'
import { useI18n } from '../i18n/useI18n'

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section
      id="hero"
      className="relative isolate flex h-full items-center justify-center overflow-hidden px-6 pt-24 pb-28 sm:px-10 sm:pt-32 sm:pb-32"
    >
      <img
        src={logoMark}
        alt={t('hero.logoAlt')}
        className="absolute left-20 top-[45%] hidden w-80 -translate-y-1/2 drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)] sm:block md:left-36 md:w-[24rem]"
      />
      <img
        src={logoMark}
        alt={t('hero.logoAlt')}
        className="absolute left-1/2 top-6 w-52 -translate-x-1/2 drop-shadow-[0_20px_44px_rgba(0,0,0,0.5)] sm:hidden"
      />
      {/* Contenuto centrale spostato ancora più in alto */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-4 text-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold leading-tight text-blush sm:text-5xl md:text-6xl">
            {t('hero.headline')}
          </h1>
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href="https://onlyfans.com/ivyandnina"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark w-full sm:w-auto"
            >
              {t('hero.cta.unlockAllAccess')}
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/ivyandnina/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline w-full px-5 font-medium sm:w-auto"
            >
              {t('hero.cta.previewOnInstagram')}
            </a>
          </div>
        </div>
        <p className="text-[11px] uppercase tracking-[0.32em] text-blush/50 sm:text-xs">
          {t('hero.disclaimer')}
        </p>
      </div>
    </section>
  )
}
