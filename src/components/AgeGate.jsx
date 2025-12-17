import { useEffect, useRef } from 'react'

export function AgeGate({ onConfirm, onExit }) {
  const confirmButtonRef = useRef(null)

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
        <span className="pill">Consent required</span>
        <h1 id="age-gate-heading" className="mt-4 text-3xl font-semibold text-blush sm:text-4xl">
          Adults only beyond this point.
        </h1>
        <p id="age-gate-description" className="mt-4 text-sm leading-relaxed text-blush/80">
          By entering you confirm you are at least 18 years old (or the age of majority in your region) and that you wish
          to view intimate content created consensually by Ivy &amp; Nina. Please leave this site if you are underage or if
          adult material offends you.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            ref={confirmButtonRef}
            onClick={onConfirm}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-espresso shadow-embrace transition-colors duration-200 hover:bg-sienna/90"
          >
            I am 18 or older
          </button>
          <button
            type="button"
            onClick={onExit}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-blush/80 transition-colors duration-200 hover:border-caramel/60 hover:text-blush"
          >
            I am under 18
          </button>
        </div>
        <p className="mt-6 text-xs text-blush/55">Consent and respect are everything. Keep this space private, secure, and caring.</p>
      </div>
    </div>
  )
}
