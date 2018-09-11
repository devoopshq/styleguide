<template lang="pug">
button.button(:class="{ warning }") {{ action }}
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      default: ''
    },
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
  color $white
  font-size rem(12px)
  text-transform uppercase
  user-select none
  line-height 0
  background-color $black
  padding 0 1rem
  outline none
  border-width 1px
  border-style  solid
  border-color  $black
  border-image  initial
  border-radius 2px
  font-weight 700
  &:disabled
    background-color $gray1
    border-color  $gray1
.warning
  background-color red
  border-color red
</style>
