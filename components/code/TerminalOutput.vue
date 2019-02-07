<template>
  <div v-html="content" />
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

<style lang="postcss" scoped>
div {
  color: var(--white);
  font-family: var(--monospace);
  font-size: 13px;
  line-height: 1.538;
  background: #000;
  margin: 2rem 0;
  padding: 1rem;
  white-space: pre;
}
</style>
