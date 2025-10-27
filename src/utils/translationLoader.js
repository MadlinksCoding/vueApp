// src/utils/translationLoader.js

/**
 * Section-wise Translation Loader
 * Lazy loads translation files per section for optimal performance
 */

class TranslationLoader {
  constructor() {
    this.cache = new Map() // Cache loaded translations
    this.loadingPromises = new Map() // Track ongoing loads
    this.currentSection = null
  }

  /**
   * Determine current section from route path
   * @param {string} path - Current route path
   * @returns {string} - Section name
   */
  inSection(path) {
    // Remove leading slash and get first segment
    const segments = path.split('/').filter(Boolean)
    
    // Map routes to sections
    const sectionMap = {
      'login': 'auth',
      'signup': 'auth',
      'forgot-password': 'auth',
      'dashboard': 'dashboard',
      'profile': 'profile',
      'shop': 'shop',
      'discover': 'discover',
      'about': 'misc',
      'contact': 'misc'
    }

    // Get section from first segment or default to 'misc'
    const section = sectionMap[segments[0]] || 'misc'
    this.currentSection = section
    
    console.log(`[TranslationLoader] Current section: ${section} (from path: ${path})`)
    return section
  }

  /**
   * Generate cache key
   * @param {string} section - Section name
   * @param {string} locale - Locale code
   * @returns {string} - Cache key
   */
  getCacheKey(section, locale) {
    return `${section}:${locale}`
  }

  /**
   * Check if translation is already cached
   * @param {string} section - Section name
   * @param {string} locale - Locale code
   * @returns {boolean}
   */
  isCached(section, locale) {
    return this.cache.has(this.getCacheKey(section, locale))
  }

  /**
   * Get cached translation
   * @param {string} section - Section name
   * @param {string} locale - Locale code
   * @returns {object|null}
   */
  getCached(section, locale) {
    return this.cache.get(this.getCacheKey(section, locale)) || null
  }

  /**
   * Load translation file for a specific section and locale
   * @param {string} section - Section name
   * @param {string} locale - Locale code
   * @returns {Promise<object>} - Translation object
   */
  async loadTranslationsForSection(section, locale) {
    // Skip loading for English (default language)
    if (locale === 'en') {
      console.log(`[TranslationLoader] Skipping English - using default strings`)
      return {}
    }

    const cacheKey = this.getCacheKey(section, locale)

    // Return cached if available
    if (this.isCached(section, locale)) {
      console.log(`[TranslationLoader] ✓ Using cached: ${cacheKey}`)
      return this.getCached(section, locale)
    }

    // Return existing loading promise if already loading
    if (this.loadingPromises.has(cacheKey)) {
      console.log(`[TranslationLoader] ⏳ Already loading: ${cacheKey}`)
      return this.loadingPromises.get(cacheKey)
    }

    // Start new load
    const loadPromise = this._fetchTranslation(section, locale)
    this.loadingPromises.set(cacheKey, loadPromise)

    try {
      const translations = await loadPromise
      
      // Cache the result
      this.cache.set(cacheKey, translations)
      console.log(`[TranslationLoader] ✓ Loaded and cached: ${cacheKey}`)
      
      return translations
    } catch (error) {
      console.error(`[TranslationLoader] ✗ Failed to load: ${cacheKey}`, error)
      throw error
    } finally {
      // Clean up loading promise
      this.loadingPromises.delete(cacheKey)
    }
  }

  /**
   * Fetch translation file from server
   * @private
   */
  async _fetchTranslation(section, locale) {
  const url = `/i18n/${section}/${locale}.json`;
  const cacheKey = `i18n_${section}_${locale}`;
  const startTime = performance.now();

  try {
    // ✅ 1. Check LocalStorage Cache
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const loadTime = (performance.now() - startTime).toFixed(2);
      console.log(`[TranslationLoader] ⚡ Loaded from localStorage in ${loadTime}ms: ${cacheKey}`);
      return JSON.parse(cached);
    }

    // ✅ 2. If not cached, fetch from network
    console.log(`[TranslationLoader] 📥 Fetching: ${url}`);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const translations = await response.json();
    const loadTime = (performance.now() - startTime).toFixed(2);
    console.log(`[TranslationLoader] ✓ Downloaded in ${loadTime}ms: ${url}`);
    console.log(`[TranslationLoader] Translation keys:`, Object.keys(translations).length);

    // ✅ 3. Save fetched data to LocalStorage
    localStorage.setItem(cacheKey, JSON.stringify(translations));
    console.log(`[TranslationLoader] 💾 Cached to localStorage: ${cacheKey}`);

    return translations;

  } catch (error) {
    const loadTime = (performance.now() - startTime).toFixed(2);
    console.error(`[TranslationLoader] ✗ Failed after ${loadTime}ms: ${url}`, error);

    // Log missing translation error
    this._logMissingTranslation(section, locale, error);

    // Return empty object to prevent crashes
    return {};
  }
}


  /**
   * Log missing translation error
   * @private
   */
  _logMissingTranslation(section, locale, error) {
    console.warn(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️  TRANSLATION FILE MISSING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Section: ${section}
Locale:  ${locale}
Path:    /i18n/${section}/${locale}.json
Error:   ${error.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `)
  }

  /**
   * Preload multiple sections for a locale
   * @param {string[]} sections - Array of section names
   * @param {string} locale - Locale code
   */
  async preloadSections(sections, locale) {
    if (locale === 'en') return // Skip English

    console.log(`[TranslationLoader] Preloading sections for ${locale}:`, sections)
    
    const promises = sections.map(section => 
      this.loadTranslationsForSection(section, locale)
    )

    try {
      await Promise.all(promises)
      console.log(`[TranslationLoader] ✓ Preloaded all sections for ${locale}`)
    } catch (error) {
      console.error(`[TranslationLoader] ✗ Preload failed for ${locale}`, error)
    }
  }

  /**
   * Clear all cached translations
   */
  clearCache() {
    console.log(`[TranslationLoader] Clearing cache (${this.cache.size} entries)`)
    this.cache.clear()
    this.loadingPromises.clear()
  }

  /**
   * Clear cache for specific locale
   * @param {string} locale - Locale code
   */
  clearLocaleCache(locale) {
    const keysToDelete = []
    
    for (const key of this.cache.keys()) {
      if (key.endsWith(`:${locale}`)) {
        keysToDelete.push(key)
      }
    }

    keysToDelete.forEach(key => this.cache.delete(key))
    console.log(`[TranslationLoader] Cleared ${keysToDelete.length} cache entries for ${locale}`)
  }

  /**
   * Get cache statistics
   * @returns {object}
   */
  getCacheStats() {
    return {
      totalCached: this.cache.size,
      currentlyLoading: this.loadingPromises.size,
      cachedSections: Array.from(this.cache.keys()),
      currentSection: this.currentSection
    }
  }
}

// Singleton instance
export const translationLoader = new TranslationLoader()

// Export for direct use
export default translationLoader