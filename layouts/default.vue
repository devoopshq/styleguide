<template lang="pug">
div
  TheNav
  nuxt
</template>

<script>
import TheNav from '@/components/TheNav'

export default {
  components: { TheNav }
}
</script>

<style lang="stylus">
*
*::before
*::after
  box-sizing inherit

html
  font-family sans-serif
  font-size 16px
  line-height 1.15
  box-sizing border-box
  -ms-overflow-style scrollbar
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -webkit-tap-highlight-color transparent
  height 100%

@-ms-viewport
  width device-width

body
  font-family $sansSerif
  font-size rem(14px)
  font-weight normal
  text-rendering optimizeLegibility
  -webkit-font-smoothing antialiased
  line-height 1.7
  color #000
  background-color #fff
  margin 0 0 25vh 0
  min-height 100%

// Suppress the focus outline on elements that cannot be accessed via keyboard.
// This prevents an unwanted focus outline from appearing around elements that
// might still respond to pointer events.
//
// Credit: https://github.com/suitcss/base
[tabindex="-1"]:focus
  outline none !important

::selection
  background-color $yellow
  color $black
</style>
