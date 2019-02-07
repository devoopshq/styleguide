<template>
  <h2 v-html="content" />
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
h2 {
  font-size: 24px;
  line-height: 1.4;
  font-weight: 400;
}
</style>
