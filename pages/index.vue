<template>
  <div>
    <Heading1>Brand</Heading1>

    <AppLabel text="White Slash on Dark Background" />
    <a download="logo-white" href="b.svg">.svg</a>
    <AppCard>
      <AppImage src="/b.svg" />
    </AppCard>

    <AppLabel text="White Slash on Light Background" />
    <a download="logo-black" href="b.svg">.svg</a>
    <AppCard>
      <AppImage src="/test.svg" />
    </AppCard>
  </div>
</template>

<script>
import Heading1 from '@/components/headings/Heading1'
import AppCard from '@/components/AppCard'
import AppImage from '@/components/AppImage'
import AppLabel from '@/components/AppLabel'
export default {
  components: {
    Heading1,
    AppCard,
    AppImage,
    AppLabel
  },

  head: () => ({
    titleTemplate: '/'
  })
}
</script>

<style lang="postcss" scoped>
a {
  text-decoration: none;
  color: var(--blue-aa);
  font-size: 13px;
}
</style>
