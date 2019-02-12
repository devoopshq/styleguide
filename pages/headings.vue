<template>
  <AppDoc>
    <template #left>
      <Heading1>Headings</Heading1>

      <AppLabel text="32px — H1 Heading" />
      <AppCard>
        <Heading1>The Brown <strong>Dev</strong> Jumped over the Fence</Heading1>
      </AppCard>

      <AppLabel text="24px — H2 Heading" />
      <AppCard>
        <Heading2>The Brown Dev Jumped over the Fence</Heading2>
      </AppCard>

      <AppLabel text="18px — H3 Heading" />
      <AppCard>
        <Heading3>The Brown Dev Jumped over the Fence</Heading3>
      </AppCard>

      <AppLabel text="16px — H4 Heading" />
      <AppCard>
        <Heading4>The Brown Dev Jumped over the Fence</Heading4>
      </AppCard>

      <AppLabel text="14px — Sub Heading" />
      <AppCard>
        <SubHeading text="THE BROWN DEV JUMPED OVER THE FENCE" />
      </AppCard>

    </template>

    <template #right>
      <AppLabel text="Slot" />
      <AppLabel text="Path" />
      <TerminalInput content="@/components/headings/Heading1" />
      <AppLabel text="Example" />
      <TerminalInput :content="escapeHtml('<Heading1>\n The Brown <strong>Dev</strong> Jumped over the Fence\n</Heading1>')" />

      <AppLabel text="Props" />
      <AppLabel text="Props" />
      <TerminalInput content="text: {
    type: String,
    required: true
  }" />
      <AppLabel text="Path" />
      <TerminalInput content="@/components/headings/Heading{2-4}" />
      <AppLabel text="Example" />
      <TerminalInput :content="escapeHtml('<Heading2 text=&quot;The brown dev jumped over the fence&quot; />')" />

      <AppLabel text="Props" />
      <TerminalInput content="text: {
    type: String,
    required: true
  }" />
      <AppLabel text="Path" />
      <TerminalInput content="@/components/headings/SubHeading" />
      <AppLabel text="Example" />
      <TerminalInput :content="escapeHtml('<SubHeading text=&quot;The brown dev jumped over the fence&quot; />')" />
    </template>
  </AppDoc>
</template>

<script>
import escape from '@/helpers/escape'

export default {
  components: {
    Heading1: () => import(/* webpackChunkName: "headings" */ '@/components/headings/Heading1'),
    Heading2: () => import(/* webpackChunkName: "headings" */ '@/components/headings/Heading2'),
    Heading3: () => import(/* webpackChunkName: "headings" */ '@/components/headings/Heading3'),
    Heading4: () => import(/* webpackChunkName: "headings" */ '@/components/headings/Heading4'),
    TerminalInput: () => import(/* webpackChunkName: "headings" */ '@/components/code/TerminalInput'),
    AppCard: () => import(/* webpackChunkName: "headings" */ '@/components/AppCard'),
    AppLabel: () => import(/* webpackChunkName: "headings" */ '@/components/AppLabel'),
    SubHeading: () => import(/* webpackChunkName: "headings" */ '@/components/headings/SubHeading'),
    AppDoc: () => import(/* webpackChunkName: "headings" */ '@/components/AppDoc')
  },

  head: () => ({
    title: 'Headings'
  }),

  methods: {
    escapeHtml: value => escape(value)
  }
}
</script>

<style lang="postcss" scoped>
.doc { margin-bottom: 32px; }
</style>
