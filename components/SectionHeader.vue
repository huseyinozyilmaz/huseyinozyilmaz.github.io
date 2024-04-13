<template>
  <header>
    <p class="uppercase p-2 mt-4 bg-gray-900 inline-block text-sm font-medium text-white">{{ title }}</p>
    <h2 class="font-bold text-xl md:text-2xl py-4">{{ description }}</h2>
  </header>
</template>

<script setup>
defineProps(['title', 'description'])
</script>