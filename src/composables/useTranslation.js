// src/composables/useTranslation.js

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLocaleStore } from '@/stores/localeStore'
import { translationLoader } from '@/utils/translationLoader'

/**
 * Translation Composable
 * Provides reactive translation functions for Vue components
 * 
 * @example
 * // In your component:
 * const { t, locale, setLocale } = useTranslation()
 * 
 * // Use in template:
 * <h1>{{ t('auth.login.title') }}</h1>
 * 
 * // Or with data-translate attribute:
 * <button data-translate="auth.login.button">Login</button>
 */
export function useTranslation() {
  const route = useRoute()
  const localeStore = useLocaleStore()
  
  // ============================================================================
  // REACTIVE STATE
  // ============================================================================
  
  const locale = computed(() => localeStore.getLocale)
  const isLoading = computed(() => localeStore.isLoading)
  const currentSection = computed(() => 
    route.meta.section || translationLoader.inSection(route.path)
  )
  
  // ============================================================================
  // TRANSLATION FUNCTION
  // ============================================================================
  
  /**
   * Translate a key
   * @param {string} key - Translation key (e.g., 'auth.login.title')
   * @param {object} params - Optional interpolation params
   * @returns {string} - Translated string
   * 
   * @example
   * t('auth.login.welcome', { name: 'John' })
   * // Returns: "Welcome, John!" (if translation is "Welcome, {name}!")
   */
  function t(key, params = {}) {
    // If English, return the key as-is (assuming English is written in code)
    if (locale.value === 'en') {
      return key
    }
    
    // Get current section
    const section = currentSection.value
    
    // Get translation from store
    let translation = localeStore.getTranslation(section, key)
    
    // If translation not found, return key
    if (!translation || translation === key) {
      // Log warning in development
      if (import.meta.env.DEV) {
        console.warn(`[Translation] Missing: ${key} in ${section}/${locale.value}`)
      }
      return key
    }
    
    // Interpolate parameters if provided
    if (Object.keys(params).length > 0) {
      translation = interpolate(translation, params)
    }
    
    return translation
  }
  
  /**
   * Interpolate translation with parameters
   * @private
   */
  function interpolate(str, params) {
    let result = str
    
    // Replace {key} with values
    Object.keys(params).forEach(key => {
      const regex = new RegExp(`\\{${key}\\}`, 'g')
      result = result.replace(regex, params[key])
    })
    
    return result
  }
  
  /**
   * Translate with fallback
   * @param {string} key - Translation key
   * @param {string} fallback - Fallback text if translation not found
   * @param {object} params - Optional interpolation params
   */
  function tf(key, fallback, params = {}) {
    const translation = t(key, params)
    return translation === key ? fallback : translation
  }
  
  /**
   * Check if a translation exists
   * @param {string} key - Translation key
   * @returns {boolean}
   */
  function hasTranslation(key) {
    const translation = t(key)
    return translation !== key
  }
  
  // ============================================================================
  // LOCALE MANAGEMENT
  // ============================================================================
  
  /**
   * Set current locale
   * @param {string} newLocale - Locale code
   */
  async function setLocale(newLocale) {
    localeStore.setLocale(newLocale)
    
    // Reload current section translations
    const section = currentSection.value
    await localeStore.loadSectionTranslations(section)
  }
  
  /**
   * Get available locales
   */
  const availableLocales = computed(() => localeStore.supportedLocales)
  
  /**
   * Check if a locale is supported
   */
  function isLocaleSupported(checkLocale) {
    return localeStore.supportedLocales.includes(checkLocale)
  }
  
  // ============================================================================
  // DOM BINDING UTILITIES
  // ============================================================================
  
  /**
   * Bind elements with data-translate attribute
   * Call this after component mount or when locale changes
   */
  function bindElmForTranslations() {
    const elements = document.querySelectorAll('[data-translate]')
    
    elements.forEach(el => {
      const key = el.getAttribute('data-translate')
      if (key) {
        const translation = t(key)
        
        // Update element content
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translation
        } else {
          el.textContent = translation
        }
      }
    })
  }
  
  /**
   * Force re-render all translations
   * Useful after locale change
   */
  async function renderTranslations() {
    // Bind DOM elements
    bindElmForTranslations()
    
    // Trigger reactive updates by accessing reactive properties
    // Vue will automatically re-render components that use t()
    console.log('[Translation] Re-rendering translations for locale:', locale.value)
  }
  
  // ============================================================================
  // RETURN PUBLIC API
  // ============================================================================
  
  return {
    // State
    locale,
    isLoading,
    currentSection,
    availableLocales,
    
    // Translation functions
    t,
    tf,
    hasTranslation,
    
    // Locale management
    setLocale,
    isLocaleSupported,
    
    // DOM utilities
    bindElmForTranslations,
    renderTranslations
  }
}

/**
 * Create a translatable string function (alternative approach)
 * This can be used for more explicit translation marking
 * 
 * @example
 * const str = translatableString('auth.login.title')
 * console.log(str.value) // Access reactive translation
 */
export function translatableString(key, section = null) {
  const localeStore = useLocaleStore()
  const route = useRoute()
  
  return computed(() => {
    const locale = localeStore.getLocale
    const currentSection = section || route.meta.section || translationLoader.inSection(route.path)
    
    if (locale === 'en') {
      return key
    }
    
    return localeStore.getTranslation(currentSection, key) || key
  })
}

/**
 * Global directive for auto-translation
 * Register this in main.js:
 * 
 * app.directive('translate', vTranslate)
 */
export const vTranslate = {
  mounted(el, binding) {
    const { t } = useTranslation()
    const key = binding.value || el.textContent.trim()
    
    if (key) {
      const translation = t(key)
      
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation
      } else {
        el.textContent = translation
      }
    }
  },
  updated(el, binding) {
    const { t } = useTranslation()
    const key = binding.value || el.getAttribute('data-translate-key')
    
    if (key) {
      const translation = t(key)
      
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation
      } else {
        el.textContent = translation
      }
    }
  }
}