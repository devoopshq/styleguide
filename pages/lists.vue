<template>
  <AppDoc>
    <template #left>
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
export default {
  async asyncData ({ store }) {
    await store.commit('setTitle', '/components/lists/')
  },

  components: {
    UL: () => import('@/components/lists/UL'),
    OL: () => import('@/components/lists/OL'),
    AppCard: () => import('@/components/AppCard'),
    AppLabel: () => import('@/components/AppLabel'),
    AppDoc: () => import('@/components/AppDoc'),
  },

  data: () => ({
    lists: ['Item', 'Item', 'Item']
  }),

  head: () => ({
    title: 'Lists'
  })
}
</script>
