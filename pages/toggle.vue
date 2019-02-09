<template>
  <div>
    <Heading1>Toggle</Heading1>

    <AppLabel text="Normal" />
    <AppCard>
      <SelectionSwitch />
    </AppCard>

    <AppLabel text="Checked" />
    <AppCard>
      <SelectionSwitch :checked="true" />
    </AppCard>

    <AppLabel text="Disabled" />
    <AppCard>
      <SelectionSwitch :disabled="true" />
    </AppCard>

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
  </div>
</template>

<script>
import AppLabel from '@/components/AppLabel'
import escape from '@/helpers/escape'
import Heading1 from '@/components/headings/Heading1'
import AppCard from '@/components/AppCard'
import SelectionSwitch from '@/components/interaction/selection/SelectionSwitch'
import TerminalInput from '@/components/code/TerminalInput'

export default {
  components: {
    Heading1,
    AppCard,
    SelectionSwitch,
    TerminalInput,
    AppLabel
  },

  head: () => ({
    title: 'Toggle'
  }),

  methods: {
    escapeHtml: x => escape(x)
  }
}
</script>
