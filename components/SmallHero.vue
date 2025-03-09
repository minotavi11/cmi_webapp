<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
    <header class="w-full bg-green-600 py-4 flex justify-center items-center space-x-4 lg:justify-start">
     
   
        <h1 class="text-white text-2xl md:text-4xl font-normal font-['Inter']  tracking-tight md:pl-40 lg:pl-64">
          {{props.title}}
        </h1>
      
       
    </header>
  </template>
  
