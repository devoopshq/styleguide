<template>
  <div>
    <H1 v-if="error.statusCode === 404" content="Page not found" />
    <H1 v-else content="An error occurred" />
    <!-- <NuxtLink to="/">Home page</NuxtLink> -->
  </div>
</template>

<script>
export default {
  components: {
    H1: () => import('@/components/headings/H1')
  },
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
