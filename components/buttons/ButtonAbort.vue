<template lang="pug">
button.button(:class="{warning: warning}") ACTION
</template>

<script>
export default {
  props: {
    warning: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.button
  min-width 64px
  height 32px
  -webkit-appearance none
  color $gray2
  font-size rem(12px)
  text-transform uppercase
  user-select none
  line-height 0
  background-color transparent
  padding 0 1rem
  outline none
  border none
  font-weight 700
.warning
  color red
</style>
