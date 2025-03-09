<script setup lang="ts">
const links = [
  { label: 'Acasa', to: '/' },
  { label: 'Despre Noi', to: '/about' },
  { label: 'Program', to: '/program' },
  { label: 'Contact', to: '/contact' }
];
</script>

<template>
  <nav class=" border-b w-full place-self-center border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 py-3">
    <!-- Logo -->
    <NuxtLink to="/">
      <img src="/logo.png" alt="Logo" class="h-8">
    </NuxtLink>

    <!-- Navigation Links using Nuxt UI -->
    <UHorizontalNavigation :links="links" class="flex-1 justify-center" />

    <!-- Auth Buttons -->
    <div class="flex items-center space-x-4">
      <NuxtLink to="/login" class="text-green-600 font-medium hover:underline">
        Log in
      </NuxtLink>
      <UButton to="/register" color="green" variant="solid">
        Sign up
      </UButton>
    </div>
  </nav>
</template>


