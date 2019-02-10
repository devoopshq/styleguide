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
import AppLabel from '@/components/AppLabel'
import AppDoc from '@/components/AppDoc'
import AppCard from '@/components/AppCard'
import escape from '@/helpers/escape'
import Heading1 from '@/components/headings/Heading1'
import SelectionSwitch from '@/components/interaction/selection/SelectionSwitch'
import TerminalInput from '@/components/code/TerminalInput'

export default {
  components: {
    Heading1,
    AppCard,
    SelectionSwitch,
    TerminalInput,
    AppLabel,
    AppDoc
  },

  data () {
    return {
      a: false,
      b: true,
    }
  },

  head: () => ({
    title: 'Toggle'
  }),

  methods: {
    foo: value => value ? 'On' : 'Off',
    escapeHtml: x => escape(x)
  }
}
</script>
