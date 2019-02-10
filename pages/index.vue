<template>
  <AppDoc>
    <template #left>
      <Heading1>Brand</Heading1>

      <AppLabel text="Logo - White Slash on Dark Background" />
      <a download="lwhite" href="b.svg">.svg</a>
      <AppCard>
        <AppImage src="/b.svg" />
      </AppCard>

      <AppLabel text="Logo - Black Slash on Light Background" />
      <a download="logo-black" href="b.svg">.svg</a>
      <AppCard>
        <AppImage src="/test.svg" />
      </AppCard>

      <AppLabel text="Logotype - White on Dark Background" />
      <a download="lwhite" href="b.svg">.svg</a>
      <AppCard>
        ###
      </AppCard>

      <AppLabel text="Logotype - Black on Light Background" />
      <a download="lwhite" href="b.svg">.svg</a>
      <AppCard>
        ###
      </AppCard>
    </template>
  </AppDoc>
</template>

<script>
import Heading1 from '@/components/headings/Heading1'
import AppCard from '@/components/AppCard'
import AppImage from '@/components/AppImage'
import AppLabel from '@/components/AppLabel'
import AppDoc from '@/components/AppDoc'

export default {
  components: {
    Heading1,
    AppCard,
    AppImage,
    AppLabel,
    AppDoc
  },

  head: () => ({
    titleTemplate: 'DevOops Style Guide'
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
