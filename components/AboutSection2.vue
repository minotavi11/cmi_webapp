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
  showButton:{
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
  image:{
    type: String,
    required:true,
  },
});
</script>
<template>
  <div class="flex flex-col md:flex-row w-full bg-white items-center justify-center">
    <div class="max-w-lg w-full h-[25rem] p-6 bg-custom-purple text-white text-center flex flex-col justify-center">
      <h2 class="text-xl font-medium">{{ props.title }}</h2>
      <p class="text-sm leading-relaxed mt-4">
        {{ props.content }}
      </p>

      <UButton
        v-if="props.showButton"
        :to="props.link"
        variant="solid"
        class="bg-green-600 hover:bg-[#137f50] text-white font-bold transition-colors duration-200 px-6 py-3 text-base lg:px-8 lg:py-3 lg:text-lg mt-6 self-center"
      >
        {{ props.linkName }}
      </UButton>
    </div>
    <img class="w-full max-w-md h-auto object-cover md:hidden lg:block" :src="props.image" alt="Doctor Image" />
  </div>
</template>