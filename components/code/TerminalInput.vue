<template lang="pug">
div {{ content }}
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
  color $magenta
  font-family $monospace
  font-size rem(13px)
  line-height: 20px;
  white-space pre
  border-width 1px
  border-style solid
  border-color $gray1
  border-image initial
  margin 2rem 0
  overflow auto
  padding 1rem
  &::before
    content "$ "
</style>
