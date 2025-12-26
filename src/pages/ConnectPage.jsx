import { useState } from 'react'
import { SiOnlyfans } from 'react-icons/si'
import { FiCalendar, FiFileText, FiMessageCircle, FiTool, FiUsers, FiVideo } from 'react-icons/fi'
import { BackgroundCarousel, BackgroundOverlay } from '../components/Layout'
import { MainNav } from '../components/MainNav'
import { UniversalFooter } from '../components/UniversalFooter'
import { FadeIn } from '../components/animations/ScrollAnimations'
import { heroBackgrounds } from '../utils/constants'
import { useI18n } from '../i18n/useI18n'

export function ConnectPage({ onNavigateHome, onOpenSection }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: '',
    budget: '',
    timeline: '',
    experience: '',
    portfolio: '',
    consent: false,
    newsletter: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { t } = useI18n()

  const categories = [
    { value: 'general', labelKey: 'pages.connect.form.categories.general', icon: <FiMessageCircle className="h-5 w-5" aria-hidden="true" /> },
    { value: 'collaboration', labelKey: 'pages.connect.form.categories.collaboration', icon: <FiUsers className="h-5 w-5" aria-hidden="true" /> },
    { value: 'booking', labelKey: 'pages.connect.form.categories.booking', icon: <FiCalendar className="h-5 w-5" aria-hidden="true" /> },
    { value: 'content', labelKey: 'pages.connect.form.categories.content', icon: <FiVideo className="h-5 w-5" aria-hidden="true" /> },
    { value: 'technical', labelKey: 'pages.connect.form.categories.technical', icon: <FiTool className="h-5 w-5" aria-hidden="true" /> },
    { value: 'media', labelKey: 'pages.connect.form.categories.media', icon: <FiFileText className="h-5 w-5" aria-hidden="true" /> }
  ]

  const budgetRanges = [
    { value: '', labelKey: 'pages.connect.form.budgetRanges.select' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: '5000+', label: '$5,000+' },
    { value: 'discuss', labelKey: 'pages.connect.form.budgetRanges.discuss' }
  ]

  const timelineOptions = [
    { value: '', labelKey: 'pages.connect.form.timeline.select' },
    { value: 'asap', labelKey: 'pages.connect.form.timeline.asap' },
    { value: '1-2weeks', labelKey: 'pages.connect.form.timeline.1_2weeks' },
    { value: '1month', labelKey: 'pages.connect.form.timeline.1month' },
    { value: '2-3months', labelKey: 'pages.connect.form.timeline.2_3months' },
    { value: 'flexible', labelKey: 'pages.connect.form.timeline.flexible' }
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-espresso via-espresso/95 to-espresso/90 flex items-center justify-center">
        <BackgroundCarousel images={heroBackgrounds} />
        <BackgroundOverlay />
        
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <FadeIn>
            <div className="space-y-8">
              <div className="mx-auto w-24 h-24 bg-gradient-to-r from-caramel to-sienna rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-espresso" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blush via-caramel to-sienna bg-clip-text text-transparent">
                  {t('pages.connect.submitted.title')}
                </h1>
                <p className="text-xl text-blush/80 leading-relaxed">
                  {t('pages.connect.submitted.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onNavigateHome}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-caramel to-sienna px-8 py-4 text-sm font-medium text-espresso transition-all duration-300 hover:from-caramel/90 hover:to-sienna/90 hover:-translate-y-1 hover:shadow-lg"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  {t('pages.connect.submitted.backToHome')}
                </button>
                
                <a
                  href="https://onlyfans.com/ivyandnina"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-espresso/80 border border-caramel/30 px-8 py-4 text-sm font-medium text-blush backdrop-blur-sm transition-all duration-300 hover:bg-espresso hover:border-caramel/50 hover:-translate-y-1"
                >
                  <SiOnlyfans className="h-4 w-4" />
                  {t('pages.connect.submitted.visitOnlyFans')}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-espresso via-espresso/95 to-espresso/90">
      <BackgroundCarousel images={heroBackgrounds} />
      <BackgroundOverlay />
      
      <MainNav onOpenSection={onOpenSection} currentPage="connect" showLogo={true} isFixed={false} onNavigateHome={onNavigateHome} />

      {/* Connect Content */}
      <main className="page-shell">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blush via-caramel to-sienna bg-clip-text text-transparent leading-tight mb-6">
                {t('pages.connect.title')}
              </h1>
              <p className="text-xl text-blush/80 leading-relaxed max-w-3xl mx-auto">
                {t('pages.connect.subtitle')}
              </p>
            </div>
          </FadeIn>

          {/* Contact Options */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-6 rounded-3xl bg-gradient-to-br from-blush/10 to-blush/5 border border-blush/15 shadow-embrace transition-all duration-300 hover:border-caramel/20 hover:shadow-[0_24px_48px_-12px_rgba(161,129,103,0.4)] sm:p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-caramel to-sienna rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-espresso" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-caramel mb-2">{t('pages.connect.contact.email.title')}</h3>
                <p className="text-blush/70 text-sm mb-4">{t('pages.connect.contact.email.subtitle')}</p>
                <a href="mailto:booking@ivyandnina.com" className="text-caramel hover:text-caramel/80 text-sm font-medium">
                  booking@ivyandnina.com
                </a>
              </div>

              <div className="text-center p-6 rounded-3xl bg-gradient-to-br from-blush/10 to-blush/5 border border-blush/15 shadow-embrace transition-all duration-300 hover:border-caramel/20 hover:shadow-[0_24px_48px_-12px_rgba(161,129,103,0.4)] sm:p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-caramel to-sienna rounded-full flex items-center justify-center mx-auto mb-4">
                  <SiOnlyfans className="w-8 h-8 text-espresso" />
                </div>
                <h3 className="text-lg font-semibold text-caramel mb-2">{t('pages.connect.contact.onlyFans.title')}</h3>
                <p className="text-blush/70 text-sm mb-4">{t('pages.connect.contact.onlyFans.subtitle')}</p>
                <a href="https://onlyfans.com/ivyandnina" target="_blank" rel="noreferrer" className="text-caramel hover:text-caramel/80 text-sm font-medium">
                  @ivyandnina
                </a>
              </div>

              <div className="text-center p-6 rounded-3xl bg-gradient-to-br from-blush/10 to-blush/5 border border-blush/15 shadow-embrace transition-all duration-300 hover:border-caramel/20 hover:shadow-[0_24px_48px_-12px_rgba(161,129,103,0.4)] sm:p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-caramel to-sienna rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-espresso" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-caramel mb-2">{t('pages.connect.contact.phone.title')}</h3>
                <p className="text-blush/70 text-sm mb-4">{t('pages.connect.contact.phone.subtitle')}</p>
                <p className="text-caramel text-sm font-medium">{t('pages.connect.contact.phone.note')}</p>
              </div>
            </div>
          </FadeIn>

          {/* Advanced Contact Form */}
          <FadeIn delay={400}>
            <div className="rounded-3xl bg-gradient-to-br from-blush/10 to-blush/5 border border-blush/15 shadow-embrace p-8 sm:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-caramel mb-4">{t('pages.connect.form.title')}</h2>
                <p className="text-blush/70">{t('pages.connect.form.subtitle')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-caramel mb-2">
                      {t('pages.connect.form.fields.name.label')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-blush/25 bg-espresso/60 px-4 py-3 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                      placeholder={t('pages.connect.form.fields.name.placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-caramel mb-2">
                      {t('pages.connect.form.fields.email.label')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-blush/25 bg-espresso/60 px-4 py-3 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                      placeholder={t('pages.connect.form.fields.email.placeholder')}
                    />
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-medium text-caramel mb-4">
                    {t('pages.connect.form.fields.category.label')}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map((category) => (
                      <label
                        key={category.value}
                        className={`flex min-h-11 items-center gap-3 rounded-2xl border p-4 transition-all duration-300 focus-within:ring-2 focus-within:ring-caramel/25 focus-within:ring-offset-2 focus-within:ring-offset-espresso ${
                          formData.category === category.value
                            ? 'border-caramel/50 bg-caramel/10 text-caramel'
                            : 'border-blush/25 bg-espresso/40 text-blush hover:border-caramel/30 hover:bg-espresso/60'
                        }`}
                      >
                        <input
                          type="radio"
                          name="category"
                          value={category.value}
                          checked={formData.category === category.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-sm font-medium">{t(category.labelKey)}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-caramel mb-2">
                    {t('pages.connect.form.fields.subject.label')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
	                    className="w-full rounded-2xl border border-blush/25 bg-espresso/60 px-4 py-3 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                    placeholder={t('pages.connect.form.fields.subject.placeholder')}
                  />
                </div>

                {/* Collaboration Details (shown for collaboration category) */}
                {formData.category === 'collaboration' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-caramel/5 border border-caramel/20">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-caramel mb-2">
                        {t('pages.connect.form.fields.budget.label')}
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
	                        className="w-full rounded-2xl border border-blush/25 bg-espresso/60 px-4 py-3 text-blush outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                      >
                        {budgetRanges.map((range) => (
                          <option key={range.value} value={range.value} className="bg-espresso">
                            {range.labelKey ? t(range.labelKey) : range.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-caramel mb-2">
                        {t('pages.connect.form.fields.timeline.label')}
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
	                        className="w-full rounded-2xl border border-blush/25 bg-espresso/60 px-4 py-3 text-blush outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                      >
                        {timelineOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-espresso">
                            {t(option.labelKey)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="experience" className="block text-sm font-medium text-caramel mb-2">
                        {t('pages.connect.form.fields.experience.label')}
                      </label>
                      <input
                        type="text"
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
	                        className="w-full rounded-2xl border border-blush/25 bg-espresso/60 px-4 py-3 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                        placeholder={t('pages.connect.form.fields.experience.placeholder')}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="portfolio" className="block text-sm font-medium text-caramel mb-2">
                        {t('pages.connect.form.fields.portfolio.label')}
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-blush/25 bg-espresso/60 px-4 py-3 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                        placeholder={t('pages.connect.form.fields.portfolio.placeholder')}
                      />
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-caramel mb-2">
                    {t('pages.connect.form.fields.message.label')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
	                    className="w-full rounded-2xl border border-blush/25 bg-espresso/60 px-4 py-3 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20 resize-none"
                    placeholder={t('pages.connect.form.fields.message.placeholder')}
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
	                      className="mt-0.5 h-6 w-6 shrink-0 rounded-md border-blush/25 bg-espresso/60 text-caramel focus:ring-caramel/20"
                    />
                    <span className="text-sm text-blush/80 leading-relaxed">
                      {t('pages.connect.form.checkboxes.consent')}
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
	                      className="mt-0.5 h-6 w-6 shrink-0 rounded-md border-blush/25 bg-espresso/60 text-caramel focus:ring-caramel/20"
                    />
                    <span className="text-sm text-blush/80 leading-relaxed">
                      {t('pages.connect.form.checkboxes.newsletter')}
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
	                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-caramel to-espresso px-12 py-4 text-base font-medium text-blush shadow-embrace transition-all duration-300 hover:from-caramel/90 hover:to-espresso/90 hover:-translate-y-1 hover:shadow-lift disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {t('pages.connect.form.submit.sending')}
                      </>
                    ) : (
                      <>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        {t('pages.connect.form.submit.send')}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </main>
      
      <UniversalFooter isHomePage={true} />
    </div>
  )
}
