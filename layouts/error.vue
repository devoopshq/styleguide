<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default () {
        return []
      }
    }
  },
  // Set a custom layout for the error page
  layout: 'default'
}
</script>
