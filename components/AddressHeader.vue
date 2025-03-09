<script setup>
import { MapPin } from '@iconoir/vue';
</script>

<template>
    <div class="w-full min-h-6 px-4 md:px-12 lg:px-20 py-2 bg-[#f2f2f2] border border-black flex justify-center  items-center gap-2 md:gap-4">
  <div data-type="location" class="w-5 h-5 flex justify-center items-center overflow-hidden">
    <ClientOnly>
        <MapPin class="w-5 h-5 text-[#0d1a26]" /> <!-- Optional: Add an icon -->
    </ClientOnly>
  </div>
  <div class="h-5 flex justify-center items-center">
    <p class="text-[#0d1a26] text-[13px] font-normal font-['Inter'] leading-tight text-center md:text-left whitespace-normal">
      com. Afumați, str. Ștefănești nr. 21, jud. Ilfov, tel: +40 0722778937
    </p>
  </div>
</div>

</template>