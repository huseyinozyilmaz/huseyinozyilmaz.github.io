<template>
  <div>
    <header class="text-center">
      <ProfilePhoto />
      <h1 class="text-3xl my-2 uppercase">{{ app.profile.fullName }}</h1>
      <h2 class="text-lg uppercase font-extralight tracking-widest">
        <span class="uppercase">{{ app.profile.titles[0] }}</span> | 
        <span>{{ app.profile.titles[1] }}</span>
      </h2>
      <SocialLinks :links="app.profile.social" />
    </header>
    <section class="py-6">
      <div class="mt-6 text-lg lg:text-xl tracking-widest text-center px-2">
        {{ app.headline }}
      </div>
    </section>
    <section class="my-8" id="work">
      <h2 class="font-bold py-5 uppercase text-2xl">Areas of Work</h2>
      <p class="mb-4">These are the key focus areas on which I am currently working:</p>
      <ListWithIcons :items="app.profile.areasOfWork"/>
    </section>

    <section class="mt-12 py-4">
      <h2 class="font-bold py-5 uppercase text-2xl">Latest Blog Posts</h2>
      <LatestPosts />
    </section>
  </div>
</template>

<script setup>
const app = useAppConfig()
useSeoMeta({
  title: app.title,
  description: app.description,
  articleModifiedTime: new Date().toISOString()
})
</script>