<template lang="pug">
svg.spinner(:width="size"  height="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100")
  circle(cx="50" cy="50" fill="none" :stroke="stroke" stroke-width="4" r="24" stroke-dasharray="113 40" transform="rotate(222 50 50)")
    animateTransform(attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite")
</template>

<script>
export default {
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    stroke: {
      type: String,
      default: '#000000'
    }
  }
}
</script>

<style lang="stylus" scoped>
.spinner
  vertical-align middle
</style>
