import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { en } from './locales/en'
import { it } from './locales/it'

const STORAGE_KEY = 'ivynina-locale'
const SUPPORTED_LOCALES = ['en', 'it']

const translations = { en, it }

function collectKeyPaths(value, prefix = '', output = []) {
  if (value === null || value === undefined) return output

  if (typeof value !== 'object') {
    if (prefix) output.push(prefix)
    return output
  }

  for (const [key, child] of Object.entries(value)) {
    collectKeyPaths(child, prefix ? `${prefix}.${key}` : key, output)
  }

  return output
}

if (import.meta.env.DEV) {
  const enKeys = new Set(collectKeyPaths(en))
  const itKeys = new Set(collectKeyPaths(it))

  const missingInIt = [...enKeys].filter((key) => !itKeys.has(key))
  if (missingInIt.length) {
    console.warn('[i18n] Missing Italian translations:', missingInIt)
  }
}

function getPathValue(object, path) {
  if (!object || !path) return undefined
  return path.split('.').reduce((current, segment) => (current ? current[segment] : undefined), object)
}

function interpolate(template, variables) {
  if (typeof template !== 'string' || !variables) return template

  return template.replace(/{{\\s*([\\w.]+)\\s*}}/g, (_match, key) => {
    const value = getPathValue(variables, key)
    return value === undefined || value === null ? '' : String(value)
  })
}

function translate(locale, key, variables) {
  const localeTable = translations[locale]
  const englishTable = translations.en

  const rawValue = getPathValue(localeTable, key) ?? getPathValue(englishTable, key)
  if (rawValue === undefined) {
    return key
  }

  if (rawValue && typeof rawValue === 'object' && typeof variables?.count === 'number') {
    const rule = new Intl.PluralRules(locale).select(variables.count)
    const pluralValue = rawValue[rule] ?? rawValue.other
    return interpolate(pluralValue ?? key, variables)
  }

  return interpolate(rawValue, variables)
}

const I18nContext = createContext(null)

function readStoredLocale() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && SUPPORTED_LOCALES.includes(stored)) return stored
  } catch {
    // ignore
  }
  return 'en'
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(readStoredLocale)

  const setLocale = useCallback((nextLocale) => {
    if (!SUPPORTED_LOCALES.includes(nextLocale)) return
    setLocaleState(nextLocale)
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale)
    } catch {
      // ignore
    }
  }, [])

  const t = useCallback((key, variables) => translate(locale, key, variables), [locale])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  useEffect(() => {
    if (typeof document === 'undefined') return

    document.documentElement.lang = locale

    const seoTitle = translate(locale, 'seo.title')
    const seoDescription = translate(locale, 'seo.description')
    const ogTitle = translate(locale, 'seo.ogTitle')
    const ogDescription = translate(locale, 'seo.ogDescription')

    if (seoTitle) document.title = seoTitle

    const descriptionTag = document.querySelector('meta[name=\"description\"]')
    if (descriptionTag && seoDescription) descriptionTag.setAttribute('content', seoDescription)

    const ogTitleTag = document.querySelector('meta[property=\"og:title\"]')
    if (ogTitleTag && ogTitle) ogTitleTag.setAttribute('content', ogTitle)

    const ogDescriptionTag = document.querySelector('meta[property=\"og:description\"]')
    if (ogDescriptionTag && ogDescription) ogDescriptionTag.setAttribute('content', ogDescription)
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
