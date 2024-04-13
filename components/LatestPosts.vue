<template>
  <div class=''>
    <div class='flex flex-row flex-wrap gap-6  lg:gap-2 lg:justify-center'>
      <PostItem v-for="(post, index) in posts" :post="post" :key="index"/>
    </div>
    <NuxtLink href='/posts' class="text-center w-full block py-8 mb-10" title='See all posts'>See all posts</NuxtLink>
  </div>
</template>

<script setup>

const { data: posts } = await useAsyncData('posts', () => queryContent('posts')
  .only(['_path', 'title', 'headline', 'date', 'image'])
  .where({ isPublished: true })
  .sort({ date: -1 })
  .limit(3)
  .find())

</script>