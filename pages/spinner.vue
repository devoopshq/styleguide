<template>
  <div>
    <Heading1>Spinner</Heading1>

    <AppLabel text="Default Size" />
    <AppCard>
      <Spinner />
    </AppCard>

    <AppLabel text="Custom Size" />
    <AppCard>
      <Spinner :size="48" />
    </AppCard>

    <AppEdit />
  </div>
</template>

<script>
import Heading1 from '@/components/headings/Heading1'
import AppLabel from '@/components/AppLabel'
import AppCard from '@/components/AppCard'
import Spinner from '@/components/Spinner'
import AppEdit from '@/components/AppEdit'

export default {
  components: {
    Heading1,
    AppLabel,
    AppCard,
    Spinner,
    AppEdit
  },

  head: () => ({
    title: 'Spinner'
  })
}
</script>
