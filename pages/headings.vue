<template>
  <div>
    <Heading1>Headings</Heading1>

    <small>32px — H1 Heading</small>
    <AppCard>
      <Heading1>Lorem <strong>Ipsum</strong> Dolore</Heading1>
    </AppCard>

    <div class="doc">
      <small>Slot</small>
      <small>Path</small>
      <TerminalInput content="@/components/headings/Heading1" />
      <small>Usage</small>
      <!-- eslint-disable-next-line -->
      <TerminalInput :content="escapeHtml('<Heading1>\n  Lorem <strong>Ipsum</strong> Dolore\n</Heading1>')" />
    </div>


    <small>24px — H2 Heading</small>
    <AppCard>
      <Heading2>Lorem ipsum dolore</Heading2>
    </AppCard>

    <div class="doc">
      <small>Slot</small>
      <small>Path</small>
      <TerminalInput content="@/components/headings/Heading2" />
      <small>Example</small>
      <TerminalInput :content="escapeHtml('<Heading2>\n  Lorem ipsum dolore\n</Heading2>')" />
    </div>

    <small>18px — H3 Heading</small>
    <AppCard>
      <Heading3>Lorem ipsum dolore</Heading3>
    </AppCard>

    <div class="doc">
      <small>Slot</small>
      <small>Path</small>
      <TerminalInput content="@/components/headings/Heading3" />
      <small>Example</small>
      <TerminalInput :content="escapeHtml('<Heading3>\n  Lorem ipsum dolore\n</Heading3>')" />
    </div>

    <small>16px — H4 Heading</small>
    <AppCard>
      <Heading4>Lorem ipsum dolore</Heading4>
    </AppCard>

    <div class="doc">
      <small>Slot</small>
      <small>Path</small>
      <TerminalInput content="@/components/headings/Heading4" />
      <small>Example</small>
      <TerminalInput :content="escapeHtml('<Heading4>\n  Lorem ipsum dolore\n</Heading4>')" />
    </div>

    <AppEdit :href="'/devoopshq/styleguide/blob/master/pages/' + this.$route.name + '.vue'" />
  </div>
</template>

<script>
import escape from '@/helpers/escape'
import Heading1 from '@/components/headings/Heading1'
import Heading2 from '@/components/headings/Heading2'
import Heading3 from '@/components/headings/Heading3'
import Heading4 from '@/components/headings/Heading4'
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
    AppEdit
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
.doc {
  margin-bottom: 32px;
}
table { margin-bottom: 16px; }
th {
  text-align: left;
}
th,
td {
  padding-right: 16px;
  padding-bottom: 8px;
}
small {
  display: block;
  margin-bottom: 0.25rem;
  color: #757575;
}
.card {
  /* outline: 1px dashed; */
  padding: 16px 32px;
  border-radius: 4px;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12);
  margin: 16px -32px 32px -32px;
}
.card:hover {
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.12);
}
</style>
