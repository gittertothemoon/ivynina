import { useState } from 'react'
import { SiOnlyfans } from 'react-icons/si'
import { BackgroundCarousel, BackgroundOverlay } from '../components/Layout'
import { MainNav } from '../components/MainNav'
import { UniversalFooter } from '../components/UniversalFooter'
import { FadeIn } from '../components/animations/ScrollAnimations'
import { heroBackgrounds } from '../utils/constants'

export function FAQPage({ onNavigateHome, onOpenSection }) {
  const [openQuestion, setOpenQuestion] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Questions', count: 15 },
    { id: 'subscription', label: 'Subscription', count: 5 },
    { id: 'content', label: 'Content', count: 4 },
    { id: 'community', label: 'Community', count: 3 },
    { id: 'technical', label: 'Technical', count: 3 }
  ]

  const allFAQs = [
    {
      id: 1,
      category: 'subscription',
      question: 'How does the subscription work?',
      answer: 'Our OnlyFans subscription gives you unlimited access to our full library of content, including exclusive scenes, behind-the-scenes footage, and personal messages. You can cancel anytime.',
      tags: ['subscription', 'billing', 'access']
    },
    {
      id: 2,
      category: 'content',
      question: 'How often do you post new content?',
      answer: 'We post new content 2-3 times per week, including full scenes, intimate moments, and behind-the-scenes content. We also send personal messages and updates regularly.',
      tags: ['content', 'schedule', 'updates']
    },
    {
      id: 3,
      category: 'content',
      question: 'What makes your content different?',
      answer: 'We focus on authentic intimacy and genuine connection. Every scene includes aftercare discussions, and we prioritize emotional safety and consent in everything we create.',
      tags: ['authenticity', 'intimacy', 'quality']
    },
    {
      id: 4,
      category: 'community',
      question: 'Can I interact with you directly?',
      answer: 'Absolutely! We personally respond to messages and create a community where everyone feels heard. We also take custom requests and suggestions for future content.',
      tags: ['interaction', 'messages', 'community']
    },
    {
      id: 5,
      category: 'subscription',
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees ever. The subscription price includes access to our entire library. Custom content and tips are optional and clearly marked.',
      tags: ['pricing', 'transparency', 'fees']
    },
    {
      id: 6,
      category: 'technical',
      question: 'Is my privacy protected?',
      answer: 'Your privacy is our top priority. OnlyFans has robust privacy protections, and we never share subscriber information. Your viewing history and interactions remain completely confidential.',
      tags: ['privacy', 'security', 'confidential']
    }
  ]

  const filteredFAQs = allFAQs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-espresso via-espresso/95 to-espresso/90">
      <BackgroundCarousel images={heroBackgrounds} />
      <BackgroundOverlay />
      
      <MainNav onOpenSection={onOpenSection} currentPage="faq" showLogo={true} isFixed={false} onNavigateHome={onNavigateHome} />

      {/* FAQ Content */}
      <main className="page-shell">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blush via-caramel to-sienna bg-clip-text text-transparent leading-tight mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-blush/80 leading-relaxed max-w-3xl mx-auto">
                Everything you need to know about our community, content, and subscription. Transparency is at the heart of what we do.
              </p>
            </div>
          </FadeIn>

          {/* Search Bar */}
          <FadeIn delay={200}>
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg className="h-5 w-5 text-blush/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full rounded-2xl border border-white/20 bg-espresso/60 pl-12 pr-4 py-4 text-blush caret-caramel outline-none backdrop-blur-sm transition-all duration-300 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/20"
              />
            </div>
          </FadeIn>

          {/* Category Filter */}
          <FadeIn delay={300}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-caramel to-sienna text-espresso shadow-lg'
                      : 'bg-espresso/60 border border-caramel/30 text-blush hover:bg-espresso/80 hover:border-caramel/50'
                  }`}
                >
                  {category.label}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id ? 'bg-espresso/20' : 'bg-caramel/20'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => {
              const isOpen = openQuestion === faq.id
              return (
                <FadeIn key={faq.id} delay={400 + index * 100}>
                  <div className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-embrace transition-all duration-300 hover:border-caramel/20 hover:shadow-[0_24px_48px_-12px_rgba(42,23,16,0.4)]">
                    <button
                      type="button"
                      onClick={() => setOpenQuestion(isOpen ? null : faq.id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-caramel/8 hover:to-transparent sm:gap-6 sm:px-8 sm:py-6"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4">
                        {/* Question icon */}
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ${isOpen ? 'bg-caramel/20 ring-2 ring-caramel/30' : 'bg-espresso/40 group-hover:bg-caramel/15'}`}>
                          <svg
                            className={`h-5 w-5 transition-all duration-500 ${isOpen ? 'text-caramel' : 'text-blush/60 group-hover:text-caramel'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className={`font-semibold transition-colors duration-300 ${isOpen ? 'text-caramel' : 'text-blush group-hover:text-caramel'}`}>
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Animated expand/collapse icon */}
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 ${isOpen ? 'bg-caramel/20 rotate-180' : 'bg-espresso/30 group-hover:bg-caramel/15'}`}>
                        <svg
                          className={`h-4 w-4 transition-all duration-500 ${isOpen ? 'text-caramel' : 'text-blush/60 group-hover:text-caramel'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>
                    
                    {/* Animated content panel */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="border-t border-white/10 bg-gradient-to-r from-espresso/20 to-transparent px-5 py-5 sm:px-8 sm:py-6">
                        <div className="flex gap-3 sm:gap-4">
                          {/* Answer indicator */}
                          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-caramel/20">
                            <svg
                              className="h-3 w-3 text-caramel"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          
                          <div className="flex-1">
                            <p className="leading-relaxed text-blush/80 mb-4">
                              {faq.answer}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {faq.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 rounded-full bg-caramel/20 text-xs text-caramel"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>

          {/* No results message */}
          {filteredFAQs.length === 0 && (
            <FadeIn delay={500}>
              <div className="text-center py-12">
                <svg className="h-16 w-16 text-blush/40 mx-auto mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <p className="text-blush/60">No questions found matching your search.</p>
              </div>
            </FadeIn>
          )}

          {/* Contact Section */}
          <FadeIn delay={600}>
            <div className="text-center mt-16 space-y-8">
              <div className="h-px bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-caramel">Still have questions?</h3>
                <p className="text-blush/70 max-w-2xl mx-auto leading-relaxed">
                  We're here to help! Don't hesitate to reach out through any of these channels.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:booking@ivyandnina.com"
                    className="inline-flex items-center gap-2 rounded-full bg-espresso border border-caramel/30 px-6 py-3 text-sm font-medium text-blush transition-all duration-300 hover:bg-espresso/90 hover:border-caramel/50 hover:-translate-y-1"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Email Us
                  </a>
                  <a
                    href="https://onlyfans.com/ivyandnina"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-caramel to-sienna px-6 py-3 text-sm font-medium text-espresso transition-all duration-300 hover:from-caramel/90 hover:to-sienna/90 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <SiOnlyfans className="h-4 w-4" />
                    DM Us
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      
      <UniversalFooter isHomePage={true} />
    </div>
  )
}
