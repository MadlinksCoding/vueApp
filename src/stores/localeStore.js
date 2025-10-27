// src/stores/localeStore.js

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { translationLoader } from '@/utils/translationLoader'

/**
 * Locale Store - Manages application locale state
 */
export const useLocaleStore = defineStore('locale', () => {
  // ============================================================================
  // STATE
  // ============================================================================
  
  const currentLocale = ref('en') // Default to English
  const loadedSections = ref(new Set()) // Track loaded sections
  const translations = ref({}) // Store translations by section
  const isLoading = ref(false)
  const error = ref(null)
  
  // Supported locales
  const supportedLocales = ['en', 'vi', 'pk', 'zh']
  
  // ============================================================================
  // GETTERS
  // ============================================================================
  
  const getLocale = computed(() => currentLocale.value)
  
  const isLocaleSupported = computed(() => (locale) => {
    return supportedLocales.includes(locale)
  })
  
  const isSectionLoaded = computed(() => (section) => {
    return loadedSections.value.has(`${section}:${currentLocale.value}`)
  })
  
  const getLoadedSections = computed(() => Array.from(loadedSections.value))
  
  // ============================================================================
  // ACTIONS
  // ============================================================================
  
  /**
   * Set current locale
   * @param {string} locale - Locale code (en, vi, pk, zh)
   */
  function setLocale(locale) {
    if (!supportedLocales.includes(locale)) {
      console.warn(`[LocaleStore] Unsupported locale: ${locale}, falling back to 'en'`)
      locale = 'en'
    }
    
    console.log(`[LocaleStore] Setting locale: ${currentLocale.value} → ${locale}`)
    currentLocale.value = locale
    
    // Store in localStorage for persistence
    try {
      localStorage.setItem('user-locale', locale)
    } catch (e) {
      console.warn('[LocaleStore] Failed to save locale to localStorage', e)
    }
  }
  
  /**
   * Force set locale from URL parameter
   * @param {string} localeFromUrl - Locale from URL (e.g., /pk/dashboard)
   */
  function forceSetLocaleFromURL(localeFromUrl) {
    if (localeFromUrl && supportedLocales.includes(localeFromUrl)) {
      console.log(`[LocaleStore] Force setting locale from URL: ${localeFromUrl}`)
      setLocale(localeFromUrl)
      return true
    }
    return false
  }
  
  /**
   * Initialize locale from various sources
   * Priority: URL > localStorage > Browser > Default (en)
   * @param {string} urlLocale - Locale from URL (optional)
   */
  function initializeLocale(urlLocale = null) {
    // 1. Check URL parameter first
    if (urlLocale && supportedLocales.includes(urlLocale)) {
      console.log(`[LocaleStore] Initializing from URL: ${urlLocale}`)
      setLocale(urlLocale)
      return
    }
    
    // 2. Check localStorage
    try {
      const savedLocale = localStorage.getItem('user-locale')
      if (savedLocale && supportedLocales.includes(savedLocale)) {
        console.log(`[LocaleStore] Initializing from localStorage: ${savedLocale}`)
        setLocale(savedLocale)
        return
      }
    } catch (e) {
      console.warn('[LocaleStore] Failed to read from localStorage', e)
    }
    
    // 3. Check browser language
    const browserLang = navigator.language.split('-')[0] // e.g., 'en-US' → 'en'
    if (supportedLocales.includes(browserLang)) {
      console.log(`[LocaleStore] Initializing from browser: ${browserLang}`)
      setLocale(browserLang)
      return
    }
    
    // 4. Default to English
    console.log(`[LocaleStore] Initializing with default: en`)
    setLocale('en')
  }
  
  /**
   * Load translations for a specific section
   * @param {string} section - Section name (auth, dashboard, etc.)
   */
  async function loadSectionTranslations(section) {
    const locale = currentLocale.value
    const sectionKey = `${section}:${locale}`
    
    // Skip if already loaded
    if (loadedSections.value.has(sectionKey)) {
      console.log(`[LocaleStore] Section already loaded: ${sectionKey}`)
      return
    }
    
    // Skip loading for English
    if (locale === 'en') {
      loadedSections.value.add(sectionKey)
      console.log(`[LocaleStore] Skipping English load for: ${section}`)
      return
    }
    
    isLoading.value = true
    error.value = null
    
    try {
      console.log(`[LocaleStore] Loading translations: ${sectionKey}`)
      
      const sectionTranslations = await translationLoader.loadTranslationsForSection(
        section,
        locale
      )
      
      // Store translations
      if (!translations.value[section]) {
        translations.value[section] = {}
      }
      translations.value[section][locale] = sectionTranslations
      
      // Mark as loaded
      loadedSections.value.add(sectionKey)
      
      console.log(`[LocaleStore] ✓ Successfully loaded: ${sectionKey}`)
      
    } catch (err) {
      error.value = err
      console.error(`[LocaleStore] ✗ Failed to load: ${sectionKey}`, err)
    } finally {
      isLoading.value = false
    }
  }
  
  /**
   * Get translation for a key in current section
   * @param {string} section - Section name
   * @param {string} key - Translation key
   * @returns {string} - Translated string or key if not found
   */
 /**
 * Get translation for a key in current section
 * @param {string} section - Section name
 * @param {string} key - Translation key
 * @returns {string} - Translated string or key if not found
 */
function getTranslation(section, key) {
  const locale = currentLocale.value
  
  // Return key for English (default)
  if (locale === 'en') {
    return key
  }
  
  // Get section translations
  const sectionTranslations = translations.value[section]?.[locale]
  
  if (!sectionTranslations) {
    console.warn(`[LocaleStore] No translations for section: ${section}`)
    return key
  }
  
  // ✅ CHANGE: Direct lookup (no nested keys)
  // Client wants flat structure: { "Log In": "لاگ ان" }
  const translation = sectionTranslations[key]
  
  if (!translation) {
    console.warn(`[LocaleStore] Translation not found: ${key} in ${section}/${locale}`)
    return key
  }
  
  return translation
} 
  /**
   * Clear all translations cache
   */
  function clearCache() {
    console.log('[LocaleStore] Clearing all translations')
    translations.value = {}
    loadedSections.value.clear()
    translationLoader.clearCache()
  }
  
  /**
   * Clear translations for specific locale
   * @param {string} locale - Locale to clear
   */
  function clearLocaleCache(locale) {
    console.log(`[LocaleStore] Clearing translations for: ${locale}`)
    
    // Remove from loadedSections
    const keysToRemove = Array.from(loadedSections.value).filter(key => 
      key.endsWith(`:${locale}`)
    )
    keysToRemove.forEach(key => loadedSections.value.delete(key))
    
    // Clear from translations object
    Object.keys(translations.value).forEach(section => {
      if (translations.value[section][locale]) {
        delete translations.value[section][locale]
      }
    })
    
    translationLoader.clearLocaleCache(locale)
  }
  
  /**
   * Get store statistics
   */
  function getStats() {
    return {
      currentLocale: currentLocale.value,
      loadedSections: Array.from(loadedSections.value),
      totalSections: Object.keys(translations.value).length,
      isLoading: isLoading.value,
      error: error.value,
      cacheStats: translationLoader.getCacheStats()
    }
  }
  
  // ============================================================================
  // RETURN PUBLIC API
  // ============================================================================
  
  return {
    // State
    currentLocale,
    loadedSections,
    translations,
    isLoading,
    error,
    supportedLocales,
    
    // Getters
    getLocale,
    isLocaleSupported,
    isSectionLoaded,
    getLoadedSections,
    
    // Actions
    setLocale,
    forceSetLocaleFromURL,
    initializeLocale,
    loadSectionTranslations,
    getTranslation,
    clearCache,
    clearLocaleCache,
    getStats
  }
})