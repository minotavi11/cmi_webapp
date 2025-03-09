<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content:{
    type: String,
    required:true,
  },
  name:{
    type: String,
    required:false,
  },
  link:{
    type:String,
    required:false,
  },
  linkName:{
    type:String,
    required:false,
  },
  image:{
    type: String,
    required:true,
  },
  showIcon:{
    type:Boolean,
    default:true,
  }
  
});
</script>
<template>
    <div class="flex flex-col md:flex-row w-full items-center justify-center bg-white  ">
      <!-- Imaginea -->
      <img class="max-w-lg lg:pr-8 h-auto object-cover hidden  lg:block lg:max-h-[30rem]" :src="props.image" alt="Placeholder Image" />
  
      <!-- Secțiunea text -->
      <div class="flex flex-col p-6 md:p-8 max-w-lg md:pl-16 md:pr-10">
        <h1 class="text-[#169e65] text-3xl font-semibold">{{props.title}}</h1>
        <div class="w-64 border-t border-[#89949f] my-2"></div>
        <p class="text-[#304050] text-md leading-normal tracking-tight">
          {{ props.content }}
        </p>
        <p class="text-[#5c6670] text-base font-normal mt-4">
         {{ props.name }}
        </p>
  
        <!-- Link Despre Noi -->
        <div class="flex items-center gap-2 mt-4">
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
  