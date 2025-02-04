// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  compatibilityDate: '2025-02-04',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  site: { 
    url: 'https://huseyin.org', 
    name: 'Huseyin M Ozyilmaz'
  }, 
  telemetry: false,
  css: ['~/assets/css/main.css'],

  // Removes client side hydration by removing JSON Payloads
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false
  },

  // Removes client side hydration by removing all JavaScripts
  routeRules: {
    '/': { prerender: true, experimentalNoScripts: true, sitemap: { lastmod: '2025-02-04' } },
    '/posts/**': { prerender: true, experimentalNoScripts: true, sitemap: { lastmod: '2025-02-04' } }
  },

  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },

  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxt/content', '@nuxt/image']
})