<!-- By default, Nuxt will treat this file as the entrypoint and render its content for every route of the application. -->
<template>
  <h1>/app.vue</h1>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// import { NuxtPage } from '#build/components'
const title = ref('Hello World')
const description = ref('My amazing reactive useSeoMeta description.')

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
    { 
      name: 'description', 
      content: description 
    }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

useSeoMeta({
  title: 'My Amazing useSeoMeta title',
  ogTitle: 'My Amazing useSeoMeta ogTitle',
  description,
  ogDescription: 'This is my amazing useSeoMeta ogDescription.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

</script>
