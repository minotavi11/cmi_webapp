<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
</script>
<template>
    <div class="p-10 bg-white  flex flex-col gap-4">
      <div class="flex items-center gap-3">
           <Icon name="iconoir:check-square-solid" size="25" class="text-green-600"  />
  
        <h3 class="text-[#169e65] text-xl font-semibold font-['Inter'] leading-tight">
          {{props.title}}
        </h3>
      </div>
      
      <p class="text-[#304050] text-sm font-normal font-['Inter'] leading-normal tracking-tight">
         {{ props.content }}
      </p>
    </div>
  </template>