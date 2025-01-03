<!-- By default, Nuxt will treat this file as the entrypoint and render its content for every route of the application. -->
<template>
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
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s - Dynamic Site Title',
  meta: [
    { 
      name: 'description', 
      content: description 
    }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ 
    { innerHTML: 'console.log(\'Hello world\')' },
    {
      src: 'https://third-party-script.com',
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: 'bodyClose'
    }
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})

useSeoMeta({
  // title: 'My Amazing useSeoMeta title',
  ogTitle: 'My Amazing useSeoMeta ogTitle',
  description,
  ogDescription: 'This is my amazing useSeoMeta ogDescription.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

</script>
<!-- Transition styles -->
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
/* rotate transition */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
/* layout transition */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>