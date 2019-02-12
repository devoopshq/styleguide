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
export default {
  components: {
    Heading1: () => import(/* webpackChunkName: "lists" */ '@/components/headings/Heading1'),
    UL: () => import(/* webpackChunkName: "lists" */ '@/components/lists/UL'),
    OL: () => import(/* webpackChunkName: "lists" */ '@/components/lists/OL'),
    AppCard: () => import(/* webpackChunkName: "lists" */ '@/components/AppCard'),
    AppLabel: () => import(/* webpackChunkName: "lists" */ '@/components/AppLabel'),
    AppDoc: () => import(/* webpackChunkName: "lists" */ '@/components/AppDoc'),
  },

  data: () => ({
    lists: ['Item', 'Item', 'Item']
  }),

  head: () => ({
    title: 'Lists'
  })
}
</script>
