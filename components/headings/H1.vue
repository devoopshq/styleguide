<template>
  <h1 v-html="content" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  font-size: 32px;
  line-height: 1.3125;
  font-weight: 400;
}
</style>
