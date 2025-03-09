<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle:{
    type:String,
    required:true,
  },
  content:{
    type: Array,
    required:true,
  },
});
</script>

<template> 

<div class="self-stretch p-8 bg-gray-100 rounded-lg shadow-md flex flex-col justify-center items-center gap-6 w-[20rem]">
  <!-- Titlu -->
  <div class="flex flex-col items-center gap-2 text-center">
    <h3 class="text-lg text-[25px] font-semibold">{{props.title}}</h3>
    <p class="text-md text-xl font-semibold">{{props.subtitle}}</p>
  </div>

  <!-- Program detaliat -->
  <div class="w-full flex flex-col  text-md">
    <p v-for="(paragraph, index) in props.content" :key="index" class="text-gray-700 text-base mt-4 leading-relaxed">
            {{ paragraph }}
         
        </p>
  </div>
</div>


</template>