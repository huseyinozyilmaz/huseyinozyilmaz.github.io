<template>
  <div>
    <ContentList path="/posts" v-slot="{ list }" 
      :query="{
        where: { isPublished: true },
        sort: { datetime: -1 },
        limit: 3
      }">
      <div class='flex flex-row flex-wrap gap-6 lg:gap-2 lg:justify-center'>
        <PostItem v-for="post in list" :post="post" :key="post._path"/>
      </div>
    </ContentList>
    <NuxtLink href='/posts' class="text-center w-full block py-8 mb-10" title='See all posts'>See all posts</NuxtLink>
  </div>
</template>
