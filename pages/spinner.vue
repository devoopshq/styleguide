<template>
  <AppDoc>
    <template #left>
      <Heading1>Spinner</Heading1>

      <AppLabel text="Default Size" />
      <AppCard>
        <Spinner />
      </AppCard>

      <AppLabel text="Custom Size" />
      <AppCard>
        <Spinner :size="48" />
      </AppCard>
    </template>
  </AppDoc>
</template>

<script>
export default {
  components: {
    Heading1: () => import(/* webpackChunkName: "spinner" */ '@/components/headings/Heading1'),
    AppLabel: () => import(/* webpackChunkName: "spinner" */ '@/components/AppLabel'),
    AppCard: () => import(/* webpackChunkName: "spinner" */ '@/components/AppCard'),
    Spinner: () => import(/* webpackChunkName: "spinner" */ '@/components/Spinner'),
    AppDoc: () => import(/* webpackChunkName: "spinner" */ '@/components/AppDoc')
  },

  head: () => ({ title: 'Spinner' })
}
</script>
