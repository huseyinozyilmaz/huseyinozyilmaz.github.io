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

      type WithMeta = {
        datetime?: string
        isPublished?: boolean
        sitemap?: false | { lastmod?: string }
      }

      const c = ctx.content as WithMeta

      if (c.isPublished !== true) {
        c.sitemap = false
        return
      }
      if (!c.datetime) return

      // lastmod must be W3C/ISO 8601 (e.g. 2025-08-01 or 2025-08-01T10:30:00Z)
      if (c.datetime) {
        c.sitemap = c.sitemap ?? {}
        if (c.sitemap !== false) {
          c.sitemap.lastmod = c.datetime
        }
      }
    }
  },

  content: {
    experimental: {
      // Use Node 22+ built-in `node:sqlite` connector
      sqliteConnector: 'native'
    }
  },

  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxt/content', '@nuxt/image']
})