import { useEffect, useState } from 'react'
import { SiOnlyfans } from 'react-icons/si'
import { BackgroundCarousel } from '../components/Layout'
import { MainNav } from '../components/MainNav'
import { UniversalFooter } from '../components/UniversalFooter'
import { FadeIn } from '../components/animations/ScrollAnimations'
import { ArrowIcon } from '../components/Icons'
import { heroBackgrounds } from '../utils/constants'
import { useI18n } from '../i18n/useI18n'

export function ScenesPage({ onNavigateHome, onOpenSection }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedScene, setSelectedScene] = useState(null)
  const [copiedCode, setCopiedCode] = useState(null)
  const { t } = useI18n()

  useEffect(() => {
    if (!selectedScene || typeof document === 'undefined') {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedScene])

  const categories = [
    { id: 'all', labelKey: 'pages.scenes.categories.all', count: 12 },
    { id: 'intimate', labelKey: 'pages.scenes.categories.intimate', count: 5 },
    { id: 'playful', labelKey: 'pages.scenes.categories.playful', count: 4 },
    { id: 'artistic', labelKey: 'pages.scenes.categories.artistic', count: 3 }
  ]

  const sceneGallery = [
    {
      id: 1,
      titleKey: "pages.scenes.gallery.1.title",
      category: "intimate",
      duration: "18 min",
      quality: "4K",
      previewKey: "pages.scenes.gallery.1.preview",
      tagsKeys: ["pages.scenes.tags.sensual", "pages.scenes.tags.naturalLight", "pages.scenes.tags.authentic"],
      subscribers: 2847,
      rating: 4.9,
      hashCode: "#IVY_ML_001"
    },
    {
      id: 2,
      titleKey: "pages.scenes.gallery.2.title",
      category: "intimate",
      duration: "25 min",
      quality: "4K",
      previewKey: "pages.scenes.gallery.2.preview",
      tagsKeys: ["pages.scenes.tags.emotional", "pages.scenes.tags.raw", "pages.scenes.tags.connection"],
      subscribers: 3210,
      rating: 5.0,
      hashCode: "#IVY_MC_002"
    },
    {
      id: 3,
      titleKey: "pages.scenes.gallery.3.title",
      category: "playful",
      duration: "15 min",
      quality: "4K",
      previewKey: "pages.scenes.gallery.3.preview",
      tagsKeys: ["pages.scenes.tags.fun", "pages.scenes.tags.spontaneous", "pages.scenes.tags.laughter"],
      subscribers: 1892,
      rating: 4.8,
      hashCode: "#IVY_PA_003"
    },
    {
      id: 4,
      titleKey: "pages.scenes.gallery.4.title",
      category: "artistic",
      duration: "22 min",
      quality: "4K",
      previewKey: "pages.scenes.gallery.4.preview",
      tagsKeys: ["pages.scenes.tags.artistic", "pages.scenes.tags.visual", "pages.scenes.tags.creative"],
      subscribers: 2156,
      rating: 4.9,
      hashCode: "#IVY_CD_004"
    },
    {
      id: 5,
      titleKey: "pages.scenes.gallery.5.title",
      category: "playful",
      duration: "31 min",
      quality: "4K",
      previewKey: "pages.scenes.gallery.5.preview",
      tagsKeys: ["pages.scenes.tags.adventure", "pages.scenes.tags.romance", "pages.scenes.tags.travel"],
      subscribers: 2634,
      rating: 4.8,
      hashCode: "#IVY_WG_005"
    },
    {
      id: 6,
      titleKey: "pages.scenes.gallery.6.title",
      category: "artistic",
      duration: "19 min",
      quality: "4K",
      previewKey: "pages.scenes.gallery.6.preview",
      tagsKeys: ["pages.scenes.tags.moody", "pages.scenes.tags.atmospheric", "pages.scenes.tags.cinematic"],
      subscribers: 1743,
      rating: 4.7,
      hashCode: "#IVY_SL_006"
    }
  ]

  const filteredScenes = selectedCategory === 'all' 
    ? sceneGallery 
    : sceneGallery.filter(scene => scene.category === selectedCategory)

  const copyHashCode = async (hashCode) => {
    try {
      await navigator.clipboard.writeText(hashCode)
      setCopiedCode(hashCode)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-espresso via-espresso/95 to-espresso/90">
      <BackgroundCarousel images={heroBackgrounds} />
      
      <MainNav onOpenSection={onOpenSection} currentPage="scenes" showLogo={true} isFixed={false} onNavigateHome={onNavigateHome} />

      {/* Scenes Content */}
      <main className="page-shell">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blush via-caramel to-sienna bg-clip-text text-transparent leading-tight mb-6">
                {t('pages.scenes.title')}
              </h1>
              <p className="text-lg text-blush/80 leading-relaxed max-w-3xl mx-auto sm:text-xl">
                {t('pages.scenes.subtitle')}
              </p>
            </div>
          </FadeIn>

          {/* Category Filter */}
          <FadeIn delay={200}>
            <div className="-mx-6 mb-10 flex gap-3 overflow-x-auto px-6 pb-2 sm:mx-0 sm:mb-12 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
	              {categories.map((category) => (
	                <button
	                  key={category.id}
	                  onClick={() => setSelectedCategory(category.id)}
	                  className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200 sm:px-6 sm:text-sm ${
	                    selectedCategory === category.id
	                      ? 'bg-gradient-to-r from-caramel to-sienna text-espresso shadow-lift'
	                      : 'bg-espresso/40 border border-blush/15 text-blush/85 hover:bg-espresso/55 hover:border-caramel/30'
		                  }`}
		                >
	                  {t(category.labelKey)}
	                  <span className={`text-xs px-2 py-1 rounded-full ${
	                    selectedCategory === category.id ? 'bg-espresso/20' : 'bg-caramel/20'
	                  }`}>
	                    {category.count}
	                  </span>
	                </button>
	              ))}
            </div>
          </FadeIn>

          {/* Scene Gallery */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredScenes.map((scene, index) => (
	              <FadeIn key={scene.id} delay={300 + index * 100}>
	                <div 
	                  className="group relative flex h-[34rem] cursor-pointer flex-col overflow-hidden rounded-3xl border border-blush/15 bg-gradient-to-br from-blush/10 to-blush/5 backdrop-blur-sm shadow-lift transition-all duration-200 hover:border-caramel/25 hover:-translate-y-1 hover:shadow-embrace focus-within:ring-2 focus-within:ring-caramel/25 focus-within:ring-offset-2 focus-within:ring-offset-espresso"
	                  onClick={() => setSelectedScene(scene)}
	                >
                  {/* Scene Preview */}
	                  <div className={`aspect-[4/3] relative overflow-hidden ${
	                    scene.id === 1
	                      ? 'bg-gradient-to-br from-blush/25 via-latte/15 to-caramel/20'
	                      : scene.id === 2
	                        ? 'bg-gradient-to-br from-latte/20 via-clay/15 to-sienna/18'
	                        : scene.id === 3
	                          ? 'bg-gradient-to-br from-clay/18 via-caramel/14 to-sienna/20'
	                          : scene.id === 4
	                            ? 'bg-gradient-to-br from-blush/20 via-caramel/15 to-espresso/18'
	                            : scene.id === 5
	                              ? 'bg-gradient-to-br from-latte/20 via-sienna/15 to-espresso/18'
	                              : 'bg-gradient-to-br from-clay/18 via-sienna/14 to-espresso/16'
	                  }`} data-scene-id={scene.id}>
	                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,229,217,0.16),_transparent_55%)] opacity-60" />

                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />

	                    {/* Play button */}
	                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
	                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso/55 ring-1 ring-blush/15 backdrop-blur-sm transition-all duration-200 group-hover:bg-espresso/70 group-hover:ring-caramel/25 motion-safe:group-hover:scale-[1.04] sm:h-14 sm:w-14">
	                        <svg className="ml-0.5 h-5 w-5 text-caramel sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
	                          <path d="M8 5v14l11-7z" />
	                        </svg>
	                      </div>
		                      <div className="mt-2 rounded-full border border-blush/15 bg-espresso/45 px-3 py-1 text-[11px] font-semibold text-blush/90 backdrop-blur-sm">
		                        {t('pages.scenes.previewBadge')}
		                      </div>
		                    </div>

	                    {/* Quality badge */}
	                    <div className="absolute left-3 top-3 rounded-full border border-blush/15 bg-espresso/60 px-3 py-1 text-[11px] font-semibold text-caramel backdrop-blur-sm">
	                      {scene.quality}
	                    </div>

	                    {/* Duration */}
	                    <div className="absolute right-3 top-3 rounded-full border border-blush/15 bg-espresso/60 px-3 py-1 text-[11px] font-semibold text-blush/90 backdrop-blur-sm">
	                      {scene.duration}
	                    </div>

	                    {/* Rating */}
	                    <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full border border-blush/15 bg-espresso/60 px-2.5 py-1 backdrop-blur-sm">
                      <svg className="h-4 w-4 text-caramel" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold text-caramel">{scene.rating}</span>
                    </div>
                  </div>

                  {/* Scene Info */}
                  <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
                    <div>
	                      <h3 className="clamp-1 mb-2 text-lg font-bold leading-snug text-caramel transition-colors duration-200 group-hover:text-sienna sm:text-xl">
	                        {t(scene.titleKey)}
	                      </h3>
	                      <p className="clamp-2 text-sm leading-relaxed text-blush/80">
	                        {t(scene.previewKey)}
	                      </p>
	                    </div>

                    {/* Tags */}
	                    <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
		                      {scene.tagsKeys.map((tagKey) => (
		                        <span
		                          key={tagKey}
		                          className="shrink-0 rounded-full border border-blush/15 bg-espresso/35 px-3 py-1 text-[11px] font-medium text-blush/70"
		                        >
		                          {t(tagKey)}
		                        </span>
		                      ))}
	                    </div>

                    {/* Hash Code Section */}
                    <div className="rounded-2xl border border-caramel/15 bg-gradient-to-r from-caramel/10 to-sienna/10 p-4">
	                      <div className="flex items-center justify-between mb-2">
	                        <p className="text-xs font-medium text-caramel uppercase tracking-wide">{t('pages.scenes.hash.wantThisVideo')}</p>
	                        <button
	                          onClick={(event) => {
	                            event.stopPropagation()
	                            copyHashCode(scene.hashCode)
                          }}
	                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
	                            copiedCode === scene.hashCode
	                              ? 'bg-espresso/25 text-blush border border-espresso/35'
	                              : 'bg-caramel/25 text-espresso hover:bg-caramel/30 border border-caramel/40'
	                          }`}
	                        >
	                          {copiedCode === scene.hashCode ? (
	                            <>
                              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
	                              {t('pages.scenes.hash.copiedExclamation')}
	                            </>
	                          ) : (
	                            <>
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                              </svg>
	                              {t('pages.scenes.hash.copy')}
	                            </>
	                          )}
	                        </button>
	                      </div>
	                      <div className="flex items-center gap-2">
	                        <code className="flex-1 rounded border border-blush/15 bg-espresso/35 px-2 py-1 font-mono text-sm text-blush">
	                          {scene.hashCode}
	                        </code>
	                      </div>
	                      <p className="text-xs text-blush/70 mt-2 leading-relaxed">
	                        {t('pages.scenes.hash.cardInstruction')}
	                      </p>
	                    </div>

	                    {/* Stats */}
	                    <div className="mt-auto flex items-center justify-between border-t border-blush/15 pt-4">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-caramel" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
	                        </svg>
                        <span className="text-sm text-blush/70">{scene.subscribers.toLocaleString()} {t('pages.scenes.stats.viewerLabel', { count: scene.subscribers })}</span>
                      </div>
	                      
	                      <button className="inline-flex items-center gap-1 text-sm font-semibold text-caramel/90 hover:text-sienna transition-colors duration-200">
	                        {t('pages.scenes.actions.watchNow')}
	                        <ArrowIcon className="h-3 w-3" />
	                      </button>
	                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA Section */}
          <FadeIn delay={800}>
            <div className="text-center mt-16 space-y-8">
              <div className="h-px bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />
	              <div className="space-y-6">
	                <h3 className="text-2xl font-bold text-caramel">{t('pages.scenes.cta.title')}</h3>
	                <p className="text-blush/70 max-w-2xl mx-auto leading-relaxed">
	                  {t('pages.scenes.cta.subtitle')}
	                </p>
                
                {/* CTA Buttons */}
	                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://onlyfans.com/ivyandnina"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-caramel to-sienna px-8 py-4 text-lg font-semibold text-espresso shadow-lg transition-all duration-300 hover:from-caramel/90 hover:to-sienna/90 hover:-translate-y-1 hover:shadow-xl"
	                  >
	                    <SiOnlyfans className="h-5 w-5" />
	                    {t('nav.joinOnlyFans')}
	                    <ArrowIcon className="h-5 w-5" />
	                  </a>
                  
                  <a
                    href="https://onlyfans.com/ivyandnina"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-espresso/80 border-2 border-caramel/40 px-8 py-4 text-lg font-semibold text-caramel backdrop-blur-sm transition-all duration-300 hover:bg-espresso hover:border-caramel/60 hover:-translate-y-1 hover:shadow-lg"
	                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
	                    {t('pages.scenes.cta.sendDm')}
	                  </a>
	                </div>

                {/* Instruction Text */}
	                <div className="bg-gradient-to-r from-blush/10 to-blush/5 rounded-2xl p-6 border border-caramel/20 backdrop-blur-sm max-w-3xl mx-auto">
	                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-caramel/20 flex items-center justify-center">
                      <svg className="h-4 w-4 text-caramel" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
	                    <div className="text-left">
	                      <h4 className="text-lg font-semibold text-caramel mb-2">{t('pages.scenes.instructions.title')}</h4>
	                      <ol className="text-sm text-blush/80 space-y-1 leading-relaxed">
	                        <li><strong className="text-caramel">1.</strong> {t('pages.scenes.instructions.step1')}</li>
	                        <li><strong className="text-caramel">2.</strong> {t('pages.scenes.instructions.step2')}</li>
	                        <li><strong className="text-caramel">3.</strong> {t('pages.scenes.instructions.step3')}</li>
	                        <li><strong className="text-caramel">4.</strong> {t('pages.scenes.instructions.step4')}</li>
	                      </ol>
	                    </div>
	                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      {/* Scene Detail Modal */}
      {selectedScene && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
	          <div
            className="absolute inset-0 bg-espresso/85 backdrop-blur-sm"
            onClick={() => setSelectedScene(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="scene-dialog-title"
            aria-describedby="scene-dialog-description"
	            className="relative max-h-[calc(100svh-2rem)] w-full max-w-lg overflow-y-auto overscroll-contain rounded-3xl border border-blush/20 bg-gradient-to-br from-blush/12 to-blush/6 shadow-embrace backdrop-blur-xl"
	          >
	            <div
	              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(219,194,173,0.18),_transparent_60%)]"
	              aria-hidden="true"
	            />
	            <button
	              type="button"
	              aria-label={t('pages.scenes.modal.closeAriaLabel')}
	              onClick={(event) => {
	                event.stopPropagation()
	                setSelectedScene(null)
	              }}
	              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-blush/15 bg-espresso/70 text-blush transition-colors duration-200 hover:bg-espresso"
	            >
              <svg className="h-4 w-4 text-blush" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative space-y-6 p-6 sm:p-8">
	              <div className="text-center space-y-3">
	                <h3 id="scene-dialog-title" className="text-2xl font-bold text-caramel sm:text-3xl">
	                  {t(selectedScene.titleKey)}
	                </h3>
	                <div className="flex flex-wrap items-center justify-center gap-2">
	                  <span className="rounded-full border border-blush/15 bg-espresso/45 px-3 py-1 text-[11px] font-semibold text-caramel">
	                    {selectedScene.quality}
	                  </span>
	                  <span className="rounded-full border border-blush/15 bg-espresso/45 px-3 py-1 text-[11px] font-semibold text-blush/90">
	                    {selectedScene.duration}
	                  </span>
	                  <span className="rounded-full border border-blush/15 bg-espresso/45 px-3 py-1 text-[11px] font-semibold text-caramel">
	                    ★ {selectedScene.rating}
	                  </span>
	                </div>
	              </div>

	              <div
	                className={`aspect-[4/3] relative overflow-hidden rounded-2xl border border-blush/15 ${
	                  selectedScene.id === 1
	                    ? 'bg-gradient-to-br from-blush/25 via-latte/15 to-caramel/20'
	                    : selectedScene.id === 2
	                      ? 'bg-gradient-to-br from-latte/20 via-clay/15 to-sienna/18'
	                      : selectedScene.id === 3
	                        ? 'bg-gradient-to-br from-clay/18 via-caramel/14 to-sienna/20'
	                        : selectedScene.id === 4
	                          ? 'bg-gradient-to-br from-blush/20 via-caramel/15 to-espresso/18'
	                          : selectedScene.id === 5
	                            ? 'bg-gradient-to-br from-latte/20 via-sienna/15 to-espresso/18'
	                            : 'bg-gradient-to-br from-clay/18 via-sienna/14 to-espresso/16'
	                }`}
	                data-scene-id={selectedScene.id}
	              >
	                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,229,217,0.16),_transparent_55%)] opacity-60" />
	                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />
	                <div className="absolute inset-0 flex items-center justify-center">
	                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-espresso/55 ring-1 ring-blush/15 backdrop-blur-sm sm:h-16 sm:w-16">
	                    <svg className="ml-0.5 h-6 w-6 text-caramel sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
	                      <path d="M8 5v14l11-7z" />
	                    </svg>
	                  </div>
	                </div>
	              </div>

	              <p id="scene-dialog-description" className="text-center text-sm leading-relaxed text-blush/80 sm:text-base">
	                {t(selectedScene.previewKey)}
	              </p>

		              <div className="no-scrollbar -mx-1 flex justify-center gap-2 overflow-x-auto px-1 pb-1">
		                {selectedScene.tagsKeys.map((tagKey) => (
		                  <span
		                    key={tagKey}
		                    className="shrink-0 rounded-full border border-blush/15 bg-espresso/35 px-3 py-1 text-[11px] font-medium text-blush/70"
		                  >
		                    {t(tagKey)}
		                  </span>
		                ))}
		              </div>

	              <div className="rounded-2xl border border-caramel/15 bg-gradient-to-r from-caramel/10 to-sienna/10 p-4">
	                <div className="mb-2 flex items-center justify-between gap-3">
	                  <p className="text-xs font-medium uppercase tracking-wide text-caramel">{t('pages.scenes.hash.requestCode')}</p>
	                  <button
	                    type="button"
	                    onClick={() => copyHashCode(selectedScene.hashCode)}
	                    className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold transition-colors duration-200 ${
	                      copiedCode === selectedScene.hashCode
	                        ? 'border-espresso/35 bg-espresso/25 text-blush'
	                        : 'border-caramel/30 bg-caramel/15 text-caramel hover:bg-caramel/20'
	                    }`}
		                  >
	                    {copiedCode === selectedScene.hashCode ? t('pages.scenes.hash.copied') : t('pages.scenes.hash.copy')}
	                  </button>
	                </div>
	                <code className="block w-full rounded border border-blush/15 bg-espresso/35 px-2 py-2 font-mono text-sm text-blush">
	                  {selectedScene.hashCode}
	                </code>
	                <p className="mt-2 text-xs leading-relaxed text-blush/70">
	                  {t('pages.scenes.hash.modalInstruction')}
	                </p>
	              </div>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://onlyfans.com/ivyandnina"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary w-full sm:w-auto"
	                >
	                  <SiOnlyfans className="h-4 w-4" />
	                  {t('pages.scenes.modal.watchOnOnlyFans')}
	                </a>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    setSelectedScene(null)
                  }}
	                  className="btn btn-outline w-full sm:w-auto"
	                >
	                  {t('pages.scenes.modal.close')}
	                </button>
	              </div>
            </div>
          </div>
        </div>
      )}
      
      <UniversalFooter isHomePage={true} />
    </div>
  )
}
