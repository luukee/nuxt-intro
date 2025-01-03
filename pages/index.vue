<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component <NuxtLink to="/about">About Page</NuxtLink></AppAlert
    >
    <div style="display: flex; gap: 1em;">
      <NuxtLink to="/posts/1">
        <span>Post 1</span>
      </NuxtLink>
      <NuxtLink to="/posts/2">
        <span>Post 2</span>
      </NuxtLink>
    </div>
    <!-- External -->
    <NuxtLink to="/the-important-report.pdf" external>
      <p>Download Report</p>
    </NuxtLink>
    <!-- Middleware -->
    <NuxtLink to="/dashboard">
      <p>Dashboard</p>
    </NuxtLink>
    <NuxtLink to="/contact">
      <p>Contact</p>
    </NuxtLink>
  </div>
</template>
