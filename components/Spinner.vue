<template>
  <svg :width="size" :height="size" viewBox="0 0 100 100" class="spinner">
    <circle :stroke="stroke" cx="50" cy="50" fill="none" stroke-width="4" r="24" stroke-dasharray="113 40" transform="rotate(222 50 50)">
      <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
    </circle>
  </svg>
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

<style lang="postcss" scoped>
.spinner {
  vertical-align: middle;
}
</style>
