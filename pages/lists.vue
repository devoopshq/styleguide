<template>
  <div>
    <Heading1>Lists</Heading1>

    <AppLabel text="Unordered List" />
    <AppCard>
      <UL :lists="lists" />
    </AppCard>

    <AppLabel text="Ordered List" />
    <AppCard>
      <OL :lists="lists" />
    </AppCard>

    <AppEdit :href="'/devoopshq/styleguide/blob/master/pages/' + this.$route.name + '.vue'" />
  </div>
</template>

<script>
import AppLabel from '@/components/AppLabel'
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
    AppEdit,
    AppLabel
  },

  data: () => ({
    lists: ['Item', 'Item', 'Item']
  }),

  head: () => ({
    title: 'Lists'
  })
}
</script>
