// Costanti dell'applicazione

export const AGE_GATE_KEY = 'ivynina-age-confirmed'

export const navLinks = [
  { labelKey: 'nav.links.story', section: 'story' },
  { labelKey: 'nav.links.scenes', section: 'scenes' },
  { labelKey: 'nav.links.testimonials', section: 'testimonials' },
  { labelKey: 'nav.links.faq', section: 'faq' },
  { labelKey: 'nav.links.connect', section: 'connect' },
]

const homeBackgroundModules = import.meta.glob('../assets/home/*.{jpg,JPG,jpeg,JPEG,png,webp,avif}', {
  eager: true,
  import: 'default',
})

export const homeBackgrounds = Object.entries(homeBackgroundModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, url]) => url)

export const heroBackgrounds = [
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2200&q=85',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=2200&q=85',
  'https://images.unsplash.com/photo-1517840933437-c41356892b54?auto=format&fit=crop&w=2200&q=85',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=2200&q=85',
  'https://images.unsplash.com/ph