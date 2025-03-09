<script setup lang="ts">
const value = ref('')
</script>

<template>
  <div class="w-full bg-white flex flex-col items-center gap-6 py-10 px-6">
    <!-- Titlu și descriere -->
    <div class="text-center">
      <h2 class="text-green-600 text-2xl font-semibold">Creează-ți un cont medical!</h2>
      <p class="  text-base mt-2">
        Programează consultații online, păstrează-ți documentele medicale organizate și multe altele!
      </p>
    </div>

    <!-- Formular de înscriere -->
    <div class="flex flex-col items-center gap-3">
      <UInput label="E-Mail" v-model="value" class="w-72" />
      
      <UButton
    to="/register"
    variant="solid"
    class="bg-green-600 hover:bg-[#137f50] text-white font-bold transition-colors duration-200"
    size="md"
  >
    Sign Up
  </UButton>
    </div>
  </div>
</template>
