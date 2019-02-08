<template>
  <div>
    <H1 content="Lists" />
    <small>Unordered List</small>
    <div class="card">
      <UL :lists="lists" />
    </div>
    <small>Ordered List</small>
    <div class="card">
      <OL :lists="lists" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    H1: () => import('@/components/headings/H1'),
    UL: () => import('@/components/lists/UL'),
    OL: () => import('@/components/lists/OL')
  },

  data: () => ({
    lists: ['Item', 'Item', 'Item']
  }),

  head () {
    return {
      title: 'Lists'
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
