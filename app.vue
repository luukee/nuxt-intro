<!-- By default, Nuxt will treat this file as the entrypoint and render its content for every route of the application. -->
<template>
  <h1>/app.vue</h1>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// import { NuxtPage } from '#build/components'

const config = useRuntimeConfig()
// console.log(config.mySecret);
// console.log(config.nuxtApiKeyTest);
const appConfig = useAppConfig()
// console.log(appConfig.theme);
const newAppConfig = { foo: "baz" }
updateAppConfig(newAppConfig)
// console.log(appConfig);

// useHead
useHead({
  title: 'My Nuxt Intro App',
  meta: [
    { name: 'description', content: 'My amazing Nuxt Intro site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>
