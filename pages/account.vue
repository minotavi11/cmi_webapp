<template>
    
</template>
<script setup lang="ts">

definePageMeta({
  middleware: "authenticated",
});

const { user } = useUserSession();
</script>