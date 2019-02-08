<template>
  <div>
    <H1 content="Buttons" />
    <small>Button — Primary</small>
    <AppCard>
      <ButtonPrimary />
    </AppCard>

    <small>Button — Secondary</small>
    <AppCard>
      <ButtonSecondary />
    </AppCard>

    <small>Button — Disabled</small>
    <AppCard>
      <ButtonPrimary :disabled="true" />
    </AppCard>

    <small>Button — Loading</small>
    <AppCard>
      <ButtonPrimary>
        <Spinner :size="32" :stroke="'#fff'" />
      </ButtonPrimary>
    </AppCard>

    <small>Button — Abort</small>
    <AppCard>
      <ButtonAbort />
    </AppCard>

    <small>Button — Warning</small>
    <AppCard>
      <ButtonPrimary :warning="true" />
    </AppCard>
  </div>
</template>


<script>
export default {
  components: {
    H1: () => import('@/components/headings/H1'),
    AppCard: () => import('@/components/AppCard'),
    ButtonPrimary: () => import('@/components/buttons/ButtonPrimary'),
    ButtonSecondary: () => import('@/components/buttons/ButtonSecondary'),
    ButtonAbort: () => import('@/components/buttons/ButtonAbort'),
    Spinner: () => import('@/components/Spinner')
  }
}
</script>

<style lang="postcss" scoped>
small {
  display: block;
  margin-bottom: 0.25rem;
  color: #757575;
}
</style>
