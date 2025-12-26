import { useEffect, useMemo, useRef, useState } from 'react'
import { SiOnlyfans } from 'react-icons/si'
import { MainNav } from '../components/MainNav'
import { UniversalFooter } from '../components/UniversalFooter'
import { ArrowIcon } from '../components/Icons'
import { FadeIn } from '../components/animations/ScrollAnimations'
import { useI18n } from '../i18n/useI18n'
import { homeBackgrounds } from '../utils/constants'

function useInViewOnceRef(ref, { threshold = 0.35 } = {}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return undefined
    }

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, threshold])

  return isVisible
}

function useScrollCssVariable(ref, variable = '--p') {
  useEffect(() => {
    const node = ref.current
    if (!node || typeof window === 'undefined') return undefined

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      node.style.setProperty(variable, '0')
      return undefined
    }

    let rafId = 0
    const update = () => {
      rafId = 0
      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const total = viewportHeight + rect.height
      const raw = (viewportHeight - rect.top) / total
      const clamped = Math.max(0, Math.min(1, raw))
      const centered = (clamped - 0.5) * 2

      element.style.setProperty(variable, centered.toFixed(4))

      const topProgressRaw = (viewportHeight - rect.top) / viewportHeight
      const topProgress = Math.max(0, Math.min(1, topProgressRaw))
      element.style.setProperty('--tp', topProgress.toFixed(4))
    }

    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref, variable])
}

