<template>
	<section>
		<h1>Post: post {{ route.params.id }}</h1>
		<NuxtLink to="/">Home</NuxtLink>
	</section>
</template>

<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
// console.log(route.params.id)
definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})
useSeoMeta({
    title: `Post ${route.params.id}` || "Loading...", // Dynamically set the page title
  })
</script>
