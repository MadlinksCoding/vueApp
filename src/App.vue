<script setup>
import { useAuthStore } from "@/stores/useAuthStore";
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";

import routesConfig from "@/router/routeConfig.json";


const auth = useAuthStore();

// Simulate a Creator user for testing fallbacks
// auth.simulateRole("creator", { onboardingPassed: true, kycPassed: true});
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
