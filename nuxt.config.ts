/// <reference types="@nuxt/content" />
import { defineNuxtConfig } from 'nuxt/config'
import type { FileAfterParseHook } from '@nuxt/content'
// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

declare module 'nuxt/schema' {
  interface NuxtHooks {
    'content:file:afterParse': (ctx: FileAfterParseHook) => Promise<void> | void
  }
}

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  compatibilityDate: '2026-01-20',
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: []
    }
  },
  site: { 
    url: 'https://huseyin.org', 
    name: 'Huseyin M Ozyilmaz',
    trailingSlash: true
  }, 
  telemetry: false,
  css: ['~/assets/css/main.css'],

  // Removes client side hydration by removing JSON Payloads
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append'
      }
    },
    payloadExtraction: false,
    renderJsonPayloads: false
  },

  // Removes client side hydration by removing all JavaScripts
  routeRules: {
    '/': { prerender: true, noScripts: true },
    '/posts/**': { prerender: true, noScripts: true }
  },

  sitemap: {
    zeroRuntime: true
  },

  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt', '/posts']
    }
  },

  hooks: {
    'content:file:afterParse'(ctx: FileAfterParseHook) {
      if (!ctx.file.path?.includes('/posts/')) return

      type WithMeta = {
        datetime?: string
        isPublished?: boolean
        sitemap?: false | { lastmod?: Date }
      }

      const c = ctx.content as WithMeta

      if (c.isPublished !== true) {
        c.sitemap = false
        return
      }
      if (!c.datetime) return

      // Keep a Date in content metadata; sitemap serialization will format it.
      if (c.datetime) {
        c.sitemap = c.sitemap ?? {}
        if (c.sitemap !== false) {
          c.sitemap.lastmod = new Date(c.datetime)
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
