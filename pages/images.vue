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
// componnets
import AppLabel from '@/components/AppLabel'
import AppCard from '@/components/AppCard'
import AppDoc from '@/components/AppDoc'

import Heading1 from '@/components/headings/Heading1'
import AppImage from '@/components/AppImage'
import TerminalInput from '@/components/code/TerminalInput'

export default {
  components: {
    AppLabel,
    AppDoc,
    AppCard,
    Heading1,
    AppImage,
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
