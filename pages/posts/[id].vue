<template>
  <div class="py-4 mb-8">
    <ContentDoc v-slot="{ doc }" 
      :query="{
        isPublished: true
      }">
      <div class="uppercase p-2 mt-4 bg-gray-900 inline-block text-sm font-medium text-white">Post</div>
      <article>
        <h1 class="font-bold text-xl md:text-2xl py-4">{{ doc.title }}</h1>
        <time :datetime="doc.datetime" class='text-gray-500 text-sm'>Posted on {{ (new Date(doc.datetime)).toDateString() }}</time>
        <div class='py-6'>
          <figure class='md:float-left md:pr-5 pb-4'>
            <img class='rounded-lg w-full md:w-[400px]' :src="doc.image" :alt="doc.title" width="400" height="400" />
          </figure>
          <ContentRenderer :value="doc" />
        </div>
      </article>
    </ContentDoc>  
    <NuxtLink href='/posts' class="text-sm text-center block pt-4 pb-10">Return to all posts</NuxtLink>
  </div>
</template>
