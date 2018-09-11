<template lang="pug">
h4(v-html="content")
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
h4
  font-size rem(16px)
  font-weight 700
</style>
