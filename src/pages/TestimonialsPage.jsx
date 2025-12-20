import { useState } from 'react'
import { SiOnlyfans } from 'react-icons/si'
import { BackgroundCarousel, BackgroundOverlay } from '../components/Layout'
import { MainNav } from '../components/MainNav'
import { UniversalFooter } from '../components/UniversalFooter'
import { FadeIn, StaggeredReveal } from '../components/animations/ScrollAnimations'
import { ArrowIcon } from '../components/Icons'
import { heroBackgrounds } from '../utils/constants'
import { useI18n } from '../i18n/useI18n'

export function TestimonialsPage({ onNavigateHome, onOpenSection }) {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const { t } = useI18n()

  const filters = [
    { id: 'all', labelKey: 'pages.testimonials.filters.all', count: 24 },
    { id: 'intimate', labelKey: 'pages.testimonials.filters.intimate', count: 8 },
    { id: 'community', labelKey: 'pages.testimonials.filters.community', count: 10 },
    { id: 'experience', labelKey: 'pages.testimonials.filters.experience', count: 6 }
  ]

  const allTestimonials = [
    {
      id: 1,
      name: "Sarah M.",
      duration: { count: 6, unit: 'month' },
      category: "intimate",
      quoteKey: "pages.testimonials.quotes.1",
      rating: 5,
      dateKey: "pages.testimonials.dates.1",
      verified: true,
      avatar: "S"
    },
    {
      id: 2,
      name: "Alex R.",
      duration: { count: 1, unit: 'year' },
      category: "community",
      quoteKey: "pages.testimonials.quotes.2",
      rating: 5,
      dateKey: "pages.testimonials.dates.2",
      verified: true,
      avatar: "A"
    },
    {
      id: 3,
      name: "Jordan K.",
      duration: { count: 8, unit: 'month' },
      category: "experience",
      quoteKey: "pages.testimonials.quotes.3",
      rating: 5,
      dateKey: "pages.testimonials.dates.3",
      verified: true,
      avatar: "J"
    },
    {
      id: 4,
      name: "Morgan L.",
      duration: { count: 4, unit: 'month' },
      category: "intimate",
      quoteKey: "pages.testimonials.quotes.4",
      rating: 5,
      dateKey: "pages.testimonials.dates.4",
      verified: true,
      avatar: "M"
    },
    {
      id: 5,
      name: "Casey W.",
      duration: { count: 10, unit: 'month' },
      category: "community",
      quoteKey: "pages.testimonials.quotes.5",
      rating: 5,
      dateKey: "pages.testimonials.dates.5",
      verified: true,
      avatar: "C"
    },
    {
      id: 6,
      name: "Taylor B.",
      duration: { count: 7, unit: 'month' },
      category: "experience",
      quoteKey: "pages.testimonials.quotes.6",
      rating: 5,
      dateKey: "pages.testimonials.dates.6",
      verified: true,
      avatar: "T"
    }
  ]

  const filteredTestimonials = selectedFilter === 'all' 
    ? allTestimonials 
    : allTestimonials.filter(t => t.category === selectedFilter)

  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage)
  const paginatedTestimonials = filteredTestimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-espresso via-espresso/95 to-espresso/90">
      <BackgroundCarousel images={heroBackgrounds} />
      <BackgroundOverlay />
      
      <MainNav onOpenSection={onOpenSection} currentPage="testimonials" showLogo={true} isFixed={false} onNavigateHome={onNavigateHome} />

      {/* Testimonials Content */}
      <main className="page-shell">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blush via-caramel to-sienna bg-clip-text text-transparent leading-tight mb-6">
                {t('pages.testimonials.title')}
              </h1>
              <p className="text-xl text-blush/80 leading-relaxed max-w-3xl mx-auto">
                {t('pages.testimonials.subtitle')}
              </p>
            </div>
          </FadeIn>

          {/* Stats Section */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-caramel mb-2">4.9</div>
                <div className="text-sm text-blush/60">{t('pages.testimonials.stats.averageRating')}</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-caramel mb-2">10K+</div>
                <div className="text-sm text-blush/60">{t('pages.testimonials.stats.happyMembers')}</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-caramel mb-2">98%</div>
                <div className="text-sm text-blush/60">{t('pages.testimonials.stats.renewalRate')}</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-caramel mb-2">2+</div>
                <div className="text-sm text-blush/60">{t('pages.testimonials.stats.yearsStrong')}</div>
              </div>
            </div>
          </FadeIn>

          {/* Filter Tabs */}
          <FadeIn delay={300}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setSelectedFilter(filter.id)
                    setCurrentPage(1)
                  }}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${
                    selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-caramel to-sienna text-espresso shadow-lg'
                      : 'bg-espresso/60 border border-caramel/30 text-blush hover:bg-espresso/80 hover:border-caramel/50'
                  }`}
                >
                  {t(filter.labelKey)}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedFilter === filter.id ? 'bg-espresso/20' : 'bg-caramel/20'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {paginatedTestimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={400 + index * 100}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-caramel/30 hover:-translate-y-2 hover:shadow-[0_32px_64px_-12px_rgba(42,23,16,0.6)] sm:p-8">
                  {/* Quote decoration */}
                  <div className="absolute -top-2 -left-2 text-6xl text-caramel/20 font-serif leading-none">"</div>
                  
                  {/* Verified badge */}
                  {testimonial.verified && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                      <svg className="h-3 w-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-green-400">{t('pages.testimonials.verified')}</span>
                    </div>
                  )}

                  <div className="relative space-y-6">
                    {/* Rating stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 text-caramel"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-blush/60 ml-2">{t(testimonial.dateKey)}</span>
                    </div>
                    
                    <blockquote className="text-base leading-relaxed text-blush/80 group-hover:text-blush transition-colors duration-300">
                      {t(testimonial.quoteKey)}
                    </blockquote>

                    {/* Author info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-caramel/30 to-caramel/10 ring-2 ring-caramel/20">
                        <span className="text-lg font-semibold text-caramel">
                          {testimonial.avatar}
                        </span>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="font-semibold text-blush group-hover:text-caramel transition-colors duration-300">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-blush/60 group-hover:text-blush/80 transition-colors duration-300">
                          {t('pages.testimonials.subscriberDetail', {
                            count: testimonial.duration.count,
                            unit: t(`pages.testimonials.units.${testimonial.duration.unit}`, { count: testimonial.duration.count }),
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <FadeIn delay={600}>
              <div className="flex justify-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`h-11 w-11 rounded-full text-sm font-medium transition-all duration-300 ${
                      currentPage === i + 1
                        ? 'bg-gradient-to-r from-caramel to-sienna text-espresso'
                        : 'bg-espresso/60 text-blush hover:bg-espresso/80'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </FadeIn>
          )}

          {/* CTA Section */}
          <FadeIn delay={700}>
            <div className="text-center mt-16 space-y-8">
              <div className="h-px bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-caramel">{t('pages.testimonials.cta.title')}</h3>
                <p className="text-blush/70 max-w-2xl mx-auto leading-relaxed">
                  {t('pages.testimonials.cta.subtitle')}
                </p>
                <a
                  href="https://onlyfans.com/ivyandnina"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-caramel to-sienna px-8 py-4 text-lg font-semibold text-espresso shadow-lg transition-all duration-300 hover:from-caramel/90 hover:to-sienna/90 hover:-translate-y-1 hover:shadow-xl"
                >
                  <SiOnlyfans className="h-5 w-5" />
                  {t('pages.testimonials.cta.button')}
                  <ArrowIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      
      <UniversalFooter isHomePage={