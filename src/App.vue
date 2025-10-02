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
  <nav
    style="
      padding: 1rem;
      background-color: #f0f0f0;
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: space-between;
    "
  >
    <div style="display: flex; gap: 1rem">
      <router-link to="/sign-up">
        <button
          style="
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          "
        >
          Sign Up
        </button>
      </router-link>
      <router-link to="/log-in">
        <button
          style="
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          "
        >
          Log In
        </button>
      </router-link>
      <router-link to="/dashboard/store/custom-product-requests">
        <button
          style="
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          "
        >
          Dashboard
        </button>
      </router-link>
      <router-link to="/profile">
      <button style="padding: 0.5rem 1rem; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Profile
      </button>
    </router-link>
      <router-link to="/discover">
        <button
          style="
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          "
        >
          Discover
        </button>
      </router-link>
      <router-link to="/shop">
        <button
          style="
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          "
        >
          Shop
        </button>
      </router-link>
      <router-link to="/about">
        <button
          style="
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          "
        >
          About
        </button>
      </router-link>
      <router-link to="/contact">
        <button
          style="
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          "
        >
          Contact
        </button>
      </router-link>

      <!-- Button to toggle between creator and customer roles for testing -->
      <button
        @click="
          auth.simulateRole('creator', {
            onboardingPassed: true,
            kycPassed: true,
          })
        "
        style="
          padding: 0.5rem 1rem;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        "
      >
        Simulate Creator (Complete)
      </button>
      <button
        @click="
          auth.simulateRole('fan', {
            onboardingPassed: true,
          })
        "
        style="
          padding: 0.5rem 1rem;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        "
      >
        Simulate Fan
      </button>
      <button
        @click="
          auth.simulateRole('agent', {
            onboardingPassed: true,
          })
        "
        style="
          padding: 0.5rem 1rem;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        "
      >
        Simulate Agent
      </button>
      <button
        @click="
          auth.simulateRole('vendor', {
            onboardingPassed: true,
          })
        "
        style="
          padding: 0.5rem 1rem;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        "
      >
        Simulate Vendor
      </button>
      
    </div>


    <!-- Locale Switcher -->
    <LocaleSwitcher />
  </nav>

  <!-- Main content -->
  <router-view />

  <!-- Footer Test Routes -->
    <footer
      style="padding: 1rem; background: #eee; display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 2rem;"
    >
      <h4 style="width: 100%; margin: 0 0 0.5rem 0;">All Routes</h4>

      <router-link
        v-for="route in routesConfig"
        :key="route.slug"
        :to="route.slug"
        style="padding: 0.5rem 1rem; background: #007bff; color: #fff; border-radius: 4px; text-decoration: none;"
      >
        {{ route.slug }}
      </router-link>
    </footer>


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
