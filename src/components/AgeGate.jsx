import { useEffect, useRef } from 'react'
import { useI18n } from '../i18n/useI18n'

export function AgeGate({ onConfirm, onExit }) {
  const confirmButtonRef = useRef(null)
  const { t } = useI18n()

  useEffect(() => {
    confirmButtonRef.current?.focus()
  }, [])

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-espresso px-6 py-16">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-heading"
        aria-describedby="age-gate-description"
        className="relative z-10 w-full max-w-xl rounded-[2.5rem] border border-blush/20 bg-blush/5 p-7 text-center shadow-embrace backdrop-blur sm:p-10"
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
            className="inline-flex items-center justify-center gap-2 rounded-full border border-blush/25 px-6 py-3 text-sm font-medium text-blush/80 transition-colors duration-200 hover:border-caramel/60 hover:text-blush"
          >
            {t('ageGate.cta.exit')}
          </button>
        </div>
        <p className="mt-6 text-xs text-blush/55">{t('ageGate.note')}</p>
      </div>
    </div>
  )
}
