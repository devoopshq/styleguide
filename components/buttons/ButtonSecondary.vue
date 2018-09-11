<template lang="pug">
button.button ACTION
</template>

<style lang="stylus" scoped>
.button
  min-width 64px
  height 32px
  -webkit-appearance none
  color $gray2
  font-size rem(12px)
  text-transform uppercase
  user-select none
  // font-weight 100
  line-height 0
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
</style>
