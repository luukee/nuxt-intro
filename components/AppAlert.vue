<!-- 
Most components are reusable pieces of the user interface, 
like buttons and menus. In Nuxt, you can create these components 
in the components/ directory, and they will be automatically 
available across your application without having to explicitly 
import them.
-->
<script setup lang="ts">
const description = ref('My amazing component meta description.')
</script>
<template>
    <div>
    <Meta name="description" :content="description" />
  </div>
  <span>
    <slot />
  </span>
</template>
