<template>
  <AppDoc>
    <template #left>
      <Heading1>Buttons</Heading1>

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
  components: {
    AppLabel: () => import(/* webpackChunkName: "buttons" */ '@/components/AppLabel'),
    Heading1: () => import(/* webpackChunkName: "buttons" */ '@/components/headings/Heading1'),
    AppCard: () => import(/* webpackChunkName: "buttons" */ '@/components/AppCard'),
    ButtonPrimary: () => import(/* webpackChunkName: "buttons" */ '@/components/buttons/ButtonPrimary'),
    ButtonSecondary: () => import(/* webpackChunkName: "buttons" */ '@/components/buttons/ButtonSecondary'),
    ButtonAbort: () => import(/* webpackChunkName: "buttons" */ '@/components/buttons/ButtonAbort'),
    Spinner: () => import(/* webpackChunkName: "buttons" */ '@/components/Spinner'),
    AppDoc: () => import(/* webpackChunkName: "buttons" */ '@/components/AppDoc')
  },

  head: () => ({ title: 'Buttons' })
}
</script>
