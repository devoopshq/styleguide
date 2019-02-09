<template>
  <div>
    <Heading1>Lists</Heading1>

    <small>Unordered List</small>
    <AppCard>
      <UL :lists="lists" />
    </AppCard>

    <small>Ordered List</small>
    <AppCard>
      <OL :lists="lists" />
    </AppCard>

    <AppEdit :href="'/devoopshq/styleguide/blob/master/pages/' + this.$route.name + '.vue'" />
  </div>
</template>

<script>
import Heading1 from '@/components/headings/Heading1'
import UL from '@/components/lists/UL'
import OL from '@/components/lists/OL'
import AppCard from '@/components/AppCard'
import AppEdit from '@/components/AppEdit'

export default {
  components: {
    Heading1,
    UL,
    OL,
    AppCard,
    AppEdit
  },

  data: () => ({
    lists: ['Item', 'Item', 'Item']
  }),

  head: () => ({
    title: 'Lists'
  })
}
</script>

<style lang="postcss" scoped>
small {
  display: block;
  margin-bottom: 0.25rem;
  color: #757575;
}
</style>
