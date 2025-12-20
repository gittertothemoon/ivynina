import { useEffect, useRef } from 'react'
import { useI18n } from '../i18n/index.jsx'

export function AgeGate({ onConfirm, onExit }) {
  const confirmButtonRef = useRef(null)
  const { t } = useI18n()

  useEffect(() => {
    confirmButtonRef.current?.focus()
  }, [])

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-espresso px-6 py-16">
      <div className="absolute inset-0 bg-hero-gradient opacity-80" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,229,215,0.2),_transparent_58%)]"
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-heading"
        aria-describedby="age-gate-description"
        className="relative z-10 w-full max-w-xl rounded-[2.5rem] border border-white/15 bg-white/5 p-7 text-center shadow-embrace backdrop-blur sm:p-10"
      >
        <span className="pill">{t('ageGate.pill')}</span>
        <h1 id="age-gate-heading" className="mt-4 text-3xl font-semibold text-blush sm:text-4xl">
          {t('ageGate.title')}
        </h1>
        <p id="age-gate-description" className="mt-4 text-sm leading-relaxed text-blush/80">
          {t('ageGate.description')}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            ref={confirmButtonRef}
            onClick={onConfirm}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-espresso shadow-embrace transition-colors duration-200 hover:bg-sienna/90"
          >
            {t('ageGate.cta.confirm')}
          </button>
          <button
            type="button"
            onClick={onExit}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-blush/80 transition-colors duration-200 hover:border-caramel/60 hover:text-blush"
          >
            {t('ageGate.cta.exit')}
          </button>
        </div>
        <p className="mt-6 text-xs text-blush/55">{t('ageGate.note')}</p>
      </div>
    </div>
  )
}
