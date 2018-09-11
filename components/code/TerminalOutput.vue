<template lang="pug">
div(v-html="content")
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

<style lang="stylus" scoped>
div
  color $white
  font-family $monospace
  font-size rem(13px)
  line-height 1.538
  background rgb(0, 0, 0)
  margin 2rem 0
  padding 1rem
  white-space pre
</style>