function StoryImagePanel({
  src,
  alt,
  caption,
  beat,
  overlayClassName,
  align = 'left',
  variant = 'drift',
  sticky = true,
  heightClass = 'h-[106svh] sm:h-[108svh]',
  children,
}) {
  const ref = useRef(null)
  const isVisible = useInViewOnceRef(ref, { threshold: 0.4 })
  useScrollCssVariable(ref, '--p')

  const variants = {
    drift: {
      hidden: 'scale-[1.06] translate-y-6 opacity-0',
      visible: 'scale-100 translate-y-0 opacity-100',
    },
    slideLeft: {
      hidden: 'scale-[1.04] -translate-x-10 opacity-0',
      visible: 'scale-100 translate-x-0 opacity-100',
    },
    slideRight: {
      hidden: 'scale-[1.04] translate-x-10 opacity-0',
      visible: 'scale-100 translate-x-0 opacity-100',
    },
    tilt: {
      hidden: 'scale-[1.05] rotate-1 opacity-0',
      visible: 'scale-100 rotate-0 opacity-100',
    },
    focus: {
      hidden: 'scale-[1.04] opacity-0 saturate-125 contrast-125',
      visible: 'scale-100 opacity-100 saturate-100 contrast-100',
    },
    kenBurns: {
      hidden: 'opacity-0',
      visible: 'opacity-100 ken-burns-zoom-in',
    },
  }

  const variantClasses = variants[variant] ?? variants.drift

  const beatAlignment =
    align === 'center'
      ? 'left-1/2 -translate-x-1/2 text-center'
      : align === 'right'
        ? 'left-1/2 -translate-x-1/2 text-center sm:left-auto sm:right-8 sm:translate-x-0 sm:text-right'
        : 'left-1/2 -translate-x-1/2 text-center sm:left-8 sm:translate-x-0 sm:text-left'

  const stackAlignment =
    align === 'center'
      ? 'items-center text-center'
      : align === 'right'
        ? 'items-center text-center sm:items-end sm:text-right'
        : 'items-center text-center sm:items-start sm:text-left'

  const parallaxX = align === 'left' ? 14 : align === 'right' ? -14 : 0
  const parallaxRotate = variant === 'tilt' ? 1.1 : 0.55

  const containerClassName = `relative -mx-6 sm:-mx-10 ${heightClass}`
  const frameClassName = sticky ? 'sticky top-0 h-[100svh] overflow-hidden' : 'relative h-full overflow-hidden'

  const fadeStop = 'calc(((1 - var(--tp)) * 14%) + 0.5%)'

  return (
    <section className={containerClassName} ref={ref}>
      <div className={frameClassName}>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            maskImage: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) ${fadeStop}, rgba(0,0,0,1) 100%)`,
            WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) ${fadeStop}, rgba(0,0,0,1) 100%)`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `translate3d(calc(var(--p) * ${parallaxX}px), calc(var(--p) * -54px), 0) scale(1.06) rotate(calc(var(--p) * ${parallaxRotate}deg))`,
            }}
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover transition-[transform,filter,opacity] duration-[1600ms] ease-out ${
                isVisible ? variantClasses.visible : variantClasses.hidden
              }`}
              style={{
                filter: 'saturate(1.05)',
              }}
            />
          </div>
        </div>

        {overlayClassName ? (
          <div className={`pointer-events-none absolute inset-0 ${overlayClassName}`} aria-hidden="true" />
        ) : null}

        {children ? <div className="relative z-10 h-full">{children}</div> : null}

        {beat?.kicker || beat?.line || caption ? (
          <div
            className={`pointer-events-none absolute bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] ${beatAlignment} z-10 max-w-[min(46rem,calc(100%-3rem))] transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div
              className={`flex max-w-full flex-col gap-3 ${stackAlignment}`}
              style={{
                transform: `translate3d(calc(var(--p) * ${-parallaxX}px), calc(var(--p) * 10px), 0)`,
              }}
            >
              {beat?.kicker || beat?.line ? (
                <div className="space-y-2 rounded-3xl border border-blush/20 bg-espresso/55 px-6 py-5 text-blush/90 backdrop-blur-sm">
                  {beat.kicker ? (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-blush/70 sm:text-xs">
                      {beat.kicker}
                    </p>
                  ) : null}
                  {beat.line ? <p className="text-base leading-relaxed text-blush/90 sm:text-lg">{beat.line}</p> : null}
                </div>
              ) : null}

              {caption ? (
                <div className="inline-flex items-center gap-2 rounded-full border border-blush/20 bg-espresso/55 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-blush/85 backdrop-blur-sm sm:text-xs">
                  {caption}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function ParallaxCollage({ images, beat, density = 'dense', beatPlacement = 'overlay' }) {
  const ref = useRef(null)
  const isVisible = useInViewOnceRef(ref, { threshold: 0.25 })
  useScrollCssVariable(ref, '--p')

  const layers = useMemo(() => {
    const base = images.length ? images : homeBackgrounds
    const pick = (index) => base[index % base.length]

    const denseLayers = [
      { src: pick(0), left: '22%', top: '30%', w: '34vw', maxW: '520px', rot: -7, dx: -26, dy: 70, z: 5 },
      { src: pick(1), left: '55%', top: '26%', w: '28vw', maxW: '460px', rot: 5, dx: 18, dy: 60, z: 4 },
      { src: pick(2), left: '78%', top: '42%', w: '26vw', maxW: '440px', rot: -3, dx: 24, dy: 80, z: 3 },
      { src: pick(3), left: '38%', top: '55%', w: '30vw', maxW: '480px', rot: 8, dx: -18, dy: 90, z: 6 },
      { src: pick(4), left: '64%', top: '62%', w: '32vw', maxW: '520px', rot: -10, dx: 14, dy: 110, z: 7 },
      { src: pick(5), left: '16%', top: '64%', w: '22vw', maxW: '360px', rot: 12, dx: -30, dy: 120, z: 2 },
      { src: pick(6), left: '50%', top: '78%', w: '24vw', maxW: '380px', rot: 3, dx: 0, dy: 140, z: 8 },
      { src: pick(7), left: '84%', top: '74%', w: '18vw', maxW: '300px', rot: -14, dx: 34, dy: 160, z: 1 },
    ]

    const airyLayers = [
      { src: pick(0), left: '30%', top: '35%', w: '38vw', maxW: '560px', rot: -6, dx: -18, dy: 80, z: 4 },
      { src: pick(2), left: '70%', top: '45%', w: '30vw', maxW: '480px', rot: 7, dx: 16, dy: 110, z: 5 },
      { src: pick(4), left: '45%', top: '70%', w: '34vw', maxW: '520px', rot: -10, dx: 0, dy: 140, z: 6 },
      { src: pick(6), left: '84%', top: '68%', w: '20vw', maxW: '320px', rot: 14, dx: 26, dy: 160, z: 2 },
      { src: pick(7), left: '18%', top: '72%', w: '22vw', maxW: '360px', rot: 10, dx: -28, dy: 170, z: 1 },
    ]

    return density === 'dense' ? denseLayers : airyLayers
  }, [density, images])

  const fadeStop = 'calc(((1 - var(--tp)) * 14%) + 0.5%)'
  const reserveBottom = beatPlacement === 'bottom' && (beat?.kicker || beat?.line)
  const bottomStop = reserveBottom ? 'calc(100% - 28%)' : '100%'

  return (
    <section className="relative -mx-6 sm:-mx-10 h-[106svh] sm:h-[108svh]" ref={ref}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="absolute inset-0 bg-section-texture opacity-80" aria-hidden="true" />

        <div
          className="absolute inset-0"
          style={{
            maskImage: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) ${fadeStop}, rgba(0,0,0,1) ${bottomStop}, ${
              reserveBottom ? 'transparent 100%' : 'rgba(0,0,0,1) 100%'
            })`,
            WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) ${fadeStop}, rgba(0,0,0,1) ${bottomStop}, ${
              reserveBottom ? 'transparent 100%' : 'rgba(0,0,0,1) 100%'
            })`,
          }}
        >
          {layers.map((layer) => (
            <div
              key={`${layer.src}-${layer.left}-${layer.top}`}
              className={`absolute rounded-[2.25rem] border border-blush/20 bg-espresso/20 p-2 shadow-lift backdrop-blur-sm transition-opacity duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: layer.left,
                top: layer.top,
                width: layer.w,
                maxWidth: layer.maxW,
                zIndex: layer.z,
                transform: `translate3d(calc(-50% + (var(--p) * ${layer.dx}px)), calc(-50% + (var(--p) * ${layer.dy}px)), 0) rotate(calc(${layer.rot}deg + (var(--p) * 0.7deg)))`,
              }}
            >
              <div className="relative overflow-hidden rounded-[1.85rem]">
                <img
                  src={layer.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: '4 / 5' }}
                />
              </div>
            </div>
          ))}
        </div>

        {beat?.kicker || beat?.line ? (
          <div
            className={`pointer-events-none absolute bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] left-1/2 z-20 w-[min(46rem,calc(100%-3rem))] -translate-x-1/2 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div
              className="space-y-2 rounded-3xl border border-blush/20 bg-espresso/65 px-6 py-5 text-center text-blush/90 backdrop-blur-sm"
              style={{
                transform: 'translate3d(calc(var(--p) * 10px), calc(var(--p) * 8px), 0)',
              }}
            >
              {beat.kicker ? (
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-blush/70 sm:text-xs">
                  {beat.kicker}
                </p>
              ) : null}
              {beat.line ? <p className="text-base leading-relaxed text-blush/90 sm:text-lg">{beat.line}</p> : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function StoryPage({ onNavigateHome, onOpenSection }) {
  const { t } = useI18n()
  const beats = t('pages.story.visual.beats')

  const panels = useMemo(() => {
    const source = homeBackgrounds?.length ? homeBackgrounds : []
    const pick = (index) => source[index % source.length]
    return [
      {
        src: pick(0),
        altKey: 'pages.story.beginning.images.beginningAlt',
        captionKey: 'pages.story.chapter2.gallery.firstConnectionLabel',
        variant: 'drift',
        align: 'left',
        beatIndex: 0,
      },
      {
        src: pick(1),
        altKey: 'pages.story.beginning.images.connectionAlt',
        captionKey: 'pages.story.chapter2.gallery.vulnerabilityLabel',
        variant: 'slideRight',
        align: 'right',
      },
      {
        src: pick(2),
        altKey: 'pages.story.chapter2.gallery.artisticExpressionAlt',
        captionKey: 'pages.story.chapter2.gallery.artisticSoulTitle',
        variant: 'focus',
        align: 'left',
        beatIndex: 1,
      },
      {
        src: pick(3),
        altKey: 'pages.story.chapter2.gallery.sharedMomentsAlt',
        captionKey: 'pages.story.chapter2.gallery.trustLabel',
        variant: 'tilt',
        align: 'right',
        beatIndex: 5,
      },
      {
        src: pick(4),
        altKey: 'pages.story.chapter2.gallery.futureTogetherAlt',
        captionKey: 'pages.story.chapter2.gallery.futureLabel',
        variant: 'slideLeft',
        align: 'center',
      },
      {
        src: pick(5),
        altKey: 'pages.story.chapter2.gallery.decisionProcessAlt',
        captionKey: 'pages.story.chapter2.processOverlay.title',
        variant: 'drift',
        align: 'left',
        beatIndex: 3,
      },
    ]
  }, [])

  return (
    <div className="relative min-h-screen bg-espresso overflow-hidden">
      <MainNav
        onOpenSection={onOpenSection}
        currentPage="story"
        showLogo={true}
        isFixed={false}
        onNavigateHome={onNavigateHome}
      />

      <main className="relative">
        <StoryImagePanel
          src={homeBackgrounds?.[0] ?? 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=2400&h=1600&fit=crop&crop=center'}
          alt={t('pages.story.hero.title')}
          sticky={false}
          heightClass="h-[100svh]"
          variant="kenBurns"
          overlayClassName="bg-black/25 mix-blend-multiply"
        >
          <div className="container-app flex h-full items-center justify-center py-24 text-center">
            <FadeIn className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-blush sm:text-6xl lg:text-7xl">
                {t('pages.story.hero.title')}
              </h1>
              <p className="text-base leading-relaxed text-blush/80 sm:text-lg">
                {t('pages.story.hero.subtitle')}
              </p>
            </FadeIn>
          </div>
        </StoryImagePanel>

        <ParallaxCollage
          images={homeBackgrounds}
          density="dense"
          beat={Array.isArray(beats) ? beats[4] : undefined}
          beatPlacement="bottom"
        />

        {panels.map((panel) => (
          <StoryImagePanel
            key={panel.src}
            src={panel.src}
            alt={t(panel.altKey)}
            caption={t(panel.captionKey)}
            beat={
              Array.isArray(beats) && typeof panel.beatIndex === 'number'
                ? beats[panel.beatIndex]
                : undefined
            }
            align={panel.align}
            variant={panel.variant}
            sticky={false}
            heightClass="h-[100svh]"
          />
        ))}

        <ParallaxCollage
          images={[...homeBackgrounds, ...homeBackgrounds].slice(0, 12)}
          density="airy"
          beat={Array.isArray(beats) ? beats[2] : undefined}
          beatPlacement="bottom"
        />

        <section className="relative bg-espresso">
          <div className="container-app py-14 sm:py-20">
            <FadeIn className="mx-auto max-w-2xl text-center space-y-6">
              <p className="text-sm uppercase tracking-[0.32em] text-blush/60 sm:text-xs">
                {t('pages.story.join.subtitle')}
              </p>
              <a
                href="https://onlyfans.com/ivyandnina"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mx-auto w-full max-w-sm sm:w-auto"
              >
                <SiOnlyfans className="h-4 w-4" />
                {t('pages.story.join.cta')}
                <ArrowIcon className="h-4 w-4" />
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <UniversalFooter isHomePage={false} />
    </div>
  )
}
