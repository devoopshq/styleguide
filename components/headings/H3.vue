<template lang="pug">
h3(v-html="content")
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
h3
  font-size rem(18px)
  line-height 1.3125
  font-weight 700
</style>
