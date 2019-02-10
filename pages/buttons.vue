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

    <template #right>
      <AppEdit />
    </template>
  </AppDoc>
</template>


<script>
import AppLabel from '@/components/AppLabel'
import Heading1 from '@/components/headings/Heading1'
import AppCard from '@/components/AppCard'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonSecondary from '@/components/buttons/ButtonSecondary'
import ButtonAbort from '@/components/buttons/ButtonAbort'
import Spinner from '@/components/Spinner'
import AppEdit from '@/components/AppEdit'
import AppDoc from '@/components/AppDoc'

export default {
  components: {
    Heading1,
    AppCard,
    ButtonPrimary,
    ButtonSecondary,
    ButtonAbort,
    Spinner,
    AppEdit,
    AppLabel,
    AppDoc
  },

  head: () => ({
    title: 'Buttons'
  })
}
</script>
