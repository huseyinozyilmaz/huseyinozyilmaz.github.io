<template>
  <div>
    <div class='flex flex-row flex-wrap gap-6 lg:gap-2 lg:justify-center'>
      <PostItem v-for="post in posts" :post="post" :key="post.id"/>
    </div>
    <NuxtLink href='/posts' class="text-center w-full block py-8 mb-10" title='See all posts'>See all posts</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { data: posts  } = await useAsyncData('latest-posts', () => {
  return queryCollection('posts')
    .where('isPublished', '=', true)
    .order('datetime', 'DESC')
    .limit(3)
    .all()
})
</script>