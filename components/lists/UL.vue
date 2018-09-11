<template lang="pug">
ul
  li(v-for="list, index in lists" :key="index") {{list}}
</template>

<script>
export default {
  props: {
    lists: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
ul
  list-style-type none
  margin-left 1rem
  padding 0
li
  font-size rem(14px)
  line-height 1.714
  margin-bottom 1rem
  &::before
    content "-"
    display inline-block
    position absolute
    margin-left -1rem
</style>
