<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component <NuxtLink to="/about">About Page</NuxtLink></AppAlert
    >
    <NuxtLink to="/posts/1">
      <p>Post 1</p>
    </NuxtLink>
    <!-- External -->
    <NuxtLink to="/the-important-report.pdf" external>
      <p>Download Report</p>
    </NuxtLink>
    <!-- Middleware -->
    <NuxtLink to="/dashboard">
      <p>Dashboard</p>
    </NuxtLink>
  </div>
</template>
