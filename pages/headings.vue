<template>
  <div>
    <H1 content="Headings" />
    <small>32px — H1 Heading</small>
    <div class="card">
      <H1 content="Lorem <strong>Ipsum</strong> Dolore" />
    </div>
    <small>24px — H2 Heading</small>
    <div class="card">
      <H2 content="Lorem ipsum dolore" />
    </div>
    <small>18px — H3 Heading</small>
    <div class="card">
      <H3 content="Lorem ipsum dolore" />
    </div>
    <small>16px — H4 Heading</small>
    <div class="card">
      <H4 content="Lorem ipsum dolore" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    H1: () => import('@/components/headings/H1'),
    H2: () => import('@/components/headings/H2'),
    H3: () => import('@/components/headings/H3'),
    H4: () => import('@/components/headings/H4')
  },

  head () {
    return {
      title: 'Headings'
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
