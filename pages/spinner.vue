<template>
  <AppDoc>
    <template #left>
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
  async asyncData ({ store }) {
    await store.commit('setTitle', '/components/AppSpinner')
  },

  components: {
    AppLabel: () => import('@/components/AppLabel'),
    AppCard: () => import('@/components/AppCard'),
    Spinner: () => import('@/components/Spinner'),
    AppDoc: () => import('@/components/AppDoc')
  },

  head: () => ({ title: 'Spinner' })
}
</script>
