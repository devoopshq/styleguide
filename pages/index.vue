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
        <svg viewBox="0 0 448 256" width="448" height="256">
          <path fill="#fff" d="M0 0h448v256H0z"/>
          <path fill="#000" d="M235.75 97.925l-16.612 61.996-6.888-1.846 16.612-61.996 6.888 1.846z"/>
        </svg>
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
  async asyncData ({ store }) {
    await store.commit('setTitle', '/')
  },

  components: {
    Heading1: () => import('@/components/headings/Heading1'),
    AppCard: () => import('@/components/AppCard'),
    AppImage: () => import('@/components/AppImage'),
    AppLabel: () => import('@/components/AppLabel'),
    AppDoc: () => import('@/components/AppDoc')
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
