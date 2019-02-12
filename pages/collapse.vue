<template>
  <AppDoc>
    <template #left>
      <AppLabel text="Collapsible Group" />
      <AppCard>
        <Accordion id="a" :content="content" />
      </AppCard>

      <AppLabel text="Collapsible Group with Expanded Item" />
      <AppCard>
        <Accordion id="b" :content="content2" :multiple="true" />
      </AppCard>
    </template>

    <template #right>
      <AppLabel text="Props" />
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
      <AppLabel text="Path" />
      <TerminalInput content="@/components/headings/Accordion" />
      <AppLabel text="Example" />
      <TerminalInput :content="escapeHtml('<Accordion id=&quot;unique&quot; :content=&quot;content&quot; />')" />
    </template>
  </AppDoc>
</template>


<script>
import escape from '@/helpers/escape'

export default {
  async asyncData ({ store }) {
    await store.commit('setTitle', '/components/AppCollapse')
  },

  components: {
    Accordion: () => import('@/components/Accordion'),
    AppCard: () => import('@/components/AppCard'),
    TerminalInput: () => import('@/components/code/TerminalInput'),
    AppLabel: () => import('@/components/AppLabel'),
    AppDoc: () => import('@/components/AppDoc')
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

  head: () => ({ title: 'Collapse' }),

  methods: {
    escapeHtml: x => escape(x)
  }
}
</script>
