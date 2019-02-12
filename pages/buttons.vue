<template>
  <AppDoc>
    <template #left>
      <AppLabel text="Button — Primary" />
      <AppCard>
        <ButtonPrimary />
      </AppCard>

      <AppLabel text="Button — Secondary" />
      <AppCard>
        <ButtonSecondary />
      </AppCard>

      <AppLabel text="Button — Disabled" />
      <AppCard>
        <ButtonPrimary :disabled="true" />
      </AppCard>

      <AppLabel text="Button — Loading" />
      <AppCard>
        <ButtonPrimary>
          <Spinner :size="32" :stroke="'#fff'" />
        </ButtonPrimary>
      </AppCard>

      <AppLabel text="Button — Abort" />
      <AppCard>
        <ButtonAbort />
      </AppCard>

      <AppLabel text="Button — Warning" />
      <AppCard>
        <ButtonPrimary :warning="true" />
      </AppCard>
    </template>
  </AppDoc>
</template>


<script>
export default {
  async asyncData ({ store }) {
    await store.commit('setTitle', '/components/buttons/')
  },

  components: {
    AppLabel: () => import('@/components/AppLabel'),
    AppCard: () => import('@/components/AppCard'),
    ButtonPrimary: () => import('@/components/buttons/ButtonPrimary'),
    ButtonSecondary: () => import('@/components/buttons/ButtonSecondary'),
    ButtonAbort: () => import('@/components/buttons/ButtonAbort'),
    Spinner: () => import('@/components/Spinner'),
    AppDoc: () => import('@/components/AppDoc')
  },

  head: () => ({ title: 'Buttons' })
}
</script>
