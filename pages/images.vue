<template>
  <AppDoc>
    <template #left>
      <Heading1>Images</Heading1>

      <AppLabel text="Static" />
      <AppCard>
        <AppImage src="https://placehold.it/448x256" alt="alt" />
      </AppCard>

      <AppLabel text="Static - Caption" />
      <AppCard>
        <AppImage src="https://placehold.it/448x256" caption="Source: giphy.com" alt="alt" />
      </AppCard>
      <AppLabel text="Props" />
      <TerminalInput :content="`src: {
      type: String,
      default: null
    },
    srcset: {
      type: String,
      default: null
    },
    caption: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    }`" />
      <AppLabel text="Path" />
      <TerminalInput content="@/components/AppImage" />
      <AppLabel text="Usage" />
      <TerminalInput :content="escapeHtml(`<AppImage
    src=&quot;https://devoops.app/images/img.png&quot;
    alt=&quot;Alt&quot;
  />`)" />
    </template>
  </AppDoc>
</template>

<script>
import escape from '@/helpers/escape'

export default {
  components: {
    AppLabel: () => import(/* webpackChunkName: "headings" */ '@/components/AppLabel'),
    AppDoc: () => import(/* webpackChunkName: "headings" */ '@/components/AppDoc'),
    AppCard: () => import(/* webpackChunkName: "headings" */ '@/components/AppCard'),
    Heading1: () => import(/* webpackChunkName: "headings" */ '@/components/headings/Heading1'),
    AppImage: () => import(/* webpackChunkName: "headings" */ '@/components/AppImage'),
    TerminalInput: () => import(/* webpackChunkName: "headings" */ '@/components/code/TerminalInput')
  },

  head: () => ({
    title: 'Images'
  }),

  methods: {
    escapeHtml: x => escape(x)
  }
}
</script>
