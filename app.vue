<template>
  <div class="m-auto lg:max-w-[900px] px-3">
    <header class="flex flex-col md:flex-row text-center py-3 md:mt-3">
      <h1 title="Site Name" class=" text-black mt-1">
        <NuxtLink to="/" class="text-black hover:text-sky-700">Huseyin Ozyilmaz</NuxtLink>
      </h1>
      <nav class="flex gap-5 md:flex-1 justify-center md:justify-end mt-3 flex-wrap">
        <NuxtLink to="/#work">Work</NuxtLink>
        <NuxtLink to="/posts">Posts</NuxtLink>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer class="text-center text-xs bg-white py-3 fixed bottom-0 left-0 right-0">
      &#169; 2003-{{ new Date().getFullYear() }}
    </footer>
  </div>
</template>

<script setup lang="ts">
const app = useAppConfig()

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'description', content: app.description },
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'msapplication-config', content: '/resources/icons/browserconfig.xml' },
    { name: 'theme-color', content: '#15141B' }
  ],
  link: [
    { rel: 'apple-touch-icon', sizes:'180x180', href: '/resources/icons/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/resources/icons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/resources/icons/favicon-16x16.png' },
    { rel: 'manifest', href: '/resources/icons/site.webmanifest' },
    { rel: 'mask-icon', href: '/resources/icons/safari-pinned-tab.svg', color: '#5bbad5' },
    { rel: 'shortcut icon', href: '/resources/icons/favicon.ico' }
  ]
})

useSeoMeta({
  title: app.author,
  description: app.description,
  ogType: 'website',
  ogUrl: app.url,
  ogTitle: app.author,
  ogDescription: app.description,
  ogImage: 'https://huseyin.org/resources/images/huseyin-ozyilmaz-profile-photo-lg.webp',
  ogImageAlt: app.author,
  twitterCard: 'summary_large_image',
  twitterSite: '@huseyinozyilmaz',
  twitterCreator: '@huseyinozyilmaz',
  twitterTitle: app.author,
  twitterDescription: app.description,
  twitterImage: 'https://huseyin.org/resources/images/huseyin-ozyilmaz-profile-photo-lg.webp',
  twitterImageAlt: app.author
})
</script>