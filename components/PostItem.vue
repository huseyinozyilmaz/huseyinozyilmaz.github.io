<template>
  <div class="flex flex-col max-w-sm w-[375px] md:w-[286px] h-[440px] bg-white border border-gray-200 rounded-lg shadow-md">
    <NuxtLink :href="post._path" :title="post.title">
      <img class="rounded-t-lg" :src="post.image ? post.image : '/resources/posts/post-item.svg'" :alt="post.title" width="400" height="300" />
    </NuxtLink>
    <div class="p-5 h-[230px]">
      <NuxtLink :href="post._path" :title="post.title">
        <h3 class="mb-2 text-lg text-gray-900">{{ post.title }}</h3>
      </NuxtLink>
      <p class="mb-3 text-gray-70">
        {{ post.headline }} <NuxtLink :href="post._path" :title="post.title">read more...</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps(['post'])
</script>