<template>
  <h1>
    Check the tab {{  }}
  </h1>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
// console.log(config.mySecret);
// console.log(config.nuxtApiKeyTest);
const appConfig = useAppConfig()
console.log(appConfig.theme);
const newAppConfig = { foo: 'baz'}
updateAppConfig(newAppConfig)
console.log(appConfig);
</script>