<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle:{
    type: String,
    required:true,
  },
  content:{
    type: String,
    required:true,
  },
  showButton:{
    type: Boolean,
    default: true,
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
});
</script>
<template>
  <div class="flex flex-col md:flex-row w-full h-auto items-center justify-center">
    <!-- Secțiunea text -->
    <div class="flex flex-col items-center text-center p-10 bg-white  md:w-1/2">
      <h1 class="text-green-600 text-3xl font-medium leading-tight">
        {{ props.title }}
      </h1>
      <h2 class="text-green-600 text-xl font-semibold leading-tight">
         {{ props.subtitle }}
      </h2>
      <p class="text-[#304050] text-md leading-normal tracking-tight mt-4">
        {{ props.content }}
       </p>
      <UButton
      v-if="props.showButton"
      :to="props.link"
      variant="solid"
      size="md"
      class="mt-6 px-6 py-2 bg-green-600 text-white text-xl font-bold rounded-lg hover:bg-[#128152] transition"
    >
      {{ props.linkName }}
    </UButton>
    </div>

    <!-- Secțiunea imagine -->
    <div class="flex justify-center items-center md:w-1/2">
      <img class="max-w-full h-auto object-cover" :src="props.image" alt="Placeholder Image" />
    </div>
  </div>
</template>
