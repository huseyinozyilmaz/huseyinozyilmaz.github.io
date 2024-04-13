<template>
  <div class="py-4 mb-8">
    <SectionHeader title="Post" :description="post.title" />
    <div class='text-gray-500 text-sm'>Posted on {{ (new Date(post.date)).toDateString() }}</div>
    <div class='py-6'>
      <div class='md:float-left md:pr-5 pb-4'>
        <img class='rounded-lg w-full md:w-[400px]' :src="post.image" :alt="post.title" width="400" height="400" />
      </div>
      <ContentDoc class="post"/>
    </div>
    <NuxtLink href='/posts' class="text-sm text-center block pt-4 pb-10">Return to all posts</NuxtLink>
  </div>
</template>

<script setup>

const route = useRoute()

const { data: post } = await useAsyncData('post', () => queryContent('posts').where({ _path: route.path, isPublished: true }).findOne())

</script>