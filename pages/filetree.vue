<template>
  <div>
    <Heading1>File Tree</Heading1>

    <AppLabel text="File Tree - Normal" />
    <AppCard>
      <ul>
        <AppTree :node="files" />
      </ul>
    </AppCard>

    <AppLabel text="File Tree - Open" />
    <AppCard>
      <ul>
        <AppTree :node="files" :open="true" />
      </ul>
    </AppCard>
  </div>
</template>

<script>
import AppLabel from '@/components/AppLabel'
import Heading1 from '@/components/headings/Heading1'
import AppTree from '@/components/filetree/AppTree'
import AppCard from '@/components/AppCard'

export default {
  components: {
    Heading1,
    AppTree,
    AppCard,
    AppLabel
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
</style>
