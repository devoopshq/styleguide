<template lang="pug">
h1(v-html="content")
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
h1
  font-size rem(32px)
  line-height 1.3125
  font-weight 400
</style>
