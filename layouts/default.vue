<script setup lang="ts">
const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: `App Name default.js - ${route.meta.title}` }]
})
</script>

<template>
  <div>
    <pre>default layout</pre>
    <slot />
  </div>
</template>

<style scoped>
div {
  background-color: lightgreen;
}
</style>