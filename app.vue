<!-- By default, Nuxt will treat this file as the entrypoint and render its content for every route of the application. -->
<template>
  <h1>Check the tab</h1>
  <AppAlert> This is an auto-imported component. </AppAlert>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
// console.log(config.mySecret);
// console.log(config.nuxtApiKeyTest);
const appConfig = useAppConfig()
// console.log(appConfig.theme);
const newAppConfig = { foo: "baz" }
updateAppConfig(newAppConfig)
// console.log(appConfig);
</script>
