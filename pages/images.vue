<template>
  <div>
    <Heading1>Images</Heading1>

    <small>Static</small>
    <AppCard>
      <AppImage src="https://placehold.it/1400x800" alt="alt" />
    </AppCard>

    <small>Static - Caption</small>
    <AppCard>
      <AppImage src="https://placehold.it/1400x800" caption="Source: giphy.com" alt="alt" />
    </AppCard>
    <small>Props</small>
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
    <small>Path</small>
    <TerminalInput content="@/components/AppImage" />
    <small>Usage</small>
    <TerminalInput :content="escapeHtml(`<AppImage
    src=&quot;https://devoops.app/images/img.png&quot;
    alt=&quot;Alt&quot;
  />`)" />
  </div>
</template>

<script>
import escape from '@/helpers/escape'
import Heading1 from '@/components/headings/Heading1'
import AppImage from '@/components/AppImage'
import AppCard from '@/components/AppCard'
import TerminalInput from '@/components/code/TerminalInput'
export default {
  components: {
    Heading1,
    AppImage,
    AppCard,
    TerminalInput
  },

  head: () => ({
    title: 'Images'
  }),

  methods: {
    escapeHtml: x => escape(x)
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
