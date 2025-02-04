<template>
  <div class="flex flex-col max-w-sm w-[375px] md:w-[286px] h-[440px] bg-white border border-gray-200 rounded-lg shadow-md">
    <NuxtLink :to="post.path" :title="post.title">
      <img
        :src="post.image.src ? post.image.src : '/resources/posts/post-item.svg'" 
        :alt="post.image.alt" 
        :width="post.image.width" 
        :height="post.image.height" 
        class="rounded-t-lg" />
    </NuxtLink>
    <div class="p-5 h-[230px]">
      <NuxtLink :to="post.path" :title="post.title">
        <h2 class="mb-2 text-lg text-gray-900">{{ post.title }}</h2>
      </NuxtLink>
      <p class="mb-3 text-gray-70">
        {{ post.headline }} <NuxtLink :to="post.path" :title="post.title">read more...</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps(['post'])
</script>