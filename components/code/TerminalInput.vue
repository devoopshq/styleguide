<template>
  <div>{{ content }}</div>
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
  color: var(--magenta);
  font-family: var(--monospace);
  font-size: 13px;
  line-height: 20px;
  white-space: pre;
  border-width: 1px;
  border-style: solid;
  border-color: var(--gray1);
  border-image: initial;
  margin: 2rem 0;
  overflow: auto;
  padding: 1rem;
}
div::before {
  content: "$ ";
}
</style>
