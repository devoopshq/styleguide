<template>
  <AppDoc>
    <template #left>
      <Heading1>Toggle</Heading1>

      <AppLabel :text="foo(a)" />
      <AppCard>
        <SelectionSwitch @update="a = $event" />
      </AppCard>

      <AppLabel :text="foo(b)" />
      <AppCard>
        <SelectionSwitch :checked="true" @update="b = $event" />
      </AppCard>

      <AppLabel text="Disabled" />
      <AppCard>
        <SelectionSwitch :disabled="true" />
      </AppCard>

    </template>

    <template #right>
      <AppLabel text="Props" />
      <TerminalInput :content="`checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }`" />
      <AppLabel text="Path" />
      <TerminalInput content="@/components/interaction/selection/SelectionSwitch" />
      <AppLabel text="Usage" />
      <TerminalInput :content="escapeHtml(`<SelectionSwitch />`)" />
    </template>
  </AppDoc>
</template>

<script>
import escape from '@/helpers/escape'

export default {
  async asyncData ({ store }) {
    await store.commit('setTitle', '/components/toogle/')
  },

  components: {
    Heading1: () => import('@/components/headings/Heading1'),
    AppCard: () => import('@/components/AppCard'),
    SelectionSwitch: () => import('@/components/interaction/selection/SelectionSwitch'),
    TerminalInput: () => import('@/components/code/TerminalInput'),
    AppLabel: () => import('@/components/AppLabel'),
    AppDoc: () => import('@/components/AppDoc')
  },

  data () {
    return {
      a: false,
      b: true,
    }
  },

  head: () => ({ title: 'Toggle' }),

  methods: {
    foo: x => x ? 'On' : 'Off',
    escapeHtml: x => escape(x)
  }
}
</script>
