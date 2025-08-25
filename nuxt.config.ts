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
    '/': { prerender: true, noScripts: true },
    '/posts/**': { prerender: true, noScripts: true }
  },

  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt', '/posts']
    }
  },

  hooks: {
    'content:file:afterParse'(ctx) {
      if (!ctx.file.path?.includes('/posts/')) return

      const iso = (ctx.content as any).datetime
      if (!iso) return

      const content = ctx.content as any
      content.sitemap = content.sitemap || {}
      // lastmod must be W3C/ISO 8601 (e.g. 2025-08-01 or 2025-08-01T10:30:00Z)
      content.sitemap.lastmod = iso
    }
  },

  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxt/content', '@nuxt/image']
})