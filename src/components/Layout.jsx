import { useEffect, useState } from 'react'

export function BackgroundCarousel({ images, interval = 7000, onIndexChange, filter = 'brightness(0.72) saturate(1.05)' }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!images?.length) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [images, interval])

  useEffect(() => {
    if (!images?.length) return
    onIndexChange?.(activeIndex)
  }, [activeIndex, images, onIndexChange])

  if (!images?.length) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-out ${index === activeIndex ? 'ken-burns-zoom-in' : ''}`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === activeIndex ? 1 : 0,
            filter,
            '--ken-burns-duration': `${interval}ms`,
          }}
        />
      ))}
    </div>
  )
}

export function BackgroundOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-[9]" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/65 to-espresso/85 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,229,217,0.35),_transparent_80%)] opacity-60" />
    </div>
  )
}

export function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`max-w-2xl space-y-4 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? <span className="pill">{eyebrow}</span> : null}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? <p className="text-sm text-blush/80">{description}</p> : null}
    </div>
  )
}
