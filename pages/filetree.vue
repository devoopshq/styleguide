<template>
  <div>
    <Heading1>
      File Tree
    </Heading1>

    <small>File Tree - Normal</small>
    <AppCard>
      <ul>
        <AppTree :node="files" />
      </ul>
    </AppCard>

    <small>File Tree - Open</small>
    <AppCard>
      <ul>
        <AppTree :node="files" :open="true" />
      </ul>
    </AppCard>
  </div>
</template>

<script>
import Heading1 from '@/components/headings/Heading1'
import AppTree from '@/components/filetree/AppTree'
import AppCard from '@/components/AppCard'

export default {
  components: {
    Heading1,
    AppTree,
    AppCard
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
    title: 'File Three'
  })
}
</script>

<style lang="postcss" scoped>
ul {
  padding-left: 0;
  margin: 0;
  list-style: none;
}
small {
  display: block;
  margin-bottom: 0.25rem;
  color: #717171;
}
</style>
