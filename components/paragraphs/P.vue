<template lang="pug">
p(v-html="content")
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
p
  font-size rem(14px)
  line-height 1.714
  font-weight 400
>>> code
  color $magenta
  font-family $monospace
  font-size rem(13px)
  white-space pre-wrap
  &::before
    content '`'
  &::after
    content '`'
</style>
