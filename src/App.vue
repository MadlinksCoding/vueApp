<script setup>
import { useAuthStore } from "@/stores/useAuthStore";
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
import routesConfig from "@/router/routeConfig.json";
import { onMounted } from "vue"; // ✳️ tambahin

const auth = useAuthStore();

// Simulate a Creator user for testing fallbacks
// auth.simulateRole("creator", { onboardingPassed: true, kycPassed: true});

onMounted(() => {
  if (window.createDependencyGate) {
    window.createDependencyGate({
      el: document.getElementById("my-gate"),
      config: {
        waitFor: ["assets", "apiLoaded"],
        assets: {
          flag: "dashboard",
          items: [
            { name: "auth-style", url: "/css/auth.css", type: "css", priority: "critical" },
            { name: "dashboard-style", url: "/css/dashboard.css", type: "css" },
            { name: "onboard-style", url: "/css/onboard.css", type: "css" },
            { name: "profile-style", url: "/css/profile.css", type: "css" },
            { name: "hero-image", url: "/images/image.jpg", type: "image" },
            { name: "shop-cart", url: "/js/shop-cart.js", type: "script", defer: true },
            { name: "vendor-charts", url: "/js/vendor-charts.js", type: "script", defer: true },
          ],
        },
        apiLoaded: { event: "api-ready", timeoutMs: 3000 },
      },
      renderWhenReady: () => window.Vue.h("div", "✅ All dependencies ready!"),
    });
  } else {
    console.warn("❌ DependencyGate not found on window");
  }
});

</script>

<template>
  <!-- Navigation Bar with Buttons -->
 

  <!-- Main content -->
  <router-view />

 


</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
button:hover {
  background-color: #0056b3;
}
</style>
