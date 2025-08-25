<template>
  <div class="text-sm my-3 flex gap-3 justify-center">
    <NuxtLink v-for="link in pinnedSocialLinks" :to="link.url" :key="link.url" rel="noopener noreferrer" :title="link.title" class="flex w-10 h-10 bg-gray-200 rounded-full justify-center items-center text-gray-900">
      <Icon size="20" :name="link.icon"/>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(['links'])

const pinnedSocialLinks = computed(() => {
  return Object.keys(props.links).filter(key => props.links[key].pinned).map(key => props.links[key])
})
</script>
