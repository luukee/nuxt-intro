<script setup>
useHead({
	title: 'About Page Title'
})
definePageMeta({
  layout: 'orange',
})
</script>

<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
		<NuxtLink to="/">Home</NuxtLink>
  </section>
</template>
