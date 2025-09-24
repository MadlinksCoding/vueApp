<template>
  <div class="app-container">
    <header class="p-4 border-b">
      <nav style="display:flex; gap:10px; flex-wrap:wrap;">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/discover">Discover</RouterLink>
      </nav>
    </header>
    <main class="p-4">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
</script>

<style>
.app-container { font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif; }
nav a { text-decoration: none; padding: 4px 8px; border-radius: 6px; }
nav a.router-link-active { background: #f0f0f0; }
</style>
