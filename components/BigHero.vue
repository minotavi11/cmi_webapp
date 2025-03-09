<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    required:true,
  },
});
</script>
<template>
    <div class="relative w-full h-[482px]">
      <!-- Imagine Hero -->
      <img class="w-full h-full object-cover" :src="props.image" alt="Hero Image" />
  
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50 flex items-end pb-6 h-20 place-self-end w-full">
        <h1 class="text-white text-4xl md:text-5xl font-medium mx-auto">{{ props.title }}</h1>
      </div>
    </div>
  </template>
  