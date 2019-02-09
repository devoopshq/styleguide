<template>
  <div>
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

    <div class="doc">
      <AppLabel text="Slot" />
      <AppLabel text="Path" />
      <TerminalInput content="@/components/headings/Heading4" />
      <AppLabel text="Example" />
      <TerminalInput :content="escapeHtml('<Heading4>\n  Lorem ipsum dolore\n</Heading4>')" />
    </div>

    <AppEdit :href="'/devoopshq/styleguide/blob/master/pages/' + this.$route.name + '.vue'" />
  </div>
</template>

<script>
import escape from '@/helpers/escape'
// components
import AppLabel from '@/components/AppLabel'
import Heading1 from '@/components/headings/Heading1'
import Heading2 from '@/components/headings/Heading2'
import Heading3 from '@/components/headings/Heading3'
import Heading4 from '@/components/headings/Heading4'
import SubHeading from '@/components/headings/SubHeading'
import TerminalInput from '@/components/code/TerminalInput'
import AppCard from '@/components/AppCard'
import AppEdit from '@/components/AppEdit'

export default {
  components: {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    TerminalInput,
    AppCard,
    AppEdit,
    AppLabel,
    SubHeading
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
table { margin-bottom: 16px; }
th { text-align: left; }
th,
td {
  padding-right: 16px;
  padding-bottom: 8px;
}
.card {
  padding: 16px 32px;
  border-radius: 4px;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12);
  margin: 16px -32px 32px -32px;
}
.card:hover { box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.12); }
</style>
