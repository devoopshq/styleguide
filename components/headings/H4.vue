<template>
  <h4 v-html="content" />
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
h4 {
  font-size: 16px;
  font-weight: 700;
}
</style>
