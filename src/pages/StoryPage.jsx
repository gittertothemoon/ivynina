import { SiOnlyfans } from 'react-icons/si'
import { BackgroundCarousel, BackgroundOverlay } from '../components/Layout'
import { MainNav } from '../components/MainNav'
import { UniversalFooter } from '../components/UniversalFooter'
import { 
  SmoothReveal, 
  StaggeredReveal, 
  FadeIn, 
  ScaleInEffect,
  SimpleParallax 
} from '../components/animations/ScrollAnimations'
import { heroBackgrounds } from '../utils/constants'
import { useI18n } from '../i18n/index.jsx'

export function StoryPage({ onNavigateHome, onOpenSection }) {
  const { t } = useI18n()

  return (
    <div className="relative min-h-screen bg-espresso overflow-hidden">
      <BackgroundCarousel images={heroBackgrounds} />
      <BackgroundOverlay />
      <MainNav onOpenSection={onOpenSection} currentPage="story" showLogo={true} isFixed={false} onNavigateHome={onNavigateHome} />
      
      {/* Hero Section */}
      <main className="page-shell">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-14 sm:mb-20">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blush via-caramel to-sienna bg-clip-text text-transparent leading-tight mb-6 sm:mb-8">
                {t('pages.story.hero.title')}
              </h1>
              <p className="text-lg text-blush/80 leading-relaxed max-w-3xl mx-auto mb-10 sm:text-xl sm:mb-12">
                {t('pages.story.hero.subtitle')}
              </p>
              
              {/* Hero Stats */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8 mt-12 sm:mt-16">
                <div className="group">
                    <div className="card-compact ring-1 ring-caramel/15 transition-colors duration-200 group-hover:border-caramel/20 group-hover:ring-caramel/25">
                      <div className="text-4xl font-bold text-caramel mb-2 sm:text-5xl">2+</div>
                    <p className="text-blush/80">{t('pages.story.hero.stats.yearsTogether')}</p>
                  </div>
                </div>
                <div className="group">
                  <div className="card-compact ring-1 ring-blush/10 transition-colors duration-200 group-hover:border-blush/20 group-hover:ring-blush/20">
                    <div className="text-4xl font-bold text-blush mb-2 sm:text-5xl">10K+</div>
                    <p className="text-blush/80">{t('pages.story.hero.stats.communityMembers')}</p>
                  </div>
                </div>
                <div className="group">
                  <div className="card-compact ring-1 ring-sienna/15 transition-colors duration-200 group-hover:border-sienna/20 group-hover:ring-sienna/25">
                    <div className="text-4xl font-bold text-sienna mb-2 sm:text-5xl">∞</div>
                    <p className="text-blush/80">{t('pages.story.hero.stats.authenticMoments')}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Story Content */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-32">
          {/* Our Beginning Section */}
          <div className="mx-auto max-w-7xl">
            <div className="space-y-10 sm:space-y-12">
              <StaggeredReveal>
                <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:gap-6">
                  <div className="aspect-[4/5] rounded-3xl border border-caramel/50 sm:border-2 overflow-hidden shadow-lift group">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=center"
                      alt={t('pages.story.beginning.images.beginningAlt')}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="aspect-[4/5] rounded-3xl border border-blush/50 sm:border-2 overflow-hidden shadow-lift group">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop&crop=center"
                      alt={t('pages.story.beginning.images.connectionAlt')}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </StaggeredReveal>

              <StaggeredReveal delay={200}>
                <div className="mx-auto max-w-3xl">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-caramel/20 to-sienna/20 rounded-3xl blur-2xl"></div>
                    <div className="card-compact relative ring-1 ring-caramel/15">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-3xl bg-caramel/20 flex items-center justify-center flex-shrink-0">
                            <svg className="h-8 w-8 text-caramel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-caramel mb-3">{t('pages.story.beginning.card.title')}</h3>
                        </div>
                        <p className="text-lg text-blush/90 leading-relaxed">
                          {t('pages.story.beginning.card.subtitle')}
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-caramel mt-3 flex-shrink-0"></div>
                            <p className="text-base text-blush/80">{t('pages.story.beginning.card.bullets.1')}</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-caramel mt-3 flex-shrink-0"></div>
                            <p className="text-base text-blush/80">{t('pages.story.beginning.card.bullets.2')}</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-caramel mt-3 flex-shrink-0"></div>
                            <p className="text-base text-blush/80">{t('pages.story.beginning.card.bullets.3')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blush/10 rounded-full blur-3xl"></div>
                  </div>
                </div>
              </StaggeredReveal>
            </div>
          </div>

          {/* Chapter 1: The Beginning - Parallax Section - FONT STANDARDIZZATO */}
          <div className="relative -mx-6 sm:-mx-10">
            <SimpleParallax 
              backgroundImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=1080&fit=crop&crop=center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/60 to-espresso/95"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-espresso/40"></div>
              
              <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 lg:py-32">
                <SmoothReveal>
                  <div className="grid gap-10 items-center sm:gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-8">
                        <div className="flex items-center gap-6 mb-12">
                          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-caramel to-sienna flex items-center justify-center shadow-lift">
                            <span className="text-2xl font-bold text-espresso">1</span>
                          </div>
                          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-caramel via-blush to-sienna bg-clip-text text-transparent">
                            {t('pages.story.chapter1.title')}
                          </h2>
                        </div>
                        
                        <div className="space-y-6">
                          <p className="text-lg text-blush/95 leading-relaxed sm:text-xl">
                            <span className="text-caramel font-bold text-lg">{t('pages.story.chapter1.quoteLead')}</span> {t('pages.story.chapter1.quoteTail')}
                          </p>
                          
                          <p className="text-lg text-blush/80 leading-relaxed">
                            {t('pages.story.chapter1.body')}
                          </p>
                          
                          <div className="card-compact ring-1 ring-caramel/10">
                            <h4 className="text-xl font-bold text-caramel mb-4 flex items-center gap-3">
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                              {t('pages.story.chapter1.card.title')}
                            </h4>
                            <p className="text-base text-blush/80 leading-relaxed">
                              {t('pages.story.chapter1.card.body')}
                            </p>
                          </div>
                        </div>
                    </div>
                    
                    <div className="relative">
                      <div className="aspect-[4/5] rounded-3xl border border-caramel/50 sm:border-2 overflow-hidden shadow-lift group">
                        <img 
                          src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=800&h=1000&fit=crop&crop=center"
                          alt={t('pages.story.chapter1.imageAlt')}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="absolute -top-12 -right-12 w-24 h-24 bg-caramel/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blush/20 rounded-full blur-xl"></div>
                    </div>
                  </div>
                </SmoothReveal>
              </div>
            </SimpleParallax>
          </div>

          {/* Chapter 2: Brickwall Gallery Section - FONT STANDARDIZZATO */}
          <div className="mx-auto max-w-7xl">
            <div className="space-y-12 sm:space-y-16">
              <SmoothReveal delay={200}>
                <div className="text-center space-y-8">
                  <div className="flex items-center justify-center gap-6 mb-8">
                    <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-blush to-caramel flex items-center justify-center shadow-lift">
                      <span className="text-2xl font-bold text-espresso">2</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blush via-caramel to-sienna bg-clip-text text-transparent">
                      {t('pages.story.chapter2.title')}
                    </h2>
                  </div>
                  <p className="text-lg text-blush/90 leading-relaxed max-w-4xl mx-auto sm:text-xl">
                    {t('pages.story.chapter2.subtitle')}
                  </p>
                </div>
              </SmoothReveal>

              {/* Brickwall Photo Gallery */}
              <StaggeredReveal staggerDelay={100}>
                <div className="relative">
                  {/* Brickwall Grid Container */}
                  <div className="grid grid-cols-2 gap-3 auto-rows-[140px] sm:grid-cols-12 sm:gap-4 sm:auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px]">
                    {/* Row 1 */}
                    <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl border border-caramel/50 shadow-lift sm:col-span-5 sm:row-span-2 sm:border-2">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=center"
                        alt={t('pages.story.chapter2.gallery.ivyPerspectiveAlt')}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-2xl font-bold text-caramel mb-2">{t('pages.story.chapter2.gallery.ivyVisionTitle')}</h3>
                          <p className="text-sm text-blush/90">{t('pages.story.chapter2.gallery.ivyVisionQuote')}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl border border-blush/50 shadow-lift sm:col-span-4 sm:border-2">
                      <img 
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=300&fit=crop&crop=center"
                        alt={t('pages.story.chapter2.gallery.connectionMomentAlt')}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blush/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-4">
                          <p className="text-sm font-bold text-white">{t('pages.story.chapter2.gallery.firstConnectionLabel')}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl border border-sienna/50 shadow-lift sm:col-span-3 sm:row-span-2 sm:border-2">
                      <img 
                        src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=700&fit=crop&crop=center"
                        alt={t('pages.story.chapter2.gallery.artisticExpressionAlt')}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sienna/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-6 left-4 right-4">
                          <h3 className="text-lg font-bold text-white mb-1">{t('pages.story.chapter2.gallery.artisticSoulTitle')}</h3>
                          <p className="text-xs text-blush/90">{t('pages.story.chapter2.gallery.beautyInAuthenticity')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl border border-caramel/50 shadow-lift sm:col-span-4 sm:border-2">
                      <img 
                        src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=300&fit=crop&crop=face"
                        alt={t('pages.story.chapter2.gallery.decisionMakingAlt')}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-caramel/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 right-4">
                          <p className="text-sm font-bold text-white">{t('pages.story.chapter2.title')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl border border-blush/50 shadow-lift sm:col-span-6 sm:border-2">
                      <img 
                        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=700&h=300&fit=crop&crop=center"
                        alt={t('pages.story.chapter2.gallery.togetherJourneyAlt')}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blush/30 via-transparent to-caramel/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <h3 className="text-lg font-bold text-white text-center">{t('pages.story.chapter2.gallery.ninaCommunityTitle')}</h3>
                          <p className="text-sm text-blush/90 text-center">{t('pages.story.chapter2.gallery.ninaCommunityQuote')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl border border-sienna/50 shadow-lift sm:col-span-3 sm:border-2">
                      <img 
                        src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400&h=300&fit=crop&crop=center"
                        alt={t('pages.story.chapter2.gallery.vulnerabilityAlt')}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-sienna/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-4">
                          <p className="text-sm font-bold text-white">{t('pages.story.chapter2.gallery.vulnerabilityLabel')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl border border-caramel/50 shadow-lift sm:col-span-3 sm:border-2">
                      <img 
                        src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=300&fit=crop&crop=center"
                        alt={t('pages.story.chapter2.gallery.sharedMomentsAlt')}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-bl from-caramel/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 right-4">
                          <p className="text-sm font-bold text-white">{t('pages.story.chapter2.gallery.trustLabel')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl border border-blush/50 shadow-lift sm:col-span-4 sm:row-span-2 sm:border-2">
                      <img 
                        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=700&fit=crop&crop=center"
                        alt={t('pages.story.chapter2.gallery.ninaApproachAlt')}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-2xl font-bold text-blush mb-2">{t('pages.story.chapter2.gallery.ninaHeartTitle')}</h3>
                          <p className="text-sm text-caramel/90">{t('pages.story.chapter2.gallery.ninaHeartQuote')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl border border-sienna/50 shadow-lift sm:col-span-5 sm:border-2">
                      <img 
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=300&fit=crop&crop=center"
                        alt={t('pages.story.chapter2.gallery.sharedVisionAlt')}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-sienna/30 via-transparent to-blush/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <h3 className="text-lg font-bold text-white text-center">{t('pages.story.chapter2.gallery.sharedVisionTitle')}</h3>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl border border-caramel/50 shadow-lift sm:col-span-3 sm:border-2">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
                        alt={t('pages.story.chapter2.gallery.futureTogetherAlt')}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-caramel/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-4">
                          <p className="text-sm font-bold text-white">{t('pages.story.chapter2.gallery.futureLabel')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Row 5 */}
                    <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl border border-blush/50 shadow-lift sm:col-span-5 sm:border-2">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616c669a1b1?w=600&h=300&fit=crop&crop=center"
                        alt={t('pages.story.chapter2.gallery.decisionProcessAlt')}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blush/30 via-transparent to-caramel/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                          <h3 className="text-lg font-bold text-white text-center">{t('pages.story.chapter2.processOverlay.title')}</h3>
                          <p className="text-sm text-caramel/90 text-center">{t('pages.story.chapter2.processOverlay.subtitle')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-caramel/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blush/10 rounded-full blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-sienna/10 rounded-full blur-3xl"></div>
                </div>
              </StaggeredReveal>

              {/* Story Content Below Gallery */}
              <StaggeredReveal staggerDelay={300}>
                <div className="space-y-12 sm:space-y-16 mt-16 sm:mt-24">
                  {/* Top Row: Two Main Cards */}
                  <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left: The Decision Story */}
                    <div className="space-y-8">
                      <div className="card h-full ring-1 ring-caramel/15">
                        <div className="space-y-6">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-3xl bg-caramel/20 flex items-center justify-center">
                              <svg className="h-8 w-8 text-caramel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-caramel">{t('pages.story.chapter2.story.theMomentTitle')}</h3>
                          </div>
                          
                          <p className="text-lg text-blush/90 leading-relaxed">
                            <span className="text-caramel font-bold">{t('pages.story.chapter2.story.quoteLead')}</span> {t('pages.story.chapter2.story.quoteMiddle')}{' '}
                            <span className="text-blush font-bold">{t('pages.story.chapter2.story.quoteTail')}</span>
                          </p>
                          
                          <p className="text-base text-blush/80 leading-relaxed">
                            {t('pages.story.chapter2.story.body')}
                          </p>
                          
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-caramel">{t('pages.story.chapter2.story.agreementTitle')}</h4>
                            <ul className="space-y-3">
                              <li className="flex items-center gap-3">
                                <div className="h-2 w-2 bg-caramel rounded-full"></div>
                                <span>{t('pages.story.chapter2.story.agreement.1')}</span>
                              </li>
                              <li className="flex items-center gap-3">
                                <div className="h-2 w-2 bg-blush rounded-full"></div>
                                <span>{t('pages.story.chapter2.story.agreement.2')}</span>
                              </li>
                              <li className="flex items-center gap-3">
                                <div className="h-2 w-2 bg-sienna rounded-full"></div>
                                <span>{t('pages.story.chapter2.story.agreement.3')}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Values and Vision */}
                    <div className="space-y-8">
                      <div className="card h-full ring-1 ring-blush/10">
                        <div className="space-y-6">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-3xl bg-blush/20 flex items-center justify-center">
                              <svg className="h-8 w-8 text-blush" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-blush">{t('pages.story.chapter2.vision.title')}</h3>
                          </div>
                          
                          <p className="text-lg text-blush/90 leading-relaxed">
                            {t('pages.story.chapter2.vision.body')}
                          </p>
                          
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-blush">{t('pages.story.chapter2.vision.corePrinciplesTitle')}</h4>
                            <ul className="space-y-3">
                              <li className="flex items-center gap-3">
                                <div className="h-2 w-2 bg-blush rounded-full"></div>
                                <span>{t('pages.story.chapter2.vision.corePrinciples.1')}</span>
                              </li>
                              <li className="flex items-center gap-3">
                                <div className="h-2 w-2 bg-caramel rounded-full"></div>
                                <span>{t('pages.story.chapter2.vision.corePrinciples.2')}</span>
                              </li>
                              <li className="flex items-center gap-3">
                                <div className="h-2 w-2 bg-sienna rounded-full"></div>
                                <span>{t('pages.story.chapter2.vision.corePrinciples.3')}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: The Process Card - Centered */}
                  <div className="flex justify-center">
                    <div className="max-w-2xl w-full">
                      <div className="card-compact ring-1 ring-sienna/10">
                        <h4 className="text-xl font-bold text-sienna mb-4 flex items-center gap-3">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {t('pages.story.chapter2.processCard.title')}
                        </h4>
                        <p className="text-base text-blush/80 leading-relaxed mb-4">
                          {t('pages.story.chapter2.processCard.body')}
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-sienna mt-2.5 flex-shrink-0"></div>
                              <span className="text-sm text-blush/70">{t('pages.story.chapter2.processCard.bullets.1')}</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-sienna mt-2.5 flex-shrink-0"></div>
                              <span className="text-sm text-blush/70">{t('pages.story.chapter2.processCard.bullets.2')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggeredReveal>
            </div>
          </div>

          {/* Chapter 3: Today & Tomorrow - Full Width Hero - FONT STANDARDIZZATO */}
          <div className="relative -mx-6 sm:-mx-10">
            <ScaleInEffect delay={600}>
              <div className="bg-gradient-to-br from-white/20 to-white/5 border-y border-white/20 backdrop-blur-md py-16 sm:py-24">
                <div className="max-w-6xl mx-auto px-6 sm:px-10">
                  <div className="text-center space-y-12">
                    <div className="flex items-center justify-center gap-6 mb-12">
                      <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-sienna to-caramel flex items-center justify-center shadow-lift">
                        <span className="text-2xl font-bold text-espresso">3</span>
                      </div>
                      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-sienna via-caramel to-blush bg-clip-text text-transparent">
                        {t('pages.story.chapter3.title')}
                      </h2>
                    </div>
                    
                    <div className="max-w-6xl mx-auto space-y-16">
                      {/* Current Mission */}
                      <div className="space-y-12">
                        <div className="space-y-6">
                          <p className="text-lg text-blush/95 leading-relaxed sm:text-xl">
                            {t('pages.story.chapter3.intro')}
                          </p>
                          
                          <div className="card-compact ring-1 ring-caramel/10">
                            <h4 className="text-xl font-bold text-caramel mb-4 flex items-center gap-3">
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              {t('pages.story.chapter3.currentFocus.title')}
                            </h4>
                            <p className="text-base text-blush/80 leading-relaxed">
                              {t('pages.story.chapter3.currentFocus.body')}
                            </p>
                          </div>
                        </div>

                        {/* Statistics Cards - Now Horizontal */}
                        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                          <div className="group relative">
                            <div className="card-compact ring-1 ring-caramel/15 transition-all duration-200 motion-safe:group-hover:scale-[1.02] group-hover:border-caramel/20 group-hover:ring-caramel/25 group-hover:shadow-embrace">
                              <div className="text-center space-y-4">
                                <div className="text-4xl md:text-5xl font-bold text-caramel">10K+</div>
                                <p className="text-lg font-bold text-blush">{t('pages.story.chapter3.stats.creatingToday.title')}</p>
                                <p className="text-sm text-blush/70">{t('pages.story.chapter3.stats.creatingToday.subtitle')}</p>
                                <div className="mt-4 h-2 w-full bg-espresso/30 rounded-full overflow-hidden">
                                  <div className="h-full bg-gradient-to-r from-caramel to-sienna rounded-full w-4/5 transition-all duration-1000 delay-1000"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="group relative">
                            <div className="card-compact ring-1 ring-blush/10 transition-all duration-200 motion-safe:group-hover:scale-[1.02] group-hover:border-blush/20 group-hover:ring-blush/20 group-hover:shadow-embrace">
                              <div className="text-center space-y-4">
                                <div className="text-4xl md:text-5xl font-bold text-blush">2+</div>
                                <p className="text-lg font-bold text-caramel">{t('pages.story.chapter3.stats.yearsJourney.title')}</p>
                                <p className="text-sm text-blush/70">{t('pages.story.chapter3.stats.yearsJourney.subtitle')}</p>
                                <div className="mt-4 h-2 w-full bg-espresso/30 rounded-full overflow-hidden">
                                  <div className="h-full bg-gradient-to-r from-blush to-caramel rounded-full w-3/5 transition-all duration-1000 delay-1200"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="group relative">
                            <div className="card-compact ring-1 ring-sienna/15 transition-all duration-200 motion-safe:group-hover:scale-[1.02] group-hover:border-sienna/20 group-hover:ring-sienna/25 group-hover:shadow-embrace">
                              <div className="text-center space-y-4">
                                <div className="text-4xl md:text-5xl font-bold text-sienna">∞</div>
                                <p className="text-lg font-bold text-blush">{t('pages.story.chapter3.stats.infiniteTomorrow.title')}</p>
                                <p className="text-sm text-blush/70">{t('pages.story.chapter3.stats.infiniteTomorrow.subtitle')}</p>
                                <div className="mt-4 h-2 w-full bg-espresso/30 rounded-full overflow-hidden">
                                  <div className="h-full bg-gradient-to-r from-sienna to-blush rounded-full w-full transition-all duration-1000 delay-1400"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Photo Section */}
                      <div className="relative group">
                        <div className="grid lg:grid-cols-3 gap-8 h-full">
                          <div className="lg:col-span-2 h-full">
                            <div className="aspect-[3/2] lg:aspect-auto lg:h-full rounded-3xl border border-sienna/50 sm:border-2 overflow-hidden shadow-lift group">
                              <img 
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&h=800&fit=crop&crop=center"
                                alt={t('pages.story.chapter3.photo.alt')}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                              />
                            </div>
                          </div>
                          <div className="space-y-8 h-full flex flex-col justify-center">
                            <div className="space-y-6">
                              <h4 className="text-2xl font-bold text-sienna">{t('pages.story.chapter3.photo.side.title')}</h4>
                              <p className="text-base text-blush/80 leading-relaxed">
                                {t('pages.story.chapter3.photo.side.body')}
                              </p>
                            </div>
                            <div className="space-y-4">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-sienna mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-blush/70">{t('pages.story.chapter3.photo.side.bullets.1')}</p>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-sienna mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-blush/70">{t('pages.story.chapter3.photo.side.bullets.2')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-caramel/30 to-sienna/30 rounded-3xl blur-2xl scale-110 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Future Vision */}
                      <div className="card ring-1 ring-sienna/10">
                        <div className="text-center space-y-6">
                          <div className="flex items-center justify-center gap-4 mb-6">
                            <svg className="h-12 w-12 text-sienna" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h4 className="text-2xl sm:text-3xl font-bold text-sienna">{t('pages.story.chapter3.future.title')}</h4>
                          </div>
                          <p className="text-lg text-blush/95 leading-relaxed max-w-4xl mx-auto sm:text-xl">
                            {t('pages.story.chapter3.future.subtitle')}
                          </p>
                          <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="text-center space-y-2">
                              <div className="h-16 w-16 rounded-3xl bg-caramel/20 flex items-center justify-center mx-auto">
                                <svg className="h-8 w-8 text-caramel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                              </div>
                              <h5 className="font-bold text-caramel">{t('pages.story.chapter3.future.cards.educational.title')}</h5>
                              <p className="text-sm text-blush/70">{t('pages.story.chapter3.future.cards.educational.subtitle')}</p>
                            </div>
                            <div className="text-center space-y-2">
                              <div className="h-16 w-16 rounded-3xl bg-blush/20 flex items-center justify-center mx-auto">
                                <svg className="h-8 w-8 text-blush" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                              </div>
                              <h5 className="font-bold text-blush">{t('pages.story.chapter3.future.cards.community.title')}</h5>
                              <p className="text-sm text-blush/70">{t('pages.story.chapter3.future.cards.community.subtitle')}</p>
                            </div>
                            <div className="text-center space-y-2">
                              <div className="h-16 w-16 rounded-3xl bg-sienna/20 flex items-center justify-center mx-auto">
                                <svg className="h-8 w-8 text-sienna" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </div>
                              <h5 className="font-bold text-sienna">{t('pages.story.chapter3.future.cards.creative.title')}</h5>
                              <p className="text-sm text-blush/70">{t('pages.story.chapter3.future.cards.creative.subtitle')}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScaleInEffect>
          </div>

          {/* Join Us Section - FONT STANDARDIZZATO */}
          <div className="relative -mx-6 sm:-mx-10">
            <SimpleParallax 
              backgroundImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=1080&fit=crop&crop=center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/30 to-espresso/90"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/40"></div>
              
              <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 lg:py-32">
                <SmoothReveal delay={400}>
                  <div className="text-center space-y-16">
                      <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-caramel via-blush to-sienna bg-clip-text text-transparent leading-none">
                        {t('pages.story.join.title')}
                      </h3>
                    
                      <p className="text-lg font-light text-blush/95 leading-relaxed max-w-4xl mx-auto sm:text-2xl">
                        {t('pages.story.join.subtitle')}
                      </p>
                    
                    {/* Photos with Side Text */}
                    <div className="space-y-14 sm:space-y-24 max-w-7xl mx-auto">
                      <StaggeredReveal staggerDelay={300}>
                        {/* First Photo + Text */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                          <div className="aspect-[4/5] rounded-3xl border border-caramel/50 sm:border-2 overflow-hidden shadow-lift group">
                            <img 
                              src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=800&h=1000&fit=crop&crop=center"
                              alt={t('pages.story.join.images.intimateMomentsAlt')}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                            />
                          </div>
                          <div className="space-y-8 text-left lg:text-left">
                            <div className="flex items-center gap-4">
                              <div className="h-16 w-16 rounded-3xl bg-caramel/20 flex items-center justify-center">
                                <svg className="h-8 w-8 text-caramel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                              </div>
                              <h4 className="text-3xl lg:text-4xl font-bold text-caramel">{t('pages.story.join.cards.intimate.title')}</h4>
                            </div>
                            <p className="text-xl lg:text-2xl text-blush/90 leading-relaxed">
                              {t('pages.story.join.cards.intimate.body')}
                            </p>
                            <div className="space-y-4">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-caramel mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-blush/80">{t('pages.story.join.cards.intimate.bullets.1')}</p>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-caramel mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-blush/80">{t('pages.story.join.cards.intimate.bullets.2')}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Second Photo + Text */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                          <div className="space-y-8 text-left lg:text-right order-2 lg:order-1">
                            <div className="flex items-center gap-4 lg:justify-end">
                              <div className="h-16 w-16 rounded-3xl bg-blush/20 flex items-center justify-center order-2 lg:order-1">
                                <svg className="h-8 w-8 text-blush" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </div>
                              <h4 className="text-3xl lg:text-4xl font-bold text-blush">{t('pages.story.join.cards.artistic.title')}</h4>
                            </div>
                            <p className="text-xl lg:text-2xl text-blush/90 leading-relaxed">
                              {t('pages.story.join.cards.artistic.body')}
                            </p>
                            <div className="space-y-4">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-blush mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-blush/80">{t('pages.story.join.cards.artistic.bullets.1')}</p>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-blush mt-3 flex-shrink-0"></div>
                                <p className="text-lg text-blush/80">{t('pages.story.join.cards.artistic.bullets.2')}</p>
                              </div>
                            </div>
                          </div>
                          <div className="aspect-[4/5] rounded-3xl border border-blush/50 sm:border-2 overflow-hidden shadow-lift group order-1 lg:order-2">
                            <img 
                              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=1000&fit=crop&crop=face"
                              alt={t('pages.story.chapter2.gallery.artisticExpressionAlt')}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                            />
                          </div>
                        </div>
                      </StaggeredReveal>
                      
                      <div className="relative mt-14 sm:mt-20">
                        <div className="absolute inset-0 bg-gradient-to-r from-caramel to-sienna rounded-full blur-2xl opacity-40 scale-125"></div>
                        <a
                          href="https://onlyfans.com/ivyandnina"
                          target="_blank"
                          rel="noreferrer"
                          className="relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-caramel to-sienna px-10 py-5 text-lg font-bold text-espresso shadow-lift transition-all duration-200 hover:from-caramel/90 hover:to-sienna/90 hover:-translate-y-1 hover:shadow-embrace motion-safe:hover:scale-[1.02] sm:px-12 sm:py-6 sm:text-xl group"
                        >
                          <SiOnlyfans className="h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                          <span>{t('pages.story.join.cta')}</span>
                          <svg className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </SmoothReveal>
              </div>
            </SimpleParallax>
          </div>
        </div>
        
        {/* Floating Elements for Visual Interest */}
        <div className="fixed inset-0 pointer-events-none -z-[1] overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-caramel/5 rounded-full blur-3xl motion-safe:animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blush/5 rounded-full blur-3xl motion-safe:animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-sienna/5 rounded-full blur-3xl motion-safe:animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </main>
      
      <UniversalFooter isHomePage={false} />
    </div>
  )
}
