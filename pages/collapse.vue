<template>
  <div>
    <Heading1>Collapse</Heading1>

    <AppLAbel text="Collapsible Group" />
    <AppCard>
      <Accordion id="a" :content="content" />
    </AppCard>

    <AppLAbel text="Collapsible Group with Expanded Item" />
    <AppCard>
      <Accordion id="b" :content="content2" :multiple="true" />
    </AppCard>

    <AppLAbel text="Props" />
    <TerminalInput content="id: {
    type: String,
    required: true
  },
  content: {
    type: Array,
    required: true
  },
  multiple: {
    type: Boolean,
    default: false
  }" />
    <AppLAbel text="Path" />
    <TerminalInput content="@/components/headings/Accordion" />
    <AppLAbel text="Example" />
    <TerminalInput :content="escapeHtml('<Accordion id=&quot;unique&quot; :content=&quot;content&quot; />')" />

    <AppEdit :href="'/devoopshq/styleguide/blob/master/pages/' + this.$route.name + '.vue'" />
  </div>
</template>


<script>
import AppLabel from '@/components/AppLabel'
import escape from '@/helpers/escape'
import Heading1 from '@/components/headings/Heading1'
import Accordion from '@/components/Accordion'
import AppCard from '@/components/AppCard'
import TerminalInput from '@/components/code/TerminalInput'
import AppEdit from '@/components/AppEdit'

export default {
  components: {
    Accordion,
    AppCard,
    TerminalInput,
    AppEdit,
    Heading1,
    AppLabel
  },

  data: () => ({
    isOpen: true,
    content: [
      {
        active: false,
        title: 'Question A',
        details: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <a href="/font">internal link</a> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        `
      },
      {
        active: false,
        title: 'Question B',
        details: `
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        `
      }
    ],
     content2: [
      {
        active: true,
        title: 'Question A',
        details: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        `
      },
      {
        active: false,
        title: 'Question B',
        details: `
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        `
      },
      {
        active: false,
        title: 'Question C',
        details: `
          <p>Duis aute irure dolor in reprehenderit in <a href="/font">internal link</a> voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        `
      }
    ]
  }),

  head: () => ({
    title: 'Collapse'
  }),

  methods: {
    escapeHtml: x => escape(x)
  }
}
</script>
