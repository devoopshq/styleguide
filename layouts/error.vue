<template>
  <div>
    <Heading1>
      {{ error.statusCode === 404 ? 'Page not found' : 'An error occurred' }}
    </Heading1>
    <!-- <NuxtLink to="/">Home page</NuxtLink> -->
  </div>
</template>

<script>
export default {
  components: {
    Heading1: () => import('@/components/headings/Heading1')
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
