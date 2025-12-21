import { SiInstagram, SiTelegram } from 'react-icons/si'
import onlyFansBadge from '../assets/onlyfans-badge.png'
import { useI18n } from '../i18n/useI18n'

export function UniversalFooter({ isHomePage = false }) {
  const { setLocale, t } = useI18n()

  return (
    <footer className="relative z-10 w-full">
      <div className="container-app relative">
        <div className="flex flex-col items-center justify-between gap-6 py-6 sm:flex-row sm:items-start">
          <a
            href="https://onlyfans.com/ivyandnina"
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 rounded-2xl transition-transform duration-200 hover:scale-[1.02] sm:inline-flex"
          >
            <img src={onlyFansBadge} alt={t('footer.onlyFansBadgeAlt')} className="h-12 w-auto cursor-pointer sm:h-20" />
          </a>

          <div className="hidden flex-1 items-center justify-center sm:flex">
            <div className="flex items-center justify-center gap-3 rounded-full border border-white/10 bg-espresso/40 px-4 py-2 text-xs text-blush/70 backdrop-blur-sm">
              <button
                type="button"
                className="text-blush/90 transition hover:text-caramel"
                onClick={() => setLocale('it')}
              >
                IT
              </button>
              <span className="text-blush/40">|</span>
              <button
                type="button"
                className="text-blush/70 transition hover:text-caramel"
                onClick={() => setLocale('en')}
              >
                EN
              </button>
            </div>
          </div>

          <div className="relative flex w-full shrink-0 items-center justify-between sm:w-auto sm:justify-start sm:gap-2">
            <a
              href="https://onlyfans.com/ivyandnina"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 rounded-2xl transition-transform duration-200 hover:scale-[1.02] sm:hidden"
            >
              <img src={onlyFansBadge} alt={t('footer.onlyFansBadgeAlt')} className="h-12 w-auto cursor-pointer" />
            </a>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:hidden">
              <div className="flex items-center justify-center gap-3 rounded-full border border-white/10 bg-espresso/40 px-4 py-2 text-xs text-blush/70 backdrop-blur-sm">
                <button
                  type="button"
                  className="text-blush/90 transition hover:text-caramel"
                  onClick={() => setLocale('it')}
                >
                  IT
                </button>
                <span className="text-blush/40">|</span>
                <button
                  type="button"
                  className="text-blush/70 transition hover:text-caramel"
                  onClick={() => setLocale('en')}
                >
                  EN
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a href="https://www.instagram.com/ivyandnina/" target="_blank" rel="noreferrer" className="icon-link">
                <SiInstagram className="h-6 w-6" />
              </a>
              <a href="https://t.me/ivyandnina" target="_blank" rel="noreferrer" className="icon-link">
                <SiTelegram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className={`${isHomePage ? 'mt-6' : 'mt-4'}`}>
          <div className="h-px w-full bg-[#0aa3ff]/80" />
        </div>

        <div className="pb-[calc(env(safe-area-inset-bottom)+2.75rem)] pt-4 sm:pb-[calc(env(safe-area-inset-bottom)+1.5rem)]">
          <div className="flex flex-col items-center justify-center gap-2 text-center text-xs text-blush/70 sm:flex-row sm:gap-3 sm:text-sm">
            <span>{t('footer.rightsLine')}</span>
            <button
              type="button"
              className="font-bold text-caramel transition-colors hover:text-sienna"
              onClick={() => console.log('PIONIO clicked')}
            >
              PIONIO
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
