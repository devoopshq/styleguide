<template>
  <div>
    <Heading1>Toggle</Heading1>
    <small>Normal</small>
    <AppCard>
      <SelectionSwitch />
    </AppCard>

    <small>Checked</small>
    <AppCard>
      <SelectionSwitch :checked="true" />
    </AppCard>

    <small>Disabled</small>
    <AppCard>
      <SelectionSwitch :disabled="true" />
    </AppCard>

    <small>Props</small>
    <TerminalInput :content="`checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }`" />
    <small>Path</small>
    <TerminalInput content="@/components/interaction/selection/SelectionSwitch" />
    <small>Usage</small>
    <!-- eslint-disable-next-line -->
    <TerminalInput :content="escapeHtml(`<SelectionSwitch />`)" />
  </div>
</template>

<script>
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
    TerminalInput
  },

  head: () => ({
    title: 'Toggle'
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
  color: #717171;
}
</style>
