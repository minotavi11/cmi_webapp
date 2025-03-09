<script setup>
import { ArrowRight } from '@iconoir/vue';
// Proprietate pentru starea butonului
const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
    <header class="w-full bg-custom-purple py-4 flex justify-center items-center space-x-4">
     
        <div class="w-5 h-5 ">
            <ClientOnly>
                <ArrowRight class="w-5 h-5 text-white" /> <!-- Optional: Add an icon -->
            </ClientOnly>
        </div>
        <h1 class="text-white text-xl md:text-2xl font-normal font-['Inter'] underline tracking-tight">
          Programeaza online o consultatie!
        </h1>
      
        <UButton
      to="/login"
      :disabled="isDisabled"
      color="purple"
      variant="solid"
      size="md"
      class="bg-[#583764] hover:bg-[#47294f] text-white font-bold font-['Inter'] transition-colors duration-200 hover:shadow-md"
    >
      Contul tau
    </UButton>

    </header>
  </template>
  
