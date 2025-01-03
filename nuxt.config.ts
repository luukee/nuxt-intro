// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt Intro',
      titleTemplate: '%s - Nuxt Intro',
    },
    pageTransition: { 
      name: 'fade', 
      mode: 'out-in' 
    },
    layoutTransition: { 
      name: 'slide', 
      mode: 'out-in' 
    }
  },
  $development: {
    app: {
      head: {
        title: 'Nuxt Intro (Dev)',
        titleTemplate: '%s - Nuxt Intro (Dev)',
      }
    },
    devtools: { enabled: true }
  },
  $production: {
    app: {
      head: {
        title: 'Nuxt Intro (Prod)',
        titleTemplate: '%s - Nuxt Intro (Prod)',
      }
    }
  },
  $meta: {
    name: 'Nuxt Intro METAINFO',
    description: 'Nuxt.js introduction',
  },
  runtimeConfig: {
    mySecret: 'secret is mine',
    nuxtApiKeyTest: process.env.NUXT_API_KEY_TEST, // .env: NUXT_API_KEY_TEST=123456
  },
  compatibilityDate: '2025-01-03',
})