<template>
  <AppDoc>
    <template #left>
      <Heading1>Lists</Heading1>

      <AppLabel text="Unordered List" />
      <AppCard>
        <UL :lists="lists" />
      </AppCard>

      <AppLabel text="Ordered List" />
      <AppCard>
        <OL :lists="lists" />
      </AppCard>
    </template>
  </AppDoc>
</template>

<script>
import AppLabel from '@/components/AppLabel'
import Heading1 from '@/components/headings/Heading1'
import UL from '@/components/lists/UL'
import OL from '@/components/lists/OL'
import AppCard from '@/components/AppCard'
import AppDoc from '@/components/AppDoc'

export default {
  components: {
    Heading1,
    UL,
    OL,
    AppCard,
    AppLabel,
    AppDoc
  },

  data: () => ({
    lists: ['Item', 'Item', 'Item']
  }),

  head: () => ({
    title: 'Lists'
  })
}
</script>
