<template>
  <small v-text="text" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
small {
  display: block;
  margin-bottom: 0.25rem;
  color: #707070;
}
</style>
