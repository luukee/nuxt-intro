<!-- By default, Nuxt will treat this file as the entrypoint and render its content for every route of the application. -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

// Data fetching: https://nuxt.com/docs/getting-started/data-fetching
// Composable checklist:
// 1) Does it use other composables?
// 2) Does it use any lifecycle hooks?
// 3) Does it use statefull logic?
// ** if any above are YES, it is a composable.

// Data fetching END

const description = ref('My amazing reactive useSeoMeta description.')
const newAppConfig = { foo: "baz" }
updateAppConfig(newAppConfig)
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
// TODO: Transitions - JavaScript Hooks: https://nuxt.com/docs/getting-started/transitions#javascript-hooks
// TODO: Transitions - Dynamic Transitions: https://nuxt.com/docs/getting-started/transitions#dynamic-transitions
// TODO: Transitions - Transition with NuxtPage: https://nuxt.com/docs/getting-started/transitions#transition-with-nuxtpage
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
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>