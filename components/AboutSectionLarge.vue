<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content:{
    type: Array,
    required:true,
  },
  showMap:{
    type: Boolean,
    default:true,
  },
  showIcon:{
    type: Boolean,
    default:true,
  },
  link:{
    type:String,
    required:true,
  },
  linkName:{
    type:String,
    required:true,
  },
});
</script>
<template>
    <div class="w-full max-w-[1440px] h-[614px] bg-white flex flex-col md:flex-row items-center mx-auto">
      <!-- Harta Google -->
      <div v-if="props.showMap" class="w-full md:w-1/2 h-full">
        <iframe 
          class="w-full h-full"
          src="https://maps.google.com/maps?q=Sos.%20Stefanesti%2C%20Nr.%2021%2C%20Comuna%20Afumati&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
  
      <!-- Informații de contact -->
      <div class="w-full md:w-1/2 h-full flex flex-col justify-center items-center text-center p-6">
        <h2 class="text-green-600 text-3xl font-semibold">{{ props.title }}</h2>
        <p v-for="(paragraph, index) in props.content" :key="index" class="text-gray-700 text-base mt-4 leading-relaxed">
            {{ paragraph }}
         
        </p>
  
        <!-- Link cu săgeată -->
        <div class="mt-6 flex items-center gap-3">
            <Icon v-if="props.showIcon" name="iconoir:arrow-right" size="25" class="text-green-600 hover:underline"  />
            <NuxtLink 
            :to="props.link"
            class="text-[#169e65] text-base underline hover:text-[#128152] transition"
            >
             {{ props.linkName }}
            </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  