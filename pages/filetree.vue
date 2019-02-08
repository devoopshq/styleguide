<template>
  <div>
    <Heading1>
      File Tree [wip]
    </Heading1>

    <AppCard>
      <ul>
        <AppTree :model="files" />
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
      children: [
        { name: 'Foo.vue' },
        { name: 'Bar.vue' },
      ]
    }
  }),

  head () {
    return {
      title: 'File Three'
    }
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
