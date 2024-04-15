<template>
  <div class="flex flex-col items-center text-center">
    <NuxtLink to="/" class="text-black hover:text-sky-700 flex-col gap-2 mt-24">
      <img src="/resources/icons/logo.svg" alt="Site logo" width="32" height="32" class="block m-auto mb-3">
      <div class="text-xl uppercase">{{ author }}</div>
    </NuxtLink>
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
const { author } = useAppConfig()
</script>