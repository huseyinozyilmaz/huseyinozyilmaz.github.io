<template>
  <div class="mb-5">
    <h1 class="text-center text-2xl lg:text-3xl py-8 max-w-[400px] m-auto">{{ app.title }}</h1>
    <div class='flex gap-6 lg:gap-2 flex-wrap justify-center py-10'>  
      <div v-for="post in posts" :key="post.uid">
        <PostItem :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup>
const app = useAppConfig()

const { data: posts } = await useAsyncData('posts', () => queryContent('posts')
  .only(['_path', 'uid', 'title', 'headline', 'date', 'image'])
  .where({ isPublished: true })
  .find())

</script>