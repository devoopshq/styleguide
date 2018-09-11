<template lang="pug">
button.button(:class="{warning: warning}")
  span
  span
  span
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
  background $white
  padding 0 1rem
  outline none
  border-width 1px
  border-style  solid
  border-color  $gray1
  border-image  initial
  border-radius 2px
  font-weight 700
  &:hover
    color $black
span
  vertical-align middle
  animation-name blink
  animation-duration 1400ms
  animation-iteration-count infinite
  animation-fill-mode both
  width 4px
  height 4px
  background-color $gray4
  display inline-block
  border-radius 50%
  margin 0 1px
  &:nth-child(2)
    animation-delay 200ms
  &:nth-child(3)
    animation-delay 400ms
@keyframes blink
  0%
    opacity 0.2
  20%
    opacity 1
  100%
    opacity 0.2
</style>
