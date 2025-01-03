<template>
  <h1>
    Check the tab {{  }}
  </h1>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
console.log(config.mySecret);
</script>