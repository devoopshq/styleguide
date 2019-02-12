<template>
  <AppDoc>
    <template #left>
      <Heading1>Brand</Heading1>

      <AppLabel text="Logo - White Slash on Dark Background" />
      <a download="logo" href="b.svg">.svg</a>
      <AppCard>
        <AppImage src="/b.svg" />
      </AppCard>

      <AppLabel text="Logo - Black Slash on Light Background" />
      <a download="logo" href="b.svg">.svg</a>
      <AppCard>
        <AppImage src="/test.svg" />
      </AppCard>

      <AppLabel text="Logotype - White on Dark Background" />
      <a download="logo" href="b.svg">.svg</a>
      <AppCard>
        ###
      </AppCard>

      <AppLabel text="Logotype - Black on Light Background" />
      <a download="logo" href="b.svg">.svg</a>
      <AppCard>
        ###
      </AppCard>
    </template>
  </AppDoc>
</template>

<script>
export default {
  components: {
    Heading1: () => import(/* webpackChunkName: "index" */ '@/components/headings/Heading1'),
    AppCard: () => import(/* webpackChunkName: "index" */ '@/components/AppCard'),
    AppImage: () => import(/* webpackChunkName: "index" */ '@/components/AppImage'),
    AppLabel: () => import(/* webpackChunkName: "index" */ '@/components/AppLabel'),
    AppDoc: () => import(/* webpackChunkName: "index" */ '@/components/AppDoc')
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
