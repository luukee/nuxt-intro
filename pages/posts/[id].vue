<template>
	<section>
		<h1>Post: post title</h1>
		<NuxtLink to="/"></NuxtLink>
	</section>
</template>

<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>
