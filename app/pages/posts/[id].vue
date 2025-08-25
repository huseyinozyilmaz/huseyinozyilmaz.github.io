<template>
  <div class="py-4 mb-8">
    <div v-if="doc"> 
      <div class="uppercase p-2 mt-4 bg-gray-900 inline-block text-sm font-medium text-white">Post</div>
      <article>
        <h1 class="font-bold text-xl md:text-2xl py-4">{{ doc.title }}</h1>
        <time :datetime="doc.datetime" class='text-gray-500 text-sm'>Posted on {{ (new Date(doc.datetime)).toDateString() }}</time>
        <div class='py-6'>
          <figure class='md:float-left md:pr-5 pb-4'>
            <img class='rounded-lg w-full md:w-[400px]' 
              :src="doc.image.src" 
              :alt="doc.image.alt" 
              :width="doc.image.width" 
              :height="doc.image.height" />
          </figure>
          <ContentRenderer :value="doc" class="post"/>
        </div>
      </article>
    </div>
    <!-- If post is not found -->
    <div v-else>
      <h2 class="text-center py-28">Oppss.. The post is not found!</h2>
    </div>
    <NuxtLink href='/posts' class="text-sm text-center block pt-4 pb-10">Return to all posts</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: doc  } = await useAsyncData(() => {
  return queryCollection('posts')
    .path(route.path)
    .where('isPublished', '=', true)
    .first()
})
</script>