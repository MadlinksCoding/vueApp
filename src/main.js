// src/main.js - UPDATED VERSION

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import './assets/main.css'
import router from "./router";

// ============================================================================
// NEW: Import your new translation system
// ============================================================================
import { useLocaleStore } from "./stores/localeStore";
import { vTranslate } from './composables/useTranslation'

// Keep existing imports
import { useAuthStore } from "@/stores/useAuthStore";
import { authHandler } from "@/services/authHandler";
import { useSectionsStore } from "./stores/sectionStore";
import { createCacheJanitor } from "./plugins/cacheJanitor";

async function initializeApp() {
  const app = createApp(App);

  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);
  app.use(pinia);

  // ============================================================================
  // NEW: Initialize locale system (replaces enterprise i18n)
  // ============================================================================
  console.log('[App] 🌍 Initializing locale system...');
  const localeStore = useLocaleStore();
  
  // Initialize locale from URL/localStorage/browser
  localeStore.initializeLocale();
  
  console.log('[App] ✓ Locale initialized:', localeStore.getLocale);

  // ============================================================================
  // NEW: Register translation directive
  // ============================================================================
  app.directive('translate', vTranslate);

  // Existing auth initialization
  const auth = useAuthStore();
  const sectionsStore = useSectionsStore();

  auth.refreshFromStorage();
  sectionsStore.hydrate();

  // Wait for router to be ready before restoring session
  router.isReady().then(() => {
    const publicRoutes = [
      "/log-in",
      "/sign-up",
      "/sign-up/onboarding",
      "/sign-up/onboarding/kyc",
      "/lost-password",
      "/reset-password",
      "/confirm-email",
      "/",
      "/dashboard",
      "/dashboard/overview",
      "/dev",
      "/dashboard/referralsContentFan",
      "/dashboard/analytics",
      "/dashboard/payout",
      "/dashboard/orders/order-received",
      "/dashboard/orders/item-purchased",
      "/dashboard/my-media",
      "/dashboard/subscriptions",
      "/dashboard/edit-profile",
      "/dashboard/referrals",
      "/dashboard/settings"
    ];

    const isPublic = publicRoutes.includes(router.currentRoute.value.path);
    const isSimulated = !!auth.simulate;

    if (!isPublic && !isSimulated) {
      authHandler
        .restoreSession()
        .then(({ idToken, accessToken, refreshToken }) => {
          console.log("[MAIN] Session restored, setting token");
          localStorage.setItem("idToken", idToken);
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          auth.setTokenAndDecode(idToken);
          auth.startTokenRefreshLoop();
        })
        .catch((err) => {
          console.log("[MAIN] Session restoration failed:", err.message || err);
          auth.logout();
          if (!isPublic) {
            router.push("/log-in");
          }
        });
    } else {
      console.log(
        "[MAIN] Skipping session restoration because",
        isSimulated ? "simulate mode active" : "public route",
        router.currentRoute.value.path
      );
    }
  });

  app.use(router);
  
  // ============================================================================
  // REMOVED: Old enterprise i18n (comment out if you want to keep as backup)
  // ============================================================================
  // app.use(enterpriseI18n.vueI18nInstance);

  // Setup Cache Janitor (cleanup every 30 seconds)
  app.use(createCacheJanitor(30_000))
  
  app.mount("#app");
  
  // ============================================================================
  // NEW: Dev Tools
  // ============================================================================
  if (import.meta.env.DEV) {
    window.__localeStore__ = () => {
      const store = useLocaleStore();
      return {
        locale: store.getLocale,
        stats: store.getStats(),
        setLocale: (locale) => store.setLocale(locale),
        clearCache: () => store.clearCache()
      }
    }
    
    console.log('\n💡 Dev Tools Available:')
    console.log('   window.__localeStore__() - Access locale store')
    console.log('   window.__localeStore__().stats - View statistics')
    console.log('   window.__localeStore__().setLocale("pk") - Change locale\n')
  }
}

// Initialize the app
initializeApp().catch(console.error);