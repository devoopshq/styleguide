<template>
  <div>
    <Heading1>Buttons</Heading1>
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
import Heading1 from '@/components/headings/Heading1'
import AppCard from '@/components/AppCard'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'
import ButtonAbort from '@/components/buttons/ButtonAbort'
import Spinner from '@/components/Spinner'

export default {
  components: {
    Heading1,
    AppCard,
    ButtonPrimary,
    ButtonSecondary,
    ButtonAbort,
    Spinner
  },

  head () {
    return {
      title: 'Buttons'
    }
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
