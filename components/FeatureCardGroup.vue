<script setup>
// Definim o proprietate pentru imaginea de fundal
const props = defineProps({
  backgroundImage: {
    type: String,
    default: 'https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-blur-hospital-clinic-medical-interior-background-image_15683664.jpg' // Calea implicită către imagine
  },
  overlayOpacity: {
    type: String,
    default: '0.7' // Opacitatea implicită a overlayului
  }
})
</script>

<template>
  <section 
    class="w-full py-8 md:py-10 lg:py-12 relative bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- Overlay gradient pentru lizibilitate -->
    <div 
      class="absolute inset-0 bg-gradient-to-b from-white/30 via-[#8c8c8c]/30 to-[#8c8c8c]/30"
      :style="{ opacity: overlayOpacity }"
    ></div>
    
    <!-- Conținutul secțiunii -->
    <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <FeatureCard
        title="Card 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <FeatureCard
        title="Card 2"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <FeatureCard 
        title="Card 3"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <FeatureCard 
        title="Card 4"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
    </div>
  </section>
</template>