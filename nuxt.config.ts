// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Intro',
      titleTemplate: '%s - Nuxt Intro',
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
  compatibilityDate: '2025-01-03',
})