// import { createRouter, createWebHistory } from "vue-router";
// import routesJson from "@/router/routeConfig.json";
// import { lazy } from "@/utils/lazy";
// import { installSectionActivationGuard } from "./guards/sectionActivationGuard";
// import routeGuard from "./routeGuard";
// import { useAuthStore } from "@/stores/useAuthStore";
// const componentCache = new Map();

// function toRouteRecord(r) {
//   const rec = {
//     path: r.slug,
//     meta: r,
//   };
//   if (r.redirect) {
//     rec.redirect = r.redirect;
//   } else if (r.customComponentPath) {
//     rec.component = async () => {
//       const auth = useAuthStore();
//       const role = auth.simulate?.role || auth.currentUser?.role || "default";
//       const compPath = r.customComponentPath[role]?.componentPath;
//       const cacheKey = `${r.slug}:${role}`;
//       if (componentCache.has(cacheKey)) {
//         return componentCache.get(cacheKey);
//       }
//       if (!r._cachedCompPath) {
//         r._cachedCompPath = compPath || "@/components/NotFound.vue";
//       }
//       const component = compPath
//         ? await lazy(compPath)()
//         : await import("@/components/NotFound.vue");
//       componentCache.set(cacheKey, component);
//       return component;
//     };
//   } else {
//     rec.component = async () => {
//       const cacheKey = r.slug;
//       if (componentCache.has(cacheKey)) {
//         return componentCache.get(cacheKey);
//       }
//       const component = r.componentPath
//         ? await lazy(r.componentPath)()
//         : await import("@/components/NotFound.vue");
//       componentCache.set(cacheKey, component);
//       return component;
//     };
//   }
//   return rec;
// }

// const routeRecords = routesJson.map(toRouteRecord);
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: routeRecords,
// });

// let navigationStartTime;
// let isNavigating = false;

// router.beforeEach((to, from, next) => {
//   navigationStartTime = performance.now();
//   console.log(`[ROUTE] Incoming navigation request: "${to.path}"`);
//   console.log(`[CHECK] Looking for matching route configuration...`);
//   const matchedRoute = routeRecords.find((r) => r.path === to.path);
//   console.log(`[ROUTE] Searching route config for path: "${to.path}"`);
//   if (!matchedRoute) {
//     console.log(`[404] No route found for "${to.path}". Redirecting to /404.`);
//     return next("/404");
//   }
//   console.log(`[FOUND] Route configuration located for "${to.path}".`);
//   const section = matchedRoute.meta?.section;
//   if (section) {
//     console.log(
//       `[SECTION] Route "${to.path}" belongs to section "${section}".`
//     );
//   } else {
//     console.log(`[SECTION] Route "${to.path}" does not specify a section.`);
//   }
//   isNavigating = true;
//   next();
// });

// router.afterEach(async (to) => {
//   if (!isNavigating) return;

//   const duration = (performance.now() - navigationStartTime).toFixed(2);
//   console.log(`[DONE] Navigation to "${to.path}" finished in ${duration}ms.`);

//   isNavigating = false;
// });

// router.beforeEach(routeGuard);
// installSectionActivationGuard(router);

// export default router;


// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import { useLocaleStore } from '@/stores/localeStore'
import { translationLoader } from '@/utils/translationLoader'

// ============================================================================
// ROUTE DEFINITIONS
// ============================================================================

const routes = [
  {
    path: '/',
    redirect: '/login' // ✅ Default English
  },
  {
  path: '/login',
  name: 'Login',
  component: () => import('@/templates/auth/page/role/AuthLogin.vue'),
  meta: {
    section: 'auth'  // ✅ Change from 'login' to 'auth/login'
  }
},
{
  path: '/:locale(vi|pk|zh)/login',
  name: 'LoginLocale',
  component: () => import('@/templates/auth/page/role/AuthLogin.vue'),
  meta: {
    section: 'auth'  // ✅ Change from 'login' to 'auth/login'
  }
}
  // {
  //   path: '/auth/register',
  //   name: 'Register',
  //   component: () => import('@/views/auth/RegisterView.vue'),
  //   meta: { section: 'auth', requiresAuth: false }
  // },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: () => import('@/views/DashboardView.vue'),
  //   meta: { section: 'dashboard', requiresAuth: true }
  // },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () => import('@/views/ProfileView.vue'),
  //   meta: { section: 'profile', requiresAuth: true }
  // },
  // {
  //   path: '/shop',
  //   name: 'Shop',
  //   component: () => import('@/views/ShopView.vue'),
  //   meta: { section: 'shop', requiresAuth: false }
  // },
  // {
  //   path: '/discover',
  //   name: 'Discover',
  //   component: () => import('@/views/DiscoverView.vue'),
  //   meta: { section: 'discover', requiresAuth: false }
  // },
]

// ============================================================================
// ROUTER INSTANCE
// ============================================================================

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// ============================================================================
// NAVIGATION GUARDS
// ============================================================================

router.beforeEach(async (to, from, next) => {
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('🔄 NAVIGATION:', from.path, '→', to.path)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
  
  try {
    const localeStore = useLocaleStore()
    
    // ============================================================================
    // 1. EXTRACT LOCALE FROM URL
    // ============================================================================
    const urlLocale = to.params.locale
    
    if (urlLocale) {
      console.log(`[Router] 🌐 Locale detected in URL: ${urlLocale}`)
      localeStore.forceSetLocaleFromURL(urlLocale)
    } else {
      // ✅ No locale in URL = English (default)
      console.log(`[Router] 🌐 No locale in URL, using English`)
      localeStore.setLocale('en')
    }
    
    // ============================================================================
    // 2. DETERMINE CURRENT SECTION
    // ============================================================================
    const section = to.meta.section || translationLoader.inSection(to.path)
    console.log(`[Router] 📂 Current section: ${section}`)
    
    // ============================================================================
    // 3. LOAD TRANSLATIONS FOR SECTION
    // ============================================================================
    const currentLocale = localeStore.getLocale
    console.log(`[Router] 🌍 Current locale: ${currentLocale}`)
    
    if (currentLocale !== 'en' && section) {
      console.log(`[Router] 📥 Loading translations for: ${section}`)
      
      const startTime = performance.now()
      await localeStore.loadSectionTranslations(section)
      const loadTime = (performance.now() - startTime).toFixed(2)
      
      console.log(`[Router] ✅ Translations loaded in ${loadTime}ms`)
    } else {
      console.log(`[Router] ⚡ Skipping load (English or no section)`)
    }
    
    // ============================================================================
    // 4. PROCEED TO ROUTE
    // ============================================================================
    console.log('[Router] ✓ Proceeding to route\n')
    next()
    
  } catch (error) {
    console.error('[Router] ✗ Navigation error:', error)
    next()
  }
})

router.afterEach((to, from) => {
  const localeStore = useLocaleStore()
  const stats = localeStore.getStats()
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('📊 NAVIGATION COMPLETE')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('Current Locale:', stats.currentLocale)
  console.log('Loaded Sections:', stats.loadedSections.length)
  console.log('Cache Stats:', stats.cacheStats)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
})

router.onError((error) => {
  console.error('[Router] Navigation error:', error)
})

export default router