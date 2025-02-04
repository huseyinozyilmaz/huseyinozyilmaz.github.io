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
  telemetry: false,
  css: ['~/assets/css/main.css'],

  // Removes client side hydration by removing JSON Payloads
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false
  },

  // Removes client side hydration by removing all JavaScripts
  routeRules: {
    '/': { prerender: true, experimentalNoScripts: true },
    '/posts/**': { prerender: true, experimentalNoScripts: true }
  },

  nitro: {
    preset: 'static'
  },

  modules: ["@nuxt/content", '@nuxt/image']
})