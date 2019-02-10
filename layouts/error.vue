<template>
  <AppDoc>
    <template #left>
      <Heading1>
        {{ error.statusCode === 404 ? 'Page not found' : 'An error occurred' }}
      </Heading1>
    </template>
  </AppDoc>
</template>

<script>
import AppDoc from '@/components/AppDoc'
import Heading1 from '@/components/headings/Heading1'
export default {
  components: {
    AppDoc,
    Heading1
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
