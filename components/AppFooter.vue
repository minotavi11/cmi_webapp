<script setup lang="ts">
const links = [
  { label: 'Acasa', to: '/' },
  { label: 'Despre Noi', to: '/about' },
  { label: 'Program', to: '/program' },
  { label: 'Contact', to: '/contact' }
];

</script>
<template class="">
    <footer class="w-full place-self-center bg-green-600 py-6 px-4">
      <!-- Top Divider -->
      <div class="border-t border-white w-full max-w-screen-xl mx-auto"></div>
  
      <!-- Navigation Links -->
      <div class="w-full max-w-screen-lg mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4 py-4">
        <NuxtLink 
        v-for="link in links" 
        :key="link.to" 
        :to="link.to"
        class="text-white text-base font-normal tracking-tight hover:underline"
      >
        {{ link.label }}
      </NuxtLink>
        <!-- Social Icons Placeholder -->
        <div class="flex space-x-4">
          <div class="w-5 h-5 bg-white rounded-full"></div>
          <div class="w-5 h-5 bg-white rounded-full border border-white"></div>
        </div>
      </div>
  
      <!-- Bottom Divider -->
      <div class="border-t border-white w-full max-w-screen-xl mx-auto"></div>
  
      <!-- Footer Info -->
      <div class="w-full max-w-screen-lg mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4 py-4 text-center md:text-left">
        <!-- Logo Placeholder -->
        <div class="w-8 h-8 bg-white rounded">
            <NuxtLink to="/">
                <img src="/logo.png" alt="Logo" class="h-8">
            </NuxtLink></div>
        <p class="text-white text-sm ">
          <Icon name="iconoir:map-pin" size="25" class="text-white"  />
          com. Afumați, str. Ștefănești nr. 21, jud. Ilfov, tel +40 0722778937
        </p>
        <p class="text-white text-sm">&copy; 2025 CMI-JohnDoe. All rights reserved.</p>
      </div>
    </footer>
  </template>
  