<template>
  <AppDoc>
    <template #left>
      <Heading1>File Tree</Heading1>

      <AppLabel text="File Tree - Normal" />
      <AppCard>
        <ul>
          <AppFileTree :node="files" />
        </ul>
      </AppCard>

      <AppLabel text="File Tree - Open" />
      <AppCard>
        <ul>
          <AppFileTree :node="files" :open="true" />
        </ul>
      </AppCard>
    </template>

    <template #right>
      <AppLabel text="Props" />
      <TerminalInput content="node: {
    type: Object,
    default: () => {}
  },
  fill: {
    type: String,
    default: '#000'
  },
  open: {
    type: Boolean,
    default: false
  }" />
      <AppLabel text="Path" />
      <TerminalInput content="@/components/AppFileTree" />
      <AppLabel text="Sample" />
      <TerminalInput :content="escapeHtml(`<ul>
    <AppFileTree :node=&quot;files&quot; :open=&quot;true&quot; />
  </ul>`)" />
    </template>
  </AppDoc>
</template>

<script>
import escape from '@/helpers/escape'

export default {
  async asyncData ({ store }) {
    await store.commit('setTitle', '/components/AppFileTree')
  },

  components: {
    Heading1: () => import('@/components/headings/Heading1'),
    AppFileTree: () => import('@/components/AppFileTree'),
    AppCard: () => import('@/components/AppCard'),
    AppLabel: () => import('@/components/AppLabel'),
    AppDoc: () => import('@/components/AppDoc'),
    TerminalInput: () => import('@/components/code/TerminalInput')
  },

  data: () => ({
    files: {
        name: 'components',
        type: 'directory',
        children: [
          {
            name: 'Foo.vue',
            type: 'file',
            size: 1024
          },
          {
            name: 'headings',
            type: 'directory',
            size: 2048,
            children: [
              {
                name: 'Heading1.vue',
                type: 'file',
                size: 125687
              },
              {
                name: 'Heading2.vue',
                type: 'file',
                size: 1658
              }
            ]
          },
          {
            name: 'Bar.vue',
            type: 'file',
            size: 4587
          },
        ]
      }
  }),

  head: () => ({
    title: 'File Tree'
  }),

  methods: {
    escapeHtml: value => escape(value)
  }
}
</script>

<style lang="postcss" scoped>
ul {
  padding-left: 0;
  margin: 0;
  list-style: none;
}
</style>
