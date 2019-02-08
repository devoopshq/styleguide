<template>
  <div>
    <small>Collapsible Group</small>
    <AppCard>
      <Accordion id="a" :content="content" />
    </AppCard>

    <small>Collapsible Group with Expanded Item</small>
    <AppCard>
      <Accordion id="b" :content="content2" :multiple="true" />
    </AppCard>

    <small>Props</small>
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
    <small>Path</small>
    <TerminalInput content="@/components/headings/Accordion" />
    <small>Example</small>
    <TerminalInput :content="escapeHtml('<Accordion id=&quot;unique&quot; :content=&quot;content&quot; />')" />

    <AppEdit :href="'/devoopshq/styleguide/blob/master/pages/' + this.$route.name + '.vue'" />
  </div>
</template>


<script>
import Accordion from '@/components/Accordion'
import AppCard from '@/components/AppCard'
import TerminalInput from '@/components/code/TerminalInput'
import AppEdit from '@/components/AppEdit'

export default {
  components: {
    Accordion,
    AppCard,
    TerminalInput,
    AppEdit
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
        active: false,
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
        active: true,
        title: 'Question C',
        details: `
          <p>Duis aute irure dolor in reprehenderit in <a href="/font">internal link</a> voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        `
      }
    ]
  }),

  head () {
    return {
      title: 'Collapse'
    }
  },

  methods: {
    escapeHtml(unsafe) {
      return unsafe
       .replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;')
       .replace(/"/g, '&quot;')
       .replace(/'/g, '&#039;')
    }
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
