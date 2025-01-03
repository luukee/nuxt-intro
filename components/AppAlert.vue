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
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;600&display=swap" crossorigin="" />
  </div>
  <span>
    <slot />
  </span>
</template>
