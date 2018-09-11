<template lang="pug">
h2(v-html="content")
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
h2
  font-size rem(24px)
  line-height 1.4
  font-weight 400
</style>
