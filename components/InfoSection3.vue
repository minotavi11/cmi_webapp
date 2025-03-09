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
  showIcon:{
    type: Boolean,
    default:true,
  },
  link:{
    type:String,
    required:false,
  },
  linkName:{
    type:String,
    required:false,
  },
});
</script>
<template> 
    <div class="w-full bg-white flex flex-col items-center gap-6 py-10 px-6">
    <!-- Titlu și descriere -->
    <div class="flex flex-col text-center justify-center">
      <h2 class="text-green-600 text-2xl font-semibold">{{ props.title }}</h2>
      <p class="text-base mt-2 lg:px-60">
        {{ props.content }}
      </p>
    </div>

    <!-- Formular de înscriere -->
    <div class="flex flex-col items-center gap-3">
      
      <NuxtLink 
            :to="props.link"
            class="text-[#169e65] text-base underline hover:text-[#128152] transition"
            >
            <Icon v-if="props.showIcon" name="iconoir:arrow-right" size="15" class="text-green-600 hover:underline"  />
             {{ props.linkName }}
      </NuxtLink>
      <UButton v-if="props.showButton"
    :to="props.link"
    color="green"
    variant="solid"
    class="bg-green-600 hover:bg-[#137f50] text-white font-bold transition-colors duration-200"
    size="md"
  >
     {{ props.linkName }}
  </UButton>
    </div>
  </div>
</template>