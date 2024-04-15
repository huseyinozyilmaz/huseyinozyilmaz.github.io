<template>
  <div class="mb-5">
    <h1 class="text-center text-2xl lg:text-3xl py-8 max-w-[400px] m-auto">{{ app.blogTitle }}</h1>
    <div class='flex gap-6 lg:gap-2 flex-wrap justify-center py-10'>
      <ContentList path="/posts" v-slot="{ list }" 
        :query="{
          where: { isPublished: true },
          sort: { datetime: -1 }
        }">
        <div v-for="post in list" :key="post._path">
          <PostItem :post="post" />
        </div>
      </ContentList>
    </div>
  </div>
</template>

<script setup>
const app = useAppConfig()
useSeoMeta({
  title: `${app.blogTitle} | ${app.title}`,
  description: app.description,
})
</script>