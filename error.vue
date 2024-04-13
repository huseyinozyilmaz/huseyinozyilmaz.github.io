<template>
  <div class="flex flex-col items-center text-center">
    <div class="mt-24 text-xl uppercase">{{ app.author }}</div>
    <div class="text-8xl font-black mt-24">
      404
    </div>
    <div class="text-2xl mt-10">
      PAGE CANNOT BE FOUND, SORRY!
    </div>
    <div class="mt-4">
      The page you are looking for has been moved or does not exist any more.
    </div>
    <NuxtLink to="/" class="p-4">Go Home</NuxtLink>
  </div>
</template>

<script setup>
const app = useAppConfig()
</script>