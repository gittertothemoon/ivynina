import { useState } from 'react'
import { SiOnlyfans } from 'react-icons/si'
import { FiCalendar, FiFileText, FiMessageCircle, FiTool, FiUsers, FiVideo } from 'react-icons/fi'
import { BackgroundCarousel, BackgroundOverlay } from '../components/Layout'
import { MainNav } from '../components/MainNav'
import { UniversalFooter } from '../components/UniversalFooter'
import { FadeIn } from '../components/animations/ScrollAnimations'
import { heroBackgrounds } from '../utils/constants'

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

  const categories = [
    { value: 'general', label: 'General Inquiry', icon: <FiMessageCircle className="h-5 w-5" aria-hidden="true" /> },
    { value: 'collaboration', label: 'Collaboration Request', icon: <FiUsers className="h-5 w-5" aria-hidden="true" /> },
    { value: 'booking', label: 'Booking Inquiry', icon: <FiCalendar className="h-5 w-5" aria-hidden="true" /> },
    { value: 'content', label: 'Custom Content', icon: <FiVideo className="h-5 w-5" aria-hidden="true" /> },
    { value: 'technical', label: 'Technical Support', icon: <FiTool className="h-5 w-5" aria-hidden="true" /> },
    { value: 'media', label: 'Media & Press', icon: <FiFileText className="h-5 w-5" aria-hidden="true" /> }
  ]

  const budgetRanges = [
    { value: '', label: 'Select budget range' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: '5000+', label: '$5,000+' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ]

  const timelineOptions = [
    { value: '', label: 'Select timeline' },
    { value: 'asap', label: 'ASAP' },
    { value: '1-2weeks', label: '1-2 weeks' },
    { value: '1month', label: '1 month' },
    { value: '2-3months', label: '2-3 months' },
    { value: 'flexible', label: 'Flexible' }
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
                  Message Sent Successfully!
                </h1>
                <p className="text-xl text-blush/80 leading-relaxed">
                  Thank you for reaching out. We typically respond within 24 hours. We're excited to connect with you!
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
                  Back to Home
                </button>
                
                <a
                  href="https://onlyfans.com/ivyandnina"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-espresso/80 border border-caramel/30 px-8 py-4 text-sm font-medium text-blush backdrop-blur-sm transition-all duration-300 hover:bg-espresso hover:border-caramel/50 hover:-translate-y-1"
                >
                  <SiOnlyfans className="h-4 w-4" />
                  Visit Our OnlyFans
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
                Let's Connect
              </h1>
              <p className="text-xl text-blush/80 leading-relaxed max-w-3xl mx-auto">
                Ready to collaborate, book a session, or just say hello? We love hearing from our community and are always excited about new opportunities.
              </p>
            </div>
          </FadeIn>

          {/* Contact Options */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-embrace transition-all duration-300 hover:border-caramel/20 hover:shadow-[0_24px_48px_-12px_rgba(42,23,16,0.4)] sm:p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-caramel to-sienna rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-espresso" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-caramel mb-2">Email</h3>
                <p className="text-blush/70 text-sm mb-4">For business inquiries and detailed discussions</p>
                <a href="mailto:booking@ivyandnina.com" className="text-caramel hover:text-caramel/80 text-sm font-medium">
                  booking@ivyandnina.com
                </a>
              </div>

              <div className="text-center p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-embrace transition-all duration-300 hover:border-caramel/20 hover:shadow-[0_24px_48px_-12px_rgba(42,23,16,0.4)] sm:p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-caramel to-sienna rounded-full flex items-center justify-center mx-auto mb-4">
                  <SiOnlyfans className="w-8 h-8 text-espresso" />
                </div>
                <h3 className="text-lg font-semibold text-caramel mb-2">OnlyFans</h3>
                <p className="text-blush/70 text-sm mb-4">Direct messages and personal interactions</p>
                <a href="https://onlyfans.com/ivyandnina" target="_blank" rel="noreferrer" className="text-caramel hover:text-caramel/80 text-sm font-medium">
                  @ivyandnina
                </a>
              </div>

              <div className="text-center p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-embrace transition-all duration-300 hover:border-caramel/20 hover:shadow-[0_24px_48px_-12px_rgba(42,23,16,0.4)] sm:p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-caramel to-sienna rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-espresso" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-caramel mb-2">Phone</h3>
                <p className="text-blush/70 text-sm mb-4">Available for urgent booking inquiries</p>
                <p className="text-caramel text-sm font-medium">By appointment only</p>
              </div>
            </div>
          </FadeIn>

          {/* Advanced Contact Form */}
          <FadeIn delay={400}>
            <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-embrace p-8 sm:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-caramel mb-4">Send Us a Message</h2>
                <p className="text-blush/70">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-caramel mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-white/20 bg-espresso/60 px-4 py-3 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-caramel mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-white/20 bg-espresso/60 px-4 py-3 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-medium text-caramel mb-4">
                    What can we help you with? *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map((category) => (
                      <label
                        key={category.value}
                        className={`flex min-h-11 items-center gap-3 rounded-2xl border p-4 transition-all duration-300 focus-within:ring-2 focus-within:ring-caramel/25 focus-within:ring-offset-2 focus-within:ring-offset-espresso ${
                          formData.category === category.value
                            ? 'border-caramel/50 bg-caramel/10 text-caramel'
                            : 'border-white/20 bg-espresso/40 text-blush hover:border-caramel/30 hover:bg-espresso/60'
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
                        <span className="text-sm font-medium">{category.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-caramel mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-white/20 bg-espresso/60 px-4 py-3 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                {/* Collaboration Details (shown for collaboration category) */}
                {formData.category === 'collaboration' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-caramel/5 border border-caramel/20">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-caramel mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-white/20 bg-espresso/60 px-4 py-3 text-blush outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                      >
                        {budgetRanges.map((range) => (
                          <option key={range.value} value={range.value} className="bg-espresso">
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-caramel mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-white/20 bg-espresso/60 px-4 py-3 text-blush outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                      >
                        {timelineOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-espresso">
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="experience" className="block text-sm font-medium text-caramel mb-2">
                        Your Experience Level
                      </label>
                      <input
                        type="text"
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-white/20 bg-espresso/60 px-4 py-3 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                        placeholder="e.g., Professional photographer, content creator, first time..."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="portfolio" className="block text-sm font-medium text-caramel mb-2">
                        Portfolio/Work Samples (Optional)
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full rounded-2xl border border-white/20 bg-espresso/60 px-4 py-3 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
                        placeholder="https://your-portfolio.com"
                      />
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-caramel mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-white/20 bg-espresso/60 px-4 py-3 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20 resize-none"
                    placeholder="Tell us more about your inquiry, ideas, or what you'd like to discuss..."
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
                      className="mt-0.5 h-6 w-6 shrink-0 rounded-md border-white/20 bg-espresso/60 text-caramel focus:ring-caramel/20"
                    />
                    <span className="text-sm text-blush/80 leading-relaxed">
                      I understand this is for professional inquiries and consent to be contacted regarding my message. All communications are confidential. *
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mt-0.5 h-6 w-6 shrink-0 rounded-md border-white/20 bg-espresso/60 text-caramel focus:ring-caramel/20"
                    />
                    <span className="text-sm text-blush/80 leading-relaxed">
                      I'd like to receive updates about new content and special offers. (Optional)
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-caramel to-sienna px-12 py-4 text-base font-medium text-espresso transition-all duration-300 hover:from-caramel/90 hover:to-sienna/90 hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        Send Message
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
